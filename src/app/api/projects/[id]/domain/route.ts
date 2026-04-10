import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import {
  isSaaSConfigured,
  addCustomHostname,
  findCustomHostname,
  getHostnameStatus,
  removeCustomHostname,
} from '@/lib/cloudflare/saas';
import { z } from 'zod';
import dns from 'dns/promises';

const domainSchema = z.object({
  custom_domain: z.string().min(3).max(253),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data: project } = await supabase
    .from('projects')
    .select('custom_domain, dns_verified, subdomain, cf_hostname_id')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  if (!project) return apiError('Project not found', 404);

  let dnsStatus = project.dns_verified || false;
  let sslStatus: string | null = null;

  if (project.custom_domain && !project.dns_verified) {
    if (isSaaSConfigured() && project.cf_hostname_id) {
      // Check via Cloudflare for SaaS API
      try {
        const status = await getHostnameStatus(project.cf_hostname_id);
        sslStatus = status.ssl?.status || null;
        dnsStatus = status.status === 'active';

        if (dnsStatus && !project.dns_verified) {
          await supabase.from('projects').update({ dns_verified: true }).eq('id', id);
        }
      } catch {
        // Fall through to DNS check
      }
    }

    // Fallback: manual DNS CNAME check
    if (!dnsStatus) {
      try {
        const records = await dns.resolveCname(project.custom_domain);
        const expectedCname = `${project.subdomain}.blazesites.com.au`;
        dnsStatus = records.some((r) => r.toLowerCase() === expectedCname.toLowerCase());

        if (dnsStatus) {
          await supabase.from('projects').update({ dns_verified: true }).eq('id', id);
        }
      } catch {
        dnsStatus = false;
      }
    }
  }

  return apiSuccess({
    custom_domain: project.custom_domain,
    dns_verified: dnsStatus,
    ssl_status: sslStatus,
    subdomain: project.subdomain,
    cname_target: project.subdomain ? `${project.subdomain}.blazesites.com.au` : null,
  });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  try {
    const { id } = await params;
    const body = await req.json();
    const { custom_domain } = domainSchema.parse(body);
    const supabase = await createServiceRoleClient();
    const orgId = session.user.orgId as string;

    // Get existing project to clean up old hostname
    const { data: existing } = await supabase
      .from('projects')
      .select('custom_domain, cf_hostname_id')
      .eq('id', id)
      .eq('org_id', orgId)
      .single();

    // Remove old Cloudflare hostname if changing domain
    if (existing?.cf_hostname_id && existing.custom_domain !== custom_domain && isSaaSConfigured()) {
      try {
        await removeCustomHostname(existing.cf_hostname_id);
      } catch {
        // Non-fatal
      }
    }

    // Register new hostname with Cloudflare for SaaS
    let cfHostnameId: string | null = null;
    if (isSaaSConfigured()) {
      try {
        // Check if hostname already exists
        const existingHostname = await findCustomHostname(custom_domain);
        if (existingHostname) {
          cfHostnameId = existingHostname.id;
        } else {
          const result = await addCustomHostname(custom_domain);
          cfHostnameId = result.id;
        }
      } catch (err) {
        // Log but don't fail — DNS verification still works as fallback
        console.error('Cloudflare SaaS error:', err instanceof Error ? err.message : err);
      }
    }

    const { data, error } = await supabase
      .from('projects')
      .update({
        custom_domain,
        dns_verified: false,
        cf_hostname_id: cfHostnameId,
      })
      .eq('id', id)
      .eq('org_id', orgId)
      .select('custom_domain, dns_verified, subdomain')
      .single();

    if (error) return apiError(error.message, 500);

    return apiSuccess({
      ...data,
      ssl_status: cfHostnameId ? 'initializing' : null,
      cname_target: data.subdomain ? `${data.subdomain}.blazesites.com.au` : null,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
