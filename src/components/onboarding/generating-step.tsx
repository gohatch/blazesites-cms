'use client';

import { useEffect, useState } from 'react';
import { useOnboardingStore } from '@/lib/stores/onboarding-store';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ArrowLeft, Sparkles } from 'lucide-react';

const MESSAGES = [
  'Analyzing your business...',
  'Crafting your brand story...',
  'Generating hero section...',
  'Writing service descriptions...',
  'Creating pricing plans...',
  'Composing testimonials...',
  'Polishing the final details...',
];

export function GeneratingStep() {
  const {
    isGenerating,
    generateError,
    aiContent,
    generateContent,
    nextStep,
    prevStep,
  } = useOnboardingStore();

  const [messageIdx, setMessageIdx] = useState(0);

  // Auto-generate on mount
  useEffect(() => {
    if (!aiContent && !isGenerating && !generateError) {
      generateContent();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-advance when content is ready
  useEffect(() => {
    if (aiContent) {
      const timer = setTimeout(nextStep, 800);
      return () => clearTimeout(timer);
    }
  }, [aiContent, nextStep]);

  // Cycle through loading messages
  useEffect(() => {
    if (!isGenerating) return;
    const interval = setInterval(() => {
      setMessageIdx((i) => (i + 1) % MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isGenerating]);

  return (
    <div className="max-w-md mx-auto text-center py-16">
      {isGenerating && (
        <>
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
            Creating your website content
          </h2>
          <p className="text-sm text-zinc-500 mb-8">{MESSAGES[messageIdx]}</p>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5">
            {MESSAGES.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= messageIdx
                    ? 'bg-violet-500 scale-100'
                    : 'bg-zinc-200 dark:bg-zinc-700 scale-75'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {generateError && (
        <>
          <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-zinc-500 mb-6">{generateError}</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={prevStep} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button onClick={generateContent} className="gap-2">
              <Loader2 className="w-4 h-4" />
              Try Again
            </Button>
          </div>
        </>
      )}

      {aiContent && !isGenerating && (
        <>
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Content ready!
          </h2>
          <p className="text-sm text-zinc-500">Moving to review...</p>
        </>
      )}
    </div>
  );
}
