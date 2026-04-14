/**
 * Static mapping of template names to the sections/components each template supports.
 * Derived from scanning each template's `src/components/` directory.
 */
export const templateCapabilities: Record<string, string[]> = {
  agency: ['hero', 'about', 'services', 'stats', 'testimonials', 'pricing', 'cta', 'contact', 'footer', 'work'],
  architecture: ['hero', 'about', 'benefits', 'stats', 'testimonials', 'cta', 'contact', 'footer', 'projects', 'team'],
  'beauty-salon': ['hero', 'about', 'services', 'testimonials', 'pricing', 'team', 'cta', 'contact', 'footer'],
  burger: ['hero', 'about', 'features', 'testimonials', 'cta', 'contact', 'footer'],
  catering: ['hero', 'about', 'testimonials', 'cta', 'footer', 'gallery'],
  construction: ['hero', 'about', 'features', 'stats', 'testimonials', 'cta', 'contact', 'footer'],
  consulting: ['hero', 'about', 'services', 'testimonials', 'cta', 'contact', 'footer'],
  dental: ['hero', 'about', 'features', 'stats', 'testimonials', 'cta', 'contact', 'footer', 'blog'],
  ecommerce: ['hero', 'about', 'services', 'testimonials', 'cta', 'contact', 'footer'],
  education: ['hero', 'about', 'stats', 'testimonials', 'pricing', 'team', 'cta', 'contact', 'footer'],
  'gym-dark': ['hero', 'about', 'features', 'testimonials', 'team', 'cta', 'footer'],
  'gym-modern': ['hero', 'testimonials', 'pricing', 'team', 'cta', 'footer', 'gallery'],
  'law-firm': ['hero', 'about', 'stats', 'testimonials', 'team', 'cta', 'contact', 'footer'],
  nestora: ['hero', 'about', 'services', 'testimonials', 'team', 'faq', 'cta', 'footer'],
  photography: ['hero', 'about', 'services', 'stats', 'testimonials', 'pricing', 'cta', 'contact', 'footer', 'gallery'],
  'photography-vintage': ['hero', 'about', 'services', 'stats', 'testimonials', 'pricing', 'cta', 'contact', 'footer', 'work'],
  physio: ['hero', 'about', 'services', 'benefits', 'stats', 'testimonials', 'team', 'cta', 'contact', 'footer', 'blog'],
  'real-estate': ['hero', 'about', 'services', 'testimonials', 'team', 'faq', 'cta', 'footer'],
  restaurant: ['hero', 'about', 'features', 'testimonials', 'cta', 'contact', 'footer', 'gallery'],
  roofing: ['hero', 'about', 'benefits', 'features', 'stats', 'testimonials', 'cta', 'contact', 'footer', 'projects'],
  saas: ['hero', 'features', 'testimonials', 'cta', 'footer', 'blog'],
  yoga: ['hero', 'about', 'benefits', 'stats', 'testimonials', 'pricing', 'cta', 'contact', 'footer'],
};

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
