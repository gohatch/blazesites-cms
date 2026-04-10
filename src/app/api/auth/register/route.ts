import { NextResponse } from 'next/server';
import { createServiceRoleClient } from '@/lib/supabase/server';
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = registerSchema.parse(body);

    const supabase = await createServiceRoleClient();

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    // Create organization
    const { data: org, error: orgError } = await supabase
      .from('organizations')
      .insert({
        name: `${name}'s Organization`,
        slug: email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '-'),
      })
      .select()
      .single();

    if (orgError) {
      return NextResponse.json({ error: 'Failed to create organization' }, { status: 500 });
    }

    // Create user profile
    const { error: profileError } = await supabase.from('users').insert({
      id: authData.user.id,
      email,
      name,
      role: 'owner',
      subscription_tier: 'starter',
      org_id: org.id,
    });

    if (profileError) {
      return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 });
    }

    // Add user to org members
    await supabase.from('org_members').insert({
      user_id: authData.user.id,
      org_id: org.id,
      role: 'owner',
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0].message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
