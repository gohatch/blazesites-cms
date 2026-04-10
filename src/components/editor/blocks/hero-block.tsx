'use client';

import type { Block } from '@/types';
import { AnimateOnScroll } from './animate-on-scroll';
import { Spotlight } from '@/components/ui/spotlight';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';

function getLuminance(hex: string): number {
  const c = hex.replace('#', '');
  if (c.length !== 6) return 0.5;
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function HeroBlock({ block }: { block: Block }) {
  const { heading, subheading, ctaText, ctaLink, backgroundImage: contentBgImage, eyebrow } = block.content as Record<string, string>;
  const { backgroundColor, textColor, padding, backgroundImage: settingsBgImage, accentColor } = block.settings;
  const bgImage = settingsBgImage || contentBgImage;
  const isDark = backgroundColor ? getLuminance(backgroundColor) < 0.3 : false;

  // If dark background and no image — use Spotlight + HeroHighlight for premium effect
  if (isDark && !bgImage) {
    return (
      <HeroHighlight containerClassName="min-h-[420px] sm:min-h-[520px]" className="relative z-10">
        <div style={{ backgroundColor, color: textColor, padding }} className="relative flex min-h-[420px] w-full items-center sm:min-h-[520px]">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
            <div className="max-w-3xl">
              {eyebrow && (
                <AnimateOnScroll direction="up" duration={0.5}>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: accentColor || '#3b82f6' }} />
                    {eyebrow}
                  </div>
                </AnimateOnScroll>
              )}
              <AnimateOnScroll direction="up" duration={0.7}>
                {heading && (
                  <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl [overflow-wrap:break-word]">
                    {heading}
                  </h1>
                )}
              </AnimateOnScroll>
              {subheading && (
                <AnimateOnScroll direction="up" delay={0.15} duration={0.6}>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80 sm:text-xl">
                    {subheading}
                  </p>
                </AnimateOnScroll>
              )}
              {ctaText && (
                <AnimateOnScroll direction="up" delay={0.3} duration={0.5}>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a href={ctaLink || '#'} className="block-btn-accent text-center">
                      {ctaText}
                      <svg className="ml-2 -mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </AnimateOnScroll>
              )}
            </div>
          </div>
        </div>
      </HeroHighlight>
    );
  }

  // Background image hero with parallax effect and left-aligned content
  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
        ...(bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }
          : {}),
      }}
      className="relative flex min-h-[90vh] items-center"
    >
      {/* Gradient overlay for background images */}
      {bgImage && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
          }}
        />
      )}
      {!bgImage && <div className="block-gradient-overlay" />}
      {isDark && !bgImage && <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          {eyebrow && (
            <AnimateOnScroll direction="up" duration={0.5}>
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                style={bgImage ? { textShadow: '0 1px 8px rgba(0,0,0,0.3)' } : undefined}
              >
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: accentColor || '#3b82f6' }} />
                {eyebrow}
              </div>
            </AnimateOnScroll>
          )}

          <AnimateOnScroll direction="up" duration={0.7}>
            {heading && (
              <h1
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl [overflow-wrap:break-word]"
                style={bgImage ? { textShadow: '0 2px 20px rgba(0,0,0,0.3)', color: textColor || '#ffffff' } : undefined}
              >
                {heading}
              </h1>
            )}
          </AnimateOnScroll>

          {subheading && (
            <AnimateOnScroll direction="up" delay={0.15} duration={0.6}>
              <p
                className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
                style={bgImage ? { textShadow: '0 1px 8px rgba(0,0,0,0.3)', color: 'rgba(255,255,255,0.8)' } : { opacity: 0.8 }}
              >
                {subheading}
              </p>
            </AnimateOnScroll>
          )}

          {ctaText && (
            <AnimateOnScroll direction="up" delay={0.3} duration={0.5}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={ctaLink || '#'} className="block-btn-accent text-center">
                  {ctaText}
                  <svg className="ml-2 -mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
