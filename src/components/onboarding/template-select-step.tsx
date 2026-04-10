'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboardingStore } from '@/lib/stores/onboarding-store';
import { recommendTemplates } from '@/lib/templates/recommend';
import { TemplateCard } from '@/components/templates/template-card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Loader2,
  Star,
  Check,
  Layout,
} from 'lucide-react';
import type { Template, IndustryCategory } from '@/types';

export function TemplateSelectStep() {
  const router = useRouter();
  const {
    industry,
    aiContent,
    selectedTemplate,
    setSelectedTemplate,
    prevStep,
  } = useOnboardingStore();

  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

  // Fetch all templates
  useEffect(() => {
    fetch('/api/templates?limit=100')
      .then((r) => r.json())
      .then((data) => {
        setTemplates(Array.isArray(data) ? data : (data.data || []));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Recommend templates
  const scored = recommendTemplates(
    (industry as IndustryCategory) || 'General Business',
    templates
  );
  const recommended = scored.filter((s) => s.score >= 5).slice(0, 3);
  const others = scored.filter((s) => s.score < 5);

  const handleCreate = async () => {
    if (!selectedTemplate || !aiContent) return;
    setCreating(true);
    setError('');

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: aiContent.name,
          template_id: selectedTemplate.id,
          brand_profile: aiContent,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to create project');
      }

      const project = await res.json();

      // Mark onboarding as completed
      await fetch('/api/auth/complete-onboarding', { method: 'POST' });

      // Navigate to the project
      router.push(`/projects`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setCreating(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
          <Layout className="w-7 h-7 text-white dark:text-zinc-900" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Choose your template
        </h2>
        <p className="text-sm text-zinc-500 mt-2">
          {industry
            ? `Templates recommended for ${industry}. Your content will be applied automatically.`
            : 'Pick a template and we\'ll apply your brand content to it.'}
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-zinc-400" />
        </div>
      )}

      {!loading && (
        <>
          {/* Recommended */}
          {recommended.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Recommended for you
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommended.map(({ template, matchReason }) => (
                  <div
                    key={template.id}
                    className={`relative cursor-pointer rounded-xl transition-all ${
                      selectedTemplate?.id === template.id
                        ? 'ring-2 ring-emerald-500 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    {selectedTemplate?.id === template.id && (
                      <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <TemplateCard template={template} />
                    <div className="px-3 pb-2">
                      <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                        {matchReason}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All others */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">
              {recommended.length > 0 ? 'All templates' : 'Choose a template'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map(({ template }) => (
                <div
                  key={template.id}
                  className={`relative cursor-pointer rounded-xl transition-all ${
                    selectedTemplate?.id === template.id
                      ? 'ring-2 ring-emerald-500 shadow-lg'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  {selectedTemplate?.id === template.id && (
                    <div className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <TemplateCard template={template} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex justify-between mt-8 pb-8">
        <Button variant="outline" onClick={prevStep} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button
          onClick={handleCreate}
          disabled={!selectedTemplate || creating}
          className="gap-2"
        >
          {creating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating...
            </>
          ) : (
            'Create My Website'
          )}
        </Button>
      </div>
    </div>
  );
}
