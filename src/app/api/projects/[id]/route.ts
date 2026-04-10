import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { createNotification } from '@/lib/notifications';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data, error } = await supabase
    .from('projects')
    .select('*, client:clients(id, name, email, company), template:templates(id, name, template_type, template_dir)')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  if (error) return apiError('Project not found', 404);
  return apiSuccess(data);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const body = await req.json();
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  // Get current project for comparison
  const { data: currentProject } = await supabase
    .from('projects')
    .select('name, status')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  const { data, error } = await supabase
    .from('projects')
    .update(body)
    .eq('id', id)
    .eq('org_id', orgId)
    .select()
    .single();

  if (error) return apiError(error.message, 500);

  // Notify on status change
  if (currentProject && body.status && body.status !== currentProject.status) {
    await createNotification({
      orgId,
      type: 'project_status',
      title: 'Project status updated',
      message: `${currentProject.name} changed from ${currentProject.status} to ${body.status}`,
      link: `/projects`,
    });
  }

  return apiSuccess(data);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { error } = await supabase.from('projects').delete().eq('id', id).eq('org_id', orgId);
  if (error) return apiError(error.message, 500);
  return apiSuccess({ success: true });
}
