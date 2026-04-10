'use client';

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
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Section definitions grouped by category
// ---------------------------------------------------------------------------

interface SectionItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SectionGroup {
  label: string;
  items: SectionItem[];
}

const sectionGroups: SectionGroup[] = [
  {
    label: 'Brand & Style',
    items: [
      { id: 'brand', label: 'Brand', icon: Briefcase },
      { id: 'colors', label: 'Colors', icon: Palette },
      { id: 'fonts', label: 'Fonts', icon: Type },
    ],
  },
  {
    label: 'Page Sections',
    items: [
      { id: 'navigation', label: 'Navigation', icon: Navigation },
      { id: 'hero', label: 'Hero', icon: LayoutTemplate },
      { id: 'about', label: 'About', icon: Users },
      { id: 'stats', label: 'Stats', icon: BarChart3 },
      { id: 'services', label: 'Services', icon: Wrench },
      { id: 'benefits', label: 'Benefits', icon: Gift },
      { id: 'pricing', label: 'Pricing', icon: DollarSign },
      { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
      { id: 'cta', label: 'Call to Action', icon: MousePointer },
      { id: 'contact', label: 'Contact', icon: Mail },
      { id: 'footer', label: 'Footer', icon: PanelBottom },
    ],
  },
  {
    label: 'SEO',
    items: [
      { id: 'seo', label: 'SEO', icon: Search },
    ],
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ContentSidebar() {
  const { activeSection, setActiveSection } = useContentEditorStore();

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-muted/30">
      {/* Header */}
      <div className="border-b px-4 py-3">
        <h2 className="text-sm font-semibold">Content</h2>
      </div>

      {/* Section groups */}
      <div className="flex-1 overflow-y-auto p-3">
        {sectionGroups.map((group) => (
          <div key={group.label} className="mb-4">
            <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
              {group.label}
            </h3>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Add with AI button */}
      <div className="border-t p-3">
        <Button variant="outline" className="w-full gap-2" size="sm">
          <Sparkles className="h-3.5 w-3.5" />
          Add with AI
        </Button>
      </div>
    </aside>
  );
}
