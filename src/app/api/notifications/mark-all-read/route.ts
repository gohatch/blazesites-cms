import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';

export async function PUT() {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { error } = await supabase
    .from('notifications')
    .update({ read: true })
    .eq('org_id', orgId)
    .eq('read', false);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ success: true });
}
