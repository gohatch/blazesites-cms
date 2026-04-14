'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, Check, RotateCw } from 'lucide-react';
import type { GeneratableSection } from '@/lib/astro/template-capabilities';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AiSectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: (sectionType: string, data: Record<string, unknown>) => void;
  projectId: string;
}

interface SectionOption {
  value: GeneratableSection;
  label: string;
}

const sectionOptions: SectionOption[] = [
  { value: 'team', label: 'Team' },
  { value: 'faq', label: 'FAQ' },
  { value: 'testimonials', label: 'Testimonials' },
  { value: 'stats', label: 'Stats' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'benefits', label: 'Benefits' },
  { value: 'services', label: 'Services' },
];

// ---------------------------------------------------------------------------
// Helpers for building a readable summary of generated content
// ---------------------------------------------------------------------------

function buildSummary(
  sectionType: string,
  data: Record<string, unknown>
): string[] {
  const lines: string[] = [];

  if (sectionType === 'team' && Array.isArray(data.team)) {
    const names = data.team.map((m: Record<string, string>) => m.name);
    lines.push(`${data.team.length} team members: ${names.join(', ')}`);
  }

  if (sectionType === 'faq' && Array.isArray(data.faq)) {
    lines.push(`${data.faq.length} FAQ items`);
    for (const item of data.faq as Array<{ question: string }>) {
      lines.push(`  - ${item.question}`);
    }
  }

  if (sectionType === 'testimonials' && Array.isArray(data.testimonials)) {
    const names = data.testimonials.map(
      (t: Record<string, string>) => t.name
    );
    lines.push(
      `${data.testimonials.length} testimonials from: ${names.join(', ')}`
    );
  }

  if (sectionType === 'stats' && Array.isArray(data.stats)) {
    lines.push(`${data.stats.length} stats:`);
    for (const s of data.stats as Array<{
      value: string;
      suffix: string;
      label: string;
    }>) {
      lines.push(`  - ${s.value}${s.suffix} ${s.label}`);
    }
  }

  if (sectionType === 'pricing' && Array.isArray(data.pricing)) {
    lines.push(`${data.pricing.length} pricing tiers:`);
    for (const p of data.pricing as Array<{
      name: string;
      price: string;
      period: string;
    }>) {
      lines.push(`  - ${p.name}: $${p.price} ${p.period}`);
    }
  }

  if (sectionType === 'benefits' && Array.isArray(data.benefits)) {
    const titles = data.benefits.map(
      (b: Record<string, string>) => b.title
    );
    lines.push(`${data.benefits.length} benefits: ${titles.join(', ')}`);
  }

  if (sectionType === 'services' && Array.isArray(data.services)) {
    const names = data.services.map(
      (s: Record<string, string>) => s.name
    );
    lines.push(`${data.services.length} services: ${names.join(', ')}`);
  }

  if (lines.length === 0) {
    lines.push('Content generated successfully.');
  }

  return lines;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AiSectionModal({
  open,
  onOpenChange,
  onAccept,
  projectId,
}: AiSectionModalProps) {
  const [sectionType, setSectionType] = useState<GeneratableSection | ''>('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [summary, setSummary] = useState<string[]>([]);

  // Reset state when modal opens/closes
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSectionType('');
      setDescription('');
      setLoading(false);
      setError(null);
      setResult(null);
      setSummary([]);
    }
    onOpenChange(open);
  };

  const handleGenerate = async () => {
    if (!sectionType) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setSummary([]);

    try {
      const res = await fetch(
        `/api/projects/${projectId}/generate-section`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sectionType, description: description || undefined }),
        }
      );

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to generate section');
      }

      setResult(json.data);
      setSummary(buildSummary(sectionType, json.data));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = () => {
    if (!result || !sectionType) return;
    onAccept(sectionType, result);
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Generate Section with AI
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Section type select */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Section type</label>
            <Select
              value={sectionType}
              onValueChange={(val) => {
                setSectionType(val as GeneratableSection);
                setResult(null);
                setSummary([]);
                setError(null);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a section..." />
              </SelectTrigger>
              <SelectContent>
                {sectionOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Optional description */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Describe what you want{' '}
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Focus on residential roofing services..."
              rows={3}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Result summary */}
          {summary.length > 0 && (
            <div className="rounded-md border bg-muted/30 px-3 py-2.5">
              <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">
                Generated
              </p>
              <ul className="space-y-0.5 text-sm">
                {summary.map((line, i) => (
                  <li key={i} className="whitespace-pre-wrap">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DialogFooter>
          {/* Before result: Generate button */}
          {!result && (
            <Button
              onClick={handleGenerate}
              disabled={!sectionType || loading}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  Generate
                </>
              )}
            </Button>
          )}

          {/* After result: Regenerate + Accept */}
          {result && (
            <>
              <Button
                variant="outline"
                onClick={handleGenerate}
                disabled={loading}
                className="gap-2"
              >
                {loading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <RotateCw className="h-3.5 w-3.5" />
                )}
                Regenerate
              </Button>
              <Button onClick={handleAccept} className="gap-2">
                <Check className="h-3.5 w-3.5" />
                Accept
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
