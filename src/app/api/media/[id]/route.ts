import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  // Get media record to find storage path
  const { data: media } = await supabase
    .from('media')
    .select('url')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  if (media?.url) {
    // Extract path from URL and delete from storage
    const path = media.url.split('/media/')[1];
    if (path) {
      await supabase.storage.from('media').remove([path]);
    }
  }

  const { error } = await supabase.from('media').delete().eq('id', id).eq('org_id', orgId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
