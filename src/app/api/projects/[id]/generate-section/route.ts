import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import Anthropic from '@anthropic-ai/sdk';
import type { GeneratableSection } from '@/lib/astro/template-capabilities';
import { generatableSections } from '@/lib/astro/template-capabilities';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ---------------------------------------------------------------------------
// JSON schemas for each section type
// ---------------------------------------------------------------------------

const sectionSchemas: Record<GeneratableSection, string> = {
  team: `{ "team": [{ "name": "string — full name", "role": "string — job title", "bio": "string — 1-2 sentence bio", "image": "string — Unsplash URL" }] }  (generate 3-4 members)`,

  faq: `{ "faq": [{ "question": "string", "answer": "string — 2-3 sentences" }] }  (generate 5-6 items)`,

  testimonials: `{ "testimonials": [{ "name": "string — first name + last initial", "role": "string — e.g. 'Client since 2022'", "quote": "string — 1-2 sentences, authentic voice", "avatar": "string — 2-letter initials" }] }  (generate 3 items)`,

  stats: `{ "stats": [{ "value": "string — number only (use specific numbers like 847, not round like 100)", "suffix": "string — e.g. '+' or '%'", "label": "string" }] }  (generate 4 items)`,

  pricing: `{ "pricing": [{ "name": "string — plan name", "price": "string — number only (no $)", "period": "string — e.g. 'per month'", "desc": "string — 1 sentence", "features": ["string — feature line items (5-7 per plan)"], "cta": "string — button text", "highlight": "boolean — true for recommended/middle plan", "image": "string — Unsplash URL" }] }  (generate 3 tiers)`,

  benefits: `{ "benefits": [{ "icon": "emoji", "title": "string", "desc": "string — 1 sentence" }] }  (generate 4-6 items)`,

  services: `{ "services": [{ "name": "string", "desc": "string — 1-2 sentences", "image": "string — Unsplash URL" }] }  (generate 4-6 items)`,
};

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: projectId } = await params;

  try {
    const body = await req.json();
    const { sectionType, description } = body as {
      sectionType: string;
      description?: string;
    };

    // Validate section type
    if (!generatableSections.includes(sectionType as GeneratableSection)) {
      return NextResponse.json(
        { error: `Invalid section type: ${sectionType}` },
        { status: 400 }
      );
    }

    // Fetch project + brand profile
    const supabase = await createServiceRoleClient();
    const { data: project, error: dbError } = await supabase
      .from('projects')
      .select('brand_profile, name, template_id')
      .eq('id', projectId)
      .single();

    if (dbError || !project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    const brand = project.brand_profile as Record<string, unknown> | null;
    const brandName = (brand?.name as string) || project.name || 'the business';
    const brandDescription = (brand?.description as string) || '';

    // Build prompt
    const schema = sectionSchemas[sectionType as GeneratableSection];

    const userPrompt = `Generate a "${sectionType}" section for "${brandName}".
Business description: ${brandDescription || 'A professional business.'}
${description ? `Additional context from the user: ${description}` : ''}

Return JSON matching this exact schema:
${schema}

Rules:
- All text should sound professional and authentic — avoid cliches and marketing fluff.
- Stats should feel real (use specific numbers like "847" or "12+", not round numbers like "100+").
- For Unsplash images, use real-looking URLs in the format: https://images.unsplash.com/photo-XXXXX?w=800&q=80
- For pricing, use realistic prices. The middle tier should be highlighted.
- For testimonials, use diverse names and authentic-sounding quotes.
- For team members, use realistic names and professional titles.`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      system:
        'You generate section content for websites. Return ONLY valid JSON — no markdown, no explanations, no code fences.',
      messages: [{ role: 'user', content: userPrompt }],
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

    const parsed = JSON.parse(jsonStr);
    return NextResponse.json({ success: true, data: parsed });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : '';
    console.error('Section generation error:', err);

    if (errMsg.includes('credit balance') || errMsg.includes('billing')) {
      return NextResponse.json(
        { success: false, error: 'AI service billing issue — please check your Anthropic API credits.' },
        { status: 402 }
      );
    }
    if (
      errMsg.includes('authentication') ||
      errMsg.includes('invalid x-api-key') ||
      errMsg.includes('Invalid API Key')
    ) {
      return NextResponse.json(
        { success: false, error: 'AI service authentication failed — please check your API key.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to generate section. Please try again.' },
      { status: 500 }
    );
  }
}
