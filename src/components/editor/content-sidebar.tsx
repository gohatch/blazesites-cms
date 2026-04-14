'use client';

import { useState, useRef } from 'react';
import { useContentEditorStore } from '@/lib/editor/content-store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Briefcase,
  Palette,
  Type,
  Navigation,
  LayoutTemplate,
  Users,
  BarChart3,
  Wrench,
  Gift,
  DollarSign,
  MessageSquare,
  MousePointer,
  Mail,
  PanelBottom,
  Search,
  Sparkles,
  GripVertical,
} from 'lucide-react';
import { AiSectionModal } from '@/components/editor/ai-section-modal';

// ---------------------------------------------------------------------------
// Section icon map
// ---------------------------------------------------------------------------

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  brand: Briefcase,
  colors: Palette,
  fonts: Type,
  navigation: Navigation,
  hero: LayoutTemplate,
  about: Users,
  stats: BarChart3,
  services: Wrench,
  benefits: Gift,
  pricing: DollarSign,
  testimonials: MessageSquare,
  cta: MousePointer,
  contact: Mail,
  footer: PanelBottom,
  seo: Search,
  // Template-specific sections get a default icon
  classes: Wrench,
  programs: Wrench,
  gallery: LayoutTemplate,
  team: Users,
  faq: MessageSquare,
  projects: LayoutTemplate,
};

const sectionLabels: Record<string, string> = {
  brand: 'Brand',
  colors: 'Colors',
  fonts: 'Fonts',
  navigation: 'Navigation',
  hero: 'Hero',
  about: 'About',
  stats: 'Stats',
  services: 'Services',
  benefits: 'Benefits',
  pricing: 'Pricing',
  testimonials: 'Testimonials',
  cta: 'Call to Action',
  contact: 'Contact',
  footer: 'Footer',
  seo: 'SEO',
  classes: 'Classes',
  programs: 'Programs',
  gallery: 'Gallery',
  team: 'Team',
  faq: 'FAQ',
  projects: 'Projects',
};

// Non-reorderable sections (always in fixed positions)
const brandStyleSections = ['brand', 'colors', 'fonts'];
const fixedSections = ['navigation', 'seo'];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface ContentSidebarProps {
  projectId: string;
}

export function ContentSidebar({ projectId }: ContentSidebarProps) {
  const { activeSection, setActiveSection, brandContent, updateField } = useContentEditorStore();
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragCounter = useRef(0);

  // Get current section order from brand content
  const sectionOrder = brandContent?.sectionOrder || ['hero', 'about', 'features', 'stats', 'testimonials', 'cta'];

  const handleAiAccept = (sectionType: string, data: Record<string, unknown>) => {
    const sectionData = data[sectionType];
    if (sectionData !== undefined) {
      updateField(sectionType, sectionData);
    }
  };

  // Drag handlers for reordering
  function handleDragStart(index: number) {
    setDragIndex(index);
  }

  function handleDragEnter(index: number) {
    dragCounter.current++;
    setDragOverIndex(index);
  }

  function handleDragLeave() {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDragOverIndex(null);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleDrop(dropIndex: number) {
    if (dragIndex === null || dragIndex === dropIndex) {
      setDragIndex(null);
      setDragOverIndex(null);
      dragCounter.current = 0;
      return;
    }

    const newOrder = [...sectionOrder];
    const [moved] = newOrder.splice(dragIndex, 1);
    newOrder.splice(dropIndex, 0, moved);
    updateField('sectionOrder', newOrder);

    setDragIndex(null);
    setDragOverIndex(null);
    dragCounter.current = 0;
  }

  function handleDragEnd() {
    setDragIndex(null);
    setDragOverIndex(null);
    dragCounter.current = 0;
  }

  function renderSectionButton(id: string, draggable: boolean = false, dragIdx?: number) {
    const Icon = sectionIcons[id] || LayoutTemplate;
    const label = sectionLabels[id] || id.charAt(0).toUpperCase() + id.slice(1);
    const isActive = activeSection === id;
    const isDragging = draggable && dragIndex === dragIdx;
    const isDragOver = draggable && dragOverIndex === dragIdx;

    return (
      <button
        key={id}
        draggable={draggable}
        onDragStart={draggable ? () => handleDragStart(dragIdx!) : undefined}
        onDragEnter={draggable ? () => handleDragEnter(dragIdx!) : undefined}
        onDragLeave={draggable ? handleDragLeave : undefined}
        onDragOver={draggable ? handleDragOver : undefined}
        onDrop={draggable ? () => handleDrop(dragIdx!) : undefined}
        onDragEnd={draggable ? handleDragEnd : undefined}
        onClick={() => setActiveSection(id)}
        className={cn(
          'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
          isActive
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          isDragging && 'opacity-40',
          isDragOver && 'border-t-2 border-primary',
        )}
      >
        {draggable && (
          <GripVertical className="h-3 w-3 cursor-grab text-muted-foreground/50 active:cursor-grabbing" />
        )}
        <Icon className="h-3.5 w-3.5" />
        {label}
      </button>
    );
  }

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-muted/30">
      {/* Header */}
      <div className="border-b px-4 py-3">
        <h2 className="text-sm font-semibold">Content</h2>
      </div>

      {/* Section groups */}
      <div className="flex-1 overflow-y-auto p-3">
        {/* Brand & Style (not reorderable) */}
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
            Brand &amp; Style
          </h3>
          <div className="space-y-0.5">
            {brandStyleSections.map((id) => renderSectionButton(id))}
          </div>
        </div>

        {/* Page Sections (draggable, ordered by sectionOrder) */}
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
            Page Sections
            <span className="ml-1 text-[10px] font-normal normal-case text-muted-foreground/60">
              (drag to reorder)
            </span>
          </h3>
          <div className="space-y-0.5">
            {sectionOrder.map((id, i) => renderSectionButton(id, true, i))}
          </div>
        </div>

        {/* Fixed sections */}
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
            Other
          </h3>
          <div className="space-y-0.5">
            {fixedSections.map((id) => renderSectionButton(id))}
          </div>
        </div>
      </div>

      {/* Add with AI button */}
      <div className="border-t p-3">
        <Button
          variant="outline"
          className="w-full gap-2"
          size="sm"
          onClick={() => setAiModalOpen(true)}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Add with AI
        </Button>
      </div>

      {/* AI Section Modal */}
      <AiSectionModal
        open={aiModalOpen}
        onOpenChange={setAiModalOpen}
        onAccept={handleAiAccept}
        projectId={projectId}
      />
    </aside>
  );
}
