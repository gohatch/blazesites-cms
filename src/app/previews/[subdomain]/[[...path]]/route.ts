import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ subdomain: string; path?: string[] }> }
) {
  const { subdomain, path } = await params;
  const filename = path?.length ? path.join('/') : 'index.html';
  const storagePath = `${subdomain}/${filename}`;

  const supabase = await createServiceRoleClient();

  const { data, error } = await supabase.storage
    .from('sites')
    .download(storagePath);

  if (error || !data) {
    // Try index.html as fallback
    if (filename !== 'index.html') {
      const { data: fallback, error: fallbackError } = await supabase.storage
        .from('sites')
        .download(`${subdomain}/index.html`);

      if (!fallbackError && fallback) {
        const html = await fallback.text();
        return new NextResponse(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
    }
    return new NextResponse('Not Found', { status: 404 });
  }

  const content = await data.text();
  const contentType = filename.endsWith('.html')
    ? 'text/html; charset=utf-8'
    : filename.endsWith('.css')
    ? 'text/css'
    : filename.endsWith('.js')
    ? 'application/javascript'
    : 'application/octet-stream';

  return new NextResponse(content, {
    headers: { 'Content-Type': contentType },
  });
}
