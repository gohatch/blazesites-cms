import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess, parsePagination } from '@/lib/api/helpers';

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const { searchParams } = new URL(req.url);
  const { page, limit, offset, search } = parsePagination(searchParams);

  let query = supabase
    .from('templates')
    .select('*', { count: 'exact' })
    .eq('status', 'active')
    .order('name');

  if (search) {
    query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ data, total: count ?? 0, page, limit });
}
