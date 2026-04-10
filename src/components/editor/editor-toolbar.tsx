'use client';

import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/lib/editor/store';
import { ArrowLeft, Monitor, Tablet, Smartphone, Save, Loader2, Globe, Undo2, Redo2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface EditorToolbarProps {
  projectId: string;
  projectName: string;
  projectStatus?: string;
  builtUrl?: string | null;
  onSave: () => void;
}

export function EditorToolbar({ projectId, projectName, projectStatus, builtUrl, onSave }: EditorToolbarProps) {
  const { deviceMode, setDeviceMode, isDirty, isSaving, undo, redo, canUndo, canRedo } = useEditorStore();
  const router = useRouter();
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [publishedUrl, setPublishedUrl] = useState<string | null>(
    projectStatus === 'live' ? `${projectName.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}` : null
  );

  const handlePublish = async () => {
    setPublishing(true);
    setPublishError('');
    try {
      const res = await fetch(`/api/projects/${projectId}/publish`, { method: 'POST' });
      const data = await res.json();
      if (res.ok && data.success) {
        setPublishedUrl(data.subdomain);
      } else if (res.status === 402) {
        // Subscription required or upgrade needed
        if (data.error === 'subscription_required' || data.error === 'upgrade_required') {
          router.push('/billing');
        } else {
          setPublishError(data.message || 'Subscription required');
        }
      } else {
        setPublishError(data.error || 'Failed to publish');
      }
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="flex h-14 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3">
        <Link href={`/projects/${projectId}`} className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <span className="text-sm font-medium">{projectName}</span>
        {isDirty && <span className="text-xs text-muted-foreground">(unsaved)</span>}
        {publishedUrl && (
          <span className="flex items-center gap-1 text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
            <Globe className="w-3 h-3" />
            Live
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={undo} disabled={!canUndo()} title="Undo (Cmd+Z)">
          <Undo2 className="h-3.5 w-3.5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={redo} disabled={!canRedo()} title="Redo (Cmd+Shift+Z)">
          <Redo2 className="h-3.5 w-3.5" />
        </Button>

        <div className="mx-2 h-6 w-px bg-border" />
      </div>

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

      <div className="flex items-center gap-2">
        <Button onClick={onSave} disabled={isSaving || !isDirty} size="sm" variant="outline">
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Save
        </Button>
        {builtUrl && (
          <Button
            onClick={handlePublish}
            disabled={publishing}
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {publishing ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Globe className="mr-2 h-4 w-4" />
            )}
            {publishedUrl ? 'Published' : 'Publish'}
          </Button>
        )}
      </div>
    </div>
  );
}
