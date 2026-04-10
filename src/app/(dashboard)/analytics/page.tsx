'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useTier } from '@/lib/hooks/use-tier';
import { Globe, Users, FolderKanban, Target, TrendingUp, Clock, Loader2 } from 'lucide-react';

interface AnalyticsData {
  sitesPublished: number;
  activeProjects: number;
  avgTimeToPublish: number | null;
  monthlyPublishes: Record<string, number>;
  projectsByStatus: Record<string, number>;
  isCrm: boolean;
  totalClients?: number;
  pipelineValue?: number;
  leadsByStage?: Record<string, number>;
  conversionRate?: number;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatMonth(key: string) {
  const [, m] = key.split('-');
  return monthNames[parseInt(m, 10) - 1] || key;
}

export default function AnalyticsPage() {
  const { isCrm } = useTier();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics')
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!data) {
    return <div className="py-24 text-center text-muted-foreground">Failed to load analytics</div>;
  }

  // Build metrics based on tier
  const metrics = [
    { name: 'Sites Published', value: String(data.sitesPublished), icon: Globe, description: 'Total live websites', color: 'from-emerald-500/20 to-teal-500/20' },
    { name: 'Active Projects', value: String(data.activeProjects), icon: FolderKanban, description: 'All projects', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Avg. Time to Publish', value: data.avgTimeToPublish !== null ? `${data.avgTimeToPublish}d` : '--', icon: Clock, description: 'Average days from creation to live', color: 'from-pink-500/20 to-rose-500/20' },
  ];

  if (isCrm) {
    metrics.push(
      { name: 'Total Clients', value: String(data.totalClients ?? 0), icon: Users, description: 'Active client accounts', color: 'from-violet-500/20 to-purple-500/20' },
      { name: 'Pipeline Value', value: `$${(data.pipelineValue ?? 0).toLocaleString()}`, icon: Target, description: 'Open lead value', color: 'from-amber-500/20 to-orange-500/20' },
      { name: 'Conversion Rate', value: `${data.conversionRate ?? 0}%`, icon: TrendingUp, description: 'Won leads / total leads', color: 'from-indigo-500/20 to-violet-500/20' },
    );
  }

  return (
    <div className="relative z-10 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track your performance metrics</p>
      </div>

      {/* Metric cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.name} className="relative overflow-hidden">
            <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', metric.color)} />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.name}</CardTitle>
              <div className="rounded-xl bg-primary/10 p-2">
                <metric.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">{metric.value}</div>
              <CardDescription className="mt-1">{metric.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className={cn('grid gap-6', isCrm ? 'lg:grid-cols-2' : 'lg:grid-cols-2')}>
        {/* Monthly publishes chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sites Published Over Time</CardTitle>
            <CardDescription>Monthly site delivery (last 6 months)</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={data.monthlyPublishes} />
          </CardContent>
        </Card>

        {/* Projects by status */}
        <Card>
          <CardHeader>
            <CardTitle>Projects by Status</CardTitle>
            <CardDescription>Current distribution of project states</CardDescription>
          </CardHeader>
          <CardContent>
            <StatusBreakdown data={data.projectsByStatus} />
          </CardContent>
        </Card>

        {/* CRM-only: Leads by stage */}
        {isCrm && data.leadsByStage && Object.keys(data.leadsByStage).length > 0 && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Leads by Stage</CardTitle>
              <CardDescription>Distribution across pipeline stages</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart data={data.leadsByStage} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

/* ── Simple bar chart ── */
function BarChart({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data);
  if (entries.length === 0) {
    return <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">No data yet</div>;
  }

  const max = Math.max(...entries.map(([, v]) => v), 1);

  return (
    <div className="flex h-48 items-end gap-2">
      {entries.map(([label, value]) => (
        <div key={label} className="flex flex-1 flex-col items-center gap-1">
          <span className="text-xs font-medium">{value}</span>
          <div
            className="w-full rounded-t-md bg-primary/80 transition-all"
            style={{ height: `${Math.max((value / max) * 140, 4)}px` }}
          />
          <span className="text-[10px] text-muted-foreground capitalize">{formatMonth(label)}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Status breakdown (horizontal bars) ── */
function StatusBreakdown({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data);
  if (entries.length === 0) {
    return <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">No projects yet</div>;
  }

  const total = entries.reduce((sum, [, v]) => sum + v, 0);
  const statusColors: Record<string, string> = {
    draft: 'bg-gray-400',
    in_progress: 'bg-blue-500',
    under_review: 'bg-amber-500',
    building: 'bg-purple-500',
    live: 'bg-green-500',
    archived: 'bg-red-400',
  };

  return (
    <div className="space-y-3">
      {entries.map(([status, count]) => (
        <div key={status} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="capitalize">{status.replace('_', ' ')}</span>
            <span className="text-muted-foreground">{count}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={cn('h-full rounded-full transition-all', statusColors[status] || 'bg-primary')}
              style={{ width: `${(count / total) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
