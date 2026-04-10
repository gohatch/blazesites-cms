import type { AstroBrandContent } from '@/types';
import type { Block } from '@/types';

/**
 * Converts AI-generated AstroBrandContent into editor blocks.
 * This allows Astro template content to be editable in the block editor.
 */
export function contentToBlocks(content: AstroBrandContent): Block[] {
  const blocks: Block[] = [];
  let order = 0;

  // Hero
  blocks.push({
    id: crypto.randomUUID(),
    type: 'hero',
    order: order++,
    content: {
      heading: content.hero.heading,
      subheading: content.hero.subheading,
      ctaText: content.hero.cta,
      ctaLink: '#contact',
      backgroundImage: content.hero.image,
    },
    settings: {
      backgroundColor: content.colors.primaryDark,
      textColor: '#ffffff',
      padding: '96px 0',
      backgroundImage: content.hero.image,
      overlayOpacity: 0.6,
    },
  });

  // About
  blocks.push({
    id: crypto.randomUUID(),
    type: 'about',
    order: order++,
    content: {
      heading: content.about.heading,
      text: content.about.body,
      image: content.about.image,
    },
    settings: {
      backgroundColor: '#f8f9fa',
      textColor: content.colors.text,
      padding: '80px 0',
      accentColor: content.colors.primary,
    },
  });

  // Features (from services)
  if (content.services?.length > 0) {
    blocks.push({
      id: crypto.randomUUID(),
      type: 'features',
      order: order++,
      content: {
        heading: 'Our Services',
        subheading: content.description,
        features: content.services.slice(0, 6).map((svc) => ({
          title: svc.name,
          description: svc.desc,
          icon: 'star',
        })),
      },
      settings: {
        backgroundColor: '#ffffff',
        textColor: content.colors.text,
        padding: '80px 0',
        accentColor: content.colors.primary,
      },
    });
  }

  // Stats
  if (content.stats?.length > 0) {
    blocks.push({
      id: crypto.randomUUID(),
      type: 'stats',
      order: order++,
      content: {
        stats: content.stats.map((s) => ({
          value: `${s.value}${s.suffix}`,
          label: s.label,
        })),
      },
      settings: {
        backgroundColor: content.colors.primary,
        textColor: '#ffffff',
        padding: '64px 0',
      },
    });
  }

  // Pricing
  if (content.pricing?.length > 0) {
    blocks.push({
      id: crypto.randomUUID(),
      type: 'pricing',
      order: order++,
      content: {
        heading: 'Pricing',
        plans: content.pricing.map((p) => ({
          name: p.name,
          price: `$${p.price}/${p.period}`,
          features: p.features,
          highlighted: p.highlight,
        })),
      },
      settings: {
        backgroundColor: '#ffffff',
        textColor: content.colors.text,
        padding: '80px 0',
        accentColor: content.colors.primary,
      },
    });
  }

  // Testimonials
  if (content.testimonials?.length > 0) {
    blocks.push({
      id: crypto.randomUUID(),
      type: 'testimonials',
      order: order++,
      content: {
        heading: 'What People Say',
        testimonials: content.testimonials.map((t) => ({
          quote: t.quote,
          author: t.name,
          role: t.role,
        })),
      },
      settings: {
        backgroundColor: '#f8f9fa',
        textColor: content.colors.text,
        padding: '80px 0',
      },
    });
  }

  // CTA
  blocks.push({
    id: crypto.randomUUID(),
    type: 'cta',
    order: order++,
    content: {
      heading: content.cta.heading,
      subheading: content.cta.subheading,
      ctaText: content.cta.primary,
      ctaLink: '#contact',
    },
    settings: {
      backgroundColor: content.colors.primaryDark,
      textColor: '#ffffff',
      padding: '64px 0',
    },
  });

  // Contact
  blocks.push({
    id: crypto.randomUUID(),
    type: 'contact',
    order: order++,
    content: {
      heading: content.contact.heading,
      fields: ['name', 'email', 'phone', 'message'],
      submitText: 'Send Message',
      email: content.email,
      phone: content.phone,
      address: content.address,
    },
    settings: {
      backgroundColor: '#ffffff',
      textColor: content.colors.text,
      padding: '80px 0',
      accentColor: content.colors.primary,
    },
  });

  // Footer
  blocks.push({
    id: crypto.randomUUID(),
    type: 'footer',
    order: order++,
    content: {
      companyName: content.name,
      tagline: content.footer.tagline,
      links: content.nav,
      email: content.email,
      phone: content.phone,
    },
    settings: {
      backgroundColor: content.colors.primaryDark,
      textColor: '#cccccc',
      padding: '48px 0',
    },
  });

  return blocks;
}
