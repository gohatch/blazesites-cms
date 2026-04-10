const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
const CF_API = 'https://api.cloudflare.com/client/v4';

export function isSaaSConfigured(): boolean {
  return !!(API_TOKEN && ZONE_ID);
}

async function cfFetch(path: string, options: RequestInit = {}) {
  if (!API_TOKEN || !ZONE_ID) {
    throw new Error('Cloudflare API credentials not configured');
  }

  const res = await fetch(`${CF_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await res.json();
  if (!data.success) {
    const msg = data.errors?.[0]?.message || 'Cloudflare API error';
    throw new Error(msg);
  }
  return data;
}

export interface CustomHostnameResult {
  id: string;
  hostname: string;
  status: string;
  ssl: {
    status: string;
    type: string;
  };
  verification_errors?: string[];
}

/**
 * Register a custom hostname with Cloudflare for SaaS.
 * This provisions SSL and routes traffic through your zone.
 */
export async function addCustomHostname(hostname: string): Promise<CustomHostnameResult> {
  const data = await cfFetch(`/zones/${ZONE_ID}/custom_hostnames`, {
    method: 'POST',
    body: JSON.stringify({
      hostname,
      ssl: {
        method: 'http',
        type: 'dv',
        settings: {
          min_tls_version: '1.2',
          http2: 'on',
        },
      },
    }),
  });

  return data.result;
}

/**
 * Remove a custom hostname from Cloudflare for SaaS.
 */
export async function removeCustomHostname(hostnameId: string): Promise<void> {
  await cfFetch(`/zones/${ZONE_ID}/custom_hostnames/${hostnameId}`, {
    method: 'DELETE',
  });
}

/**
 * Get the status of a custom hostname (SSL provisioning, verification).
 */
export async function getHostnameStatus(hostnameId: string): Promise<CustomHostnameResult> {
  const data = await cfFetch(`/zones/${ZONE_ID}/custom_hostnames/${hostnameId}`);
  return data.result;
}

/**
 * Find a custom hostname by domain name.
 */
export async function findCustomHostname(hostname: string): Promise<CustomHostnameResult | null> {
  const data = await cfFetch(`/zones/${ZONE_ID}/custom_hostnames?hostname=${encodeURIComponent(hostname)}`);
  const results = data.result as CustomHostnameResult[];
  return results.length > 0 ? results[0] : null;
}
