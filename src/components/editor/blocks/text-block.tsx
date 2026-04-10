'use client';

import type { Block } from '@/types';
import { AnimateOnScroll } from './animate-on-scroll';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export function TextBlock({ block }: { block: Block }) {
  const { heading, text } = block.content as { heading: string; text: string };
  const { backgroundColor, textColor, padding, variant } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-4xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}
        {text && (
          variant === 'generate' ? (
            <div className="mt-3">
              <TextGenerateEffect
                words={text}
                className="text-base leading-relaxed opacity-80 sm:text-lg"
                duration={0.4}
              />
            </div>
          ) : (
            <AnimateOnScroll delay={0.1}>
              <p className="mt-3 text-base leading-relaxed opacity-80 sm:text-lg">{text}</p>
            </AnimateOnScroll>
          )
        )}
      </div>
    </section>
  );
}
