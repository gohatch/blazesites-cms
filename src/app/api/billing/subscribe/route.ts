import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { z } from 'zod';

const subscribeSchema = z.object({
  plan: z.enum(['starter', 'growth', 'pro', 'agency']),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const orgId = session.user.orgId as string;
  const userId = session.user.id as string;

  try {
    const body = await req.json();
    const { plan } = subscribeSchema.parse(body);

    const supabase = await createServiceRoleClient();

    // Verify plan exists
    const { data: planData, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', plan)
      .single();

    if (planError || !planData) {
      return apiError('Invalid plan', 400);
    }

    // Update org and user subscription tier in parallel
    const [orgResult, userResult] = await Promise.all([
      supabase.from('organizations').update({ subscription_tier: plan }).eq('id', orgId),
      supabase.from('users').update({ subscription_tier: plan }).eq('id', userId),
    ]);

    if (orgResult.error) return apiError(orgResult.error.message, 500);
    if (userResult.error) return apiError(userResult.error.message, 500);

    return apiSuccess({
      success: true,
      tier: plan,
      plan: planData,
      message: `Subscribed to ${planData.name} plan ($${planData.price}/mo)`,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
