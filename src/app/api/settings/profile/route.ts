import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { z } from 'zod';

const profileSchema = z.object({
  name: z.string().min(2).max(100),
  avatar_url: z.string().url().optional().or(z.literal('')),
});

export async function GET() {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const { data, error } = await supabase
    .from('users')
    .select('id, email, name, avatar_url, role, created_at')
    .eq('id', session.user.id)
    .single();

  if (error) return apiError('Profile not found', 404);
  return apiSuccess(data);
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  try {
    const body = await req.json();
    const data = profileSchema.parse(body);

    const supabase = await createServiceRoleClient();
    const { data: profile, error } = await supabase
      .from('users')
      .update({ name: data.name, avatar_url: data.avatar_url || null })
      .eq('id', session.user.id)
      .select('id, email, name, avatar_url, role, created_at')
      .single();

    if (error) return apiError(error.message, 500);
    return apiSuccess(profile);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
