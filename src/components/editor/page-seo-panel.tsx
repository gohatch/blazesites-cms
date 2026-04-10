'use client';

import { useState } from 'react';
import { useEditorStore } from '@/lib/editor/store';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X, Sparkles, Loader2, Globe, ExternalLink } from 'lucide-react';

export function PageSeoPanel() {
  const page = useEditorStore((s) => s.getActivePage());
  const updatePageMeta = useEditorStore((s) => s.updatePageMeta);
  const setSeoOpen = useEditorStore((s) => s.setSeoOpen);
  const blocks = useEditorStore((s) => s.getActiveBlocks());

  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState('');

  if (!page) return null;

  const titleLen = (page.meta_title || '').length;
  const descLen = (page.meta_description || '').length;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenError('');
    try {
      const res = await fetch('/api/seo/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks,
          pageName: page.name,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setGenError(json.error || 'Failed to generate SEO');
        return;
      }
      updatePageMeta(page.id, {
        meta_title: json.data.title,
        meta_description: json.data.description,
      });
    } catch {
      setGenError('Network error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Google SERP preview
  const previewTitle = page.meta_title || page.name || 'Page Title';
  const previewDesc = page.meta_description || 'No description set — add a meta description to improve click-through rates.';
  const previewUrl = `yourdomain.com/${page.slug === 'home' ? '' : page.slug}`;

  return (
    <div className="w-80 bg-zinc-900 border-l border-zinc-800 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <h3 className="text-sm font-semibold text-white">Page SEO</h3>
        <button onClick={() => setSeoOpen(false)} className="text-zinc-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-5">
        {/* AI Generate button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          variant="outline"
          size="sm"
          className="w-full gap-2 border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
        >
          {isGenerating ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Sparkles className="w-3.5 h-3.5" />
          )}
          {isGenerating ? 'Generating...' : 'Generate SEO with AI'}
        </Button>
        {genError && <p className="text-xs text-red-400">{genError}</p>}

        {/* Google Preview */}
        <div>
          <Label className="text-xs text-zinc-500 uppercase tracking-wide">Google Preview</Label>
          <div className="mt-2 p-3 bg-white rounded-lg">
            <p className="text-sm text-[#1a0dab] font-medium leading-snug truncate">
              {previewTitle}
            </p>
            <p className="text-xs text-[#006621] mt-0.5 truncate flex items-center gap-1">
              <Globe className="w-3 h-3" />
              {previewUrl}
            </p>
            <p className="text-xs text-[#545454] mt-1 leading-relaxed line-clamp-2">
              {previewDesc}
            </p>
          </div>
        </div>

        {/* Title */}
        <div>
          <div className="flex items-center justify-between">
            <Label className="text-xs text-zinc-400">Title Tag</Label>
            <span className={`text-[10px] ${titleLen > 60 ? 'text-red-400' : titleLen > 50 ? 'text-amber-400' : 'text-zinc-500'}`}>
              {titleLen}/60
            </span>
          </div>
          <Input
            value={page.meta_title || ''}
            onChange={(e) => updatePageMeta(page.id, { meta_title: e.target.value })}
            placeholder="SEO page title..."
            className="mt-1 bg-zinc-800 border-zinc-700 text-white text-sm"
          />
          {titleLen > 60 && (
            <p className="text-[10px] text-red-400 mt-1">Title may be truncated in search results</p>
          )}
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center justify-between">
            <Label className="text-xs text-zinc-400">Meta Description</Label>
            <span className={`text-[10px] ${descLen > 155 ? 'text-red-400' : descLen > 140 ? 'text-amber-400' : 'text-zinc-500'}`}>
              {descLen}/155
            </span>
          </div>
          <Textarea
            value={page.meta_description || ''}
            onChange={(e) => updatePageMeta(page.id, { meta_description: e.target.value })}
            placeholder="Brief description for search engines..."
            className="mt-1 bg-zinc-800 border-zinc-700 text-white text-sm min-h-[80px]"
          />
          {descLen > 155 && (
            <p className="text-[10px] text-red-400 mt-1">Description may be truncated in search results</p>
          )}
        </div>

        {/* Slug */}
        <div>
          <Label className="text-xs text-zinc-400">URL Slug</Label>
          <div className="relative mt-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-500">/</span>
            <Input
              value={page.slug || ''}
              onChange={(e) =>
                updatePageMeta(page.id, {
                  slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
                })
              }
              className="pl-6 bg-zinc-800 border-zinc-700 text-white text-sm"
            />
          </div>
        </div>

        {/* OG Image */}
        <div>
          <Label className="text-xs text-zinc-400">Social Share Image (OG Image)</Label>
          <Input
            value={page.og_image || ''}
            onChange={(e) => updatePageMeta(page.id, { og_image: e.target.value })}
            placeholder="https://..."
            className="mt-1 bg-zinc-800 border-zinc-700 text-white text-sm"
          />
          {page.og_image && (
            <img
              src={page.og_image}
              alt="OG preview"
              className="mt-2 w-full h-32 object-cover rounded border border-zinc-700"
            />
          )}
        </div>

        {/* Tips */}
        <div className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            <strong className="text-zinc-300">SEO Tips:</strong> Keep titles under 60 characters and descriptions under 155. Include your primary keyword and location. Make descriptions compelling to improve click-through rates.
          </p>
        </div>
      </div>
    </div>
  );
}
