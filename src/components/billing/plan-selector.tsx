'use client';

import { cn } from '@/lib/utils';
import { Check, Zap } from 'lucide-react';
import type { SubscriptionPlan, SubscriptionTier } from '@/types';

const PLANS: SubscriptionPlan[] = [
  { id: 'starter', name: 'Starter', price: 29, site_limit: 1, stripe_price_id: 'sim_starter', features: ['1 live site', 'Free subdomain', 'SSL included', 'Basic SEO'] },
  { id: 'growth', name: 'Growth', price: 79, site_limit: 5, stripe_price_id: 'sim_growth', features: ['5 live sites', 'Custom domains', 'Priority support', 'Advanced SEO', 'Analytics'] },
  { id: 'pro', name: 'Professional', price: 199, site_limit: 15, stripe_price_id: 'sim_pro', features: ['15 live sites', 'Custom domains', 'Priority support', 'Advanced SEO', 'Analytics', 'White-label'] },
  { id: 'agency', name: 'Agency', price: 499, site_limit: 50, stripe_price_id: 'sim_agency', features: ['50 live sites', 'Custom domains', 'Dedicated support', 'Full SEO suite', 'Analytics', 'White-label', 'API access'] },
];

interface PlanSelectorProps {
  currentTier?: SubscriptionTier | null;
  onSelect: (plan: SubscriptionPlan) => void;
  loading?: boolean;
}

export function PlanSelector({ currentTier, onSelect, loading }: PlanSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {PLANS.map((plan) => {
        const isCurrent = currentTier === plan.id;
        const isRecommended = plan.id === 'growth';

        return (
          <div
            key={plan.id}
            className={cn(
              'relative rounded-2xl border p-6 transition-all',
              isCurrent
                ? 'border-green-500/50 bg-green-500/5'
                : isRecommended
                ? 'border-violet-500/50 bg-violet-500/5 shadow-lg shadow-violet-500/10'
                : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
            )}
          >
            {isRecommended && !isCurrent && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500 text-white">
                <Zap className="w-3 h-3" />
                Recommended
              </div>
            )}
            {isCurrent && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                Current Plan
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{plan.name}</h3>
              <p className="text-xs text-zinc-500 mt-0.5">{plan.site_limit} {plan.site_limit === 1 ? 'site' : 'sites'}</p>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">${plan.price}</span>
              <span className="text-sm text-zinc-500">/mo</span>
            </div>

            <ul className="space-y-2.5 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelect(plan)}
              disabled={isCurrent || loading}
              className={cn(
                'w-full py-2.5 rounded-lg text-sm font-medium transition-all',
                isCurrent
                  ? 'bg-green-500/10 text-green-600 cursor-default'
                  : isRecommended
                  ? 'bg-violet-500 text-white hover:bg-violet-600 shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90',
                loading && 'opacity-50 cursor-wait'
              )}
            >
              {isCurrent ? 'Current Plan' : loading ? 'Processing...' : `Get ${plan.name}`}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export { PLANS };
