import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const seoSchema = z.object({
  blocks: z.array(z.any()),
  pageName: z.string(),
  businessName: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const data = seoSchema.parse(body);

    // Extract text content from blocks for context
    const pageContent = data.blocks
      .map((block: Record<string, unknown>) => {
        const content = block.content as Record<string, unknown> | undefined;
        if (!content) return '';
        return [
          content.heading,
          content.subheading,
          content.text,
          content.companyName,
          // Extract feature/service names
          ...(Array.isArray(content.features)
            ? content.features.map((f: Record<string, unknown>) => f.title)
            : []),
          // Extract testimonial quotes
          ...(Array.isArray(content.testimonials)
            ? content.testimonials.map((t: Record<string, unknown>) => t.quote)
            : []),
          // Extract plan names
          ...(Array.isArray(content.plans)
            ? content.plans.map((p: Record<string, unknown>) => p.name)
            : []),
        ]
          .filter(Boolean)
          .join(' ');
      })
      .filter(Boolean)
      .join('\n');

    const prompt = `Generate SEO metadata for a "${data.pageName}" page.

## Page Content Summary
${pageContent.slice(0, 2000)}

${data.businessName ? `## Business: ${data.businessName}` : ''}
${data.industry ? `## Industry: ${data.industry}` : ''}
${data.location ? `## Location: ${data.location}` : ''}

## Requirements
Generate a JSON object with:
1. "title": SEO title tag — UNDER 60 characters. Include the business name and${data.location ? ` "${data.location}" and` : ''} primary service/keyword. Make it compelling for click-through.
2. "description": Meta description — UNDER 155 characters. Summarize the page value proposition.${data.location ? ` Include "${data.location}" naturally.` : ''} End with a call-to-action or benefit.
3. "keywords": Array of 5 relevant search keywords combining industry terms${data.location ? ` with "${data.location}"` : ''}.

Return ONLY valid JSON — no markdown, no code fences.`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      messages: [{ role: 'user', content: prompt }],
      system: 'You are an SEO specialist. Return ONLY valid JSON. No explanations.',
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No response');
    }

    let jsonStr = textBlock.text.trim();
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    const result = JSON.parse(jsonStr);

    return NextResponse.json({
      success: true,
      data: {
        title: (result.title || '').slice(0, 70),
        description: (result.description || '').slice(0, 165),
        keywords: Array.isArray(result.keywords) ? result.keywords.slice(0, 8) : [],
      },
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : '';
    if (errMsg.includes('credit balance') || errMsg.includes('billing')) {
      return NextResponse.json(
        { success: false, error: 'AI billing issue — check API credits.' },
        { status: 402 }
      );
    }
    console.error('SEO generation error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to generate SEO' },
      { status: 500 }
    );
  }
}
