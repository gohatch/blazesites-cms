'use client';

import type { Block } from '@/types';
import { Quote } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function TestimonialsBlock({ block }: { block: Block }) {
  const { heading, testimonials } = block.content as {
    heading: string;
    testimonials: Array<{ quote: string; author: string; role: string }>;
  };
  const { backgroundColor, textColor, padding, variant } = block.settings;

  // Convert to InfiniteMovingCards format
  const movingItems = testimonials?.map((t) => ({
    quote: t.quote,
    name: t.author,
    title: t.role,
  })) || [];

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="mb-12 text-center font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}

        {/* Use InfiniteMovingCards for marquee variant or when 3+ testimonials */}
        {(variant === 'marquee' || (testimonials && testimonials.length >= 3)) && movingItems.length > 0 ? (
          <AnimateOnScroll>
            <InfiniteMovingCards
              items={movingItems}
              direction="left"
              speed="slow"
              pauseOnHover
            />
          </AnimateOnScroll>
        ) : (
          <StaggerChildren className="block-grid" staggerDelay={0.15}>
            {testimonials?.map((t, i) => (
              <div key={i} className="block-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <Quote
                  className="mb-4 h-8 w-8 sm:h-10 sm:w-10"
                  style={{ color: 'var(--accent-color, currentColor)', opacity: 0.6 }}
                />
                <p className="text-base italic leading-relaxed opacity-80 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="block-accent-bar mb-3" />
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm opacity-60">{t.role}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
