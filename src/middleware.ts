import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

const publicPaths = ['/login', '/register', '/api/auth'];
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blazesites.com.au';

// In-memory cache for custom domain → subdomain lookups (5 min TTL)
const domainCache = new Map<string, { subdomain: string; expires: number }>();
const CACHE_TTL = 5 * 60 * 1000;

async function lookupCustomDomain(host: string): Promise<string | null> {
  const cached = domainCache.get(host);
  if (cached && cached.expires > Date.now()) return cached.subdomain;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null;

  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/projects?custom_domain=eq.${encodeURIComponent(host)}&dns_verified=eq.true&status=eq.live&select=subdomain&limit=1`,
      { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } }
    );
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0 && data[0].subdomain) {
      domainCache.set(host, { subdomain: data[0].subdomain, expires: Date.now() + CACHE_TTL });
      return data[0].subdomain;
    }
  } catch { /* silent fail */ }
  return null;
}

function isRootDomain(host: string): boolean {
  // blazesites.com.au or www.blazesites.com.au (the marketing site)
  return host === APP_DOMAIN || host === `www.${APP_DOMAIN}`;
}

function isAppSubdomain(host: string): boolean {
  // app.blazesites.com.au (the CMS dashboard)
  return host === `app.${APP_DOMAIN}`;
}

function isLocalhost(host: string): boolean {
  return host === 'localhost' || host === '127.0.0.1';
}

export default auth(async (req) => {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host') || '';
  const hostWithoutPort = host.split(':')[0];

  // --- Root domain: blazesites.com.au → landing page only ---
  if (isRootDomain(hostWithoutPort)) {
    // Allow the homepage
    if (pathname === '/') return NextResponse.next();

    // Allow static assets, sites, and API routes
    if (pathname.startsWith('/sites/') || pathname.startsWith('/api/')) return NextResponse.next();

    // Redirect any dashboard paths to app subdomain
    const appUrl = new URL(pathname, `https://app.${APP_DOMAIN}`);
    appUrl.search = req.nextUrl.search;
    return NextResponse.redirect(appUrl);
  }

  // --- App subdomain or localhost: app.blazesites.com.au → CMS dashboard ---
  if (isAppSubdomain(hostWithoutPort) || isLocalhost(hostWithoutPort)) {
    // Homepage on app subdomain → redirect to dashboard
    if (pathname === '/' && !isLocalhost(hostWithoutPort)) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Published sites and previews are public
    if (pathname.startsWith('/previews/')) return NextResponse.next();
    if (pathname.startsWith('/sites/')) return NextResponse.next();

    // Homepage is public on localhost (for dev)
    if (pathname === '/') return NextResponse.next();

    const isPublic = publicPaths.some((path) => pathname.startsWith(path));
    if (isPublic) return NextResponse.next();

    // Auth required
    if (!req.auth) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Onboarding check
    if (!pathname.startsWith('/onboarding') && !pathname.startsWith('/api/')) {
      if (req.auth.user?.onboardingCompleted === false) {
        return NextResponse.redirect(new URL('/onboarding', req.url));
      }
    }

    return NextResponse.next();
  }

  // --- Site subdomains: wisewire.blazesites.com.au → serve published site ---
  if (hostWithoutPort.endsWith(`.${APP_DOMAIN}`)) {
    const subdomain = hostWithoutPort.split('.')[0];
    if (subdomain && subdomain !== 'www' && subdomain !== 'app') {
      const previewPath = pathname === '/' ? '/index.html' : pathname;
      const url = req.nextUrl.clone();
      url.pathname = `/previews/${subdomain}${previewPath}`;
      return NextResponse.rewrite(url);
    }
  }

  // --- Custom domains: www.theirbusiness.com → serve published site ---
  const subdomain = await lookupCustomDomain(hostWithoutPort);
  if (subdomain) {
    const previewPath = pathname === '/' ? '/index.html' : pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/previews/${subdomain}${previewPath}`;
    return NextResponse.rewrite(url);
  }

  // Fallback: allow through (catches unknown hosts on dev)
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
