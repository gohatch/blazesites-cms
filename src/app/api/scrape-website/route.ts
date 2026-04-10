import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { extractBrand } from '@/lib/scraper/extract-brand';
import { z } from 'zod';

const scrapeSchema = z.object({
  url: z.string().url('Please enter a valid URL'),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { url } = scrapeSchema.parse(body);

    const result = await extractBrand(url);

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 422 }
      );
    }

    return NextResponse.json({ success: true, data: result.data });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: err.issues[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
