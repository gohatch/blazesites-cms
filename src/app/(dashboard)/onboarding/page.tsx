'use client';

import { useOnboardingStore, type OnboardingStep } from '@/lib/stores/onboarding-store';
import { BusinessInfoStep } from '@/components/onboarding/business-info-step';
import { BrandScanStep } from '@/components/onboarding/brand-scan-step';
import { GeneratingStep } from '@/components/onboarding/generating-step';
import { ContentReviewStep } from '@/components/onboarding/content-review-step';
import { TemplateSelectStep } from '@/components/onboarding/template-select-step';
import { Check } from 'lucide-react';

const STEPS: { num: OnboardingStep; label: string }[] = [
  { num: 1, label: 'Business Info' },
  { num: 2, label: 'Brand' },
  { num: 3, label: 'Generate' },
  { num: 4, label: 'Review' },
  { num: 5, label: 'Template' },
];

export default function OnboardingPage() {
  const step = useOnboardingStore((s) => s.step);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Progress bar */}
      <div className="border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Set up your website
            </h1>
            <span className="text-sm text-zinc-500">Step {step} of 5</span>
          </div>

          {/* Step indicators */}
          <div className="flex items-center gap-2 mt-4">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex items-center gap-2 w-full">
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                      step > s.num
                        ? 'bg-emerald-500 text-white'
                        : step === s.num
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                          : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400'
                    }`}
                  >
                    {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span
                    className={`hidden sm:block text-xs font-medium transition-colors ${
                      step >= s.num ? 'text-zinc-900 dark:text-white' : 'text-zinc-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 rounded transition-colors ${
                        step > s.num ? 'bg-emerald-500' : 'bg-zinc-200 dark:bg-zinc-700'
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {step === 1 && <BusinessInfoStep />}
        {step === 2 && <BrandScanStep />}
        {step === 3 && <GeneratingStep />}
        {step === 4 && <ContentReviewStep />}
        {step === 5 && <TemplateSelectStep />}
      </div>
    </div>
  );
}
