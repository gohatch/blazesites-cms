import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { createServiceRoleClient } from '@/lib/supabase/server';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const supabase = await createServiceRoleClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        if (error || !data.user) return null;

        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();

        return {
          id: data.user.id,
          email: data.user.email!,
          name: profile?.name || data.user.email!,
          image: profile?.avatar_url,
          role: profile?.role || 'editor',
          orgId: profile?.org_id,
          subscriptionTier: profile?.subscription_tier || 'starter',
          onboardingCompleted: profile?.onboarding_completed ?? true,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google' && user.email) {
        const supabase = await createServiceRoleClient();

        // Check if user profile exists by email
        const { data: existingProfile } = await supabase
          .from('users')
          .select('*')
          .eq('email', user.email)
          .single();

        if (existingProfile) {
          // Existing user — attach profile data
          user.id = existingProfile.id;
          user.role = existingProfile.role;
          user.orgId = existingProfile.org_id;
          user.subscriptionTier = existingProfile.subscription_tier;
          user.onboardingCompleted = existingProfile.onboarding_completed ?? true;
          return true;
        }

        // New Google user — create Supabase auth user + profile + org
        const { data: authData, error: authError } = await supabase.auth.admin.createUser({
          email: user.email,
          email_confirm: true,
          user_metadata: { name: user.name, avatar_url: user.image },
        });

        if (authError || !authData.user) return false;

        const slug = user.email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '-');
        const { data: org } = await supabase
          .from('organizations')
          .insert({ name: `${user.name}'s Organization`, slug })
          .select()
          .single();

        if (!org) return false;

        await supabase.from('users').insert({
          id: authData.user.id,
          email: user.email,
          name: user.name || user.email,
          avatar_url: user.image,
          role: 'owner',
          subscription_tier: 'starter',
          org_id: org.id,
        });

        await supabase.from('org_members').insert({
          user_id: authData.user.id,
          org_id: org.id,
          role: 'owner',
        });

        user.id = authData.user.id;
        user.role = 'owner';
        user.orgId = org.id;
        user.subscriptionTier = 'starter';
        user.onboardingCompleted = false;
      }
      return true;
    },
    async jwt({ token, user, trigger }) {
      if (user) {
        token.role = user.role;
        token.orgId = user.orgId;
        token.subscriptionTier = user.subscriptionTier;
        token.onboardingCompleted = user.onboardingCompleted;
      }
      // Refresh profile data on session update
      if (trigger === 'update') {
        const supabase = await createServiceRoleClient();
        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('email', token.email)
          .single();
        if (profile) {
          token.sub = profile.id;
          token.role = profile.role;
          token.orgId = profile.org_id;
          token.subscriptionTier = profile.subscription_tier;
          token.onboardingCompleted = profile.onboarding_completed ?? true;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role;
        session.user.orgId = token.orgId;
        session.user.subscriptionTier = token.subscriptionTier;
        session.user.onboardingCompleted = token.onboardingCompleted;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
});
