import type { TemplateData, BrandProfile, Block } from '@/types';

export function applyBrandToTemplate(
  templateData: TemplateData,
  brand: BrandProfile
): TemplateData {
  // Deep clone to avoid mutations
  const data: TemplateData = JSON.parse(JSON.stringify(templateData));

  for (const page of data.pages) {
    for (const block of page.blocks) {
      applyColorsToBlock(block, brand);
      applyContentToBlock(block, brand, page.slug);
    }
  }

  return data;
}

function getLuminance(hex: string): number {
  const cleaned = hex.replace('#', '');
  if (cleaned.length !== 6) return 0.5;
  const r = parseInt(cleaned.slice(0, 2), 16) / 255;
  const g = parseInt(cleaned.slice(2, 4), 16) / 255;
  const b = parseInt(cleaned.slice(4, 6), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function applyColorsToBlock(block: Block, brand: BrandProfile) {
  const bg = block.settings.backgroundColor;
  if (!bg) return;

  const luminance = getLuminance(bg);
  const isDark = luminance < 0.3;

  if (isDark) {
    // Dark section — use primary brand color as bg for hero/CTA, keep dark for others
    if (block.type === 'hero' || block.type === 'cta') {
      block.settings.backgroundColor = brand.colors.primary;
    }
    block.settings.textColor = '#ffffff';
  } else if (luminance > 0.85) {
    block.settings.backgroundColor = brand.colors.background || '#ffffff';
    block.settings.textColor = brand.colors.text || '#1a1a1a';
  } else {
    block.settings.backgroundColor = brand.colors.secondary || brand.colors.background || bg;
    block.settings.textColor = brand.colors.text || '#1a1a1a';
  }

  // Propagate accent color to all blocks
  block.settings.accentColor = brand.colors.accent || brand.colors.primary;
}

function applyContentToBlock(
  block: Block,
  brand: BrandProfile,
  pageSlug: string
) {
  const content = block.content as Record<string, unknown>;

  switch (block.type) {
    case 'hero':
      // Only replace hero heading on homepage
      if (pageSlug === '/' && brand.content.tagline) {
        content.heading = brand.content.tagline;
      }
      // Apply hero background image
      if (pageSlug === '/' && brand.images?.hero) {
        content.backgroundImage = brand.images.hero;
      }
      break;

    case 'about':
      if (brand.content.about) {
        content.text = brand.content.about;
      }
      if (brand.images?.about) {
        content.image = brand.images.about;
      }
      break;

    case 'gallery':
      if (brand.images?.gallery && brand.images.gallery.length > 0) {
        content.images = brand.images.gallery.map((src, i) => ({
          src,
          alt: `${brand.businessName} image ${i + 1}`,
        }));
      }
      break;

    case 'footer':
      if (brand.businessName) content.companyName = brand.businessName;
      if (brand.contact.email) content.email = brand.contact.email;
      if (brand.contact.phone) content.phone = brand.contact.phone;
      if (brand.businessName) {
        content.tagline = `${brand.businessName} — professional services you can trust.`;
      }
      break;

    case 'contact':
      // Keep form structure, no content changes needed
      break;

    case 'features':
      // Map services to feature titles if available
      if (brand.content.services && brand.content.services.length > 0) {
        const features = content.features as Array<{
          title: string;
          description: string;
          icon: string;
        }>;
        if (features) {
          for (let i = 0; i < Math.min(features.length, brand.content.services.length); i++) {
            features[i].title = brand.content.services[i];
          }
        }
      }
      break;
  }
}
