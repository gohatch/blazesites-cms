import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { checkRateLimit } from './rate-limit';

type AuthContext = {
  session: { user: { id: string; orgId: string; role: string; email: string } };
  orgId: string;
  supabase: Awaited<ReturnType<typeof createServiceRoleClient>>;
};

type AuthHandler = (req: Request, ctx: AuthContext) => Promise<NextResponse>;

export function withAuth(handler: AuthHandler) {
  return async (req: Request, routeCtx?: unknown) => {
    const session = await auth();
    if (!session?.user) {
      return apiError('Unauthorized', 401);
    }

    // Rate limit write operations
    const method = req.method;
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
      const allowed = checkRateLimit(ip);
      if (!allowed) {
        return apiError('Too many requests', 429);
      }
    }

    const orgId = session.user.orgId as string;
    const supabase = await createServiceRoleClient();

    // Merge route context params into request for dynamic routes
    const extendedReq = routeCtx ? Object.assign(req, { routeCtx }) : req;

    return handler(extendedReq, {
      session: session as AuthContext['session'],
      orgId,
      supabase,
    });
  };
}

export function apiSuccess(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

export function apiError(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

export function parsePagination(searchParams: URLSearchParams) {
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
  const search = searchParams.get('search')?.trim() || '';
  const offset = (page - 1) * limit;

  return { page, limit, offset, search };
}
