import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { generatePageHTML } from '@/lib/publish/generate-html';
import { createNotification } from '@/lib/notifications';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { isR2Configured, uploadToR2, deleteSubdomainFromR2 } from '@/lib/cloudflare/r2';
import { isSaaSConfigured, findCustomHostname, removeCustomHostname } from '@/lib/cloudflare/saas';

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const orgId = session.user.orgId as string;
  const supabase = await createServiceRoleClient();

  // Fetch project
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  if (error || !project) {
    return apiError('Project not found', 404);
  }

  // Check subscription limits
  const { data: org } = await supabase
    .from('organizations')
    .select('subscription_tier')
    .eq('id', orgId)
    .single();

  const tier = org?.subscription_tier;
  if (!tier || tier === 'free') {
    return NextResponse.json({
      error: 'subscription_required',
      message: 'Subscribe to a plan to publish your site.',
    }, { status: 402 });
  }

  const { data: plan } = await supabase
    .from('subscription_plans')
    .select('site_limit, name')
    .eq('id', tier)
    .single();

  if (plan) {
    const { count } = await supabase
      .from('projects')
      .select('id', { count: 'exact', head: true })
      .eq('org_id', orgId)
      .eq('status', 'live')
      .neq('id', id);

    const liveSites = count || 0;
    if (liveSites >= plan.site_limit) {
      return NextResponse.json({
        error: 'upgrade_required',
        message: `Your ${plan.name} plan allows ${plan.site_limit} live site${plan.site_limit === 1 ? '' : 's'}. Upgrade to publish more.`,
        plan: tier,
        limit: plan.site_limit,
        used: liveSites,
      }, { status: 402 });
    }
  }

  const subdomain = project.subdomain || project.name.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30);
  const useR2 = isR2Configured();

  // Generate and upload HTML for block-based templates
  if (!project.built_url) {
    const { data: pages, error: pagesError } = await supabase
      .from('website_pages')
      .select('*')
      .eq('project_id', id)
      .order('order');

    if (pagesError) return apiError(pagesError.message, 500);
    if (!pages || pages.length === 0) return apiError('No pages to publish', 400);

    for (const page of pages) {
      const html = generatePageHTML({
        blocks: page.blocks || [],
        metaTitle: page.meta_title || project.name,
        metaDescription: page.meta_description,
        ogImage: page.og_image,
      });

      const filename = page.slug === 'home' || page.order === 0 ? 'index.html' : `${page.slug}.html`;
      const key = `${subdomain}/${filename}`;

      try {
        if (useR2) {
          await uploadToR2(key, html, 'text/html; charset=utf-8');
        } else {
          // Fallback: Supabase Storage
          const buffer = Buffer.from(html, 'utf-8');
          await supabase.storage.from('sites').remove([key]);
          const { error: uploadError } = await supabase.storage
            .from('sites')
            .upload(key, buffer, { contentType: 'text/html', upsert: true });
          if (uploadError) {
            return apiError(`Failed to upload ${filename}: ${uploadError.message}`, 500);
          }
        }
      } catch (err) {
        return apiError(`Failed to upload ${filename}: ${err instanceof Error ? err.message : 'Unknown error'}`, 500);
      }
    }
  }

  // Update project status
  const { error: updateError } = await supabase
    .from('projects')
    .update({ status: 'live', subdomain, published_at: new Date().toISOString() })
    .eq('id', id);

  if (updateError) return apiError(updateError.message, 500);

  const host = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blazesites.com.au';
  const appUrl = process.env.NEXTAUTH_URL || `https://app.${host}`;
  const siteUrl = `${appUrl}/sites/${subdomain}`;

  await createNotification({
    orgId,
    type: 'project_status',
    title: 'Site published',
    message: `${project.name} is now live at /sites/${subdomain}`,
    link: `/sites/${subdomain}`,
  });

  return apiSuccess({
    success: true,
    url: siteUrl,
    subdomain,
    status: 'live',
  });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const orgId = session.user.orgId as string;
  const supabase = await createServiceRoleClient();

  // Get project for cleanup
  const { data: project } = await supabase
    .from('projects')
    .select('subdomain, custom_domain')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  // Clean up R2 files
  if (project?.subdomain && isR2Configured()) {
    try {
      await deleteSubdomainFromR2(project.subdomain);
    } catch {
      // Non-fatal — continue with unpublish
    }
  }

  // Clean up Cloudflare custom hostname
  if (project?.custom_domain && isSaaSConfigured()) {
    try {
      const hostname = await findCustomHostname(project.custom_domain);
      if (hostname) await removeCustomHostname(hostname.id);
    } catch {
      // Non-fatal
    }
  }

  const { error } = await supabase
    .from('projects')
    .update({ status: 'draft', published_at: null })
    .eq('id', id)
    .eq('org_id', orgId);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ success: true, status: 'draft' });
}
