import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data, error } = await supabase
    .from('projects')
    .select('brand_profile, template_id')
    .eq('id', id)
    .eq('org_id', orgId)
    .single();

  if (error) return apiError('Project not found', 404);

  return apiSuccess({
    brandProfile: data.brand_profile,
    templateId: data.template_id,
  });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  const { id } = await params;
  const body = await req.json();
  const supabase = await createServiceRoleClient();
  const orgId = session.user.orgId as string;

  const { data, error } = await supabase
    .from('projects')
    .update({ brand_profile: body })
    .eq('id', id)
    .eq('org_id', orgId)
    .select('brand_profile')
    .single();

  if (error) return apiError(error.message, 500);

  return apiSuccess(data.brand_profile);
}
