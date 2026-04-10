import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess, parsePagination } from '@/lib/api/helpers';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  company: z.string().optional().or(z.literal('')),
  source: z.string().optional().or(z.literal('')),
  stage: z.enum(['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost']).default('new'),
  value: z.number().optional(),
  notes: z.string().optional().or(z.literal('')),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;
  const { searchParams } = new URL(req.url);
  const { page, limit, offset, search } = parsePagination(searchParams);

  let query = supabase
    .from('leads')
    .select('*', { count: 'exact' })
    .eq('org_id', orgId)
    .order('created_at', { ascending: false });

  if (search) {
    query = query.or(`name.ilike.%${search}%,company.ilike.%${search}%,email.ilike.%${search}%`);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ data, total: count ?? 0, page, limit });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  try {
    const body = await req.json();
    const data = leadSchema.parse(body);
    const orgId = session.user.orgId as string;

    const supabase = await createServiceRoleClient();
    const { data: lead, error } = await supabase
      .from('leads')
      .insert({ ...data, org_id: orgId })
      .select()
      .single();

    if (error) return apiError(error.message, 500);
    return apiSuccess(lead, 201);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
