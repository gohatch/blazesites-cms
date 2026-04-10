'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { useContentEditorStore } from '@/lib/editor/content-store';
import { ContentEditorToolbar } from '@/components/editor/content-editor-toolbar';
import { ContentSidebar } from '@/components/editor/content-sidebar';
import { ContentFields } from '@/components/editor/content-fields';
import { cn } from '@/lib/utils';
import type { AstroBrandContent } from '@/types';

interface ContentEditorProps {
  projectId: string;
  project: {
    id: string;
    name: string;
    built_url: string;
    brand_profile: AstroBrandContent;
    template_id: string;
  };
}

export function ContentEditor({ projectId, project }: ContentEditorProps) {
  const {
    setContent,
    brandContent,
    deviceMode,
    isDirty,
    setSaving,
    setRebuilding,
    markClean,
    undo,
    redo,
  } = useContentEditorStore();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeSrc, setIframeSrc] = useState(project.built_url);
  const [error, setError] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // Initialize content store on mount
  // -------------------------------------------------------------------------
  useEffect(() => {
    setContent(project.brand_profile);
  }, [project.brand_profile, setContent]);

  // -------------------------------------------------------------------------
  // Save & rebuild handler
  // -------------------------------------------------------------------------
  const handleSaveAndRebuild = useCallback(async () => {
    if (!brandContent) return;

    setError(null);

    try {
      // 1. Save content
      setSaving(true);
      const saveRes = await fetch(`/api/projects/${projectId}/content`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brandContent),
      });

      if (!saveRes.ok) {
        throw new Error('Failed to save content');
      }

      setSaving(false);

      // 2. Trigger rebuild
      setRebuilding(true);
      const buildRes = await fetch(`/api/projects/${projectId}/build`, {
        method: 'POST',
      });

      if (!buildRes.ok) {
        throw new Error('Failed to rebuild site');
      }

      // 3. Refresh iframe with cache buster
      setIframeSrc(`${project.built_url}?t=${Date.now()}`);
      setRebuilding(false);
      markClean();
    } catch (err) {
      setSaving(false);
      setRebuilding(false);
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }, [brandContent, projectId, project.built_url, setSaving, setRebuilding, markClean]);

  // -------------------------------------------------------------------------
  // Keyboard shortcuts
  // -------------------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;

      if (mod && e.key === 's') {
        e.preventDefault();
        handleSaveAndRebuild();
      }

      if (mod && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }

      if (mod && e.key === 'z' && e.shiftKey) {
        e.preventDefault();
        redo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSaveAndRebuild, undo, redo]);

  // -------------------------------------------------------------------------
  // Iframe width based on device mode
  // -------------------------------------------------------------------------
  const iframeWidth =
    deviceMode === 'tablet' ? '768px' : deviceMode === 'mobile' ? '375px' : '100%';
  const isResponsive = deviceMode !== 'desktop';

  return (
    <div className="flex h-screen flex-col">
      {/* Toolbar */}
      <ContentEditorToolbar
        projectId={projectId}
        projectName={project.name}
        onSaveAndRebuild={handleSaveAndRebuild}
      />

      {/* Error banner */}
      {error && (
        <div className="border-b bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <ContentSidebar />

        {/* Center: iframe preview */}
        <div className="flex flex-1 items-start justify-center overflow-auto bg-muted/20 p-4">
          <div
            className={cn(
              'h-full transition-all duration-300',
              isResponsive && 'rounded-lg border shadow-lg bg-background'
            )}
            style={{ width: iframeWidth, maxWidth: '100%' }}
          >
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              className="h-full w-full"
              style={{ border: 'none' }}
              title="Site preview"
            />
          </div>
        </div>

        {/* Right: content fields panel */}
        <ContentFields />
      </div>
    </div>
  );
}
