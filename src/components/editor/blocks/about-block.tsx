'use client';

import type { Block } from '@/types';
import { Check, ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function AboutBlock({ block }: { block: Block }) {
  const { heading, subheading, text, image, values, ctaText, ctaLink } = block.content as {
    heading: string;
    subheading?: string;
    text: string;
    image: string;
    values?: string[];
    ctaText?: string;
    ctaLink?: string;
  };
  const { backgroundColor, textColor, padding, accentColor } = block.settings;

  const accent = accentColor || 'var(--accent-color, #2563EB)';
  const accentLight = accentColor ? `${accentColor}20` : 'var(--accent-light, #EFF6FF)';

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={image ? 'grid items-center gap-12 lg:grid-cols-2 lg:gap-20' : ''}>
          <AnimateOnScroll direction={image ? 'left' : 'up'}>
            <div>
              {subheading && (
                <p
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: accent }}
                >
                  {subheading}
                </p>
              )}
              {heading && <h2 className={`${subheading ? 'mt-3' : ''} text-3xl font-extrabold tracking-tight sm:text-4xl`}>{heading}</h2>}
              {text && <p className="mt-6 text-lg leading-relaxed opacity-80">{text}</p>}

              {/* Value checklist grid */}
              {values && values.length > 0 && (
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {values.map((value, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: accentLight }}
                      >
                        <Check className="h-3.5 w-3.5" style={{ color: accent }} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA button */}
              {ctaText && (
                <a
                  href={ctaLink || '#'}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                  onClick={!ctaLink ? (e: React.MouseEvent) => e.preventDefault() : undefined}
                >
                  {ctaText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </AnimateOnScroll>
          {image && (
            <AnimateOnScroll direction="right" delay={0.15}>
              <div className="relative">
                <img
                  src={image}
                  alt={heading || 'About'}
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Decorative accent border */}
                <div
                  className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl"
                  style={{ border: `3px solid ${accent}`, opacity: 0.3 }}
                />
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
