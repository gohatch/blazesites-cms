'use client';

import type { Block } from '@/types';
import { Star, Zap, Shield, Briefcase, BarChart3, Laptop, Search, Target, Heart, Sun, Palette, Monitor, Megaphone, Layout, Code, Camera } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  star: Star, zap: Zap, shield: Shield, briefcase: Briefcase, chart: BarChart3,
  laptop: Laptop, search: Search, target: Target, heart: Heart, sun: Sun,
  palette: Palette, monitor: Monitor, megaphone: Megaphone, layout: Layout,
  code: Code, camera: Camera,
};

export function FeaturesBlock({ block }: { block: Block }) {
  const { heading, subheading, features } = block.content as {
    heading: string;
    subheading: string;
    features: Array<{ title: string; description: string; icon: string }>;
  };
  const { backgroundColor, textColor, padding, variant, accentColor } = block.settings;

  // Convert features to HoverEffect format for the hover variant
  const hoverItems = features?.map((f) => ({
    title: f.title,
    description: f.description,
    link: '#',
  })) || [];

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-6xl px-6">
        {(heading || subheading) && (
          <AnimateOnScroll className="mx-auto mb-12 max-w-2xl text-center">
            {heading && <h2 className="font-bold">{heading}</h2>}
            {subheading && <p className="mt-3 text-base opacity-70 sm:text-lg">{subheading}</p>}
          </AnimateOnScroll>
        )}

        {/* Use Aceternity HoverEffect for hover variant */}
        {variant === 'hover' && features?.length >= 3 ? (
          <HoverEffect items={hoverItems} />
        ) : (
          <StaggerChildren className="block-grid block-grid-3" staggerDelay={0.1}>
            {features?.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Star;
              const isFeatured = variant === 'featured' && i === 0;
              return (
                <div
                  key={i}
                  className={`block-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${isFeatured ? 'ring-2' : ''}`}
                  style={isFeatured ? {
                    backgroundColor: accentColor || '#2563EB',
                    color: '#ffffff',
                  } as React.CSSProperties : undefined}
                >
                  <div className="block-icon-container">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{feature.description}</p>
                </div>
              );
            })}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
