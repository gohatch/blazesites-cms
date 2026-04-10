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

  // Core stats (all tiers)
  const [projectsRes, liveRes] = await Promise.all([
    supabase.from('projects').select('id', { count: 'exact', head: true }).eq('org_id', orgId),
    supabase.from('projects').select('id', { count: 'exact', head: true }).eq('org_id', orgId).eq('status', 'live'),
  ]);

  const stats: Record<string, unknown> = {
    totalProjects: projectsRes.count ?? 0,
    liveSites: liveRes.count ?? 0,
  };

  // Recent projects for site-focused view
  const { data: recentProjects } = await supabase
    .from('projects')
    .select('id, name, status, subdomain, published_at, updated_at')
    .eq('org_id', orgId)
    .order('updated_at', { ascending: false })
    .limit(5);

  stats.recentProjects = recentProjects || [];

  // CRM stats (pro/agency only)
  if (isCrm) {
    const [clientsRes, leadsRes, pipelineRes] = await Promise.all([
      supabase.from('clients').select('id', { count: 'exact', head: true }).eq('org_id', orgId),
      supabase.from('leads').select('id', { count: 'exact', head: true }).eq('org_id', orgId).not('stage', 'in', '("won","lost")'),
      supabase.from('leads').select('value').eq('org_id', orgId).not('stage', 'in', '("won","lost")'),
    ]);

    const pipelineValue = (pipelineRes.data || []).reduce((sum, l) => sum + (Number(l.value) || 0), 0);

    stats.totalClients = clientsRes.count ?? 0;
    stats.openLeads = leadsRes.count ?? 0;
    stats.pipelineValue = pipelineValue;
  }

  // Recent notifications (all tiers)
  const { data: recentActivity } = await supabase
    .from('notifications')
    .select('id, type, title, message, link, created_at')
    .eq('org_id', orgId)
    .order('created_at', { ascending: false })
    .limit(5);

  stats.recentActivity = recentActivity || [];
  stats.isCrm = isCrm;

  return apiSuccess(stats);
}
