import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess, parsePagination } from '@/lib/api/helpers';

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;
  const { searchParams } = new URL(req.url);
  const { page, limit, offset } = parsePagination(searchParams);
  const unreadOnly = searchParams.get('unread') === 'true';

  let query = supabase
    .from('notifications')
    .select('*', { count: 'exact' })
    .eq('org_id', orgId)
    .order('created_at', { ascending: false });

  if (unreadOnly) {
    query = query.eq('read', false);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) return apiError(error.message, 500);

  // Also get unread count
  const { count: unreadCount } = await supabase
    .from('notifications')
    .select('*', { count: 'exact', head: true })
    .eq('org_id', orgId)
    .eq('read', false);

  return apiSuccess({ data, total: count ?? 0, unreadCount: unreadCount ?? 0, page, limit });
}
