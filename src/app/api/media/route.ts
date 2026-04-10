import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess, parsePagination } from '@/lib/api/helpers';

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('project_id');
  const orgId = session.user.orgId as string;
  const { page, limit, offset, search } = parsePagination(searchParams);

  const supabase = await createServiceRoleClient();
  let query = supabase
    .from('media')
    .select('*', { count: 'exact' })
    .eq('org_id', orgId)
    .order('created_at', { ascending: false });

  if (projectId) {
    query = query.eq('project_id', projectId);
  }

  if (search) {
    query = query.ilike('filename', `%${search}%`);
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) return apiError(error.message, 500);
  return apiSuccess({ data, total: count ?? 0, page, limit });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const orgId = session.user.orgId as string;
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const projectId = formData.get('project_id') as string | null;

  if (!file) return apiError('No file provided', 400);

  const supabase = await createServiceRoleClient();

  const ext = file.name.split('.').pop();
  const path = `${orgId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: uploadError } = await supabase.storage.from('media').upload(path, buffer, {
    contentType: file.type,
  });

  if (uploadError) return apiError(uploadError.message, 500);

  const { data: urlData } = supabase.storage.from('media').getPublicUrl(path);

  const { data: media, error: dbError } = await supabase
    .from('media')
    .insert({
      filename: file.name,
      url: urlData.publicUrl,
      size: file.size,
      mime_type: file.type,
      project_id: projectId,
      org_id: orgId,
    })
    .select()
    .single();

  if (dbError) return apiError(dbError.message, 500);
  return apiSuccess(media, 201);
}
