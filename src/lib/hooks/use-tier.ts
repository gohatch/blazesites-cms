'use client';

import { useSession } from 'next-auth/react';
import type { SubscriptionTier } from '@/types';

export function useTier() {
  const { data: session } = useSession();
  const tier = (session?.user?.subscriptionTier as SubscriptionTier) || 'starter';
  const isCrm = tier === 'pro' || tier === 'agency';

  return { tier, isCrm };
}
