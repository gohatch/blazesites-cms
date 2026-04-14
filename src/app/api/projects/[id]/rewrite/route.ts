import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Infer a human-readable field type from the dot-separated field path.
 * e.g. "hero.heading" -> "heading", "about.text" -> "body text"
 */
function fieldTypeFromPath(fieldPath: string): string {
  const last = fieldPath.split('.').pop()?.toLowerCase() ?? '';
  if (last.includes('heading')) return 'heading';
  if (last.includes('subheading')) return 'subheading';
  if (last.includes('description') || last.includes('text')) return 'body text';
  if (last.includes('tagline')) return 'tagline';
  if (last.includes('title')) return 'title';
  if (last.includes('label') || last.includes('cta')) return 'call-to-action';
  if (last.includes('quote')) return 'testimonial quote';
  return 'website copy';
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: projectId } = await params;
    const { fieldPath, currentText, instruction } = await req.json();

    if (!fieldPath || !currentText) {
      return NextResponse.json(
        { success: false, error: 'fieldPath and currentText are required' },
        { status: 400 }
      );
    }

    // Fetch project brand_profile for context
    const supabase = await createServiceRoleClient();
    const { data: project } = await supabase
      .from('projects')
      .select('brand_profile')
      .eq('id', projectId)
      .single();

    const brand = project?.brand_profile as Record<string, unknown> | null;
    const businessName = (brand?.businessName as string) || 'the business';
    const description = (brand?.description as string) || '';

    const fieldType = fieldTypeFromPath(fieldPath);

    const userPrompt = `Rewrite this ${fieldType} for a ${businessName}${description ? ` (${description})` : ''}.
Current text: ${currentText}
${instruction || 'Make it more compelling, professional, and conversion-focused.'}
Keep similar length. Return only the new text.`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: 'You rewrite website copy. Return ONLY the rewritten text, no quotes or explanation.',
      messages: [{ role: 'user', content: userPrompt }],
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No response from AI');
    }

    return NextResponse.json({ success: true, text: textBlock.text.trim() });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : '';
    if (errMsg.includes('credit balance') || errMsg.includes('billing')) {
      return NextResponse.json(
        { success: false, error: 'AI billing issue — check API credits.' },
        { status: 402 }
      );
    }
    if (errMsg.includes('authentication') || errMsg.includes('invalid x-api-key') || errMsg.includes('Invalid API Key')) {
      return NextResponse.json(
        { success: false, error: 'AI authentication failed — check API key.' },
        { status: 401 }
      );
    }
    console.error('Rewrite error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to rewrite text. Please try again.' },
      { status: 500 }
    );
  }
}
