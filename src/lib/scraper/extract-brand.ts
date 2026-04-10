import * as cheerio from 'cheerio';
import type { BrandProfile } from '@/types';
import { detectIndustry } from '@/lib/ai/detect-industry';

const TIMEOUT_MS = 10000;
const MAX_BODY_SIZE = 5 * 1024 * 1024; // 5MB

export async function extractBrand(
  url: string
): Promise<{ data?: BrandProfile; error?: string }> {
  try {
    // Normalize URL
    if (!url.startsWith('http')) url = 'https://' + url;

    const response = await fetch(url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; Blazesites/1.0; +https://blazesites.com)',
        Accept: 'text/html,application/xhtml+xml',
      },
    });

    if (!response.ok) {
      return { error: `Website returned status ${response.status}` };
    }

    const contentLength = response.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      return { error: 'Website is too large to analyze' };
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract business name
    const businessName =
      $('meta[property="og:site_name"]').attr('content')?.trim() ||
      $('meta[name="application-name"]').attr('content')?.trim() ||
      $('title').text().split(/[|\-–—]/).at(0)?.trim() ||
      $('h1').first().text().trim() ||
      new URL(url).hostname.replace('www.', '');

    // Extract colors from CSS and inline styles
    const colors = extractColors($, html);

    // Extract logo
    const logoUrl = extractLogo($, url);

    // Extract contact info
    const contact = extractContact($);

    // Extract content
    const content = extractContent($);

    // Extract images
    const images = extractImages($, url);

    // Detect industry from page content
    const pageText = $('body').text();
    const metaDesc = $('meta[name="description"]').attr('content') || '';
    const industryInput = [businessName, metaDesc, content.tagline, content.about, ...(content.services || [])].filter(Boolean).join(' ');
    const { industry, confidence: industryConfidence } = detectIndustry(industryInput || pageText.slice(0, 3000));

    // Extract social links
    const socialLinks: string[] = [];
    $('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="twitter.com"], a[href*="linkedin.com"], a[href*="youtube.com"], a[href*="tiktok.com"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && socialLinks.length < 6) socialLinks.push(href);
    });

    return {
      data: {
        businessName,
        industry,
        industryConfidence,
        colors,
        logoUrl: logoUrl || undefined,
        images,
        contact,
        content,
        sourceUrl: url,
      },
    };
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'TimeoutError' || err.name === 'AbortError') {
        return { error: 'Website took too long to respond' };
      }
      return { error: `Could not access website: ${err.message}` };
    }
    return { error: 'An unexpected error occurred' };
  }
}

function extractColors(
  $: cheerio.CheerioAPI,
  html: string
): BrandProfile['colors'] {
  const colorCounts = new Map<string, number>();
  const hexRegex = /#([0-9a-fA-F]{3,8})\b/g;

  // Colors from <style> tags
  $('style').each((_, el) => {
    const css = $(el).text();
    let match;
    while ((match = hexRegex.exec(css)) !== null) {
      const hex = normalizeHex(match[0]);
      if (hex) colorCounts.set(hex, (colorCounts.get(hex) || 0) + 1);
    }
  });

  // Colors from inline styles
  $('[style]').each((_, el) => {
    const style = $(el).attr('style') || '';
    let match;
    const inlineRegex = /#([0-9a-fA-F]{3,8})\b/g;
    while ((match = inlineRegex.exec(style)) !== null) {
      const hex = normalizeHex(match[0]);
      if (hex) colorCounts.set(hex, (colorCounts.get(hex) || 0) + 1);
    }
  });

  // Theme color meta tag
  const themeColor = $('meta[name="theme-color"]').attr('content');
  if (themeColor) {
    const hex = normalizeHex(themeColor);
    if (hex) colorCounts.set(hex, (colorCounts.get(hex) || 0) + 100); // High priority
  }

  // Filter out common non-brand colors (grays, near-white, near-black)
  const isNeutral = (hex: string): boolean => {
    const c = hex.replace('#', '');
    const r = parseInt(c.slice(0, 2), 16);
    const g = parseInt(c.slice(2, 4), 16);
    const b = parseInt(c.slice(4, 6), 16);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    // Very low saturation = gray/neutral
    if (saturation < 0.1) return true;
    // Near-white (all channels > 230)
    if (r > 230 && g > 230 && b > 230) return true;
    // Near-black (all channels < 30)
    if (r < 30 && g < 30 && b < 30) return true;
    return false;
  };

  const sorted = [...colorCounts.entries()]
    .filter(([color]) => !isNeutral(color))
    .sort((a, b) => b[1] - a[1]);

  return {
    primary: sorted[0]?.[0] || '#3b82f6',
    secondary: sorted[1]?.[0],
    accent: sorted[2]?.[0],
    background: '#ffffff',
    text: '#1a1a1a',
  };
}

function normalizeHex(color: string): string | null {
  const cleaned = color.trim().toLowerCase();
  const match = cleaned.match(/^#([0-9a-f]{3,8})$/);
  if (!match) return null;

  let hex = match[1];
  // Expand shorthand (#abc → #aabbcc)
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  // Only accept 6-char hex (ignore 8-char alpha)
  if (hex.length !== 6) return null;

  return '#' + hex;
}

function extractLogo($: cheerio.CheerioAPI, baseUrl: string): string | null {
  const resolve = (src: string): string | null => {
    try { return new URL(src, baseUrl).href; } catch { return null; }
  };

  // 1. Prefer actual logo images in the page (header, nav, etc.)
  const logoSelectors = [
    'header img[src*="logo" i]',
    'nav img[src*="logo" i]',
    '.logo img',
    '#logo img',
    'img[class*="logo" i]',
    'img[alt*="logo" i]',
    'header a > img:first-of-type',
    'nav a > img:first-of-type',
    'header img:first-of-type',
    'nav img:first-of-type',
    // Also check data-src for lazy-loaded logos
    'header img[data-src*="logo" i]',
    'nav img[data-src*="logo" i]',
  ];

  for (const sel of logoSelectors) {
    const el = $(sel).first();
    const src = el.attr('src') || el.attr('data-src');
    if (src) {
      const resolved = resolve(src);
      if (resolved) return resolved;
    }
  }

  // 2. SVG logos in header
  const svgLogo = $('header svg, nav svg, .logo svg').first();
  // Can't extract inline SVG as URL, skip

  // 3. OG image (often the logo or a branded image)
  const ogImage = $('meta[property="og:image"]').attr('content');
  if (ogImage) {
    const resolved = resolve(ogImage);
    if (resolved) return resolved;
  }

  // 4. Fall back to favicons (least preferred)
  const iconSelectors = [
    'link[rel="apple-touch-icon"]',
    'link[rel="icon"][type="image/svg+xml"]',
    'link[rel="icon"][sizes="192x192"]',
    'link[rel="icon"][sizes="180x180"]',
    'link[rel="icon"]',
    'link[rel="shortcut icon"]',
  ];

  for (const sel of iconSelectors) {
    const href = $(sel).first().attr('href');
    if (href) {
      const resolved = resolve(href);
      if (resolved) return resolved;
    }
  }

  return null;
}

function extractContact($: cheerio.CheerioAPI): BrandProfile['contact'] {
  const fullText = $('body').text();

  // Email — use word boundary to avoid grabbing trailing text like "Visit"
  const emailMatch = fullText.match(/[\w.+-]+@[\w.-]+\.\w{2,}(?=\s|$|[^a-zA-Z0-9])/m);
  const email = emailMatch?.[0];

  // Phone — various formats
  const phonePatterns = [
    /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/,
    /\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/,
    /\d{4}[-.\s]?\d{3}[-.\s]?\d{3}/, // AU format
  ];
  let phone: string | undefined;
  for (const pattern of phonePatterns) {
    const match = fullText.match(pattern);
    if (match) {
      phone = match[0].trim();
      break;
    }
  }

  // Address — try <address> tag first, then footer
  let address: string | undefined;
  const addressEl = $('address').first().text().trim();
  if (addressEl && addressEl.length > 10 && addressEl.length < 200) {
    address = addressEl.replace(/\s+/g, ' ');
  }

  return { email, phone, address };
}

function extractContent($: cheerio.CheerioAPI): BrandProfile['content'] {
  // Tagline — first meaningful h1 or hero text
  const h1 = $('h1').first().text().trim();
  const tagline = h1 && h1.length < 120 ? h1 : undefined;

  // About — look for about-like sections
  let about: string | undefined;
  const aboutSelectors = [
    '#about p', '.about p', '[class*="about"] p',
    'section:has(h2:contains("About")) p',
    'section:has(h2:contains("Who We Are")) p',
    'section:has(h2:contains("Our Story")) p',
  ];
  for (const sel of aboutSelectors) {
    const text = $(sel).first().text().trim();
    if (text && text.length > 30 && text.length < 500) {
      about = text;
      break;
    }
  }

  // Services — look for lists of services
  const services: string[] = [];
  const serviceSelectors = [
    '[class*="service"] h3',
    '[class*="feature"] h3',
    'section:has(h2:contains("Service")) h3',
    'section:has(h2:contains("What We Do")) h3',
  ];
  for (const sel of serviceSelectors) {
    $(sel).each((_, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 80 && services.length < 8) {
        services.push(text);
      }
    });
    if (services.length > 0) break;
  }

  return { tagline, about, services: services.length > 0 ? services : undefined };
}

function extractImages(
  $: cheerio.CheerioAPI,
  baseUrl: string
): BrandProfile['images'] {
  const MIN_SIZE = 200; // ignore tiny images
  const resolveUrl = (src: string): string | null => {
    try {
      return new URL(src, baseUrl).href;
    } catch {
      return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isLargeImage = (el: any): boolean => {
    const width = parseInt($(el).attr('width') || '0');
    const height = parseInt($(el).attr('height') || '0');
    // If dimensions are set and both are small, skip
    if (width > 0 && height > 0 && width < MIN_SIZE && height < MIN_SIZE) return false;
    // If only one dimension is set and it's tiny, skip
    if (width > 0 && width < 80) return false;
    if (height > 0 && height < 80) return false;
    return true;
  };

  const skipPatterns = /logo|icon|avatar|badge|spinner|loading|placeholder|pixel|spacer|arrow|button|favicon|gravatar|emoji|widget/i;
  const skipSrcPatterns = /\d+x\d+.*crop|w=\d{1,2}&|size=\d{1,2}/i; // tiny resized images

  const shouldSkipImg = (el: any): boolean => {
    const src = $(el).attr('src') || $(el).attr('data-src') || '';
    const cls = $(el).attr('class') || '';
    const alt = $(el).attr('alt') || '';
    if (skipPatterns.test(src) || skipPatterns.test(cls) || skipPatterns.test(alt)) return true;
    if (skipSrcPatterns.test(src)) return true;
    if (!isLargeImage(el)) return true;
    return false;
  };

  // Hero image — large image near the top of the page
  let hero: string | undefined;
  const heroSelectors = [
    'section:first-of-type img',
    '[class*="hero"] img',
    '[class*="banner"] img',
    '[class*="slider"] img',
    '[class*="carousel"] img',
    'header + * img',
  ];
  for (const sel of heroSelectors) {
    $(sel).each((_, el) => {
      if (hero) return;
      if (shouldSkipImg(el)) return;
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (!src) return;
      const resolved = resolveUrl(src);
      if (resolved) hero = resolved;
    });
    if (hero) break;
  }

  // Also check for CSS background images on hero sections
  if (!hero) {
    const heroSections = $('[class*="hero"], [class*="banner"], section:first-of-type');
    heroSections.each((_, el) => {
      if (hero) return;
      const style = $(el).attr('style') || '';
      const bgMatch = style.match(/background(?:-image)?\s*:\s*url\(['"]?([^'")\s]+)['"]?\)/i);
      if (bgMatch) {
        const resolved = resolveUrl(bgMatch[1]);
        if (resolved) hero = resolved;
      }
    });
  }

  // OG image as hero fallback
  if (!hero) {
    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      const resolved = resolveUrl(ogImage);
      if (resolved) hero = resolved;
    }
  }

  // About image
  let about: string | undefined;
  const aboutSelectors = [
    '#about img', '.about img', '[class*="about"] img',
    'section:has(h2:contains("About")) img',
    'section:has(h2:contains("Who We Are")) img',
    'section:has(h2:contains("Our Story")) img',
  ];
  for (const sel of aboutSelectors) {
    const el = $(sel).first();
    if (el.length === 0 || shouldSkipImg(el[0])) continue;
    const src = el.attr('src') || el.attr('data-src');
    if (src) {
      const resolved = resolveUrl(src);
      if (resolved) {
        about = resolved;
        break;
      }
    }
  }

  // Gallery images — collect large images from gallery/portfolio/work sections
  const gallery: string[] = [];
  const seen = new Set<string>();
  const gallerySelectors = [
    '[class*="gallery"] img',
    '[class*="portfolio"] img',
    '[class*="work"] img',
    '[class*="project"] img',
    '[class*="grid"] img',
    'section:has(h2:contains("Gallery")) img',
    'section:has(h2:contains("Portfolio")) img',
    'section:has(h2:contains("Our Work")) img',
    'section:has(h2:contains("Projects")) img',
  ];
  for (const sel of gallerySelectors) {
    $(sel).each((_, el) => {
      if (gallery.length >= 9) return;
      if (shouldSkipImg(el)) return;
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (!src) return;
      const resolved = resolveUrl(src);
      if (resolved && !seen.has(resolved)) {
        seen.add(resolved);
        gallery.push(resolved);
      }
    });
    if (gallery.length > 0) break;
  }

  // If no gallery found, collect large images from the page (excluding hero/about/logo)
  if (gallery.length === 0) {
    const exclude = new Set([hero, about].filter(Boolean));
    // Only pick images inside main content, skip header/nav/footer
    const mainContent = $('main, [role="main"], article, .content, #content').length > 0
      ? $('main img, [role="main"] img, article img, .content img, #content img')
      : $('body img');
    mainContent.each((_, el) => {
      if (gallery.length >= 6) return;
      if (shouldSkipImg(el)) return;
      // Also skip images inside header/nav/footer
      if ($(el).closest('header, nav, footer').length > 0) return;
      const src = $(el).attr('src') || $(el).attr('data-src');
      if (!src) return;
      const resolved = resolveUrl(src);
      if (resolved && !seen.has(resolved) && !exclude.has(resolved)) {
        seen.add(resolved);
        gallery.push(resolved);
      }
    });
  }

  return {
    hero: hero || undefined,
    about: about || undefined,
    gallery: gallery.length > 0 ? gallery : undefined,
  };
}
