'use client';

import { useState } from 'react';
import { useOnboardingStore } from '@/lib/stores/onboarding-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Palette,
  Eye,
} from 'lucide-react';
import type { AstroBrandContent } from '@/types';

type SectionKey = 'basic' | 'colors' | 'hero' | 'about' | 'services' | 'pricing' | 'testimonials' | 'cta' | 'contact';

const SECTIONS: { key: SectionKey; label: string; icon: string }[] = [
  { key: 'basic', label: 'Business Info', icon: '🏢' },
  { key: 'colors', label: 'Brand Colors', icon: '🎨' },
  { key: 'hero', label: 'Hero Section', icon: '🌟' },
  { key: 'about', label: 'About Section', icon: '📖' },
  { key: 'services', label: 'Services', icon: '💼' },
  { key: 'pricing', label: 'Pricing Plans', icon: '💰' },
  { key: 'testimonials', label: 'Testimonials', icon: '💬' },
  { key: 'cta', label: 'Call to Action', icon: '📢' },
  { key: 'contact', label: 'Contact Info', icon: '📍' },
];

export function ContentReviewStep() {
  const { aiContent, setAiContent, nextStep, prevStep } = useOnboardingStore();
  const [expanded, setExpanded] = useState<Set<SectionKey>>(new Set(['basic', 'hero']));

  if (!aiContent) return null;

  const toggle = (key: SectionKey) => {
    const next = new Set(expanded);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setExpanded(next);
  };

  // Helper to update nested content
  const update = (path: string, value: unknown) => {
    const keys = path.split('.');
    const clone = JSON.parse(JSON.stringify(aiContent)) as AstroBrandContent;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let obj: any = clone;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = isNaN(Number(keys[i])) ? keys[i] : Number(keys[i]);
      obj = obj[key];
    }
    const lastKey = isNaN(Number(keys[keys.length - 1])) ? keys[keys.length - 1] : Number(keys[keys.length - 1]);
    obj[lastKey] = value;
    setAiContent(clone);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4">
          <Eye className="w-7 h-7 text-white dark:text-zinc-900" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Review your content
        </h2>
        <p className="text-sm text-zinc-500 mt-2">
          Edit any section before we build your website. Click a section to expand it.
        </p>
      </div>

      <div className="space-y-3">
        {SECTIONS.map(({ key, label, icon }) => (
          <div
            key={key}
            className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <button
              onClick={() => toggle(key)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="text-lg">{icon}</span>
                <span className="font-medium text-sm text-zinc-900 dark:text-white">{label}</span>
              </span>
              {expanded.has(key) ? (
                <ChevronUp className="w-4 h-4 text-zinc-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              )}
            </button>

            {expanded.has(key) && (
              <div className="px-5 pb-5 space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                {key === 'basic' && (
                  <>
                    <Field label="Business Name" value={aiContent.name} onChange={(v) => update('name', v)} />
                    <Field label="Tagline" value={aiContent.tagline} onChange={(v) => update('tagline', v)} />
                    <FieldArea label="Description" value={aiContent.description} onChange={(v) => update('description', v)} />
                  </>
                )}

                {key === 'colors' && (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {(['primary', 'primaryDark', 'primaryLight', 'accent', 'bg'] as const).map((c) => (
                      <div key={c} className="flex flex-col items-center gap-1">
                        <input
                          type="color"
                          value={aiContent.colors[c]}
                          onChange={(e) => update(`colors.${c}`, e.target.value)}
                          className="w-12 h-12 rounded-lg border border-zinc-200 cursor-pointer"
                        />
                        <span className="text-[10px] text-zinc-400">{c}</span>
                      </div>
                    ))}
                  </div>
                )}

                {key === 'hero' && (
                  <>
                    <Field label="Eyebrow" value={aiContent.hero.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
                    <Field label="Heading" value={aiContent.hero.heading} onChange={(v) => update('hero.heading', v)} />
                    <FieldArea label="Subheading" value={aiContent.hero.subheading} onChange={(v) => update('hero.subheading', v)} />
                    <Field label="Primary CTA" value={aiContent.hero.cta} onChange={(v) => update('hero.cta', v)} />
                    <Field label="Secondary CTA" value={aiContent.hero.ctaSecondary} onChange={(v) => update('hero.ctaSecondary', v)} />
                  </>
                )}

                {key === 'about' && (
                  <>
                    <Field label="Heading" value={aiContent.about.heading} onChange={(v) => update('about.heading', v)} />
                    <FieldArea label="Body" value={aiContent.about.body} onChange={(v) => update('about.body', v)} />
                    {aiContent.about.values.map((val, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <Field label={`Value ${i + 1}`} value={val.title} onChange={(v) => update(`about.values.${i}.title`, v)} className="flex-1" />
                        <Field label="Desc" value={val.desc} onChange={(v) => update(`about.values.${i}.desc`, v)} className="flex-[2]" />
                      </div>
                    ))}
                  </>
                )}

                {key === 'services' && (
                  <>
                    {aiContent.services.map((svc, i) => (
                      <div key={i} className="border-b border-zinc-100 dark:border-zinc-800 pb-3 last:border-0">
                        <Field label={`Service ${i + 1} Name`} value={svc.name} onChange={(v) => update(`services.${i}.name`, v)} />
                        <FieldArea label="Description" value={svc.desc} onChange={(v) => update(`services.${i}.desc`, v)} className="mt-2" />
                      </div>
                    ))}
                  </>
                )}

                {key === 'pricing' && (
                  <>
                    {aiContent.pricing.map((plan, i) => (
                      <div key={i} className="border-b border-zinc-100 dark:border-zinc-800 pb-3 last:border-0">
                        <div className="flex gap-2">
                          <Field label="Plan Name" value={plan.name} onChange={(v) => update(`pricing.${i}.name`, v)} className="flex-1" />
                          <Field label="Price" value={plan.price} onChange={(v) => update(`pricing.${i}.price`, v)} className="w-24" />
                          <Field label="Period" value={plan.period} onChange={(v) => update(`pricing.${i}.period`, v)} className="flex-1" />
                        </div>
                        <Field label="Description" value={plan.desc} onChange={(v) => update(`pricing.${i}.desc`, v)} className="mt-2" />
                      </div>
                    ))}
                  </>
                )}

                {key === 'testimonials' && (
                  <>
                    {aiContent.testimonials.map((t, i) => (
                      <div key={i} className="border-b border-zinc-100 dark:border-zinc-800 pb-3 last:border-0">
                        <div className="flex gap-2">
                          <Field label="Name" value={t.name} onChange={(v) => update(`testimonials.${i}.name`, v)} className="flex-1" />
                          <Field label="Role" value={t.role} onChange={(v) => update(`testimonials.${i}.role`, v)} className="flex-1" />
                        </div>
                        <FieldArea label="Quote" value={t.quote} onChange={(v) => update(`testimonials.${i}.quote`, v)} className="mt-2" />
                      </div>
                    ))}
                  </>
                )}

                {key === 'cta' && (
                  <>
                    <Field label="Heading" value={aiContent.cta.heading} onChange={(v) => update('cta.heading', v)} />
                    <FieldArea label="Subheading" value={aiContent.cta.subheading} onChange={(v) => update('cta.subheading', v)} />
                    <div className="flex gap-2">
                      <Field label="Primary Button" value={aiContent.cta.primary} onChange={(v) => update('cta.primary', v)} className="flex-1" />
                      <Field label="Secondary Button" value={aiContent.cta.secondary} onChange={(v) => update('cta.secondary', v)} className="flex-1" />
                    </div>
                  </>
                )}

                {key === 'contact' && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Phone" value={aiContent.phone} onChange={(v) => update('phone', v)} />
                      <Field label="Email" value={aiContent.email} onChange={(v) => update('email', v)} />
                    </div>
                    <Field label="Address" value={aiContent.address} onChange={(v) => update('address', v)} />
                    {aiContent.contact.hours.map((h, i) => (
                      <div key={i} className="flex gap-2">
                        <Field label="Days" value={h.days} onChange={(v) => update(`contact.hours.${i}.days`, v)} className="flex-1" />
                        <Field label="Hours" value={h.time} onChange={(v) => update(`contact.hours.${i}.time`, v)} className="flex-1" />
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={prevStep} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <Button onClick={nextStep} className="gap-2">
          Choose Template
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// --- Inline field helpers ---

function Field({
  label,
  value,
  onChange,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[11px] text-zinc-400 uppercase tracking-wide">{label}</label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-0.5 h-9 text-sm"
      />
    </div>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[11px] text-zinc-400 uppercase tracking-wide">{label}</label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-0.5 text-sm min-h-[60px]"
      />
    </div>
  );
}
