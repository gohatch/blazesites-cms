'use client';

import { useState } from 'react';
import { useEditorStore } from '@/lib/editor/store';
import { BlockRenderer } from './block-renderer';
import { cn } from '@/lib/utils';
import { Eye, Pencil, ExternalLink } from 'lucide-react';

const deviceWidths = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

interface EditorCanvasProps {
  builtUrl?: string | null;
}

export function EditorCanvas({ builtUrl }: EditorCanvasProps) {
  const { getActiveBlocks, deviceMode, selectedBlockId, setSelectedBlockId } = useEditorStore();
  const blocks = getActiveBlocks();
  const [viewMode, setViewMode] = useState<'preview' | 'edit'>(builtUrl ? 'preview' : 'edit');

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-muted/60">
      {/* View mode toggle — only show for Astro templates */}
      {builtUrl && (
        <div className="flex items-center justify-center gap-1 px-4 py-2 border-b bg-background/80 backdrop-blur-sm">
          <div className="flex items-center bg-muted rounded-lg p-0.5">
            <button
              onClick={() => setViewMode('preview')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
                viewMode === 'preview'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              Preview
            </button>
            <button
              onClick={() => setViewMode('edit')}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
                viewMode === 'edit'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit Blocks
            </button>
          </div>
          {viewMode === 'preview' && (
            <a
              href={builtUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Open
            </a>
          )}
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-6">
        {viewMode === 'preview' && builtUrl ? (
          /* Astro template preview */
          <div
            className="mx-auto h-full min-h-[600px] bg-white shadow-lg transition-all overflow-hidden rounded-lg"
            style={{ maxWidth: deviceWidths[deviceMode] }}
          >
            <iframe
              src={builtUrl}
              className="w-full h-full min-h-[600px] border-0"
              style={{ height: 'calc(100vh - 140px)' }}
              title="Template preview"
            />
          </div>
        ) : (
          /* Block editor */
          <div
            className="mx-auto min-h-full bg-white shadow-lg transition-all"
            style={{ maxWidth: deviceWidths[deviceMode] }}
          >
            {blocks.length === 0 ? (
              <div className="flex h-96 items-center justify-center text-muted-foreground">
                <p>No blocks yet. Add one from the sidebar.</p>
              </div>
            ) : (
              blocks
                .sort((a, b) => a.order - b.order)
                .map((block) => (
                  <div
                    key={block.id}
                    onClick={() => setSelectedBlockId(block.id)}
                    className={cn(
                      'relative cursor-pointer transition-all',
                      selectedBlockId === block.id && 'ring-2 ring-primary ring-offset-2'
                    )}
                  >
                    <BlockRenderer block={block} />
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
