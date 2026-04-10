'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Globe, Loader2, Sparkles, ArrowRight, Check } from 'lucide-react';
import type { AstroBrandContent } from '@/types';

type Step = 'url' | 'scanning' | 'generating' | 'done' | 'error';

interface BrandImportOverlayProps {
  projectId: string;
  onComplete: (content: AstroBrandContent) => void;
  onSkip: () => void;
}

export function BrandImportOverlay({ projectId, onComplete, onSkip }: BrandImportOverlayProps) {
  const [step, setStep] = useState<Step>('url');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [statusText, setStatusText] = useState('');

  async function handleImport() {
    if (!url.trim()) return;

    let scanUrl = url.trim();
    if (!scanUrl.startsWith('http')) scanUrl = 'https://' + scanUrl;

    try {
      // Step 1: Scrape website
      setStep('scanning');
      setStatusText('Scanning your website...');
      setError('');

      const scrapeRes = await fetch('/api/scrape-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scanUrl }),
      });

      const scrapeData = await scrapeRes.json();

      if (!scrapeData.success) {
        setError(scrapeData.error || 'Failed to scan website');
        setStep('error');
        return;
      }

      // Step 2: Generate AI content
      setStep('generating');
      setStatusText('AI is writing your website content...');

      const generateRes = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scraped: scrapeData.data }),
      });

      const generateData = await generateRes.json();

      if (!generateData.success) {
        setError(generateData.error || 'Failed to generate content');
        setStep('error');
        return;
      }

      const brandContent = generateData.data as AstroBrandContent;

      // Step 3: Save to project
      setStatusText('Saving your brand...');

      await fetch(`/api/projects/${projectId}/content`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brandContent),
      });

      setStep('done');
      setStatusText('Brand imported successfully!');

      // Notify parent after brief delay
      setTimeout(() => onComplete(brandContent), 800);
    } catch {
      setError('Something went wrong. Please try again.');
      setStep('error');
    }
  }

  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="w-full max-w-lg space-y-8 px-6 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          {step === 'done' ? (
            <Check className="h-10 w-10 text-green-500" />
          ) : step === 'scanning' || step === 'generating' ? (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          ) : (
            <Globe className="h-10 w-10 text-primary" />
          )}
        </div>

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {step === 'url' || step === 'error' ? 'Import Your Brand' : statusText}
          </h2>
          {step === 'url' && (
            <p className="mt-2 text-muted-foreground">
              Enter your website URL and AI will import your branding, content, colors, and images automatically.
            </p>
          )}
          {step === 'generating' && (
            <p className="mt-2 text-muted-foreground">
              Writing headlines, descriptions, testimonials, and SEO content tailored to your brand...
            </p>
          )}
        </div>

        {/* URL Input */}
        {(step === 'url' || step === 'error') && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yourbusiness.com"
                className="h-12 text-base"
                onKeyDown={(e) => e.key === 'Enter' && handleImport()}
              />
              <Button onClick={handleImport} size="lg" className="h-12 gap-2 px-6" disabled={!url.trim()}>
                <Sparkles className="h-4 w-4" />
                Import
              </Button>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <button
              onClick={onSkip}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Skip — I&apos;ll fill in content manually
            </button>
          </div>
        )}

        {/* Progress indicators */}
        {(step === 'scanning' || step === 'generating') && (
          <div className="flex items-center justify-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step === 'scanning' ? 'bg-primary text-primary-foreground' : 'bg-green-500 text-white'}`}>
              {step === 'scanning' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </div>
            <span className="text-sm text-muted-foreground">Scan</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step === 'generating' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              {step === 'generating' ? <Loader2 className="h-4 w-4 animate-spin" /> : '2'}
            </div>
            <span className="text-sm text-muted-foreground">Generate</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground/50" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              3
            </div>
            <span className="text-sm text-muted-foreground">Done</span>
          </div>
        )}
      </div>
    </div>
  );
}
