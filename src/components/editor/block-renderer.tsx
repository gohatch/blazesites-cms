'use client';

import type { Block } from '@/types';
import { HeroBlock } from './blocks/hero-block';
import { FeaturesBlock } from './blocks/features-block';
import { AboutBlock } from './blocks/about-block';
import { TestimonialsBlock } from './blocks/testimonials-block';
import { ContactBlock } from './blocks/contact-block';
import { CtaBlock } from './blocks/cta-block';
import { FooterBlock } from './blocks/footer-block';
import { StatsBlock } from './blocks/stats-block';
import { TextBlock } from './blocks/text-block';
import { PricingBlock } from './blocks/pricing-block';
import { FaqBlock } from './blocks/faq-block';
import { TeamBlock } from './blocks/team-block';
import { ImageBlock } from './blocks/image-block';
import { GalleryBlock } from './blocks/gallery-block';

const blockComponents: Record<string, React.ComponentType<{ block: Block }>> = {
  hero: HeroBlock,
  features: FeaturesBlock,
  about: AboutBlock,
  testimonials: TestimonialsBlock,
  contact: ContactBlock,
  cta: CtaBlock,
  footer: FooterBlock,
  stats: StatsBlock,
  text: TextBlock,
  pricing: PricingBlock,
  faq: FaqBlock,
  team: TeamBlock,
  image: ImageBlock,
  gallery: GalleryBlock,
};

function scalePadding(padding: string | undefined): string {
  if (!padding) return '';
  // Parse "96px 0" or "80px 0" style values and halve vertical on mobile
  const parts = padding.split(' ').map((p) => p.trim());
  const top = parseInt(parts[0]) || 0;
  const right = parts[1] || '0';
  const bottom = parts.length > 2 ? parseInt(parts[2]) || top : top;
  const left = parts.length > 3 ? parts[3] : right;
  return `${Math.round(top * 0.5)}px ${right} ${Math.round(bottom * 0.5)}px ${left}`;
}

export function BlockRenderer({ block }: { block: Block }) {
  const Component = blockComponents[block.type];

  if (!Component) {
    return (
      <div className="flex items-center justify-center bg-muted p-12 text-muted-foreground">
        Unknown block type: {block.type}
      </div>
    );
  }

  const s = block.settings || {};
  const mobilePadding = scalePadding(s.padding);
  const desktopPadding = s.padding || '';

  // Map borderRadius token to CSS value
  const radiusMap: Record<string, string> = {
    none: '0', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', '2xl': '1rem',
  };

  const cssVars: Record<string, string> = {
    '--mobile-padding': mobilePadding,
    '--desktop-padding': desktopPadding,
  };
  if (s.accentColor) {
    cssVars['--accent-color'] = s.accentColor;
    cssVars['--accent-color-light'] = s.accentColor + '18'; // ~10% opacity
  }
  if (s.overlayOpacity != null) {
    cssVars['--overlay-opacity'] = String(s.overlayOpacity / 100);
  }
  if (s.borderRadius && radiusMap[s.borderRadius]) {
    cssVars['--card-radius'] = radiusMap[s.borderRadius];
  }

  return (
    <div className="block-container" style={cssVars as React.CSSProperties}>
      <Component block={block} />
    </div>
  );
}
