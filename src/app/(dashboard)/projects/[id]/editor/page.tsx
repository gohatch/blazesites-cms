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
import { ContentEditor } from '@/components/editor/content-editor';
import type { WebsitePage, AstroBrandContent } from '@/types';

export default function EditorPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);

  const { setPages, pages, activePageId, selectedBlockId, seoOpen, setIsSaving, markClean, undo, redo } =
    useEditorStore();

  // Fetch project
  useEffect(() => {
    async function load() {
      try {
        const projectRes = await fetch(`/api/projects/${projectId}`);
        if (projectRes.ok) {
          const proj = await projectRes.json();
          setProject(proj);

          // For block-based projects, also fetch pages
          const isAstro = proj.template?.template_type === 'astro' && proj.built_url;
          if (!isAstro) {
            const pagesRes = await fetch(`/api/projects/${projectId}/pages`);
            if (pagesRes.ok) {
              const pagesData: WebsitePage[] = await pagesRes.json();
              setPages(pagesData);
            }
          }
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [projectId, setPages]);

  // Block editor save handler
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

  // Block editor keyboard shortcuts
  const handleSaveRef = useCallback(() => handleSave(), []);
  useEffect(() => {
    // Only register block editor shortcuts if not Astro (content editor has its own)
    const isAstro = project?.template && (project.template as Record<string, unknown>).template_type === 'astro' && project.built_url;
    if (isAstro) return;

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
  }, [handleSaveRef, undo, redo, project]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Project not found</div>
      </div>
    );
  }

  // Route to content editor for Astro template projects
  const isAstro = project.template && (project.template as Record<string, unknown>).template_type === 'astro' && project.built_url;

  if (isAstro) {
    return (
      <ContentEditor
        projectId={projectId}
        project={{
          id: project.id as string,
          name: project.name as string,
          built_url: project.built_url as string,
          brand_profile: project.brand_profile as AstroBrandContent,
          template_id: project.template_id as string,
          subdomain: project.subdomain as string,
          custom_domain: project.custom_domain as string | undefined,
          dns_verified: project.dns_verified as boolean | undefined,
        }}
      />
    );
  }

  // Block editor for non-Astro projects
  return (
    <div className="flex h-screen flex-col">
      <EditorToolbar
        projectId={projectId}
        projectName={project.name as string}
        projectStatus={project.status as string}
        builtUrl={project.built_url as string | null}
        onSave={handleSave}
      />
      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar />
        <EditorCanvas builtUrl={project.built_url as string | null} />
        {seoOpen && <PageSeoPanel />}
        {!seoOpen && selectedBlockId && <BlockSettings />}
      </div>
    </div>
  );
}
