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
  const { heading, subheading, ctaText, ctaLink } = block.content as Record<string, string>;
  const { backgroundColor, textColor, padding, backgroundImage, accentColor } = block.settings;
  const isDark = backgroundColor ? getLuminance(backgroundColor) < 0.3 : false;

  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
        padding,
        ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
      }}
      className="relative flex min-h-[280px] items-center overflow-hidden text-center"
    >
      {backgroundImage && <div className="block-gradient-overlay" />}
      {isDark && !backgroundImage && (
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={accentColor || '#ffffff'} />
      )}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6">
        <AnimateOnScroll>
          {heading && <h2 className="font-extrabold tracking-tight">{heading}</h2>}
        </AnimateOnScroll>
        {subheading && (
          <AnimateOnScroll delay={0.1}>
            <p className="mt-3 text-base opacity-80 sm:text-lg">{subheading}</p>
          </AnimateOnScroll>
        )}
        {ctaText && (
          <AnimateOnScroll delay={0.2}>
            <div className="mt-8">
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
                </MovingBorderButton>
              ) : (
                <a href={ctaLink || '#'} className="block-btn-accent inline-block">
                  {ctaText}
                </a>
              )}
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
