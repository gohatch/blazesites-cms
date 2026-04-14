'use client';

import { useState, useMemo, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useContentEditorStore } from '@/lib/editor/content-store';
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
  Loader2,
} from 'lucide-react';
import type { AstroBrandContent } from '@/types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CheckStatus = 'good' | 'warn' | 'bad';

interface SeoCheck {
  name: string;
  status: CheckStatus;
  value: string;
  fixFieldPath?: string;
  fixInstruction?: string;
  fixType?: 'rewrite' | 'seo-generate';
}

interface SeoScoreResult {
  score: number;
  maxScore: number;
  grade: string;
  gradeColor: string;
  checks: SeoCheck[];
}

export interface SeoScorecardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string;
}

// ---------------------------------------------------------------------------
// Score calculation (exported for toolbar reuse)
// ---------------------------------------------------------------------------

export function calculateSeoScore(
  brandContent: AstroBrandContent | null,
): SeoScoreResult {
  if (!brandContent) {
    return {
      score: 0,
      maxScore: 20,
      grade: 'F',
      gradeColor: 'text-red-500',
      checks: [],
    };
  }

  const checks: SeoCheck[] = [];

  // 1. Title length
  const title = brandContent.seo?.homepage?.title ?? '';
  const titleLen = title.length;
  let titleStatus: CheckStatus = 'bad';
  if (titleLen >= 50 && titleLen <= 60) titleStatus = 'good';
  else if ((titleLen >= 30 && titleLen < 50) || (titleLen > 60 && titleLen <= 70))
    titleStatus = 'warn';
  checks.push({
    name: 'Title length',
    status: titleStatus,
    value: titleLen > 0 ? `${titleLen} chars` : 'empty',
    fixFieldPath: 'seo.homepage.title',
    fixInstruction:
      'Write an SEO-optimized title under 60 characters including the business name',
    fixType: 'rewrite',
  });

  // 2. Meta description
  const desc = brandContent.seo?.homepage?.description ?? '';
  const descLen = desc.length;
  let descStatus: CheckStatus = 'bad';
  if (descLen >= 120 && descLen <= 155) descStatus = 'good';
  else if ((descLen >= 80 && descLen < 120) || (descLen > 155 && descLen <= 170))
    descStatus = 'warn';
  checks.push({
    name: 'Meta description',
    status: descStatus,
    value: descLen > 0 ? `${descLen} chars` : 'empty',
    fixFieldPath: 'seo.homepage.description',
    fixInstruction:
      'Write an SEO-optimized meta description between 120-155 characters that summarizes the business value proposition',
    fixType: 'rewrite',
  });

  // 3. Keywords set
  const keywords = brandContent.seo?.keywords ?? [];
  let kwStatus: CheckStatus = 'bad';
  if (keywords.length >= 3) kwStatus = 'good';
  else if (keywords.length >= 1) kwStatus = 'warn';
  checks.push({
    name: 'Keywords set',
    status: kwStatus,
    value: keywords.length > 0 ? `${keywords.length} keyword(s)` : 'none',
    fixType: 'seo-generate',
  });

  // 4. Business name in title
  const nameInTitle =
    title.length > 0 &&
    brandContent.name &&
    title.toLowerCase().includes(brandContent.name.toLowerCase());
  checks.push({
    name: 'Business name in title',
    status: nameInTitle ? 'good' : 'bad',
    value: nameInTitle ? 'yes' : 'no',
    fixFieldPath: 'seo.homepage.title',
    fixInstruction: `Write an SEO-optimized title under 60 characters that includes "${brandContent.name}"`,
    fixType: 'rewrite',
  });

  // 5. Hero has heading
  const heroHeading = brandContent.hero?.heading ?? '';
  let heroHeadingStatus: CheckStatus = 'bad';
  if (heroHeading.length > 20) heroHeadingStatus = 'good';
  else if (heroHeading.length >= 10) heroHeadingStatus = 'warn';
  checks.push({
    name: 'Hero has heading',
    status: heroHeadingStatus,
    value: heroHeading.length > 0 ? `${heroHeading.length} chars` : 'empty',
    fixFieldPath: 'hero.heading',
    fixInstruction:
      'Write a compelling hero heading over 20 characters that captures the core value proposition',
    fixType: 'rewrite',
  });

  // 6. Hero has subheading
  const heroSub = brandContent.hero?.subheading ?? '';
  let heroSubStatus: CheckStatus = 'bad';
  if (heroSub.length > 30) heroSubStatus = 'good';
  else if (heroSub.length >= 10) heroSubStatus = 'warn';
  checks.push({
    name: 'Hero has subheading',
    status: heroSubStatus,
    value: heroSub.length > 0 ? `${heroSub.length} chars` : 'empty',
    fixFieldPath: 'hero.subheading',
    fixInstruction:
      'Write a supporting hero subheading over 30 characters that expands on the main headline',
    fixType: 'rewrite',
  });

  // 7. About section filled
  const aboutBody = brandContent.about?.body ?? '';
  let aboutStatus: CheckStatus = 'bad';
  if (aboutBody.length > 50) aboutStatus = 'good';
  else if (aboutBody.length >= 10) aboutStatus = 'warn';
  checks.push({
    name: 'About section filled',
    status: aboutStatus,
    value: aboutBody.length > 0 ? `${aboutBody.length} chars` : 'empty',
    fixFieldPath: 'about.body',
    fixInstruction:
      'Write a compelling about section over 50 characters that tells the business story and builds trust',
    fixType: 'rewrite',
  });

  // 8. Services listed
  const services = brandContent.services ?? [];
  let svcStatus: CheckStatus = 'bad';
  if (services.length >= 3) svcStatus = 'good';
  else if (services.length >= 1) svcStatus = 'warn';
  checks.push({
    name: 'Services listed',
    status: svcStatus,
    value: services.length > 0 ? `${services.length} service(s)` : 'none',
  });

  // 9. Contact info present
  const hasPhone = Boolean(brandContent.phone);
  const hasEmail = Boolean(brandContent.email);
  let contactStatus: CheckStatus = 'bad';
  if (hasPhone && hasEmail) contactStatus = 'good';
  else if (hasPhone || hasEmail) contactStatus = 'warn';
  checks.push({
    name: 'Contact info present',
    status: contactStatus,
    value:
      hasPhone && hasEmail
        ? 'phone + email'
        : hasPhone
          ? 'phone only'
          : hasEmail
            ? 'email only'
            : 'neither',
  });

  // 10. CTA has text
  const ctaHeading = brandContent.cta?.heading ?? '';
  checks.push({
    name: 'CTA has text',
    status: ctaHeading.length > 0 ? 'good' : 'bad',
    value: ctaHeading.length > 0 ? `${ctaHeading.length} chars` : 'empty',
    fixFieldPath: 'cta.heading',
    fixInstruction:
      'Write a compelling call-to-action heading that motivates visitors to take the next step',
    fixType: 'rewrite',
  });

  // Scoring: good=2, warn=1, bad=0
  const score = checks.reduce((acc, c) => {
    if (c.status === 'good') return acc + 2;
    if (c.status === 'warn') return acc + 1;
    return acc;
  }, 0);

  const maxScore = 20;

  let grade: string;
  let gradeColor: string;
  if (score >= 18) {
    grade = 'A';
    gradeColor = 'text-green-500';
  } else if (score >= 14) {
    grade = 'B';
    gradeColor = 'text-green-500';
  } else if (score >= 10) {
    grade = 'C';
    gradeColor = 'text-amber-500';
  } else if (score >= 6) {
    grade = 'D';
    gradeColor = 'text-amber-500';
  } else {
    grade = 'F';
    gradeColor = 'text-red-500';
  }

  return { score, maxScore, grade, gradeColor, checks };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SeoScorecard({
  open,
  onOpenChange,
  projectId,
}: SeoScorecardProps) {
  const { brandContent, updateField } = useContentEditorStore();
  const [fixingIndex, setFixingIndex] = useState<number | null>(null);
  const [fixingAll, setFixingAll] = useState(false);

  const result = useMemo(() => calculateSeoScore(brandContent), [brandContent]);

  // ------------------------------------------
  // Fix a single check with AI
  // ------------------------------------------
  const fixCheck = useCallback(
    async (check: SeoCheck, index: number) => {
      if (!brandContent) return;
      setFixingIndex(index);

      try {
        if (check.fixType === 'seo-generate') {
          // Use the SEO generate endpoint for keywords
          const res = await fetch('/api/seo/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              blocks: [],
              pageName: 'Home',
              businessName: brandContent.name,
              industry: '',
            }),
          });
          const data = await res.json();
          if (data.success && data.data) {
            if (data.data.keywords?.length) {
              updateField('seo.keywords', data.data.keywords);
            }
          }
        } else if (check.fixType === 'rewrite' && check.fixFieldPath) {
          // Read current value from brandContent via simple path traversal
          const currentText = getFieldValue(brandContent, check.fixFieldPath);

          const res = await fetch(`/api/projects/${projectId}/rewrite`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fieldPath: check.fixFieldPath,
              currentText: currentText || brandContent.name || 'placeholder',
              instruction: check.fixInstruction,
            }),
          });
          const data = await res.json();
          if (data.success && data.text) {
            updateField(check.fixFieldPath, data.text);
          }
        }
      } catch {
        // Silently fail -- user can retry
      } finally {
        setFixingIndex(null);
      }
    },
    [brandContent, projectId, updateField],
  );

  // ------------------------------------------
  // Fix all with AI
  // ------------------------------------------
  const fixAll = useCallback(async () => {
    if (!brandContent) return;
    setFixingAll(true);

    try {
      const res = await fetch('/api/seo/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [],
          pageName: 'Home',
          businessName: brandContent.name,
          industry: '',
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        if (data.data.title) {
          updateField('seo.homepage.title', data.data.title);
        }
        if (data.data.description) {
          updateField('seo.homepage.description', data.data.description);
        }
        if (data.data.keywords?.length) {
          updateField('seo.keywords', data.data.keywords);
        }
      }
    } catch {
      // Silently fail
    } finally {
      setFixingAll(false);
    }
  }, [brandContent, updateField]);

  // ------------------------------------------
  // Status icon helper
  // ------------------------------------------
  const StatusIcon = ({ status }: { status: CheckStatus }) => {
    if (status === 'good')
      return <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />;
    if (status === 'warn')
      return <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" />;
    return <XCircle className="h-4 w-4 shrink-0 text-red-500" />;
  };

  const pct = Math.round((result.score / result.maxScore) * 100);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              SEO Score:{' '}
              <span
                className={`rounded-md border px-2 py-0.5 text-lg font-bold ${result.gradeColor}`}
              >
                {result.grade}
              </span>
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={fixAll}
              disabled={fixingAll}
            >
              {fixingAll ? (
                <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
              ) : (
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              )}
              Fix All with AI
            </Button>
          </DialogTitle>
        </DialogHeader>

        {/* Progress bar */}
        <div className="mt-1">
          <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {result.score} / {result.maxScore} points
            </span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all ${
                result.score >= 14
                  ? 'bg-green-500'
                  : result.score >= 6
                    ? 'bg-amber-500'
                    : 'bg-red-500'
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Check list */}
        <ul className="mt-3 space-y-2">
          {result.checks.map((check, i) => (
            <li
              key={check.name}
              className="flex items-center gap-2 rounded-md border p-2 text-sm"
            >
              <StatusIcon status={check.status} />
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-tight">{check.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {check.value}
                </p>
              </div>
              {check.status !== 'good' && check.fixType && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 shrink-0 px-2 text-xs"
                  onClick={() => fixCheck(check, i)}
                  disabled={fixingIndex === i || fixingAll}
                >
                  {fixingIndex === i ? (
                    <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1 h-3 w-3" />
                  )}
                  Fix
                </Button>
              )}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Utility: read nested value from brandContent by dot-path
// ---------------------------------------------------------------------------

function getFieldValue(obj: unknown, path: string): string {
  const segments = path.split('.');
  let current: unknown = obj;
  for (const seg of segments) {
    if (current == null) return '';
    current = (current as Record<string, unknown>)[seg];
  }
  return typeof current === 'string' ? current : '';
}
