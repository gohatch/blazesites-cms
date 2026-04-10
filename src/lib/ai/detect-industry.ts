import type { IndustryCategory } from '@/types';

interface IndustrySignal {
  industry: IndustryCategory;
  keywords: string[];
  weight: number;
}

const INDUSTRY_SIGNALS: IndustrySignal[] = [
  {
    industry: 'Dental',
    keywords: ['dental', 'dentist', 'orthodont', 'teeth', 'oral health', 'braces', 'implant', 'crown', 'filling', 'root canal', 'periodon', 'endodont', 'whitening'],
    weight: 1,
  },
  {
    industry: 'Health & Wellness',
    keywords: ['yoga', 'meditation', 'wellness', 'mindfulness', 'holistic', 'pilates', 'spa', 'massage', 'acupuncture', 'naturopath', 'chiropractic', 'therapy', 'counseling', 'mental health'],
    weight: 1,
  },
  {
    industry: 'Fitness & Sports',
    keywords: ['gym', 'fitness', 'crossfit', 'workout', 'personal training', 'boxing', 'martial arts', 'athletic', 'bodybuilding', 'sport', 'exercise'],
    weight: 1,
  },
  {
    industry: 'Real Estate',
    keywords: ['real estate', 'property', 'realty', 'homes for sale', 'mortgage', 'listing', 'broker', 'apartment', 'condo', 'rental', 'house', 'commercial property'],
    weight: 1,
  },
  {
    industry: 'Food & Dining',
    keywords: ['restaurant', 'cafe', 'catering', 'bakery', 'food', 'menu', 'dining', 'chef', 'cuisine', 'bistro', 'bar', 'grill', 'pizza', 'sushi', 'brunch'],
    weight: 1,
  },
  {
    industry: 'Beauty & Salon',
    keywords: ['salon', 'beauty', 'hair', 'nail', 'barber', 'skincare', 'makeup', 'lash', 'brow', 'waxing', 'facial', 'esthetician', 'cosmetolog'],
    weight: 1,
  },
  {
    industry: 'Construction',
    keywords: ['construction', 'contractor', 'building', 'renovation', 'remodel', 'roofing', 'plumbing', 'electrical', 'hvac', 'landscaping', 'paving', 'demolition'],
    weight: 1,
  },
  {
    industry: 'Legal',
    keywords: ['attorney', 'lawyer', 'law firm', 'legal', 'litigation', 'court', 'paralegal', 'notary', 'immigration', 'bankruptcy', 'criminal defense'],
    weight: 1,
  },
  {
    industry: 'Education',
    keywords: ['school', 'university', 'college', 'tutoring', 'academy', 'learning', 'course', 'training', 'education', 'curriculum', 'enrollment'],
    weight: 1,
  },
  {
    industry: 'Technology',
    keywords: ['software', 'saas', 'app', 'technology', 'developer', 'startup', 'ai', 'cloud', 'cybersecurity', 'it services', 'web development'],
    weight: 1,
  },
  {
    industry: 'Retail & E-Commerce',
    keywords: ['shop', 'store', 'boutique', 'retail', 'e-commerce', 'clothing', 'fashion', 'jewelry', 'merchandise', 'wholesale'],
    weight: 1,
  },
  {
    industry: 'Automotive',
    keywords: ['auto', 'car', 'vehicle', 'mechanic', 'body shop', 'dealership', 'tire', 'oil change', 'transmission', 'detailing'],
    weight: 1,
  },
  {
    industry: 'Photography',
    keywords: ['photography', 'photographer', 'photo studio', 'videography', 'portrait', 'wedding photo', 'headshot', 'drone'],
    weight: 1,
  },
  {
    industry: 'Marketing & Agency',
    keywords: ['marketing', 'agency', 'branding', 'seo', 'social media', 'advertising', 'creative agency', 'digital marketing', 'pr ', 'public relations'],
    weight: 1,
  },
];

export function detectIndustry(text: string): { industry: IndustryCategory; confidence: number } {
  const lower = text.toLowerCase();
  const scores = new Map<IndustryCategory, number>();

  for (const signal of INDUSTRY_SIGNALS) {
    let score = 0;
    for (const keyword of signal.keywords) {
      // Count occurrences (capped at 5 to avoid single-keyword dominance)
      const regex = new RegExp(keyword, 'gi');
      const matches = lower.match(regex);
      if (matches) {
        score += Math.min(matches.length, 5) * signal.weight;
      }
    }
    if (score > 0) {
      scores.set(signal.industry, score);
    }
  }

  if (scores.size === 0) {
    return { industry: 'General Business', confidence: 0 };
  }

  // Sort by score descending
  const sorted = [...scores.entries()].sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const secondScore = sorted[1]?.[1] ?? 0;

  // Confidence: how much the top score leads over the second
  const confidence = secondScore > 0 ? Math.min((topScore - secondScore) / topScore, 1) : 1;

  return {
    industry: sorted[0][0],
    confidence: Math.round(confidence * 100) / 100,
  };
}

export const INDUSTRY_OPTIONS: IndustryCategory[] = [
  'Health & Wellness',
  'Fitness & Sports',
  'Real Estate',
  'Food & Dining',
  'Beauty & Salon',
  'Dental',
  'Construction',
  'Legal',
  'Education',
  'Technology',
  'Retail & E-Commerce',
  'Automotive',
  'Photography',
  'Marketing & Agency',
  'General Business',
];
