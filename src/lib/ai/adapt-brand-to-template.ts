import type { AstroBrandContent } from '@/types';

/**
 * Template-specific brand.json schema configurations.
 * Each Astro template has its own brand.json shape —
 * this adapter transforms the universal AstroBrandContent
 * into the specific schema a template expects.
 */

interface TemplateSchema {
  /** The key used for services/classes/offerings in brand.json */
  servicesKey: string;
  /** Extra fields to add to each service item */
  serviceExtras?: (svc: AstroBrandContent['services'][number], index: number) => Record<string, unknown>;
  /** Any template-specific transformations */
  transform?: (content: AstroBrandContent, output: Record<string, unknown>) => void;
}

const TEMPLATE_SCHEMAS: Record<string, TemplateSchema> = {
  yoga: {
    servicesKey: 'classes',
    serviceExtras: (svc) => ({
      level: svc.level || 'All Levels',
      duration: svc.duration || '60 min',
    }),
  },
  dental: {
    servicesKey: 'services',
    serviceExtras: (svc) => ({
      icon: svc.icon || '🦷',
    }),
  },
  catering: {
    servicesKey: 'offerings',
    serviceExtras: () => ({}),
  },
  'beauty-salon': {
    servicesKey: 'services',
    serviceExtras: () => ({}),
  },
  'real-estate': {
    servicesKey: 'services',
    serviceExtras: () => ({}),
    transform: (content, output) => {
      // Real estate uses "properties" instead of generic services
      output.properties = content.services.map((svc, i) => ({
        name: svc.name,
        desc: svc.desc,
        image: svc.image,
        price: `$${(350000 + i * 75000).toLocaleString()}`,
        beds: 3 + (i % 3),
        baths: 2 + (i % 2),
        sqft: `${1800 + i * 200}`,
        location: 'Downtown',
      }));
    },
  },
  nestora: {
    servicesKey: 'services',
    serviceExtras: () => ({}),
  },
  'gym-dark': {
    servicesKey: 'programs',
    serviceExtras: () => ({}),
  },
  'gym-modern': {
    servicesKey: 'classes',
    serviceExtras: (svc) => ({
      duration: svc.duration || '45 min',
    }),
  },
};

/**
 * Adapts universal AstroBrandContent to a template-specific brand.json.
 * If no specific schema is found for the template, returns the content as-is
 * with services mapped to a generic "services" key.
 */
export function adaptBrandToTemplate(
  content: AstroBrandContent,
  templateDir: string
): Record<string, unknown> {
  const schema = TEMPLATE_SCHEMAS[templateDir];

  // Start with the full universal content
  const output: Record<string, unknown> = {
    ...content,
  };

  // Remove universal 'services' — will be re-added with template-specific key
  delete output.services;

  if (schema) {
    // Map services to template-specific key
    const mappedServices = content.services.map((svc, i) => ({
      name: svc.name,
      desc: svc.desc,
      image: svc.image,
      ...(schema.serviceExtras ? schema.serviceExtras(svc, i) : {}),
    }));
    output[schema.servicesKey] = mappedServices;

    // Apply any custom transformations
    if (schema.transform) {
      schema.transform(content, output);
    }
  } else {
    // Default: keep as "services"
    output.services = content.services;
  }

  return output;
}

/**
 * Returns the list of template directories that have specific adapters.
 */
export function getSupportedTemplates(): string[] {
  return Object.keys(TEMPLATE_SCHEMAS);
}
