import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { isR2Configured } from '@/lib/cloudflare/r2';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

function getR2Client(): S3Client | null {
  const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID;
  const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
  if (!accountId || !accessKeyId || !secretAccessKey) return null;

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ subdomain: string; path?: string[] }> }
) {
  const { subdomain, path } = await params;
  const filename = path?.length ? path.join('/') : 'index.html';
  // Add .html extension for clean URLs
  const resolvedFile = filename.includes('.') ? filename : `${filename}.html`;
  const key = `${subdomain}/${resolvedFile}`;

  // Try R2 first
  if (isR2Configured()) {
    const client = getR2Client();
    if (client) {
      try {
        const result = await client.send(
          new GetObjectCommand({
            Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME || 'blazesites-sites',
            Key: key,
          })
        );
        if (result.Body) {
          const body = await result.Body.transformToString();
          return new NextResponse(body, {
            headers: {
              'Content-Type': getContentType(resolvedFile),
              'Cache-Control': 'public, max-age=3600',
            },
          });
        }
      } catch {
        // Fall through to index.html or Supabase fallback
      }

      // Try index.html fallback
      if (resolvedFile !== 'index.html') {
        try {
          const fallback = await client.send(
            new GetObjectCommand({
              Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME || 'blazesites-sites',
              Key: `${subdomain}/index.html`,
            })
          );
          if (fallback.Body) {
            const body = await fallback.Body.transformToString();
            return new NextResponse(body, {
              headers: { 'Content-Type': 'text/html; charset=utf-8' },
            });
          }
        } catch {
          // Fall through
        }
      }
    }
  }

  // Fallback: Supabase Storage
  const supabase = await createServiceRoleClient();
  const { data, error } = await supabase.storage.from('sites').download(key);

  if (error || !data) {
    if (resolvedFile !== 'index.html') {
      const { data: fallback } = await supabase.storage
        .from('sites')
        .download(`${subdomain}/index.html`);
      if (fallback) {
        const html = await fallback.text();
        return new NextResponse(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
    }
    return new NextResponse('Site not found', { status: 404 });
  }

  const content = await data.text();
  return new NextResponse(content, {
    headers: {
      'Content-Type': getContentType(resolvedFile),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

function getContentType(filename: string): string {
  if (filename.endsWith('.html')) return 'text/html; charset=utf-8';
  if (filename.endsWith('.css')) return 'text/css';
  if (filename.endsWith('.js')) return 'application/javascript';
  return 'application/octet-stream';
}
