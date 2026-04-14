/**
 * Static mapping of template names to their supported sections and default rendering order.
 * Header and Footer are always first/last and not included in the order array.
 */

interface TemplateCapability {
  sections: string[];
  defaultOrder: string[];
}

export const templateCapabilities: Record<string, TemplateCapability> = {
  architecture: {
    sections: ['hero', 'about', 'projects', 'team', 'benefits', 'stats', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'about', 'projects', 'team', 'cta'],
  },
  'beauty-salon': {
    sections: ['hero', 'about', 'services', 'testimonials', 'pricing', 'team', 'cta', 'contact'],
    defaultOrder: ['hero', 'about', 'services', 'team', 'testimonials', 'pricing', 'cta', 'contact'],
  },
  burger: {
    sections: ['hero', 'about', 'features', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'features', 'about', 'testimonials', 'cta', 'contact'],
  },
  catering: {
    sections: ['hero', 'about', 'services', 'stats', 'testimonials', 'gallery', 'cta'],
    defaultOrder: ['hero', 'stats', 'about', 'services', 'gallery', 'testimonials', 'cta'],
  },
  construction: {
    sections: ['hero', 'features', 'stats', 'about', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'features', 'stats', 'about', 'testimonials', 'cta'],
  },
  dental: {
    sections: ['hero', 'about', 'features', 'stats', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'about', 'features', 'stats', 'testimonials', 'cta', 'contact'],
  },
  education: {
    sections: ['hero', 'about', 'features', 'stats', 'testimonials', 'pricing', 'team', 'cta', 'contact'],
    defaultOrder: ['hero', 'features', 'about', 'stats', 'team', 'testimonials', 'pricing', 'cta', 'contact'],
  },
  'gym-dark': {
    sections: ['hero', 'about', 'features', 'programs', 'testimonials', 'team', 'cta'],
    defaultOrder: ['hero', 'features', 'about', 'programs', 'team', 'testimonials', 'cta'],
  },
  'gym-modern': {
    sections: ['hero', 'features', 'about', 'testimonials', 'pricing', 'team', 'cta'],
    defaultOrder: ['hero', 'features', 'team', 'about', 'pricing', 'testimonials', 'cta'],
  },
  'law-firm': {
    sections: ['hero', 'about', 'features', 'stats', 'testimonials', 'team', 'cta', 'contact'],
    defaultOrder: ['hero', 'features', 'about', 'stats', 'team', 'testimonials', 'cta', 'contact'],
  },
  nestora: {
    sections: ['hero', 'about', 'services', 'stats', 'testimonials', 'team', 'faq', 'cta'],
    defaultOrder: ['hero', 'stats', 'about', 'services', 'testimonials', 'team', 'faq', 'cta'],
  },
  photography: {
    sections: ['hero', 'about', 'gallery', 'stats', 'testimonials', 'contact'],
    defaultOrder: ['hero', 'gallery', 'about', 'stats', 'testimonials', 'contact'],
  },
  'photography-vintage': {
    sections: ['hero', 'about', 'services', 'gallery', 'stats', 'testimonials', 'pricing', 'cta', 'contact'],
    defaultOrder: ['hero', 'about', 'services', 'gallery', 'stats', 'testimonials', 'pricing', 'cta', 'contact'],
  },
  physio: {
    sections: ['hero', 'about', 'services', 'benefits', 'stats', 'testimonials', 'team', 'cta', 'contact'],
    defaultOrder: ['hero', 'stats', 'services', 'about', 'benefits', 'team', 'testimonials', 'cta', 'contact'],
  },
  'real-estate': {
    sections: ['hero', 'about', 'services', 'stats', 'testimonials', 'team', 'faq', 'cta'],
    defaultOrder: ['hero', 'stats', 'about', 'services', 'testimonials', 'team', 'faq', 'cta'],
  },
  restaurant: {
    sections: ['hero', 'about', 'features', 'gallery', 'testimonials', 'cta'],
    defaultOrder: ['hero', 'about', 'features', 'gallery', 'testimonials', 'cta'],
  },
  roofing: {
    sections: ['hero', 'features', 'about', 'benefits', 'stats', 'projects', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'features', 'about', 'stats', 'projects', 'testimonials', 'cta', 'contact'],
  },
  saas: {
    sections: ['hero', 'features', 'about', 'testimonials', 'cta'],
    defaultOrder: ['hero', 'features', 'about', 'testimonials', 'cta'],
  },
  'toms-yoga': {
    sections: ['hero', 'about', 'features', 'benefits', 'stats', 'testimonials', 'cta', 'contact'],
    defaultOrder: ['hero', 'about', 'features', 'benefits', 'stats', 'testimonials', 'cta', 'contact'],
  },
  yoga: {
    sections: ['hero', 'about', 'stats', 'classes', 'benefits', 'pricing', 'cta', 'testimonials', 'contact'],
    defaultOrder: ['hero', 'about', 'stats', 'classes', 'benefits', 'pricing', 'cta', 'testimonials', 'contact'],
  },
};

/** Get the default section order for a template */
export function getDefaultSectionOrder(templateDir: string): string[] {
  return templateCapabilities[templateDir]?.defaultOrder || ['hero', 'about', 'features', 'stats', 'testimonials', 'cta'];
}

/** Get supported sections for a template */
export function getTemplateSections(templateDir: string): string[] {
  return templateCapabilities[templateDir]?.sections || [];
}

/** Sections that AI can generate content for. */
export const generatableSections = [
  'team',
  'faq',
  'testimonials',
  'stats',
  'pricing',
  'benefits',
  'services',
] as const;

export type GeneratableSection = (typeof generatableSections)[number];
