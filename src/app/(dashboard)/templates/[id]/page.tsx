'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BlockRenderer } from '@/components/editor/block-renderer';
import { applyBrandToTemplate } from '@/lib/scraper/apply-brand';
import {
  ArrowLeft,
  Monitor,
  Tablet,
  Smartphone,
  Plus,
  Sparkles,
  Layers,
  Tag,
  FileText,
  Globe,
  Loader2,
  X,
  AlertCircle,
} from 'lucide-react';
import { QuickCreateModal } from '@/components/projects/quick-create-modal';
import type { Template, Block, BrandProfile } from '@/types';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';
type ScanState = 'idle' | 'scanning' | 'error';

const deviceWidths: Record<DeviceMode, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

export default function TemplatePreviewPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [showInfo, setShowInfo] = useState(false);

  // Brand scanning state
  const [scanUrl, setScanUrl] = useState('');
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [scanError, setScanError] = useState('');
  const [brandProfile, setBrandProfile] = useState<BrandProfile | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/templates/${id}`);
        if (res.ok) setTemplate(await res.json());
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  // Compute branded template data when brand profile changes
  const brandedData = useMemo(() => {
    if (!brandProfile || !template?.template_data) return null;
    return applyBrandToTemplate(template.template_data, brandProfile);
  }, [brandProfile, template?.template_data]);

  async function handleScan() {
    if (!scanUrl.trim()) return;
    setScanState('scanning');
    setScanError('');

    try {
      let url = scanUrl.trim();
      if (!url.startsWith('http')) url = 'https://' + url;

      const res = await fetch('/api/scrape-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!data.success) {
        setScanError(data.error || 'Failed to analyze website');
        setScanState('error');
        return;
      }

      setBrandProfile(data.data);
      setScanState('idle');
    } catch {
      setScanError('Failed to connect to the website');
      setScanState('error');
    }
  }

  function clearBrand() {
    setBrandProfile(null);
    setScanUrl('');
    setScanError('');
    setScanState('idle');
  }

  function handleUseTemplate() {
    setCreateModalOpen(true);
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex h-96 flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Template not found</p>
        <Button variant="outline" onClick={() => router.push('/templates')}>
          Back to Templates
        </Button>
      </div>
    );
  }

  const isAstro = template.template_type === 'astro';
  const activeData = brandedData || template.template_data;
  const pages = activeData?.pages || [];
  const currentPage = pages[activePage];
  const blocks = (currentPage?.blocks || []) as Block[];

  // Extract color palette from blocks
  const colorSet = new Set<string>();
  blocks.forEach((b) => {
    if (b.settings?.backgroundColor) colorSet.add(b.settings.backgroundColor);
    if (b.settings?.accentColor) colorSet.add(b.settings.accentColor);
    if (b.settings?.textColor) colorSet.add(b.settings.textColor);
  });
  const palette = Array.from(colorSet).slice(0, 6);

  // Block type summary
  const blockTypes = [...new Set(blocks.map((b) => b.type))];

  return (
    <div className="relative z-10 flex h-[calc(100vh-4rem)] flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 px-6 py-3">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/templates')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold">{template.name}</h1>
              {isAstro && (
                <Badge variant="secondary" className="text-xs">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Premium
                </Badge>
              )}
              {brandProfile && (
                <Badge className="bg-primary/10 text-primary text-xs">
                  Branded
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{template.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Info toggle */}
          <Button
            variant={showInfo ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setShowInfo(!showInfo)}
          >
            <FileText className="mr-1.5 h-3.5 w-3.5" />
            Info
          </Button>

          {/* Device switcher */}
          <div className="flex items-center rounded-xl border border-border/50 bg-muted/50 p-1">
            {([
              { mode: 'desktop' as const, icon: Monitor },
              { mode: 'tablet' as const, icon: Tablet },
              { mode: 'mobile' as const, icon: Smartphone },
            ]).map(({ mode, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setDeviceMode(mode)}
                className={`rounded-lg p-1.5 transition-colors ${
                  deviceMode === mode
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          <Button onClick={handleUseTemplate}>
            <Plus className="mr-2 h-4 w-4" />
            Use Template
          </Button>
        </div>
      </div>

      {/* Brand scanning bar */}
      {!isAstro && (
        <div className="border-b border-border/50 px-6 py-3">
          {brandProfile ? (
            /* Brand active indicator */
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                {brandProfile.businessName || 'Brand applied'}
              </span>
              <div className="flex items-center gap-1.5">
                {brandProfile.colors.primary && (
                  <div
                    className="h-4 w-4 rounded-full border border-border/50"
                    style={{ backgroundColor: brandProfile.colors.primary }}
                    title="Primary"
                  />
                )}
                {brandProfile.colors.secondary && (
                  <div
                    className="h-4 w-4 rounded-full border border-border/50"
                    style={{ backgroundColor: brandProfile.colors.secondary }}
                    title="Secondary"
                  />
                )}
                {brandProfile.colors.accent && (
                  <div
                    className="h-4 w-4 rounded-full border border-border/50"
                    style={{ backgroundColor: brandProfile.colors.accent }}
                    title="Accent"
                  />
                )}
              </div>
              {brandProfile.logoUrl && (
                <img
                  src={brandProfile.logoUrl}
                  alt="Logo"
                  className="h-5 max-w-[80px] object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              )}
              <span className="text-xs text-muted-foreground">
                from {brandProfile.sourceUrl}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearBrand}
                className="ml-auto"
              >
                <X className="mr-1.5 h-3 w-3" />
                Clear
              </Button>
            </div>
          ) : (
            /* URL scan input */
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Preview with client branding:
              </span>
              <div className="flex flex-1 items-center gap-2 max-w-lg">
                <Input
                  placeholder="Enter client website URL..."
                  value={scanUrl}
                  onChange={(e) => { setScanUrl(e.target.value); setScanError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                  disabled={scanState === 'scanning'}
                  className="h-8 text-sm"
                />
                <Button
                  size="sm"
                  onClick={handleScan}
                  disabled={!scanUrl.trim() || scanState === 'scanning'}
                >
                  {scanState === 'scanning' ? (
                    <>
                      <Loader2 className="mr-1.5 h-3 w-3 animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    'Scan'
                  )}
                </Button>
              </div>
              {scanError && (
                <div className="flex items-center gap-1.5 text-xs text-destructive">
                  <AlertCircle className="h-3 w-3" />
                  {scanError}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Page tabs for block templates with multiple pages */}
      {!isAstro && pages.length > 1 && (
        <div className="flex gap-1 border-b border-border/50 bg-muted/30 px-6 py-2">
          {pages.map((page, i) => (
            <button
              key={page.id}
              onClick={() => setActivePage(i)}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activePage === i
                  ? 'bg-background font-medium shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {page.name}
            </button>
          ))}
        </div>
      )}

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Preview area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div
            className="mx-auto min-h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300"
            style={{ maxWidth: deviceWidths[deviceMode] }}
          >
            {isAstro && template.template_dir ? (
              <iframe
                src={`/previews/${template.template_dir}/index.html`}
                className="h-[800px] w-full border-0"
                title={`${template.name} Preview`}
              />
            ) : blocks.length === 0 ? (
              <div className="flex h-96 items-center justify-center text-muted-foreground">
                <p>This page has no blocks.</p>
              </div>
            ) : (
              blocks
                .sort((a, b) => a.order - b.order)
                .map((block) => (
                  <BlockRenderer key={block.id} block={block} />
                ))
            )}
          </div>
        </div>

        {/* Info sidebar */}
        {showInfo && (
          <div className="glass-sidebar w-80 shrink-0 overflow-y-auto border-l border-border/50 p-6 space-y-6">
            {/* Template details */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Template Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground text-xs">Type</dt>
                  <dd className="flex items-center gap-1.5 mt-0.5">
                    {isAstro ? (
                      <>
                        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                        <span>Premium Astro Template</span>
                      </>
                    ) : (
                      <>
                        <Layers className="h-3.5 w-3.5 text-blue-500" />
                        <span>Block-Based Template</span>
                      </>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs">Pages</dt>
                  <dd className="mt-0.5">{template.page_count} pages</dd>
                </div>
                {!isAstro && (
                  <div>
                    <dt className="text-muted-foreground text-xs">Blocks</dt>
                    <dd className="mt-0.5">{blocks.length} blocks on this page</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Brand Profile (when active) */}
            {brandProfile && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-3">
                <h3 className="text-sm font-semibold flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  Applied Branding
                </h3>
                <dl className="space-y-2 text-sm">
                  {brandProfile.businessName && (
                    <div>
                      <dt className="text-muted-foreground text-xs">Business</dt>
                      <dd className="mt-0.5">{brandProfile.businessName}</dd>
                    </div>
                  )}
                  {brandProfile.content.tagline && (
                    <div>
                      <dt className="text-muted-foreground text-xs">Tagline</dt>
                      <dd className="mt-0.5 text-xs">{brandProfile.content.tagline}</dd>
                    </div>
                  )}
                  {brandProfile.contact.email && (
                    <div>
                      <dt className="text-muted-foreground text-xs">Email</dt>
                      <dd className="mt-0.5 text-xs">{brandProfile.contact.email}</dd>
                    </div>
                  )}
                  {brandProfile.contact.phone && (
                    <div>
                      <dt className="text-muted-foreground text-xs">Phone</dt>
                      <dd className="mt-0.5 text-xs">{brandProfile.contact.phone}</dd>
                    </div>
                  )}
                </dl>
                {brandProfile.logoUrl && (
                  <div>
                    <dt className="text-muted-foreground text-xs mb-1">Logo</dt>
                    <img
                      src={brandProfile.logoUrl}
                      alt="Logo"
                      className="h-8 max-w-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Industry Tags */}
            {template.industry_tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5" />
                  Industries
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {template.industry_tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Style Tags */}
            {template.style_tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Style</h3>
                <div className="flex flex-wrap gap-1.5">
                  {template.style_tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Color Palette */}
            {palette.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">
                  {brandProfile ? 'Branded Palette' : 'Color Palette'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {palette.map((color, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className="h-8 w-8 rounded-lg border border-border/50 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] text-muted-foreground font-mono">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Block Types */}
            {!isAstro && blockTypes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Block Types Used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {blockTypes.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs capitalize">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Pages list */}
            {pages.length > 1 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Pages</h3>
                <ul className="space-y-1">
                  {pages.map((page, i) => (
                    <li key={page.id}>
                      <button
                        onClick={() => setActivePage(i)}
                        className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                          activePage === i
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{page.name}</span>
                          <span className="text-[10px]">{page.blocks.length} blocks</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{page.slug}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Use template CTA */}
            <div className="pt-2 border-t border-border/50">
              <Button className="w-full" onClick={handleUseTemplate}>
                <Plus className="mr-2 h-4 w-4" />
                Use This Template
              </Button>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                {brandProfile
                  ? 'Creates a project with this template and applied branding'
                  : "Creates a new project with this template's pages and blocks"}
              </p>
            </div>
          </div>
        )}
      </div>

      {template && (
        <QuickCreateModal
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          templateId={template.id}
          templateName={template.name}
          brandProfile={brandProfile}
        />
      )}
    </div>
  );
}
