import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { createNotification } from '@/lib/notifications';

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const body = await req.json();
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  // Get current lead for comparison
  const { data: currentLead } = await supabase
    .from('leads')
    .select('name, stage')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  const { data, error } = await supabase
    .from('leads')
    .update(body)
    .eq('id', id)
    .eq('org_id', orgId)
    .select()
    .single();

  if (error) return apiError(error.message, 500);

  // Notify on stage change
  if (currentLead && body.stage && body.stage !== currentLead.stage) {
    await createNotification({
      orgId,
      type: 'lead_update',
      title: 'Lead stage updated',
      message: `${currentLead.name} moved from ${currentLead.stage} to ${body.stage}`,
      link: `/leads`,
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

  const { error } = await supabase.from('leads').delete().eq('id', id).eq('org_id', orgId);
  if (error) return apiError(error.message, 500);
  return apiSuccess({ success: true });
}
