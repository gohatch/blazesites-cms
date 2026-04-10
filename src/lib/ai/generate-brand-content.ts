import Anthropic from '@anthropic-ai/sdk';
import type { BrandProfile, AstroBrandContent, ManualInput, IndustryCategory } from '@/types';
import { detectIndustry } from './detect-industry';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface GenerateInput {
  scraped?: BrandProfile;
  manual?: ManualInput;
  industry?: IndustryCategory;
  location?: string;
}

const BRAND_CONTENT_SCHEMA = `{
  "name": "string — business name",
  "tagline": "string — short catchy tagline (under 10 words)",
  "description": "string — 1-2 sentence business description",
  "phone": "string — formatted phone number",
  "email": "string — contact email",
  "address": "string — full address",
  "colors": {
    "primary": "#hex — main brand color",
    "primaryDark": "#hex — darker shade for headings/footer",
    "primaryLight": "#hex — lighter shade for hover/accents",
    "accent": "#hex — secondary accent color",
    "bg": "#hex — light page background",
    "bgDark": "#hex — slightly darker background for cards",
    "white": "#FFFFFF",
    "text": "#hex — main body text color (dark)",
    "textLight": "#hex — secondary text color (muted)",
    "border": "#hex — subtle border color"
  },
  "fonts": {
    "heading": "string — Google Font name for headings (e.g., 'Playfair Display')",
    "body": "string — Google Font name for body text (e.g., 'Inter')"
  },
  "nav": [{ "label": "string", "href": "#section-id" }],
  "hero": {
    "eyebrow": "string — small text above heading",
    "heading": "string — main hero heading (4-8 words)",
    "subheading": "string — supporting paragraph (15-25 words)",
    "cta": "string — primary button text",
    "ctaSecondary": "string — secondary button text",
    "image": "string — Unsplash URL for hero image"
  },
  "about": {
    "eyebrow": "string — section label",
    "heading": "string — about heading",
    "body": "string — 2-3 sentences about the business",
    "values": [{ "icon": "emoji", "title": "string", "desc": "string — 1 sentence" }],
    "image": "string — Unsplash URL"
  },
  "stats": [{ "value": "string — number only", "suffix": "string — e.g., '+' or '%'", "label": "string" }],
  "services": [{
    "name": "string",
    "desc": "string — 1-2 sentences",
    "image": "string — Unsplash URL"
  }],
  "benefits": [{ "icon": "emoji", "title": "string", "desc": "string — 1 sentence" }],
  "pricing": [{
    "name": "string — plan name",
    "price": "string — number only (no $)",
    "period": "string — e.g., 'per month'",
    "desc": "string — 1 sentence",
    "features": ["string — feature line items"],
    "cta": "string — button text",
    "highlight": "boolean — true for recommended plan",
    "image": "string — Unsplash URL"
  }],
  "testimonials": [{
    "name": "string — first name + last initial",
    "role": "string — e.g., 'Client since 2022'",
    "quote": "string — 1-2 sentences, authentic voice",
    "avatar": "string — 2-letter initials"
  }],
  "cta": {
    "heading": "string — call to action heading",
    "subheading": "string — supporting text",
    "primary": "string — main button text",
    "secondary": "string — secondary button text"
  },
  "contact": {
    "heading": "string — section heading",
    "subheading": "string — welcoming message",
    "image": "string — Unsplash URL of the business/office",
    "hours": [{ "days": "string", "time": "string" }]
  },
  "footer": {
    "tagline": "string — short motto",
    "socials": [{ "name": "Instagram|Facebook|YouTube|Twitter|LinkedIn", "href": "#" }]
  },
  "seo": {
    "homepage": {
      "title": "string — SEO title tag, under 60 chars, include business name + location + primary service",
      "description": "string — meta description, under 155 chars, compelling + location + key services"
    },
    "keywords": ["string — 8-10 target keywords combining industry terms + location"]
  }
}`;

function buildPrompt(input: GenerateInput): string {
  const { scraped, manual, industry, location } = input;

  let businessContext = '';

  if (location) {
    businessContext += `\n## Location
This business is located in ${location}. Use this location naturally in SEO titles, meta descriptions, keywords, and subtly in copy where appropriate (e.g., "serving ${location}" in about section).`;
  }

  if (scraped) {
    businessContext += `\n## Scraped Website Data (PRESERVE this real information)
- Business Name: ${scraped.businessName}
- Website: ${scraped.sourceUrl}
- Tagline: ${scraped.content?.tagline || 'Not found'}
- About: ${scraped.content?.about || 'Not found'}
- Services: ${scraped.content?.services?.join(', ') || 'Not found'}
- Colors found: primary=${scraped.colors.primary}${scraped.colors.secondary ? `, secondary=${scraped.colors.secondary}` : ''}${scraped.colors.accent ? `, accent=${scraped.colors.accent}` : ''}
- Logo: ${scraped.logoUrl || 'Not found'}
- Contact: email=${scraped.contact?.email || '?'}, phone=${scraped.contact?.phone || '?'}, address=${scraped.contact?.address || '?'}
- Images found: hero=${scraped.images?.hero || 'none'}, about=${scraped.images?.about || 'none'}, gallery=${scraped.images?.gallery?.length || 0} images`;
  }

  if (manual) {
    businessContext += `\n## Manual Business Information
- Business Name: ${manual.businessName}
- Description: ${manual.description}
- Industry: ${manual.industry}
${manual.phone ? `- Phone: ${manual.phone}` : ''}
${manual.email ? `- Email: ${manual.email}` : ''}
${manual.address ? `- Address: ${manual.address}` : ''}
${manual.colors?.primary ? `- Preferred primary color: ${manual.colors.primary}` : ''}`;
  }

  return `Generate complete website content for a ${industry || 'business'} website.
${businessContext}

## Rules
1. PRESERVE any real data from scraping (business name, contact info, real services, tagline). Never replace real info with made-up alternatives.
2. GENERATE professional, compelling copy for any missing sections.
3. Match the TONE to the industry: ${getToneGuide(industry || 'General Business')}
4. For Unsplash images, use relevant search terms in the URL format: https://images.unsplash.com/photo-XXXXX?w=800&q=80 — use real Unsplash photo IDs that match the industry.
5. Generate exactly 6 services, 6 benefits, 3 pricing tiers, 3 testimonials, and 4 stats.
6. Colors should be a cohesive palette. If scraped colors exist, build the palette around them. If not, choose colors appropriate for the industry.
7. All text should sound professional and authentic — avoid cliches and marketing fluff.
8. For pricing: use realistic prices for the industry. The middle tier should be highlighted.
9. Stats should feel real (not round numbers like "100+" — use specific numbers like "847" or "12+").
10. Nav should have 4 items: About, Services/Classes/Properties (industry-appropriate name), Pricing, Contact.
11. SEO: Generate an optimized title tag (under 60 chars) and meta description (under 155 chars) that include the business name, location, and primary services. Generate 8-10 target keywords combining industry terms with the location.

Return ONLY valid JSON matching this exact schema:
${BRAND_CONTENT_SCHEMA}`;
}

function getToneGuide(industry: string): string {
  const tones: Record<string, string> = {
    'Health & Wellness': 'calm, serene, nurturing. Use soft language about balance, peace, and well-being.',
    'Fitness & Sports': 'energetic, motivating, bold. Use action words about strength, power, and transformation.',
    'Real Estate': 'professional, trustworthy, aspirational. Use language about homes, investment, and finding the perfect space.',
    'Food & Dining': 'warm, inviting, sensory. Use language about flavors, experience, and gathering.',
    'Beauty & Salon': 'elegant, pampering, confident. Use language about beauty, self-care, and transformation.',
    'Dental': 'professional, caring, reassuring. Use language about health, smiles, and comfort.',
    'Construction': 'strong, reliable, skilled. Use language about craftsmanship, quality, and building.',
    'Legal': 'authoritative, trustworthy, precise. Use language about justice, protection, and expertise.',
    'Education': 'inspiring, supportive, knowledgeable. Use language about growth, learning, and potential.',
    'Technology': 'innovative, modern, efficient. Use language about solutions, innovation, and the future.',
    'Retail & E-Commerce': 'friendly, trendy, value-driven. Use language about style, quality, and convenience.',
    'Automotive': 'reliable, expert, fast. Use language about performance, care, and precision.',
    'Photography': 'creative, emotional, artistic. Use language about moments, stories, and vision.',
    'Marketing & Agency': 'creative, results-driven, strategic. Use language about growth, impact, and brand.',
    'General Business': 'professional, approachable, competent. Use clear, friendly language.',
  };
  return tones[industry] || tones['General Business'];
}

export async function generateBrandContent(input: GenerateInput): Promise<AstroBrandContent> {
  // Auto-detect industry if not provided
  let industry = input.industry;
  if (!industry && input.scraped) {
    const fullText = [
      input.scraped.businessName,
      input.scraped.content?.tagline,
      input.scraped.content?.about,
      ...(input.scraped.content?.services || []),
    ].filter(Boolean).join(' ');
    const detected = detectIndustry(fullText);
    industry = detected.industry;
  }
  if (!industry && input.manual) {
    industry = input.manual.industry;
  }
  if (!industry) {
    industry = 'General Business';
  }

  const prompt = buildPrompt({ ...input, industry });

  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    system: 'You are a professional web copywriter and brand designer. You generate website content as structured JSON. Return ONLY valid JSON — no markdown, no explanations, no code fences.',
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No text response from AI');
  }

  // Parse JSON, stripping any accidental markdown fences
  let jsonStr = textBlock.text.trim();
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  const content = JSON.parse(jsonStr) as AstroBrandContent;

  // Override with real scraped data where available
  if (input.scraped) {
    content.name = input.scraped.businessName || content.name;
    if (input.scraped.contact?.email) content.email = input.scraped.contact.email;
    if (input.scraped.contact?.phone) content.phone = input.scraped.contact.phone;
    if (input.scraped.contact?.address) content.address = input.scraped.contact.address;
    if (input.scraped.logoUrl) {
      // Store logo URL for use in template
    }
    if (input.scraped.images?.hero) content.hero.image = input.scraped.images.hero;
    if (input.scraped.images?.about) content.about.image = input.scraped.images.about;
  }

  if (input.manual) {
    content.name = input.manual.businessName || content.name;
    if (input.manual.email) content.email = input.manual.email;
    if (input.manual.phone) content.phone = input.manual.phone;
    if (input.manual.address) content.address = input.manual.address;
    if (input.manual.colors?.primary) {
      content.colors.primary = input.manual.colors.primary;
    }
  }

  return content;
}
