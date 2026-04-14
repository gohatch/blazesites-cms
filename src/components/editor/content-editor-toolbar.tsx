'use client';

import { useState, useMemo } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useContentEditorStore } from '@/lib/editor/content-store';
import { ArrowLeft, Monitor, Tablet, Smartphone, Loader2, Undo2, Redo2, RotateCw, Globe } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DomainSettings } from '@/components/projects/domain-settings';
import { calculateSeoScore, SeoScorecard } from '@/components/editor/seo-scorecard';

interface ContentEditorToolbarProps {
  projectId: string;
  projectName: string;
  subdomain: string;
  customDomain?: string;
  dnsVerified?: boolean;
  onSaveAndRebuild: () => void;
}

export function ContentEditorToolbar({
  projectId,
  projectName,
  subdomain,
  customDomain,
  dnsVerified,
  onSaveAndRebuild,
}: ContentEditorToolbarProps) {
  const {
    brandContent,
    deviceMode,
    setDeviceMode,
    isDirty,
    isRebuilding,
    isSaving,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useContentEditorStore();

  const [seoOpen, setSeoOpen] = useState(false);
  const seo = useMemo(() => calculateSeoScore(brandContent), [brandContent]);

  return (
    <div className="flex h-14 items-center justify-between border-b bg-background px-4">
      {/* Left: back + project name + dirty indicator */}
      <div className="flex items-center gap-3">
        <Link
          href={`/projects/${projectId}`}
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="text-sm font-medium">{projectName}</span>
        {isDirty && (
          <span className="text-xs text-muted-foreground">(unsaved)</span>
        )}
      </div>

      {/* Center: undo / redo */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={undo}
          disabled={!canUndo()}
          title="Undo (Cmd+Z)"
        >
          <Undo2 className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={redo}
          disabled={!canRedo()}
          title="Redo (Cmd+Shift+Z)"
        >
          <Redo2 className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* Right: SEO badge + device toggle + save & rebuild */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSeoOpen(true)}
          className={cn(
            'rounded-md border px-2 py-0.5 text-xs font-bold transition-colors hover:opacity-80',
            seo.gradeColor,
          )}
          title="Open SEO Scorecard"
        >
          SEO: {seo.grade}
        </button>
        <SeoScorecard open={seoOpen} onOpenChange={setSeoOpen} projectId={projectId} />

        <div className="flex items-center gap-1 rounded-lg border p-1">
          <Button
            variant={deviceMode === 'desktop' ? 'secondary' : 'ghost'}
            size="icon"
            className="h-7 w-7"
            onClick={() => setDeviceMode('desktop')}
          >
            <Monitor className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant={deviceMode === 'tablet' ? 'secondary' : 'ghost'}
            size="icon"
            className="h-7 w-7"
            onClick={() => setDeviceMode('tablet')}
          >
            <Tablet className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant={deviceMode === 'mobile' ? 'secondary' : 'ghost'}
            size="icon"
            className="h-7 w-7"
            onClick={() => setDeviceMode('mobile')}
          >
            <Smartphone className="h-3.5 w-3.5" />
          </Button>
        </div>

        <Dialog>
          <DialogTrigger
            render={
              <Button variant="ghost" size="icon" className="h-8 w-8" title="Domain Settings" />
            }
          >
            <Globe className="h-3.5 w-3.5" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
            <DialogHeader className="sr-only">
              <DialogTitle>Domain Settings</DialogTitle>
            </DialogHeader>
            <DomainSettings
              projectId={projectId}
              subdomain={subdomain}
              customDomain={customDomain}
              dnsVerified={dnsVerified}
            />
          </DialogContent>
        </Dialog>

        <Button
          onClick={onSaveAndRebuild}
          disabled={(!isDirty && !isRebuilding) || isSaving}
          size="sm"
        >
          {isRebuilding || isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RotateCw className="mr-2 h-4 w-4" />
          )}
          {isRebuilding ? 'Building...' : 'Save & Rebuild'}
        </Button>
      </div>
    </div>
  );
}
