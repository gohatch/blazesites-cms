import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';

export async function GET() {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;
  const tier = session.user.subscriptionTier as string;
  const isCrm = tier === 'pro' || tier === 'agency';

  // All tiers: project/site stats
  const [projectsRes, liveRes, publishedProjects] = await Promise.all([
    supabase.from('projects').select('id', { count: 'exact', head: true }).eq('org_id', orgId),
    supabase.from('projects').select('id', { count: 'exact', head: true }).eq('org_id', orgId).eq('status', 'live'),
    supabase.from('projects').select('published_at, created_at').eq('org_id', orgId).not('published_at', 'is', null).order('published_at', { ascending: false }),
  ]);

  const published = publishedProjects.data || [];

  // Calculate avg time to publish (days from created to published)
  let avgTimeToPublish: number | null = null;
  if (published.length > 0) {
    const times = published
      .filter((p) => p.published_at && p.created_at)
      .map((p) => new Date(p.published_at!).getTime() - new Date(p.created_at).getTime());
    if (times.length > 0) {
      const avgMs = times.reduce((a, b) => a + b, 0) / times.length;
      avgTimeToPublish = Math.round(avgMs / (1000 * 60 * 60 * 24)); // days
    }
  }

  // Monthly publishes (last 6 months)
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const monthlyPublishes: Record<string, number> = {};
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    monthlyPublishes[key] = 0;
  }
  for (const p of published) {
    if (!p.published_at) continue;
    const d = new Date(p.published_at);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (key in monthlyPublishes) {
      monthlyPublishes[key]++;
    }
  }

  // Projects by status
  const { data: allProjects } = await supabase
    .from('projects')
    .select('status')
    .eq('org_id', orgId);

  const projectsByStatus: Record<string, number> = {};
  for (const p of allProjects || []) {
    projectsByStatus[p.status] = (projectsByStatus[p.status] || 0) + 1;
  }

  const analytics: Record<string, unknown> = {
    sitesPublished: liveRes.count ?? 0,
    activeProjects: projectsRes.count ?? 0,
    avgTimeToPublish,
    monthlyPublishes,
    projectsByStatus,
    isCrm,
  };

  // CRM analytics (pro/agency)
  if (isCrm) {
    const [clientsRes, leadsRes, wonRes, allLeadsRes] = await Promise.all([
      supabase.from('clients').select('id', { count: 'exact', head: true }).eq('org_id', orgId),
      supabase.from('leads').select('stage, value').eq('org_id', orgId),
      supabase.from('leads').select('id', { count: 'exact', head: true }).eq('org_id', orgId).eq('stage', 'won'),
      supabase.from('leads').select('id', { count: 'exact', head: true }).eq('org_id', orgId),
    ]);

    const leads = leadsRes.data || [];
    const pipelineValue = leads
      .filter((l) => l.stage !== 'won' && l.stage !== 'lost')
      .reduce((sum, l) => sum + (Number(l.value) || 0), 0);

    const leadsByStage: Record<string, number> = {};
    for (const l of leads) {
      leadsByStage[l.stage] = (leadsByStage[l.stage] || 0) + 1;
    }

    const totalLeads = allLeadsRes.count ?? 0;
    const wonLeads = wonRes.count ?? 0;
    const conversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0;

    analytics.totalClients = clientsRes.count ?? 0;
    analytics.pipelineValue = pipelineValue;
    analytics.leadsByStage = leadsByStage;
    analytics.conversionRate = conversionRate;
  }

  return apiSuccess(analytics);
}
