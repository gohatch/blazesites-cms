'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, FileText, Sparkles, Layers, Rocket } from 'lucide-react';
import { BlockRenderer } from '@/components/editor/block-renderer';
import type { Template, Block } from '@/types';

interface TemplateCardProps {
  template: Template;
  onClick?: () => void;
  onUse?: (templateId: string) => void;
  selected?: boolean;
  previewLink?: string;
}

export function TemplateCard({ template, onClick, onUse, selected, previewLink }: TemplateCardProps) {
  const isAstro = template.template_type === 'astro';
  const homePage = template.template_data?.pages?.find((p) => p.slug === '/');
  const blocks = (homePage?.blocks || []) as Block[];

  // Extract accent / primary color from first hero block or settings
  const heroBlock = blocks.find((b) => b.type === 'hero');
  const accentColor =
    heroBlock?.settings?.accentColor ||
    heroBlock?.settings?.backgroundColor ||
    '#3b82f6';
  const heroBg = heroBlock?.settings?.backgroundColor || '#1a1a2e';

  // For Astro templates, extract brand colors
  const brand = isAstro
    ? ((template.template_data as unknown as Record<string, unknown>)?.brand as Record<string, unknown> | undefined)
    : undefined;
  const colors = brand?.colors as Record<string, string> | undefined;
  const primaryColor = colors?.primary || heroBg;
  const astroAccent = colors?.accent || accentColor;

  return (
    <Card
      className={`group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 ${
        selected ? 'ring-2 ring-primary shadow-lg' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader className="relative p-0">
        <div className="relative h-52 overflow-hidden bg-muted">
          {isAstro ? (
            <div className="relative flex h-full flex-col" style={{ backgroundColor: primaryColor }}>
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(${astroAccent} 1px, transparent 1px), linear-gradient(90deg, ${astroAccent} 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              {/* Mock browser chrome */}
              <div className="relative flex items-center gap-1.5 bg-black/20 px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="mx-2 flex-1 rounded-sm bg-white/10 px-2 py-0.5 text-[8px] text-white/40">
                  {(brand?.businessName as string)?.toLowerCase().replace(/\s+/g, '') || template.name.toLowerCase().replace(/\s+/g, '')}.com
                </div>
              </div>
              {/* Content preview */}
              <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-6">
                <div
                  className="h-8 w-8 rounded-lg"
                  style={{ backgroundColor: astroAccent }}
                />
                <p className="text-center text-lg font-bold text-white leading-tight">
                  {(brand?.businessName as string) || template.name}
                </p>
                <p className="text-center text-[11px] text-white/50 max-w-[80%] line-clamp-2">
                  {(brand?.tagline as string)?.slice(0, 60) || template.description?.slice(0, 60)}
                </p>
                <div
                  className="mt-1 rounded-full px-4 py-1 text-[10px] font-medium text-white"
                  style={{ backgroundColor: astroAccent }}
                >
                  Get Started
                </div>
              </div>
              {/* Astro badge */}
              <div className="absolute right-3 top-10 flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-2.5 w-2.5" />
                Premium
              </div>
            </div>
          ) : blocks.length > 0 ? (
            <div className="relative h-full">
              {/* Scaled block preview */}
              <div
                className="pointer-events-none origin-top-left"
                style={{
                  width: '1280px',
                  transform: 'scale(0.234375)',
                  transformOrigin: 'top left',
                }}
              >
                {blocks
                  .sort((a, b) => a.order - b.order)
                  .slice(0, 5)
                  .map((block) => (
                    <BlockRenderer key={block.id} block={block} />
                  ))}
              </div>
              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted to-transparent" />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <FileText className="h-12 w-12 text-muted-foreground/30" />
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
            {previewLink && (
              <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg">
                <Eye className="h-4 w-4" />
                Preview
              </span>
            )}
            {onUse && (
              <button
                onClick={(e) => { e.stopPropagation(); onUse(template.id); }}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              >
                <Rocket className="h-4 w-4" />
                Use
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5 p-4">
        <div className="flex items-center gap-2">
          <CardTitle className="text-base truncate">{template.name}</CardTitle>
          {isAstro && (
            <Badge variant="secondary" className="text-[10px] shrink-0">
              <Sparkles className="mr-0.5 h-2.5 w-2.5" />
              Astro
            </Badge>
          )}
        </div>
        <CardDescription className="line-clamp-2 text-xs">
          {template.description}
        </CardDescription>
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-1">
            {template.industry_tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px]">
                {tag}
              </Badge>
            ))}
            {template.industry_tags.length > 2 && (
              <Badge variant="outline" className="text-[10px]">
                +{template.industry_tags.length - 2}
              </Badge>
            )}
          </div>
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Layers className="h-3 w-3" />
            {template.page_count}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
