import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import dns from 'dns/promises';

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const supabase = await createServiceRoleClient();

  const { data: project, error } = await supabase
    .from('projects')
    .select('custom_domain, subdomain')
    .eq('id', id)
    .eq('org_id', session.user.orgId as string)
    .single();

  if (error || !project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  if (!project.custom_domain) {
    return NextResponse.json({ error: 'No custom domain configured' }, { status: 400 });
  }

  const domain = project.custom_domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const expectedTarget = `${project.subdomain}.${process.env.NEXT_PUBLIC_APP_DOMAIN || 'blazesites.com.au'}`;

  try {
    const records = await dns.resolveCname(domain);

    const match = records.some((record) => {
      const normalized = record.replace(/\.$/, '').toLowerCase();
      return normalized === expectedTarget.toLowerCase();
    });

    if (match) {
      await supabase
        .from('projects')
        .update({ dns_verified: true })
        .eq('id', id);

      return NextResponse.json({
        verified: true,
        domain,
        target: expectedTarget,
        message: 'DNS verified successfully! Your custom domain is active.',
      });
    }

    return NextResponse.json({
      verified: false,
      domain,
      found: records,
      expected: expectedTarget,
      message: `CNAME record found but points to "${records[0]}" instead of "${expectedTarget}".`,
    });
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;

    if (code === 'ENOTFOUND' || code === 'ENODATA') {
      return NextResponse.json({
        verified: false,
        domain,
        expected: expectedTarget,
        message: 'No CNAME record found yet. DNS changes can take up to 48 hours to propagate.',
      });
    }

    return NextResponse.json({
      verified: false,
      domain,
      expected: expectedTarget,
      message: `DNS lookup error: ${code || 'unknown'}. Please check your domain settings.`,
    });
  }
}
