'use client';

import { useOnboardingStore } from '@/lib/stores/onboarding-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INDUSTRY_OPTIONS } from '@/lib/ai/detect-industry';
import { Building2, Globe, ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import type { IndustryCategory } from '@/types';

export function BusinessInfoStep() {
  const {
    businessName, setBusinessName,
    websiteUrl, setWebsiteUrl,
    industry, setIndustry,
    location, setLocation, detectLocation,
    nextStep,
  } = useOnboardingStore();
  const [detectingLocation, setDetectingLocation] = useState(false);

  const canContinue = businessName.trim().length > 0;

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-7 h-7 text-white dark:text-zinc-900" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Tell us about your business
        </h2>
        <p className="text-sm text-zinc-500 mt-2">
          We&apos;ll use this to create a website tailored to your brand.
        </p>
      </div>

      <div className="space-y-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
        {/* Business Name */}
        <div>
          <Label htmlFor="business-name" className="text-sm font-medium">
            Business Name *
          </Label>
          <Input
            id="business-name"
            placeholder="e.g., PureYoga Studio"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="mt-1.5"
          />
        </div>

        {/* Website URL */}
        <div>
          <Label htmlFor="website-url" className="text-sm font-medium">
            Existing Website URL
            <span className="text-zinc-400 font-normal ml-1">(optional)</span>
          </Label>
          <div className="relative mt-1.5">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input
              id="website-url"
              placeholder="www.yourbusiness.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="pl-10"
            />
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            We&apos;ll scan your site to import your brand colors, logo, and content.
          </p>
        </div>

        {/* Industry */}
        <div>
          <Label htmlFor="industry" className="text-sm font-medium">
            Industry
            <span className="text-zinc-400 font-normal ml-1">
              {websiteUrl ? '(auto-detected from site)' : '(helps us pick the right template)'}
            </span>
          </Label>
          <Select
            value={industry || ''}
            onValueChange={(val) => setIndustry(val as IndustryCategory)}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select your industry..." />
            </SelectTrigger>
            <SelectContent>
              {INDUSTRY_OPTIONS.map((ind) => (
                <SelectItem key={ind} value={ind}>
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div>
          <Label className="text-sm font-medium">
            Business Location
            <span className="text-zinc-400 font-normal ml-1">(for local SEO)</span>
          </Label>
          <div className="grid grid-cols-2 gap-3 mt-1.5">
            <Input
              placeholder="City"
              value={location.city}
              onChange={(e) => setLocation({ ...location, city: e.target.value })}
            />
            <Input
              placeholder="State / Region"
              value={location.state}
              onChange={(e) => setLocation({ ...location, state: e.target.value })}
            />
          </div>
          <button
            type="button"
            onClick={async () => {
              setDetectingLocation(true);
              await detectLocation();
              setDetectingLocation(false);
            }}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mt-2 transition-colors"
          >
            {detectingLocation ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <MapPin className="w-3 h-3" />
            )}
            {detectingLocation ? 'Detecting...' : 'Auto-detect my location'}
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button
          onClick={nextStep}
          disabled={!canContinue}
          className="gap-2"
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
