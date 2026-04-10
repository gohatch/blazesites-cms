'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useEditorStore } from '@/lib/editor/store';
import { blockTypeLabels } from '@/lib/editor/blocks';
import { cn } from '@/lib/utils';
import {
  FileText,
  Plus,
  GripVertical,
  Trash2,
  Copy,
  Type,
  Image,
  Layout,
  MessageSquare,
  Mail,
  MousePointer,
  BarChart3,
  Users,
  HelpCircle,
  DollarSign,
  Star,
  Search,
} from 'lucide-react';
import type { BlockType, WebsitePage } from '@/types';

const blockIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  hero: Layout,
  features: Star,
  about: FileText,
  testimonials: MessageSquare,
  contact: Mail,
  cta: MousePointer,
  footer: Layout,
  text: Type,
  image: Image,
  stats: BarChart3,
  team: Users,
  faq: HelpCircle,
  pricing: DollarSign,
  gallery: Image,
};

const addableBlocks: BlockType[] = [
  'hero', 'features', 'about', 'testimonials', 'contact',
  'cta', 'text', 'stats', 'team', 'faq', 'pricing', 'footer',
];

export function EditorSidebar() {
  const {
    pages,
    activePageId,
    setActivePageId,
    getActiveBlocks,
    selectedBlockId,
    setSelectedBlockId,
    addBlock,
    removeBlock,
    moveBlock,
    duplicateBlock,
    seoOpen,
    setSeoOpen,
  } = useEditorStore();

  const blocks = getActiveBlocks();
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragIndexRef = useRef<number | null>(null);

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-background">
      {/* Pages */}
      <div className="border-b p-3">
        <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Pages</h3>
        <div className="space-y-1">
          {pages.map((page: WebsitePage) => (
            <button
              key={page.id}
              onClick={() => setActivePageId(page.id)}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                activePageId === page.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              {page.name}
            </button>
          ))}
        </div>
        {/* SEO Button */}
        <button
          onClick={() => setSeoOpen(!seoOpen)}
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors mt-1',
            seoOpen
              ? 'bg-violet-500/20 text-violet-400'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          )}
        >
          <Search className="h-3.5 w-3.5" />
          Page SEO
          {activePageId && !pages.find(p => p.id === activePageId)?.meta_title && (
            <span className="ml-auto w-2 h-2 rounded-full bg-amber-500" title="SEO not configured" />
          )}
        </button>
      </div>

      {/* Blocks */}
      <div className="flex-1 overflow-y-auto p-3">
        <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Blocks</h3>
        <div className="space-y-1">
          {blocks.map((block, index) => {
            const Icon = blockIcons[block.type] || FileText;
            return (
              <div
                key={block.id}
                draggable
                onDragStart={() => { dragIndexRef.current = index; }}
                onDragOver={(e) => { e.preventDefault(); setDragOverIndex(index); }}
                onDragLeave={() => setDragOverIndex(null)}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragIndexRef.current !== null && dragIndexRef.current !== index) {
                    moveBlock(blocks[dragIndexRef.current].id, index);
                  }
                  dragIndexRef.current = null;
                  setDragOverIndex(null);
                }}
                onDragEnd={() => { dragIndexRef.current = null; setDragOverIndex(null); }}
                onClick={() => setSelectedBlockId(block.id)}
                className={cn(
                  'group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors cursor-pointer',
                  selectedBlockId === block.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  dragOverIndex === index && 'border-t-2 border-primary'
                )}
              >
                <GripVertical className="h-3 w-3 cursor-grab opacity-40 active:cursor-grabbing" />
                <Icon className="h-3.5 w-3.5" />
                <span className="flex-1 truncate">{blockTypeLabels[block.type]}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateBlock(block.id);
                  }}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  title="Duplicate"
                >
                  <Copy className="h-3 w-3" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeBlock(block.id);
                  }}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  title="Delete"
                >
                  <Trash2 className="h-3 w-3 text-destructive" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Block */}
      <div className="border-t p-3">
        <Separator className="mb-3" />
        <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Add Block</h3>
        <div className="grid grid-cols-2 gap-1">
          {addableBlocks.map((type) => {
            const Icon = blockIcons[type] || FileText;
            return (
              <Button
                key={type}
                variant="ghost"
                size="sm"
                className="h-auto flex-col gap-1 py-2 text-xs"
                onClick={() => addBlock(type)}
              >
                <Icon className="h-4 w-4" />
                {blockTypeLabels[type].split(' ')[0]}
              </Button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
