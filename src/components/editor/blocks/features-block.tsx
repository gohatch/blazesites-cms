'use client';

import type { Block } from '@/types';
import {
  Star, Zap, Shield, Briefcase, BarChart3, Laptop, Search, Target, Heart, Sun,
  Palette, Monitor, Megaphone, Layout, Code, Camera, Home, Building, Settings,
  ClipboardList, Users, Phone, Mail, Scissors, Sparkles, Globe, Clock, Award,
  Activity, Droplets, Dumbbell, Scale, Brain, Leaf, MapPin, Wrench, Hammer,
  ChevronRight,
} from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  star: Star, zap: Zap, shield: Shield, briefcase: Briefcase, chart: BarChart3,
  laptop: Laptop, search: Search, target: Target, heart: Heart, sun: Sun,
  palette: Palette, monitor: Monitor, megaphone: Megaphone, layout: Layout,
  code: Code, camera: Camera, home: Home, building: Building, settings: Settings,
  clipboard: ClipboardList, users: Users, phone: Phone, mail: Mail,
  scissors: Scissors, sparkles: Sparkles, globe: Globe, clock: Clock,
  award: Award, activity: Activity, droplets: Droplets, dumbbell: Dumbbell,
  scale: Scale, brain: Brain, leaf: Leaf, 'map-pin': MapPin, wrench: Wrench,
  hammer: Hammer,
};

export function FeaturesBlock({ block }: { block: Block }) {
  const { heading, subheading, eyebrow, features } = block.content as {
    heading: string;
    subheading: string;
    eyebrow?: string;
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
      <div className="mx-auto max-w-7xl px-6">
        {(heading || subheading || eyebrow) && (
          <AnimateOnScroll className="mx-auto mb-16 max-w-2xl text-center">
            {eyebrow && (
              <p
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: accentColor || 'var(--accent-color)' }}
              >
                {eyebrow}
              </p>
            )}
            {heading && <h2 className={`${eyebrow ? 'mt-3' : ''} text-3xl font-extrabold tracking-tight sm:text-4xl`}>{heading}</h2>}
            {subheading && <p className="mt-4 text-lg opacity-70">{subheading}</p>}
          </AnimateOnScroll>
        )}

        {/* Use Aceternity HoverEffect for hover variant */}
        {variant === 'hover' && features?.length >= 3 ? (
          <HoverEffect items={hoverItems} />
        ) : (
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {features?.map((feature, i) => {
              const Icon = iconMap[feature.icon] || Star;
              const isFeatured = variant === 'featured' && i === 0;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isFeatured ? 'ring-2' : ''}`}
                  style={isFeatured ? {
                    backgroundColor: accentColor || '#2563EB',
                    color: '#ffffff',
                  } as React.CSSProperties : undefined}
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: isFeatured ? 'rgba(255,255,255,0.2)' : (accentColor ? `${accentColor}15` : 'var(--accent-light, #EFF6FF)'),
                      color: isFeatured ? '#ffffff' : (accentColor || 'var(--accent-color, #2563EB)'),
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{feature.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    style={{ color: isFeatured ? '#ffffff' : (accentColor || 'var(--accent-color, #2563EB)') }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
