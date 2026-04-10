'use client';

import type { Block } from '@/types';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';

export function FaqBlock({ block }: { block: Block }) {
  const { heading, items } = block.content as {
    heading: string;
    items: Array<{ question: string; answer: string }>;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-3xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="mb-12 text-center font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}
        <StaggerChildren className="space-y-3" staggerDelay={0.08}>
          {items?.map((item, i) => (
            <details
              key={i}
              className="block-card group overflow-hidden transition-shadow duration-300 [&[open]]:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold sm:p-6 sm:text-base [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                  style={{ color: 'var(--accent-color, currentColor)' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed opacity-70 sm:px-6 sm:pb-6">
                {item.answer}
              </div>
            </details>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
