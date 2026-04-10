'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { PlanSelector } from '@/components/billing/plan-selector';
import { CheckoutModal } from '@/components/billing/checkout-modal';
import { CreditCard, BarChart3, Globe } from 'lucide-react';
import type { SubscriptionPlan, SubscriptionTier } from '@/types';

export default function BillingPage() {
  const { update: updateSession } = useSession();
  const [currentTier, setCurrentTier] = useState<SubscriptionTier | null>(null);
  const [sitesUsed, setSitesUsed] = useState(0);
  const [siteLimit, setSiteLimit] = useState(0);
  const [planPrice, setPlanPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const fetchStatus = async () => {
    const res = await fetch('/api/billing/status');
    if (res.ok) {
      const data = await res.json();
      setCurrentTier(data.tier);
      setSitesUsed(data.sitesUsed);
      setSiteLimit(data.siteLimit);
      setPlanPrice(data.plan?.price || 0);
    }
    setLoading(false);
  };

  useEffect(() => { fetchStatus(); }, []);

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setCheckoutOpen(true);
  };

  const handleSuccess = async () => {
    setCheckoutOpen(false);
    setSelectedPlan(null);
    await fetchStatus();
    // Refresh the NextAuth session so sidebar/dashboard reflect the new tier
    await updateSession();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-zinc-400">Loading billing...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Billing & Plans</h1>
        <p className="text-sm text-zinc-500 mt-1">Manage your subscription and publish your sites.</p>
      </div>

      {/* Current usage cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
              <CreditCard className="w-4.5 h-4.5 text-violet-500" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Current Plan</span>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            {currentTier ? currentTier.charAt(0).toUpperCase() + currentTier.slice(1) : 'No Plan'}
          </p>
          {planPrice > 0 && <p className="text-xs text-zinc-500 mt-0.5">${planPrice}/mo</p>}
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Globe className="w-4.5 h-4.5 text-green-500" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Live Sites</span>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            {sitesUsed} <span className="text-sm font-normal text-zinc-400">/ {siteLimit || '—'}</span>
          </p>
          {siteLimit > 0 && (
            <div className="mt-2 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${Math.min((sitesUsed / siteLimit) * 100, 100)}%`,
                  backgroundColor: sitesUsed >= siteLimit ? '#ef4444' : '#22c55e',
                }}
              />
            </div>
          )}
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <BarChart3 className="w-4.5 h-4.5 text-blue-500" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Monthly Cost</span>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            ${planPrice}<span className="text-sm font-normal text-zinc-400">/mo</span>
          </p>
        </div>
      </div>

      {/* Plan selector */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
          {currentTier ? 'Change Plan' : 'Choose a Plan'}
        </h2>
        <p className="text-sm text-zinc-500 mb-6">
          {currentTier ? 'Upgrade or downgrade anytime.' : 'Subscribe to start publishing your sites.'}
        </p>
        <PlanSelector currentTier={currentTier} onSelect={handleSelectPlan} />
      </div>

      <CheckoutModal
        plan={selectedPlan}
        open={checkoutOpen}
        onClose={() => { setCheckoutOpen(false); setSelectedPlan(null); }}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
