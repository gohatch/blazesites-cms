'use client';

import type { Block } from '@/types';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';

export function PricingBlock({ block }: { block: Block }) {
  const { heading, plans } = block.content as {
    heading: string;
    plans: Array<{ name: string; price: string; features: string[] }>;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="mb-12 text-center font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}
        <StaggerChildren
          className={`block-grid ${plans?.length === 3 ? 'block-grid-3' : ''}`}
          staggerDelay={0.12}
        >
          {plans?.map((plan, i) => {
            const isFeatured = plans.length === 3 && i === 1;
            return (
              <div
                key={i}
                className={`block-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  isFeatured ? 'ring-2 sm:scale-105' : ''
                }`}
                style={isFeatured ? {
                  borderTop: '4px solid var(--accent-color, #2563EB)',
                } as React.CSSProperties : undefined}
              >
                {isFeatured && (
                  <span
                    className="mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: 'var(--accent-color, #2563EB)' }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-3 text-3xl font-extrabold sm:text-4xl">{plan.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features?.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm opacity-80">
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        style={{ color: 'var(--accent-color, currentColor)' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 text-sm font-semibold ${isFeatured ? 'block-btn-accent' : 'block-btn-outline'}`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
