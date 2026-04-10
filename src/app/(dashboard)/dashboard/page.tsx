'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useTier } from '@/lib/hooks/use-tier';
import {
  Users, FolderKanban, Globe, Target, Plus, ArrowRight,
  TrendingUp, Activity, ExternalLink, Pencil, Loader2,
  LayoutTemplate, BarChart3,
} from 'lucide-react';
import Link from 'next/link';

interface DashboardStats {
  totalProjects: number;
  liveSites: number;
  totalClients?: number;
  openLeads?: number;
  pipelineValue?: number;
  recentProjects: Array<{
    id: string;
    name: string;
    status: string;
    subdomain?: string;
    published_at?: string;
    updated_at: string;
  }>;
  recentActivity: Array<{
    id: string;
    type: string;
    title: string;
    message: string;
    link?: string;
    created_at: string;
  }>;
  isCrm: boolean;
}

function formatTimeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString();
}

const statusColors: Record<string, string> = {
  draft: 'bg-gray-500/10 text-gray-400',
  in_progress: 'bg-blue-500/10 text-blue-400',
  under_review: 'bg-amber-500/10 text-amber-400',
  building: 'bg-purple-500/10 text-purple-400',
  live: 'bg-green-500/10 text-green-400',
  archived: 'bg-red-500/10 text-red-400',
};

export default function DashboardPage() {
  const { isCrm } = useTier();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard/stats')
      .then((r) => r.json())
      .then(setStats)
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

  if (!stats) {
    return <div className="py-24 text-center text-muted-foreground">Failed to load dashboard</div>;
  }

  return (
    <div className="relative z-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to Blazesites CMS</p>
        </div>
        <div className="flex gap-3">
          {isCrm && (
            <Link href="/clients/new" className={buttonVariants({ variant: 'outline' })}>
              <Plus className="mr-2 h-4 w-4" />
              Add Client
            </Link>
          )}
          <Link href="/projects/new" className={buttonVariants()}>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </div>
      </div>

      {isCrm ? <CrmDashboard stats={stats} /> : <SiteDashboard stats={stats} />}
    </div>
  );
}

/* ── Site-focused dashboard (Starter/Growth) ── */
function SiteDashboard({ stats }: { stats: DashboardStats }) {
  return (
    <>
      {/* Site hero cards */}
      {stats.recentProjects.length > 0 ? (
        <div className="space-y-4">
          {stats.recentProjects.slice(0, 3).map((project) => (
            <Card key={project.id} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <CardContent className="relative flex items-center justify-between py-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <Badge variant="outline" className={statusColors[project.status] || ''}>
                      {project.status === 'live' && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />}
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  {project.published_at && (
                    <p className="text-xs text-muted-foreground">
                      Published {formatTimeAgo(project.published_at)}
                      {project.subdomain && <> at <span className="text-primary">/sites/{project.subdomain}</span></>}
                    </p>
                  )}
                  {!project.published_at && (
                    <p className="text-xs text-muted-foreground">
                      Last updated {formatTimeAgo(project.updated_at)}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link href={`/projects/${project.id}/editor`} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                    <Pencil className="mr-1.5 h-3.5 w-3.5" />
                    Edit
                  </Link>
                  {project.status === 'live' && project.subdomain && (
                    <a
                      href={`/sites/${project.subdomain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ size: 'sm' })}
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Site
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <CardContent className="relative flex flex-col items-center justify-center py-12 text-center">
            <Globe className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <h3 className="mb-1 text-lg font-semibold">No projects yet</h3>
            <p className="mb-4 text-sm text-muted-foreground">Create your first website project to get started</p>
            <Link href="/projects/new" className={buttonVariants()}>
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Stats row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-50" />
          <CardHeader className="relative flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Live Sites</CardTitle>
            <div className="rounded-xl bg-emerald-500/10 p-2"><Globe className="h-4 w-4 text-emerald-500" /></div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl font-bold">{stats.liveSites}</div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-50" />
          <CardHeader className="relative flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
            <div className="rounded-xl bg-blue-500/10 p-2"><FolderKanban className="h-4 w-4 text-blue-500" /></div>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl font-bold">{stats.totalProjects}</div>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 opacity-50" />
          <CardHeader className="relative flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Quick Links</CardTitle>
            <div className="rounded-xl bg-violet-500/10 p-2"><LayoutTemplate className="h-4 w-4 text-violet-500" /></div>
          </CardHeader>
          <CardContent className="relative flex gap-2">
            <Link href="/templates" className="text-xs text-primary hover:underline">Templates</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/analytics" className="text-xs text-primary hover:underline">Analytics</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/settings" className="text-xs text-primary hover:underline">Settings</Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <RecentActivityCard activity={stats.recentActivity} />
    </>
  );
}

/* ── Full CRM dashboard (Pro/Agency) ── */
function CrmDashboard({ stats }: { stats: DashboardStats }) {
  const crmStats = [
    { name: 'Total Clients', value: String(stats.totalClients ?? 0), icon: Users, href: '/clients', color: 'from-violet-500/20 to-purple-500/20' },
    { name: 'Active Projects', value: String(stats.totalProjects), icon: FolderKanban, href: '/projects', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Live Sites', value: String(stats.liveSites), icon: Globe, href: '/projects', color: 'from-emerald-500/20 to-teal-500/20' },
    { name: 'Open Leads', value: String(stats.openLeads ?? 0), icon: Target, href: '/leads', color: 'from-amber-500/20 to-orange-500/20' },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {crmStats.map((stat) => (
          <Card key={stat.name} className="relative overflow-hidden">
            <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', stat.color)} />
            <CardHeader className="relative flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.name}</CardTitle>
              <div className="rounded-xl bg-primary/10 p-2"><stat.icon className="h-4 w-4 text-primary" /></div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-2xl font-bold">{stat.value}</div>
              <Link href={stat.href} className="mt-1 flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pipeline value highlight */}
      {(stats.pipelineValue ?? 0) > 0 && (
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10" />
          <CardContent className="relative flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-muted-foreground">Pipeline Value</p>
              <p className="text-2xl font-bold">${stats.pipelineValue?.toLocaleString()}</p>
            </div>
            <Link href="/leads" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
              View Pipeline <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>Get started with common tasks</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Link href="/clients/new" className={cn(buttonVariants({ variant: 'outline' }), 'justify-start')}>
              <Users className="mr-2 h-4 w-4" /> Add a new client
            </Link>
            <Link href="/projects/new" className={cn(buttonVariants({ variant: 'outline' }), 'justify-start')}>
              <FolderKanban className="mr-2 h-4 w-4" /> Start a new website project
            </Link>
            <Link href="/templates" className={cn(buttonVariants({ variant: 'outline' }), 'justify-start')}>
              <LayoutTemplate className="mr-2 h-4 w-4" /> Browse template library
            </Link>
            <Link href="/leads" className={cn(buttonVariants({ variant: 'outline' }), 'justify-start')}>
              <Target className="mr-2 h-4 w-4" /> View lead pipeline
            </Link>
          </CardContent>
        </Card>

        <RecentActivityCard activity={stats.recentActivity} />
      </div>
    </>
  );
}

/* ── Shared recent activity card ── */
function RecentActivityCard({ activity }: { activity: DashboardStats['recentActivity'] }) {
  const typeColors: Record<string, string> = {
    lead_update: 'bg-blue-500',
    project_status: 'bg-green-500',
    client_activity: 'bg-purple-500',
    system: 'bg-orange-500',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          Recent Activity
        </CardTitle>
        <CardDescription>Latest updates across your workspace</CardDescription>
      </CardHeader>
      <CardContent>
        {activity.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
            No recent activity yet. Start by creating a project.
          </div>
        ) : (
          <div className="space-y-3">
            {activity.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', typeColors[item.type] || 'bg-gray-500')} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.message}</p>
                  <p className="text-xs text-muted-foreground/60">{formatTimeAgo(item.created_at)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
