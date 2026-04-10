import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { applyBrandToTemplate } from '@/lib/scraper/apply-brand';
import { contentToBlocks } from '@/lib/ai/content-to-blocks';
import { buildAstroTemplate, deployToPublicPreviews, cleanupBuild } from '@/lib/astro/build-template';
import type { AstroBrandContent } from '@/types';
import { parsePagination } from '@/lib/api/helpers';
import { z } from 'zod';

const projectSchema = z.object({
  name: z.string().min(1),
  client_id: z.string().uuid().nullable().optional(),
  template_id: z.string().uuid().nullable().optional(),
  brand_profile: z.any().nullable().optional(),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;
  const { searchParams } = new URL(req.url);
  const { page, limit, offset, search } = parsePagination(searchParams);

  let query = supabase
    .from('projects')
    .select('*, client:clients(id, name)', { count: 'exact' })
    .eq('org_id', orgId)
    .order('created_at', { ascending: false });

  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data, total: count ?? 0, page, limit });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    const data = projectSchema.parse(body);
    const orgId = session.user.orgId as string;

    const supabase = await createServiceRoleClient();

    // Create the project
    const { data: project, error } = await supabase
      .from('projects')
      .insert({
        name: data.name,
        client_id: data.client_id,
        template_id: data.template_id,
        brand_profile: data.brand_profile || null,
        org_id: orgId,
        subdomain: data.name.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30),
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Set up project content from template + brand profile
    let pagesCreated = false;

    if (data.template_id) {
      const { data: template } = await supabase
        .from('templates')
        .select('*')
        .eq('id', data.template_id)
        .single();

      const isAstro = template?.template_type === 'astro' && template?.template_dir;

      if (isAstro) {
        // Astro template: set default preview and trigger branded build
        const defaultUrl = `/previews/${template.template_dir}/index.html`;
        await supabase
          .from('projects')
          .update({ built_url: defaultUrl, status: 'building' })
          .eq('id', project.id);

        // Fire branded Astro build async
        if (data.brand_profile) {
          const brandProfile = data.brand_profile as AstroBrandContent;
          const slug = project.subdomain || project.id;
          buildAstroTemplate(template.template_dir, brandProfile, project.id)
            .then((result) => {
              if (result.success) {
                const builtUrl = deployToPublicPreviews(result.outputDir, slug);
                cleanupBuild(project.id);
                return createServiceRoleClient().then(sb =>
                  sb.from('projects').update({ built_url: builtUrl, status: 'draft' }).eq('id', project.id)
                );
              } else {
                cleanupBuild(project.id);
                return createServiceRoleClient().then(sb =>
                  sb.from('projects').update({ status: 'draft' }).eq('id', project.id)
                );
              }
            })
            .catch(() => {
              cleanupBuild(project.id);
              createServiceRoleClient().then(sb =>
                sb.from('projects').update({ status: 'draft' }).eq('id', project.id)
              );
            });
        }
      }

      // Block template with pages: copy template pages with brand applied
      const hasPages = template?.template_data?.pages?.length > 0;
      if (!isAstro && hasPages) {
        let templateData = template!.template_data;
        if (data.brand_profile) {
          templateData = applyBrandToTemplate(templateData, data.brand_profile);
        }

        const pages = templateData.pages.map((page: { name: string; slug: string; blocks: unknown[] }, index: number) => ({
          project_id: project.id,
          name: page.name,
          slug: page.slug,
          blocks: page.blocks,
          order: index,
        }));

        await supabase.from('website_pages').insert(pages);
        pagesCreated = true;
      }
    }

    // Always generate editable blocks from AstroBrandContent if we have it and no pages were created yet
    if (!pagesCreated && data.brand_profile) {
      const bp = data.brand_profile;
      // Check if this is AstroBrandContent (has hero.heading) vs BrandProfile (has colors.primary)
      if (bp.hero?.heading || bp.about?.heading || bp.services) {
        const brandProfile = bp as AstroBrandContent;
        const blocks = contentToBlocks(brandProfile);
        await supabase.from('website_pages').insert({
          project_id: project.id,
          name: 'Home',
          slug: 'home',
          blocks,
          meta_title: brandProfile.seo?.homepage?.title || `${brandProfile.name || data.name} | ${brandProfile.tagline || ''}`,
          meta_description: brandProfile.seo?.homepage?.description || brandProfile.description || '',
          order: 0,
        });
      }
    }

    // Fallback: ensure at least one empty page exists so the editor isn't broken
    if (!pagesCreated) {
      const { count } = await supabase
        .from('website_pages')
        .select('id', { count: 'exact', head: true })
        .eq('project_id', project.id);

      if (!count || count === 0) {
        await supabase.from('website_pages').insert({
          project_id: project.id,
          name: 'Home',
          slug: 'home',
          blocks: [],
          order: 0,
        });
      }
    }

    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
