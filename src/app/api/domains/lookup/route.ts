import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const host = searchParams.get('host');

  if (!host) {
    return NextResponse.json({ error: 'Missing host parameter' }, { status: 400 });
  }

  const supabase = await createServiceRoleClient();

  const { data, error } = await supabase
    .from('projects')
    .select('subdomain')
    .eq('custom_domain', host)
    .eq('dns_verified', true)
    .eq('status', 'live')
    .limit(1)
    .single();

  if (error || !data?.subdomain) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(
    { subdomain: data.subdomain },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
    }
  );
}
