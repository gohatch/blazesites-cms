import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { generateBrandContent } from '@/lib/ai/generate-brand-content';
import { z } from 'zod';

const generateSchema = z.object({
  scraped: z
    .object({
      businessName: z.string(),
      colors: z.object({
        primary: z.string(),
        secondary: z.string().optional(),
        accent: z.string().optional(),
        background: z.string().optional(),
        text: z.string().optional(),
      }),
      logoUrl: z.string().optional(),
      contact: z
        .object({
          email: z.string().optional(),
          phone: z.string().optional(),
          address: z.string().optional(),
        })
        .optional(),
      images: z
        .object({
          hero: z.string().optional(),
          about: z.string().optional(),
          gallery: z.array(z.string()).optional(),
        })
        .optional(),
      content: z
        .object({
          tagline: z.string().optional(),
          about: z.string().optional(),
          services: z.array(z.string()).optional(),
        })
        .optional(),
      sourceUrl: z.string(),
    })
    .optional(),
  manual: z
    .object({
      businessName: z.string(),
      description: z.string(),
      industry: z.string(),
      logoUrl: z.string().optional(),
      colors: z
        .object({
          primary: z.string().optional(),
          secondary: z.string().optional(),
        })
        .optional(),
      phone: z.string().optional(),
      email: z.string().optional(),
      address: z.string().optional(),
    })
    .optional(),
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
    const data = generateSchema.parse(body);

    if (!data.scraped && !data.manual) {
      return NextResponse.json(
        { error: 'Either scraped data or manual input is required' },
        { status: 400 }
      );
    }

    const content = await generateBrandContent({
      scraped: data.scraped as Parameters<typeof generateBrandContent>[0]['scraped'],
      manual: data.manual as Parameters<typeof generateBrandContent>[0]['manual'],
      industry: data.industry as Parameters<typeof generateBrandContent>[0]['industry'],
      location: data.location,
    });

    return NextResponse.json({ success: true, data: content });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.issues[0].message },
        { status: 400 }
      );
    }
    const errMsg = err instanceof Error ? err.message : '';
    console.error('Content generation error:', err);

    // Surface billing/auth errors clearly
    if (errMsg.includes('credit balance') || errMsg.includes('billing')) {
      return NextResponse.json(
        { success: false, error: 'AI service billing issue — please check your Anthropic API credits.' },
        { status: 402 }
      );
    }
    if (errMsg.includes('authentication') || errMsg.includes('invalid x-api-key') || errMsg.includes('Invalid API Key')) {
      return NextResponse.json(
        { success: false, error: 'AI service authentication failed — please check your API key.' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Failed to generate content. Please try again.' },
      { status: 500 }
    );
  }
}
