'use client';

import { useEditorStore } from '@/lib/editor/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { blockTypeLabels } from '@/lib/editor/blocks';
import { MediaUploader } from '@/components/ui/media-uploader';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BlockSettings() {
  const { pages, activePageId, selectedBlockId, setSelectedBlockId, updateBlock } =
    useEditorStore();

  const page = pages.find((p) => p.id === activePageId);
  const block = page?.blocks.find((b) => b.id === selectedBlockId);

  if (!block) return null;

  const content = block.content as Record<string, unknown>;

  function handleContentChange(key: string, value: unknown) {
    updateBlock(block!.id, { content: { [key]: value } });
  }

  function handleSettingChange(key: string, value: string) {
    updateBlock(block!.id, { settings: { [key]: value } });
  }

  return (
    <aside className="flex h-full w-72 flex-col border-l bg-background">
      <div className="flex items-center justify-between border-b p-3">
        <h3 className="text-sm font-semibold">{blockTypeLabels[block.type]}</h3>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSelectedBlockId(null)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-3">
        {/* Content fields */}
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Content</h4>
          <div className="space-y-3">
            {typeof content.heading === 'string' && (
              <div>
                <Label className="text-xs">Heading</Label>
                <Input
                  value={content.heading}
                  onChange={(e) => handleContentChange('heading', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.subheading === 'string' && (
              <div>
                <Label className="text-xs">Subheading</Label>
                <Input
                  value={content.subheading}
                  onChange={(e) => handleContentChange('subheading', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.text === 'string' && (
              <div>
                <Label className="text-xs">Text</Label>
                <Textarea
                  value={content.text}
                  onChange={(e) => handleContentChange('text', e.target.value)}
                  rows={4}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.ctaText === 'string' && (
              <div>
                <Label className="text-xs">Button Text</Label>
                <Input
                  value={content.ctaText}
                  onChange={(e) => handleContentChange('ctaText', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.ctaLink === 'string' && (
              <div>
                <Label className="text-xs">Button Link</Label>
                <Input
                  value={content.ctaLink}
                  onChange={(e) => handleContentChange('ctaLink', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.companyName === 'string' && (
              <div>
                <Label className="text-xs">Company Name</Label>
                <Input
                  value={content.companyName}
                  onChange={(e) => handleContentChange('companyName', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.email === 'string' && (
              <div>
                <Label className="text-xs">Email</Label>
                <Input
                  value={content.email}
                  onChange={(e) => handleContentChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.phone === 'string' && (
              <div>
                <Label className="text-xs">Phone</Label>
                <Input
                  value={content.phone}
                  onChange={(e) => handleContentChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            {typeof content.image === 'string' && (
              <div>
                <Label className="text-xs">Image</Label>
                <div className="mt-1">
                  <MediaUploader
                    value={content.image as string}
                    onChange={(url) => handleContentChange('image', url)}
                    compact
                  />
                </div>
              </div>
            )}
            {typeof content.src === 'string' && (
              <div>
                <Label className="text-xs">Image</Label>
                <div className="mt-1">
                  <MediaUploader
                    value={content.src as string}
                    onChange={(url) => handleContentChange('src', url)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Style settings */}
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Style</h4>
          <div className="space-y-3">
            <div>
              <Label className="text-xs">Background Color</Label>
              <div className="mt-1 flex gap-2">
                <input
                  type="color"
                  value={block.settings.backgroundColor || '#ffffff'}
                  onChange={(e) => handleSettingChange('backgroundColor', e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded border"
                />
                <Input
                  value={block.settings.backgroundColor || ''}
                  onChange={(e) => handleSettingChange('backgroundColor', e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Text Color</Label>
              <div className="mt-1 flex gap-2">
                <input
                  type="color"
                  value={block.settings.textColor || '#000000'}
                  onChange={(e) => handleSettingChange('textColor', e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded border"
                />
                <Input
                  value={block.settings.textColor || ''}
                  onChange={(e) => handleSettingChange('textColor', e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Padding</Label>
              <Input
                value={block.settings.padding || ''}
                onChange={(e) => handleSettingChange('padding', e.target.value)}
                placeholder="e.g. 80px 0"
                className="mt-1"
              />
            </div>
            {(block.type === 'hero' || block.type === 'cta') && (
              <div>
                <Label className="text-xs">Background Image</Label>
                <div className="mt-1">
                  <MediaUploader
                    value={block.settings.backgroundImage || ''}
                    onChange={(url) => handleSettingChange('backgroundImage', url)}
                    compact
                    label="Upload bg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
