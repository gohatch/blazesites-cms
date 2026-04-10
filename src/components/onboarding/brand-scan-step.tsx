'use client';

import { useEffect } from 'react';
import { useOnboardingStore } from '@/lib/stores/onboarding-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INDUSTRY_OPTIONS } from '@/lib/ai/detect-industry';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Loader2,
  AlertCircle,
  Check,
  Palette,
  Pencil,
} from 'lucide-react';
import type { IndustryCategory, ManualInput } from '@/types';

export function BrandScanStep() {
  const {
    websiteUrl,
    businessName,
    industry,
    setIndustry,
    scrapedBrand,
    isScanning,
    scanError,
    scanWebsite,
    manualInput,
    setManualInput,
    nextStep,
    prevStep,
  } = useOnboardingStore();

  const hasUrl = websiteUrl.trim().length > 0;

  // Auto-scan when step loads if URL is provided and not already scanned
  useEffect(() => {
    if (hasUrl && !scrapedBrand && !isScanning && !scanError) {
      scanWebsite();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Initialize manual input if no URL
  useEffect(() => {
    if (!hasUrl && !manualInput) {
      setManualInput({
        businessName,
        description: '',
        industry: (industry as IndustryCategory) || 'General Business',
      });
    }
  }, [hasUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleContinue = () => {
    nextStep(); // goes to step 3 (generating)
  };

  // --- URL path: show scan results ---
  if (hasUrl) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
            <Globe className="w-7 h-7 text-white dark:text-zinc-900" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {isScanning ? 'Scanning your website...' : 'Your brand profile'}
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            {isScanning
              ? 'Extracting colors, logo, and content from your site.'
              : 'Here\'s what we found. You can edit anything before we continue.'}
          </p>
        </div>

        {isScanning && (
          <div className="flex flex-col items-center gap-4 py-16">
            <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
            <p className="text-sm text-zinc-500">{websiteUrl}</p>
          </div>
        )}

        {scanError && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="w-4 h-4" />
              <p className="text-sm font-medium">{scanError}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={scanWebsite}
            >
              Try again
            </Button>
          </div>
        )}

        {scrapedBrand && (
          <div className="space-y-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            {/* Business name */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wide">Business Name</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {scrapedBrand.businessName}
                </p>
              </div>
              <Check className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Colors */}
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-wide mb-2">
                <Palette className="w-3 h-3 inline mr-1" />
                Brand Colors
              </p>
              <div className="flex gap-2">
                {Object.entries(scrapedBrand.colors).map(([key, val]) =>
                  val ? (
                    <div key={key} className="flex flex-col items-center gap-1">
                      <div
                        className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-700"
                        style={{ backgroundColor: val }}
                      />
                      <span className="text-[10px] text-zinc-400">{key}</span>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Industry */}
            {scrapedBrand.industry && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 uppercase tracking-wide">Detected Industry:</span>
                <span className="text-sm font-medium px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded">
                  {scrapedBrand.industry}
                </span>
              </div>
            )}

            {/* Logo */}
            {scrapedBrand.logoUrl && (
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-2">Logo</p>
                <img
                  src={scrapedBrand.logoUrl}
                  alt="Logo"
                  className="h-12 object-contain rounded bg-zinc-50 dark:bg-zinc-800 p-1"
                />
              </div>
            )}

            {/* Content preview */}
            {scrapedBrand.content?.tagline && (
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wide">Tagline</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 italic">
                  &ldquo;{scrapedBrand.content.tagline}&rdquo;
                </p>
              </div>
            )}

            {scrapedBrand.content?.services && scrapedBrand.content.services.length > 0 && (
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">Services Found</p>
                <div className="flex flex-wrap gap-1.5">
                  {scrapedBrand.content.services.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prevStep} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={isScanning || (!scrapedBrand && !scanError)}
            className="gap-2"
          >
            {scrapedBrand ? 'Generate Content' : 'Skip & Continue'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  // --- No URL path: manual input form ---
  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
          <Pencil className="w-7 h-7 text-white dark:text-zinc-900" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Tell us more
        </h2>
        <p className="text-sm text-zinc-500 mt-2">
          Describe your business so we can generate tailored website content.
        </p>
      </div>

      <div className="space-y-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
        {/* Description */}
        <div>
          <Label htmlFor="description" className="text-sm font-medium">
            What does your business do? *
          </Label>
          <Textarea
            id="description"
            placeholder="e.g., We're a family-owned yoga studio offering classes for all levels, including vinyasa, yin yoga, and meditation. We've been serving the community for over 10 years..."
            value={manualInput?.description || ''}
            onChange={(e) =>
              setManualInput({ ...manualInput!, description: e.target.value })
            }
            className="mt-1.5 min-h-[120px]"
          />
          <p className="text-xs text-zinc-400 mt-1">
            The more detail you provide, the better the content we generate.
          </p>
        </div>

        {/* Industry */}
        <div>
          <Label className="text-sm font-medium">Industry *</Label>
          <Select
            value={manualInput?.industry || industry || undefined}
            onValueChange={(val) => {
              setIndustry(val as IndustryCategory);
              setManualInput({ ...manualInput!, industry: val as IndustryCategory });
            }}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select industry..." />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRY_OPTIONS.map((ind) => (
                <SelectItem key={ind} value={ind}>{ind}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Phone</Label>
            <Input
              placeholder="+1 (555) 123-4567"
              value={manualInput?.phone || ''}
              onChange={(e) => setManualInput({ ...manualInput!, phone: e.target.value })}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">Email</Label>
            <Input
              placeholder="hello@business.com"
              value={manualInput?.email || ''}
              onChange={(e) => setManualInput({ ...manualInput!, email: e.target.value })}
              className="mt-1.5"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">Address</Label>
          <Input
            placeholder="123 Main St, City, State"
            value={manualInput?.address || ''}
            onChange={(e) => setManualInput({ ...manualInput!, address: e.target.value })}
            className="mt-1.5"
          />
        </div>

        {/* Primary color */}
        <div>
          <Label className="text-sm font-medium">
            Preferred Brand Color
            <span className="text-zinc-400 font-normal ml-1">(optional)</span>
          </Label>
          <div className="flex items-center gap-3 mt-1.5">
            <input
              type="color"
              value={manualInput?.colors?.primary || '#3b82f6'}
              onChange={(e) =>
                setManualInput({
                  ...manualInput!,
                  colors: { ...manualInput?.colors, primary: e.target.value },
                })
              }
              className="w-10 h-10 rounded-lg border border-zinc-200 cursor-pointer"
            />
            <span className="text-sm text-zinc-500">
              {manualInput?.colors?.primary || 'Auto-generated'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={prevStep} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!manualInput?.description?.trim()}
          className="gap-2"
        >
          Generate Content
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
