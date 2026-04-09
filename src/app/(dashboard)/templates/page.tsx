'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TemplateCard } from '@/components/templates/template-card';
import { QuickCreateModal } from '@/components/projects/quick-create-modal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, LayoutGrid, List, SlidersHorizontal, X, Sparkles } from 'lucide-react';
import type { Template } from '@/types';

type SortOption = 'name' | 'pages' | 'newest';
type ViewMode = 'grid' | 'list';

export default function TemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<'all' | 'block' | 'astro'>('all');
  const [sort, setSort] = useState<SortOption>('name');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [selectedTemplateName, setSelectedTemplateName] = useState('');

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates?limit=100');
        if (res.ok) {
          const json = await res.json();
          setTemplates(json.data || json);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  const industryTags = useMemo(() => {
    const tags = new Set<string>();
    templates.forEach((t) => t.industry_tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [templates]);

  const counts = useMemo(() => ({
    all: templates.length,
    block: templates.filter((t) => t.template_type !== 'astro').length,
    astro: templates.filter((t) => t.template_type === 'astro').length,
  }), [templates]);

  const filtered = useMemo(() => {
    let result = templates;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.industry_tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (activeIndustry) {
      result = result.filter((t) =>
        t.industry_tags.some((tag) => tag.toLowerCase() === activeIndustry.toLowerCase())
      );
    }

    if (activeType !== 'all') {
      result = result.filter((t) =>
        activeType === 'astro' ? t.template_type === 'astro' : t.template_type !== 'astro'
      );
    }

    switch (sort) {
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'pages':
        result = [...result].sort((a, b) => b.page_count - a.page_count);
        break;
      case 'newest':
        result = [...result].sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        break;
    }

    return result;
  }, [templates, search, activeIndustry, activeType, sort]);

  const hasFilters = search || activeIndustry || activeType !== 'all';

  function clearFilters() {
    setSearch('');
    setActiveIndustry(null);
    setActiveType('all');
  }

  return (
    <div className="relative z-10 space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Template Library</h1>
          <p className="text-muted-foreground">
            {counts.all} templates &middot; {counts.astro} premium Astro &middot;{' '}
            {counts.block} block-based
          </p>
        </div>
      </div>

      {/* Type tabs */}
      <div className="flex items-center gap-6 border-b">
        {([
          { key: 'all' as const, label: 'All Templates', count: counts.all },
          { key: 'block' as const, label: 'Block-Based', count: counts.block },
          { key: 'astro' as const, label: 'Premium Astro', count: counts.astro },
        ]).map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setActiveType(key)}
            className={`flex items-center gap-2 border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
              activeType === key
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {key === 'astro' && <Sparkles className="h-3.5 w-3.5" />}
            {label}
            <Badge
              variant="secondary"
              className={`text-[10px] ${activeType === key ? 'bg-primary/10 text-primary' : ''}`}
            >
              {count}
            </Badge>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <Select
          value={activeIndustry || 'all'}
          onValueChange={(v) => setActiveIndustry(v === 'all' ? null : v)}
        >
          <SelectTrigger className="w-[180px]">
            <SlidersHorizontal className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            {industryTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name A-Z</SelectItem>
            <SelectItem value="pages">Most Pages</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center rounded-lg border bg-muted/50 p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`rounded-md p-1.5 transition-colors ${
              viewMode === 'grid'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`rounded-md p-1.5 transition-colors ${
              viewMode === 'list'
                ? 'bg-background shadow-sm text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Active filter badges */}
      {hasFilters && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Filters:</span>
          {activeIndustry && (
            <Badge variant="secondary" className="gap-1">
              {activeIndustry}
              <button onClick={() => setActiveIndustry(null)}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {search && (
            <Badge variant="secondary" className="gap-1">
              &ldquo;{search}&rdquo;
              <button onClick={() => setSearch('')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={clearFilters}>
            Clear all
          </Button>
          <span className="ml-auto text-xs text-muted-foreground">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Template grid/list */}
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-72 animate-pulse rounded-2xl bg-muted/50" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed">
          <p className="text-muted-foreground">
            {hasFilters ? 'No templates match your filters' : 'No templates available'}
          </p>
          {hasFilters && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={() => router.push(`/templates/${template.id}`)}
              onUse={(id) => {
                setSelectedTemplateId(id);
                setSelectedTemplateName(template.name);
                setCreateModalOpen(true);
              }}
              previewLink={`/templates/${template.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((template) => (
            <TemplateListItem
              key={template.id}
              template={template}
              onClick={() => router.push(`/templates/${template.id}`)}
            />
          ))}
        </div>
      )}

      <QuickCreateModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        templateId={selectedTemplateId}
        templateName={selectedTemplateName}
      />
    </div>
  );
}

function TemplateListItem({
  template,
  onClick,
}: {
  template: Template;
  onClick: () => void;
}) {
  const isAstro = template.template_type === 'astro';
  const homePage = template.template_data?.pages?.find((p) => p.slug === '/');
  const firstBlock = homePage?.blocks?.[0];
  const bgColor = firstBlock?.settings?.backgroundColor || '#f8fafc';

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-lg border bg-card p-4 text-left transition-all hover:shadow-md"
    >
      <div
        className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-md"
        style={{ backgroundColor: bgColor }}
      >
        {isAstro && (
          <span className="text-[10px] font-bold text-white/80">ASTRO</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium truncate">{template.name}</p>
          {isAstro && (
            <Badge variant="secondary" className="text-[10px] shrink-0">
              <Sparkles className="mr-0.5 h-2.5 w-2.5" />
              Premium
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1">{template.description}</p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden md:flex flex-wrap gap-1">
          {template.industry_tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {template.page_count} pages
        </span>
      </div>
    </button>
  );
}
