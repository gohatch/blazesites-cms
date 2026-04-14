import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

const ACCOUNT_ID = process.env.CLOUDFLARE_R2_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const BUCKET_NAME = process.env.CLOUDFLARE_R2_BUCKET_NAME || 'blazesites-sites';
const PUBLIC_URL = process.env.CLOUDFLARE_R2_PUBLIC_URL; // e.g. https://sites.blazesites.com.au

export function isR2Configured(): boolean {
  return !!(ACCOUNT_ID && ACCESS_KEY_ID && SECRET_ACCESS_KEY);
}

function getClient(): S3Client {
  if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
    throw new Error('Cloudflare R2 credentials not configured');
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
    },
  });
}

export async function uploadToR2(
  key: string,
  body: Buffer | string,
  contentType: string = 'text/html; charset=utf-8'
): Promise<void> {
  const client = getClient();
  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: typeof body === 'string' ? Buffer.from(body, 'utf-8') : body,
      ContentType: contentType,
      CacheControl: 'public, max-age=3600, s-maxage=86400',
    })
  );
}

export async function deleteFromR2(key: string): Promise<void> {
  const client = getClient();
  await client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    })
  );
}

export async function deleteSubdomainFromR2(subdomain: string): Promise<void> {
  const client = getClient();
  const prefix = `${subdomain}/`;

  // List all objects with this prefix
  const listResult = await client.send(
    new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    })
  );

  if (!listResult.Contents?.length) return;

  // Delete each object
  await Promise.all(
    listResult.Contents.map((obj) =>
      obj.Key
        ? client.send(new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: obj.Key }))
        : Promise.resolve()
    )
  );
}

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function getMimeType(filePath: string): string {
  const ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

/**
 * Upload an entire directory (e.g. Astro dist/) to R2 under a prefix.
 * Returns the public URL for the index.html.
 */
export async function uploadPreviewToR2(distDir: string, slug: string): Promise<string> {
  const { readdir, readFile } = await import('fs/promises');
  const path = await import('path');

  async function walkDir(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await walkDir(fullPath)));
      } else {
        files.push(fullPath);
      }
    }
    return files;
  }

  const files = await walkDir(distDir);
  const prefix = `previews/${slug}`;

  // Upload all files in parallel (batched to avoid overwhelming)
  const BATCH_SIZE = 10;
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (filePath) => {
        const relativePath = path.relative(distDir, filePath);
        const key = `${prefix}/${relativePath}`;
        const body = await readFile(filePath);
        const contentType = getMimeType(filePath);
        await uploadToR2(key, body, contentType);
      })
    );
  }

  return getR2PublicUrl(`${prefix}/index.html`);
}

export function getR2PublicUrl(key: string): string {
  if (PUBLIC_URL) {
    return `${PUBLIC_URL.replace(/\/$/, '')}/${key}`;
  }
  // Fallback: use the worker URL pattern
  return `https://sites.blazesites.com.au/${key}`;
}
