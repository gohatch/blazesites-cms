'use client';

import type { Block } from '@/types';
import { User } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';

export function TeamBlock({ block }: { block: Block }) {
  const { heading, members } = block.content as {
    heading: string;
    members: Array<{ name: string; role: string; image: string }>;
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
        <StaggerChildren className="block-grid block-grid-3" staggerDelay={0.12}>
          {members?.map((member, i) => (
            <div key={i} className="block-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full shadow-lg ring-4 ring-white/20 sm:h-28 sm:w-28"
                style={{ backgroundColor: 'var(--accent-color-light, rgba(0,0,0,0.1))' }}
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-8 w-8 opacity-40 sm:h-12 sm:w-12" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold">{member.name}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent-color, inherit)', opacity: 0.8 }}>
                {member.role}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
