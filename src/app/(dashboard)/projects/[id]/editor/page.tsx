'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import { useEditorStore } from '@/lib/editor/store';
import { EditorToolbar } from '@/components/editor/editor-toolbar';
import { EditorSidebar } from '@/components/editor/editor-sidebar';
import { EditorCanvas } from '@/components/editor/editor-canvas';
import { BlockSettings } from '@/components/editor/block-settings';
import { PageSeoPanel } from '@/components/editor/page-seo-panel';
import type { WebsitePage } from '@/types';

export default function EditorPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [projectName, setProjectName] = useState('');
  const [builtUrl, setBuiltUrl] = useState<string | null>(null);
  const [projectStatus, setProjectStatus] = useState('draft');
  const [loading, setLoading] = useState(true);

  const { setPages, pages, activePageId, selectedBlockId, seoOpen, setIsSaving, markClean, undo, redo } =
    useEditorStore();

  // Fetch project and pages
  useEffect(() => {
    async function load() {
      try {
        const [projectRes, pagesRes] = await Promise.all([
          fetch(`/api/projects/${projectId}`),
          fetch(`/api/projects/${projectId}/pages`),
        ]);

        if (projectRes.ok) {
          const project = await projectRes.json();
          setProjectName(project.name);
          if (project.built_url) setBuiltUrl(project.built_url);
          if (project.status) setProjectStatus(project.status);
        }

        if (pagesRes.ok) {
          const pagesData: WebsitePage[] = await pagesRes.json();
          setPages(pagesData);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [projectId, setPages]);

  async function handleSave() {
    setIsSaving(true);
    try {
      const activePage = pages.find((p) => p.id === activePageId);
      if (!activePage) return;

      await fetch(`/api/projects/${projectId}/pages/${activePage.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: activePage.blocks,
          meta_title: activePage.meta_title,
          meta_description: activePage.meta_description,
          og_image: activePage.og_image,
        }),
      });

      markClean();
    } finally {
      setIsSaving(false);
    }
  }

  // Keyboard shortcuts
  const handleSaveRef = useCallback(() => handleSave(), []);
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleSaveRef();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSaveRef, undo, redo]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col">
      <EditorToolbar projectId={projectId} projectName={projectName} projectStatus={projectStatus} builtUrl={builtUrl} onSave={handleSave} />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        <EditorCanvas builtUrl={builtUrl} />
        {seoOpen && <PageSeoPanel />}
        {!seoOpen && selectedBlockId && <BlockSettings />}
      </div>
    </div>
  );
}
