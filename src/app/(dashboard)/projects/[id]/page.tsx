'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { StatusBadge } from '@/components/projects/status-badge';
import { DomainSettings } from '@/components/projects/domain-settings';
import {
  ArrowLeft, Pencil, Globe, User, Calendar, LayoutTemplate,
  Eye, ExternalLink, Loader2, RefreshCw, Trash2, FileText,
  Clock, Layers, Rocket,
} from 'lucide-react';
import type { Project, WebsitePage } from '@/types';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [pages, setPages] = useState<WebsitePage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [rebuilding, setRebuilding] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projRes, pagesRes] = await Promise.all([
          fetch(`/api/projects/${params.id}`),
          fetch(`/api/projects/${params.id}/pages`),
        ]);
        if (projRes.ok) setProject(await projRes.json());
        if (pagesRes.ok) setPages(await pagesRes.json());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.id]);

  const handleDelete = async () => {
    setDeleting(true);
    const res = await fetch(`/api/projects/${params.id}`, { method: 'DELETE' });
    if (res.ok) {
      router.push('/projects');
    }
    setDeleting(false);
  };

  const handlePublish = async () => {
    setPublishing(true);
    setPublishError('');
    try {
      const res = await fetch(`/api/projects/${params.id}/publish`, { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        setProject((p) => p ? { ...p, status: 'live', subdomain: data.subdomain, published_at: new Date().toISOString() } : p);
      } else if (res.status === 402) {
        router.push('/billing');
      } else {
        setPublishError(data.error || data.message || 'Failed to publish');
      }
    } catch {
      setPublishError('Failed to publish');
    }
    setPublishing(false);
  };

  if (loading) return <div className="h-96 animate-pulse rounded-lg bg-muted" />;
  if (!project) return <div className="text-center text-muted-foreground">Project not found</div>;

  const isLive = project.status === 'live';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/projects" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {project.built_url && (
            <Button variant="outline" onClick={() => setShowPreview(true)}>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
          )}
          {!isLive && (
            <Button
              variant="outline"
              onClick={handlePublish}
              disabled={publishing}
              className="text-green-600 border-green-600/30 hover:bg-green-600/10"
            >
              {publishing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Rocket className="mr-2 h-4 w-4" />}
              Publish
            </Button>
          )}
          {project.built_url && (
            <Button
              variant="outline"
              size="icon"
              disabled={rebuilding}
              title="Rebuild site"
              onClick={async () => {
                setRebuilding(true);
                try {
                  const res = await fetch(`/api/projects/${project.id}/build`, { method: 'POST' });
                  if (res.ok) {
                    const data = await res.json();
                    setProject({ ...project, built_url: data.url, status: 'draft' as const });
                  }
                } finally {
                  setRebuilding(false);
                }
              }}
            >
              {rebuilding ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            </Button>
          )}
          <Link href={`/projects/${project.id}/editor`} className={buttonVariants()}>
            <Pencil className="mr-2 h-4 w-4" />
            Open Editor
          </Link>
          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => setDeleteOpen(true)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {publishError && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {publishError}
        </div>
      )}

      {/* Info cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Project Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {project.client && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Link href={`/clients/${project.client_id}`} className="hover:underline">
                  {project.client.name}
                </Link>
              </div>
            )}
            {project.subdomain && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>/sites/{project.subdomain}</span>
                {isLive && (
                  <a href={`/sites/${project.subdomain}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 text-muted-foreground hover:text-primary" />
                  </a>
                )}
              </div>
            )}
            <div className="flex items-center gap-2">
              <LayoutTemplate className="h-4 w-4 text-muted-foreground" />
              Template: {project.template_id ? 'Applied' : 'None'}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Created {new Date(project.created_at).toLocaleDateString()}
            </div>
            {project.published_at && (
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-green-500" />
                Published {new Date(project.published_at).toLocaleDateString()}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Updated {new Date(project.updated_at).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>

        {/* Pages card */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Pages ({pages.length})</CardTitle>
            <Link href={`/projects/${project.id}/editor`} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
              <Pencil className="mr-1.5 h-3.5 w-3.5" />
              Edit
            </Link>
          </CardHeader>
          <CardContent>
            {pages.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No pages yet. Open the editor to add content.
              </p>
            ) : (
              <div className="divide-y divide-border/50">
                {pages.map((page) => {
                  const blockCount = Array.isArray(page.blocks) ? page.blocks.length : 0;
                  return (
                    <Link
                      key={page.id}
                      href={`/projects/${project.id}/editor`}
                      className="flex items-center justify-between py-3 text-sm hover:bg-accent/50 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{page.name}</p>
                          <p className="text-xs text-muted-foreground">/{page.slug}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Layers className="h-3.5 w-3.5" />
                        {blockCount} {blockCount === 1 ? 'block' : 'blocks'}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Domain Settings */}
      {project.subdomain && (
        <DomainSettings
          projectId={project.id}
          subdomain={project.subdomain}
          customDomain={project.custom_domain}
          dnsVerified={project.dns_verified}
          status={project.status}
        />
      )}

      {/* Delete confirmation dialog */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &ldquo;{project.name}&rdquo;? This will remove all pages and content. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
              {deleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full-window preview overlay */}
      {showPreview && project.built_url && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex items-center justify-between h-12 px-4 bg-zinc-900 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white">{project.name}</span>
              <StatusBadge status={project.status} />
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.built_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in new tab
              </a>
              <Button variant="ghost" size="sm" onClick={() => setShowPreview(false)} className="text-zinc-400 hover:text-white">
                Close
              </Button>
            </div>
          </div>
          <iframe
            src={project.built_url}
            className="w-full border-0"
            style={{ height: 'calc(100vh - 48px)' }}
            title="Site preview"
          />
        </div>
      )}
    </div>
  );
}
