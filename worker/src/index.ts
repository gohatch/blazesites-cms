interface Env {
  SITES_BUCKET: R2Bucket;
  APP_DOMAIN: string;
  CMS_API_URL: string;
}

const CACHE_TTL = 300; // 5 minutes for custom domain lookups

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const hostname = url.hostname;
    const appDomain = env.APP_DOMAIN || 'blazesites.com.au';

    // Determine subdomain
    let subdomain: string | null = null;

    if (hostname.endsWith(`.${appDomain}`)) {
      // Subdomain request: wisewire.blazesites.com.au
      subdomain = hostname.split('.')[0];
      if (subdomain === 'www' || subdomain === 'app') {
        // www and app are not site subdomains
        return new Response('Not Found', { status: 404 });
      }
    } else {
      // Custom domain — look up subdomain via CMS API with caching
      subdomain = await resolveCustomDomain(hostname, env, ctx);
    }

    if (!subdomain) {
      return notFoundPage(hostname);
    }

    // Resolve file path
    let path = url.pathname === '/' ? '/index.html' : url.pathname;
    // Add .html extension if no extension present (clean URLs)
    if (!path.includes('.') && !path.endsWith('/')) {
      path = `${path}.html`;
    }
    if (path.endsWith('/')) {
      path = `${path}index.html`;
    }

    const key = `${subdomain}${path}`;

    // Fetch from R2
    const object = await env.SITES_BUCKET.get(key);

    if (!object) {
      // Try index.html as fallback for SPA-like routing
      if (path !== '/index.html') {
        const fallback = await env.SITES_BUCKET.get(`${subdomain}/index.html`);
        if (fallback) {
          return buildResponse(fallback, 'text/html; charset=utf-8');
        }
      }
      return notFoundPage(hostname);
    }

    const contentType = getContentType(path);
    return buildResponse(object, contentType);
  },
} satisfies ExportedHandler<Env>;

async function resolveCustomDomain(hostname: string, env: Env, ctx: ExecutionContext): Promise<string | null> {
  const cacheKey = `https://domain-cache/${hostname}`;
  const cache = caches.default;

  // Check cache first
  const cached = await cache.match(cacheKey);
  if (cached) {
    const data = await cached.json<{ subdomain: string }>();
    return data.subdomain;
  }

  // Call CMS API
  try {
    const apiUrl = `${env.CMS_API_URL}/api/domains/lookup?host=${encodeURIComponent(hostname)}`;
    const res = await fetch(apiUrl, {
      headers: { 'User-Agent': 'Blazesites-Worker/1.0' },
    });

    if (!res.ok) return null;

    const data = await res.json<{ subdomain: string }>();
    if (!data.subdomain) return null;

    // Cache the result
    const cacheResponse = new Response(JSON.stringify(data), {
      headers: {
        'Cache-Control': `public, max-age=${CACHE_TTL}`,
        'Content-Type': 'application/json',
      },
    });
    ctx.waitUntil(cache.put(cacheKey, cacheResponse));

    return data.subdomain;
  } catch {
    return null;
  }
}

function buildResponse(object: R2ObjectBody, contentType: string): Response {
  const headers = new Headers();
  headers.set('Content-Type', contentType);
  headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  if (object.httpEtag) {
    headers.set('ETag', object.httpEtag);
  }

  return new Response(object.body, { headers });
}

function getContentType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  const types: Record<string, string> = {
    html: 'text/html; charset=utf-8',
    css: 'text/css; charset=utf-8',
    js: 'application/javascript; charset=utf-8',
    json: 'application/json; charset=utf-8',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    woff: 'font/woff',
    woff2: 'font/woff2',
    ttf: 'font/ttf',
    xml: 'application/xml',
    txt: 'text/plain; charset=utf-8',
  };
  return types[ext || ''] || 'application/octet-stream';
}

function notFoundPage(hostname: string): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Not Found</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0a0a0a; color: #fff; }
    .container { text-align: center; padding: 2rem; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    p { color: #888; margin-bottom: 2rem; }
    a { color: #8b5cf6; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Site Not Found</h1>
    <p>No site is configured for <strong>${hostname}</strong></p>
    <a href="https://blazesites.com.au">Powered by Blazesites</a>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
