'use client';

import type { Block } from '@/types';
import { Quote } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

export function TestimonialsBlock({ block }: { block: Block }) {
  const { heading, eyebrow, testimonials } = block.content as {
    heading: string;
    eyebrow?: string;
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
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            {(eyebrow || !heading) && (
              <p
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent-color, currentColor)' }}
              >
                {eyebrow || 'Testimonials'}
              </p>
            )}
            {heading && (
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
            )}
          </div>
        </AnimateOnScroll>

        {/* Use InfiniteMovingCards only for explicit marquee variant */}
        {variant === 'marquee' && movingItems.length > 0 ? (
          <AnimateOnScroll>
            <div className="mt-16">
              <InfiniteMovingCards
                items={movingItems}
                direction="left"
                speed="slow"
                pauseOnHover
              />
            </div>
          </AnimateOnScroll>
        ) : (
          <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {testimonials?.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* SVG quote mark */}
                <svg
                  className="mb-4 h-8 w-8"
                  style={{ color: 'var(--accent-color, currentColor)', opacity: 0.3 }}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-light-color, #64748B)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm" style={{ color: 'var(--text-light-color, #64748B)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
