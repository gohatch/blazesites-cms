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
  const { heading, subheading, ctaText, ctaLink, backgroundImage: contentBgImage } = block.content as Record<string, string>;
  const { backgroundColor, textColor, padding, backgroundImage: settingsBgImage, accentColor } = block.settings;
  const bgImage = settingsBgImage || contentBgImage;
  const isDark = backgroundColor ? getLuminance(backgroundColor) < 0.3 : false;

  // If dark background and no image — use Spotlight + HeroHighlight for premium effect
  if (isDark && !bgImage) {
    return (
      <HeroHighlight containerClassName="min-h-[420px] sm:min-h-[520px]" className="relative z-10">
        <div style={{ backgroundColor, color: textColor, padding }} className="relative flex min-h-[420px] w-full items-center text-center sm:min-h-[520px]">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
            <AnimateOnScroll direction="up" duration={0.7}>
              {heading && (
                <h1 className="font-extrabold leading-[1.1] tracking-tight [overflow-wrap:break-word]">
                  {heading}
                </h1>
              )}
            </AnimateOnScroll>
            {subheading && (
              <AnimateOnScroll direction="up" delay={0.15} duration={0.6}>
                <p className="mx-auto mt-5 max-w-2xl text-base opacity-80 sm:text-lg md:text-xl">
                  {subheading}
                </p>
              </AnimateOnScroll>
            )}
            {ctaText && (
              <AnimateOnScroll direction="up" delay={0.3} duration={0.5}>
                <a href={ctaLink || '#'} className="block-btn-accent mt-8 inline-block">
                  {ctaText}
                </a>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </HeroHighlight>
    );
  }

  // Default: background image hero with gradient overlay
  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
        padding,
        ...(bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
      }}
      className="relative flex min-h-[420px] items-center text-center sm:min-h-[520px]"
    >
      {bgImage && <div className="block-gradient-overlay" />}
      {isDark && <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
        <AnimateOnScroll direction="up" duration={0.7}>
          {heading && (
            <h1
              className="font-extrabold leading-[1.1] tracking-tight [overflow-wrap:break-word]"
              style={bgImage ? { textShadow: '0 2px 16px rgba(0,0,0,0.4)' } : undefined}
            >
              {heading}
            </h1>
          )}
        </AnimateOnScroll>
        {subheading && (
          <AnimateOnScroll direction="up" delay={0.15} duration={0.6}>
            <p className="mx-auto mt-5 max-w-2xl text-base opacity-80 sm:text-lg md:text-xl">
              {subheading}
            </p>
          </AnimateOnScroll>
        )}
        {ctaText && (
          <AnimateOnScroll direction="up" delay={0.3} duration={0.5}>
            <a href={ctaLink || '#'} className="block-btn-accent mt-8 inline-block">
              {ctaText}
            </a>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
