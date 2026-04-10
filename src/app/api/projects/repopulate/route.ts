import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { applyBrandToTemplate } from '@/lib/scraper/apply-brand';
import { apiError, apiSuccess } from '@/lib/api/helpers';

export async function POST() {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const orgId = session.user.orgId as string;
  const supabase = await createServiceRoleClient();

  // Get all projects with a template_id
  const { data: projects, error: projError } = await supabase
    .from('projects')
    .select('id, name, template_id, brand_profile')
    .eq('org_id', orgId)
    .not('template_id', 'is', null);

  if (projError) return apiError(projError.message, 500);
  if (!projects?.length) return apiSuccess({ message: 'No projects with templates found', fixed: 0 });

  let fixed = 0;
  const details: string[] = [];

  for (const project of projects) {
    // Check if this project has empty pages
    const { data: pages } = await supabase
      .from('website_pages')
      .select('id, blocks')
      .eq('project_id', project.id);

    const hasEmptyPages = !pages?.length || pages.every(
      (p) => !p.blocks || (Array.isArray(p.blocks) && p.blocks.length === 0)
    );

    if (!hasEmptyPages) {
      details.push(`${project.name}: already has blocks, skipped`);
      continue;
    }

    // Get the template
    const { data: template } = await supabase
      .from('templates')
      .select('*')
      .eq('id', project.template_id)
      .single();

    if (!template?.template_data?.pages?.length) {
      details.push(`${project.name}: template has no pages, skipped`);
      continue;
    }

    // Delete existing empty pages
    if (pages?.length) {
      await supabase.from('website_pages').delete().eq('project_id', project.id);
    }

    // Apply brand if available
    let templateData = template.template_data;
    if (project.brand_profile) {
      try {
        templateData = applyBrandToTemplate(templateData, project.brand_profile);
      } catch {
        // Use unbranded template data if brand application fails
      }
    }

    // Insert template pages with blocks
    const newPages = templateData.pages.map(
      (page: { name: string; slug: string; blocks: unknown[] }, index: number) => ({
        project_id: project.id,
        name: page.name,
        slug: page.slug,
        blocks: page.blocks,
        order: index,
      })
    );

    const { error: insertError } = await supabase.from('website_pages').insert(newPages);

    if (insertError) {
      details.push(`${project.name}: failed - ${insertError.message}`);
    } else {
      fixed++;
      details.push(`${project.name}: populated ${newPages.length} pages with blocks`);
    }
  }

  return apiSuccess({ fixed, total: projects.length, details });
}
