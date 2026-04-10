'use client';

import type { Block } from '@/types';
import { AnimateOnScroll } from './animate-on-scroll';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';
import { Spotlight } from '@/components/ui/spotlight';

function getLuminance(hex: string): number {
  const c = hex.replace('#', '');
  if (c.length !== 6) return 0.5;
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function CtaBlock({ block }: { block: Block }) {
  const { heading, subheading, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink } = block.content as Record<string, string>;
  const { backgroundColor, textColor, padding, backgroundImage, accentColor } = block.settings;
  const isDark = backgroundColor ? getLuminance(backgroundColor) < 0.3 : false;

  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
        ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
      }}
      className="relative overflow-hidden py-24 text-center sm:py-32"
    >
      {backgroundImage && <div className="block-gradient-overlay" />}

      {/* Decorative accent circles */}
      {!backgroundImage && (
        <>
          <div
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-10"
            style={{ backgroundColor: accentColor || '#3b82f6' }}
          />
          <div
            className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-10"
            style={{ backgroundColor: accentColor || '#3b82f6' }}
          />
        </>
      )}

      {isDark && !backgroundImage && (
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />
      )}

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6">
        <AnimateOnScroll>
          {heading && (
            <h2
              className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl"
              style={isDark ? { color: '#ffffff' } : undefined}
            >
              {heading}
            </h2>
          )}
        </AnimateOnScroll>
        {subheading && (
          <AnimateOnScroll delay={0.1}>
            <p
              className="mt-5 text-lg"
              style={isDark ? { color: 'rgba(255,255,255,0.7)' } : { opacity: 0.8 }}
            >
              {subheading}
            </p>
          </AnimateOnScroll>
        )}
        {ctaText && (
          <AnimateOnScroll delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {isDark ? (
                <MovingBorderButton
                  as="a"
                  borderRadius="0.75rem"
                  containerClassName="h-12 w-auto"
                  className="px-8 py-3 text-sm font-semibold text-white"
                  borderClassName={`bg-[radial-gradient(${accentColor || '#3b82f6'}_40%,transparent_60%)]`}
                  duration={2500}
                >
                  {ctaText}
                  <svg className="ml-2 -mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </MovingBorderButton>
              ) : (
                <a href={ctaLink || '#'} className="block-btn-accent inline-block">
                  {ctaText}
                  <svg className="ml-2 -mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
              {secondaryCtaText && (
                <a
                  href={secondaryCtaLink || '#'}
                  className="inline-block rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
                  style={
                    isDark
                      ? { borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }
                      : { borderColor: 'rgba(0,0,0,0.15)', color: 'inherit' }
                  }
                  onMouseEnter={(e) => {
                    if (isDark) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = '#ffffff';
                    } else {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    if (isDark) e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
