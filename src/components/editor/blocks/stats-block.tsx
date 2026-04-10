'use client';

import type { Block } from '@/types';
import { AnimatedCounter } from './animated-counter';
import { StaggerChildren } from './animate-on-scroll';

export function StatsBlock({ block }: { block: Block }) {
  const { stats } = block.content as { stats: Array<{ value: string; label: string }> };
  const { backgroundColor, textColor, padding, backgroundImage } = block.settings;

  return (
    <section
      style={{
        backgroundColor,
        color: textColor,
        padding,
        ...(backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}),
      }}
      className="relative"
    >
      {backgroundImage && <div className="block-gradient-overlay" />}
      <div className="relative mx-auto max-w-6xl px-6">
        <StaggerChildren className="block-grid-stats" staggerDelay={0.15}>
          {stats?.map((stat, i) => (
            <div
              key={i}
              className={`py-4 text-center ${i < stats.length - 1 ? 'sm:border-r sm:border-current/15' : ''}`}
            >
              <AnimatedCounter
                value={stat.value}
                className="text-3xl font-extrabold tracking-tight sm:text-5xl"
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-wider opacity-70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
