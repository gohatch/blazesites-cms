import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const orgId = session.user.orgId as string;
  const supabase = await createServiceRoleClient();

  // Get org's current tier
  const { data: org } = await supabase
    .from('organizations')
    .select('subscription_tier')
    .eq('id', orgId)
    .single();

  const tier = org?.subscription_tier || null;

  // Get plan details
  let plan = null;
  if (tier) {
    const { data } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', tier)
      .single();
    plan = data;
  }

  // Count live sites
  const { count } = await supabase
    .from('projects')
    .select('id', { count: 'exact', head: true })
    .eq('org_id', orgId)
    .eq('status', 'live');

  const sitesUsed = count || 0;
  const siteLimit = plan?.site_limit || 0;

  return NextResponse.json({
    tier,
    plan,
    sitesUsed,
    siteLimit,
    canPublish: tier ? sitesUsed < siteLimit : false,
  });
}
