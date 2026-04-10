import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string; pageId: string }> }
) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { pageId } = await params;
  const supabase = await createServiceRoleClient();

  const { data, error } = await supabase
    .from('website_pages')
    .select('*')
    .eq('id', pageId)
    .single();

  if (error) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string; pageId: string }> }
) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { pageId } = await params;
  const body = await req.json();
  const supabase = await createServiceRoleClient();

  const { data, error } = await supabase
    .from('website_pages')
    .update({
      blocks: body.blocks,
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    })
    .eq('id', pageId)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
