import type { Block, BlockSettings } from '@/types';

function renderBlockHTML(block: Block): string {
  const { type, content, settings } = block;
  const bg = settings.backgroundColor || '#ffffff';
  const text = settings.textColor || '#1a1a2e';
  const accent = settings.accentColor || '#3b82f6';
  const padding = settings.padding || '64px 0';
  const bgImage = settings.backgroundImage
    ? `background-image:url(${settings.backgroundImage});background-size:cover;background-position:center;`
    : '';
  const overlay = settings.backgroundImage && settings.overlayOpacity
    ? `<div style="position:absolute;inset:0;background:rgba(0,0,0,${settings.overlayOpacity})"></div>`
    : '';
  const c = content as Record<string, unknown>;

  const sectionStyle = `background-color:${bg};color:${text};padding:${padding};position:relative;${bgImage}`;
  const innerStyle = 'max-width:1200px;margin:0 auto;padding:0 24px;position:relative;z-index:1;';

  switch (type) {
    case 'hero':
      return `<section style="${sectionStyle}">
        ${overlay}
        <div style="${innerStyle}text-align:center;">
          <h1 style="font-size:3rem;font-weight:800;margin-bottom:16px;line-height:1.1;">${c.heading || ''}</h1>
          <p style="font-size:1.25rem;opacity:0.85;margin-bottom:32px;max-width:600px;margin-left:auto;margin-right:auto;">${c.subheading || ''}</p>
          ${c.ctaText ? `<a href="${c.ctaLink || '#'}" style="display:inline-block;background:${accent};color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;">${c.ctaText}</a>` : ''}
        </div>
      </section>`;

    case 'features': {
      const features = (c.features as Array<{ title: string; description: string }>) || [];
      const featureCards = features.map((f) =>
        `<div style="flex:1;min-width:250px;padding:24px;border-radius:12px;border:1px solid ${bg === '#ffffff' ? '#e5e7eb' : 'rgba(255,255,255,0.1)'};">
          <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:8px;">${f.title}</h3>
          <p style="opacity:0.7;">${f.description}</p>
        </div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:8px;">${c.heading || ''}</h2>
          <p style="text-align:center;opacity:0.7;margin-bottom:48px;">${c.subheading || ''}</p>
          <div style="display:flex;gap:24px;flex-wrap:wrap;">${featureCards}</div>
        </div>
      </section>`;
    }

    case 'about':
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}display:flex;gap:48px;align-items:center;flex-wrap:wrap;">
          <div style="flex:1;min-width:300px;">
            <h2 style="font-size:2rem;font-weight:700;margin-bottom:16px;">${c.heading || ''}</h2>
            <p style="opacity:0.8;line-height:1.7;">${c.text || ''}</p>
          </div>
          ${c.image ? `<div style="flex:1;min-width:300px;"><img src="${c.image}" alt="About" style="width:100%;border-radius:12px;" /></div>` : ''}
        </div>
      </section>`;

    case 'testimonials': {
      const testimonials = (c.testimonials as Array<{ quote: string; author: string; role?: string }>) || [];
      const cards = testimonials.map((t) =>
        `<div style="flex:1;min-width:280px;padding:32px;border-radius:12px;border:1px solid ${bg === '#ffffff' ? '#e5e7eb' : 'rgba(255,255,255,0.1)'};">
          <p style="font-style:italic;margin-bottom:16px;line-height:1.6;">"${t.quote}"</p>
          <p style="font-weight:600;">${t.author}</p>
          ${t.role ? `<p style="opacity:0.6;font-size:0.875rem;">${t.role}</p>` : ''}
        </div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:48px;">${c.heading || ''}</h2>
          <div style="display:flex;gap:24px;flex-wrap:wrap;">${cards}</div>
        </div>
      </section>`;
    }

    case 'contact':
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}max-width:600px;">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:32px;">${c.heading || ''}</h2>
          <form style="display:flex;flex-direction:column;gap:16px;">
            <input type="text" placeholder="Name" style="padding:12px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:1rem;" />
            <input type="email" placeholder="Email" style="padding:12px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:1rem;" />
            <textarea placeholder="Message" rows="4" style="padding:12px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:1rem;resize:vertical;"></textarea>
            <button type="submit" style="background:${accent};color:#fff;padding:14px;border-radius:8px;border:none;font-weight:600;cursor:pointer;font-size:1rem;">${(c.submitText as string) || 'Send'}</button>
          </form>
        </div>
      </section>`;

    case 'cta':
      return `<section style="${sectionStyle}">
        ${overlay}
        <div style="${innerStyle}text-align:center;">
          <h2 style="font-size:2.5rem;font-weight:700;margin-bottom:16px;">${c.heading || ''}</h2>
          <p style="opacity:0.85;margin-bottom:32px;font-size:1.125rem;">${c.subheading || ''}</p>
          ${c.ctaText ? `<a href="${c.ctaLink || '#'}" style="display:inline-block;background:${accent};color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;">${c.ctaText}</a>` : ''}
        </div>
      </section>`;

    case 'footer':
      return `<footer style="${sectionStyle}">
        <div style="${innerStyle}text-align:center;">
          <p style="font-weight:600;font-size:1.125rem;margin-bottom:4px;">${c.companyName || ''}</p>
          <p style="opacity:0.6;margin-bottom:16px;">${c.tagline || ''}</p>
          ${c.email ? `<p style="opacity:0.6;font-size:0.875rem;">${c.email}</p>` : ''}
          ${c.phone ? `<p style="opacity:0.6;font-size:0.875rem;">${c.phone}</p>` : ''}
        </div>
      </footer>`;

    case 'text':
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;margin-bottom:16px;">${c.heading || ''}</h2>
          <p style="line-height:1.7;opacity:0.8;">${c.text || ''}</p>
        </div>
      </section>`;

    case 'image':
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}text-align:center;">
          ${c.src ? `<img src="${c.src}" alt="${c.alt || ''}" style="max-width:100%;border-radius:12px;" />` : ''}
          ${c.caption ? `<p style="margin-top:12px;opacity:0.6;font-size:0.875rem;">${c.caption}</p>` : ''}
        </div>
      </section>`;

    case 'gallery': {
      const images = (c.images as Array<{ src: string; alt?: string }>) || [];
      const gallery = images.map((img) =>
        `<div style="flex:1;min-width:200px;"><img src="${img.src}" alt="${img.alt || ''}" style="width:100%;border-radius:8px;aspect-ratio:4/3;object-fit:cover;" /></div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:32px;">${c.heading || ''}</h2>
          <div style="display:flex;gap:16px;flex-wrap:wrap;">${gallery}</div>
        </div>
      </section>`;
    }

    case 'pricing': {
      const plans = (c.plans as Array<{ name: string; price: string; features: string[] }>) || [];
      const priceCards = plans.map((p) =>
        `<div style="flex:1;min-width:250px;padding:32px;border-radius:12px;border:1px solid ${bg === '#ffffff' ? '#e5e7eb' : 'rgba(255,255,255,0.1)'};text-align:center;">
          <h3 style="font-size:1.25rem;font-weight:600;margin-bottom:8px;">${p.name}</h3>
          <p style="font-size:2rem;font-weight:700;margin-bottom:24px;">${p.price}</p>
          <ul style="list-style:none;padding:0;text-align:left;">${p.features.map((f) => `<li style="padding:8px 0;border-bottom:1px solid rgba(128,128,128,0.2);">${f}</li>`).join('')}</ul>
        </div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:48px;">${c.heading || ''}</h2>
          <div style="display:flex;gap:24px;flex-wrap:wrap;">${priceCards}</div>
        </div>
      </section>`;
    }

    case 'faq': {
      const items = (c.items as Array<{ question: string; answer: string }>) || [];
      const faqHTML = items.map((item) =>
        `<details style="padding:20px 0;border-bottom:1px solid rgba(128,128,128,0.2);">
          <summary style="font-weight:600;cursor:pointer;font-size:1.1rem;">${item.question}</summary>
          <p style="margin-top:12px;opacity:0.8;line-height:1.6;">${item.answer}</p>
        </details>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}max-width:800px;">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:32px;">${c.heading || ''}</h2>
          ${faqHTML}
        </div>
      </section>`;
    }

    case 'team': {
      const members = (c.members as Array<{ name: string; role: string; image?: string }>) || [];
      const teamCards = members.map((m) =>
        `<div style="flex:1;min-width:200px;text-align:center;">
          ${m.image ? `<img src="${m.image}" alt="${m.name}" style="width:120px;height:120px;border-radius:50%;object-fit:cover;margin:0 auto 16px;" />` : `<div style="width:120px;height:120px;border-radius:50%;background:${accent}20;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700;">${m.name[0]}</div>`}
          <h3 style="font-weight:600;margin-bottom:4px;">${m.name}</h3>
          <p style="opacity:0.6;font-size:0.875rem;">${m.role}</p>
        </div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <h2 style="font-size:2rem;font-weight:700;text-align:center;margin-bottom:48px;">${c.heading || ''}</h2>
          <div style="display:flex;gap:32px;flex-wrap:wrap;justify-content:center;">${teamCards}</div>
        </div>
      </section>`;
    }

    case 'stats': {
      const stats = (c.stats as Array<{ value: string; label: string }>) || [];
      const statsHTML = stats.map((s) =>
        `<div style="flex:1;min-width:150px;text-align:center;">
          <p style="font-size:2.5rem;font-weight:800;color:${accent};margin-bottom:4px;">${s.value}</p>
          <p style="opacity:0.7;">${s.label}</p>
        </div>`
      ).join('');
      return `<section style="${sectionStyle}">
        <div style="${innerStyle}">
          <div style="display:flex;gap:32px;flex-wrap:wrap;justify-content:center;">${statsHTML}</div>
        </div>
      </section>`;
    }

    default:
      return '';
  }
}

interface GenerateHTMLOptions {
  blocks: Block[];
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

export function generatePageHTML({ blocks, metaTitle, metaDescription, ogImage }: GenerateHTMLOptions): string {
  const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);
  const blocksHTML = sortedBlocks.map(renderBlockHTML).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${metaTitle || 'Website'}</title>
  ${metaDescription ? `<meta name="description" content="${metaDescription}" />` : ''}
  ${ogImage ? `<meta property="og:image" content="${ogImage}" />` : ''}
  <meta property="og:title" content="${metaTitle || 'Website'}" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; -webkit-font-smoothing: antialiased; }
    img { max-width: 100%; height: auto; display: block; }
    a { color: inherit; }
    @media (max-width: 768px) {
      h1 { font-size: 2rem !important; }
      h2 { font-size: 1.5rem !important; }
      section { padding: 40px 0 !important; }
    }
  </style>
</head>
<body>
${blocksHTML}
</body>
</html>`;
}
