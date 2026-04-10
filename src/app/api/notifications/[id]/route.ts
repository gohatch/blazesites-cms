import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';

export async function PUT(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data, error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('id', id)
    .eq('org_id', orgId)
    .select()
    .single();

  if (error) return apiError(error.message, 500);
  return apiSuccess(data);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', id)
    .eq('org_id', orgId);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ success: true });
}
