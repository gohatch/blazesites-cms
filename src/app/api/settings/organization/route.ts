import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { z } from 'zod';

const orgSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(50).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  logo_url: z.string().url().optional().or(z.literal('')),
});

export async function GET() {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data, error } = await supabase
    .from('organizations')
    .select('id, name, slug, logo_url, subscription_tier, created_at')
    .eq('id', orgId)
    .single();

  if (error) return apiError('Organization not found', 404);
  return apiSuccess(data);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const userRole = session.user.role;
  if (userRole !== 'owner' && userRole !== 'admin') {
    return apiError('Only owners and admins can update organization settings', 403);
  }

  try {
    const body = await req.json();
    const data = orgSchema.parse(body);
    const orgId = session.user.orgId as string;
    const supabase = await createServiceRoleClient();

    // Check slug uniqueness
    const { data: existing } = await supabase
      .from('organizations')
      .select('id')
      .eq('slug', data.slug)
      .neq('id', orgId)
      .single();

    if (existing) {
      return apiError('This slug is already taken', 400);
    }

    const { data: org, error } = await supabase
      .from('organizations')
      .update({ name: data.name, slug: data.slug, logo_url: data.logo_url || null })
      .eq('id', orgId)
      .select('id, name, slug, logo_url, subscription_tier, created_at')
      .single();

    if (error) return apiError(error.message, 500);
    return apiSuccess(org);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
