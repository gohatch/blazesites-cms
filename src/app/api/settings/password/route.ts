import { auth } from '@/lib/auth';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { apiError, apiSuccess } from '@/lib/api/helpers';
import { z } from 'zod';

const passwordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
});

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user) return apiError('Unauthorized', 401);

  try {
    const body = await req.json();
    const { currentPassword, newPassword } = passwordSchema.parse(body);

    const supabase = await createServiceRoleClient();

    // Verify current password by attempting sign in
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email: session.user.email!,
      password: currentPassword,
    });

    if (verifyError) {
      return apiError('Current password is incorrect', 400);
    }

    // Update password
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      session.user.id!,
      { password: newPassword }
    );

    if (updateError) return apiError(updateError.message, 500);
    return apiSuccess({ message: 'Password updated successfully' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return apiError(err.issues[0].message, 400);
    }
    return apiError('Internal server error', 500);
  }
}
