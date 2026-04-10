'use client';

import type { Block } from '@/types';
import { AnimateOnScroll } from './animate-on-scroll';

export function AboutBlock({ block }: { block: Block }) {
  const { heading, subheading, text, image } = block.content as {
    heading: string;
    subheading?: string;
    text: string;
    image: string;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={image ? 'block-grid items-center' : ''}>
          <AnimateOnScroll direction={image ? 'left' : 'up'}>
            <div>
              {subheading && (
                <p
                  className="mb-3 text-sm font-bold uppercase tracking-widest"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {subheading}
                </p>
              )}
              {heading && <h2 className="font-bold">{heading}</h2>}
              {text && <p className="mt-4 text-base leading-relaxed opacity-80 sm:text-lg">{text}</p>}
            </div>
          </AnimateOnScroll>
          {image && (
            <AnimateOnScroll direction="right" delay={0.15}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image}
                  alt={heading || 'About'}
                  className="w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  style={{ aspectRatio: '4/3' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
