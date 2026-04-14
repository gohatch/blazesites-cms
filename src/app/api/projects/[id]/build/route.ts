import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { buildAstroTemplate, cleanupBuild } from '@/lib/astro/build-template';
import type { AstroBrandContent } from '@/types';

// Allow up to 60s for Astro builds (Vercel Pro supports up to 300s)
export const maxDuration = 60;

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: projectId } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  // Fetch project with template
  const { data: project, error: projectError } = await supabase
    .from('projects')
    .select('*, template:templates(id, name, template_type, template_dir)')
    .eq('id', projectId)
    .eq('org_id', orgId)
    .single();

  if (projectError || !project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  if (project.template?.template_type !== 'astro' || !project.template?.template_dir) {
    return NextResponse.json(
      { error: 'Project does not use an Astro template' },
      { status: 400 }
    );
  }

  if (!project.brand_profile) {
    return NextResponse.json(
      { error: 'Project has no brand profile. Generate content first.' },
      { status: 400 }
    );
  }

  try {
    const slug = project.subdomain || projectId;

    // Build the template — handles R2 upload or local deploy automatically
    const result = await buildAstroTemplate(
      project.template.template_dir,
      project.brand_profile as AstroBrandContent,
      projectId,
      slug
    );

    // Clean up temp build
    cleanupBuild(projectId);

    if (!result.success) {
      return NextResponse.json(
        { error: `Build failed: ${result.error}` },
        { status: 500 }
      );
    }

    // Update project with built URL (from R2 or local)
    const builtUrl = result.builtUrl || `/previews/${slug}/index.html`;
    await supabase
      .from('projects')
      .update({ built_url: builtUrl })
      .eq('id', projectId);

    return NextResponse.json({ success: true, url: builtUrl });
  } catch (err) {
    cleanupBuild(projectId);
    const message = err instanceof Error ? err.message : 'Build failed unexpectedly';
    console.error(`[build-endpoint] ${projectId}:`, message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
