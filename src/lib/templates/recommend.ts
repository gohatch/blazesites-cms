import type { Template, IndustryCategory } from '@/types';

// Related industry mappings for partial match scoring
const RELATED_INDUSTRIES: Record<string, string[]> = {
  'Health & Wellness': ['Fitness & Sports', 'Beauty & Salon'],
  'Fitness & Sports': ['Health & Wellness'],
  'Beauty & Salon': ['Health & Wellness'],
  'Dental': ['Health & Wellness'],
  'Food & Dining': [],
  'Real Estate': ['Construction'],
  'Construction': ['Real Estate'],
  'Legal': [],
  'Education': ['Technology'],
  'Technology': ['Education', 'Marketing & Agency'],
  'Retail & E-Commerce': ['Beauty & Salon'],
  'Automotive': ['Construction'],
  'Photography': ['Marketing & Agency'],
  'Marketing & Agency': ['Technology', 'Photography'],
  'General Business': [],
};

interface ScoredTemplate {
  template: Template;
  score: number;
  matchReason: string;
}

export function recommendTemplates(
  industry: IndustryCategory | string,
  allTemplates: Template[]
): ScoredTemplate[] {
  const related = RELATED_INDUSTRIES[industry] || [];

  const scored: ScoredTemplate[] = allTemplates.map((template) => {
    let score = 0;
    let matchReason = '';
    const tags = template.industry_tags || [];

    // Exact industry match
    if (tags.some((tag) => tag.toLowerCase() === industry.toLowerCase())) {
      score += 10;
      matchReason = `Perfect match for ${industry}`;
    }
    // Related industry match
    else if (tags.some((tag) => related.some((r) => r.toLowerCase() === tag.toLowerCase()))) {
      score += 5;
      matchReason = 'Related industry';
    }

    // Astro premium boost
    if (template.template_type === 'astro') {
      score += 2;
      if (!matchReason) matchReason = 'Premium template';
    }

    // Style tag bonuses (more generic templates score slightly)
    const styleBonus = (template.style_tags || []).length > 0 ? 1 : 0;
    score += styleBonus;

    if (!matchReason && score > 0) matchReason = 'Recommended';
    if (!matchReason) matchReason = 'Available';

    return { template, score, matchReason };
  });

  // Sort by score descending, then by name
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.template.name.localeCompare(b.template.name);
  });

  return scored;
}
