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

export function getR2PublicUrl(key: string): string {
  if (PUBLIC_URL) {
    return `${PUBLIC_URL.replace(/\/$/, '')}/${key}`;
  }
  // Fallback: use the worker URL pattern
  return `https://sites.blazesites.com.au/${key}`;
}
