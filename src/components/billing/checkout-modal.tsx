'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock, Loader2, CheckCircle2 } from 'lucide-react';
import type { SubscriptionPlan } from '@/types';

interface CheckoutModalProps {
  plan: SubscriptionPlan | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function CheckoutModal({ plan, open, onClose, onSuccess }: CheckoutModalProps) {
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulated 1.5s payment delay
    await new Promise((r) => setTimeout(r, 1500));

    const res = await fetch('/api/billing/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: plan.id }),
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setProcessing(false);
        onSuccess();
      }, 1500);
    } else {
      setProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && !processing && onClose()}>
      <DialogContent className="sm:max-w-md">
        {success ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Payment Successful!</h3>
            <p className="text-sm text-zinc-500">
              You&apos;re now on the {plan.name} plan.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Subscribe to {plan.name}
              </DialogTitle>
            </DialogHeader>

            <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{plan.name} Plan</span>
                <span className="text-lg font-bold">${plan.price}/mo</span>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                {plan.site_limit} {plan.site_limit === 1 ? 'site' : 'sites'} included
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-xs">Card Number</Label>
                <Input
                  defaultValue="4242 4242 4242 4242"
                  className="mt-1 font-mono"
                  disabled={processing}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Expiry</Label>
                  <Input defaultValue="12/28" className="mt-1" disabled={processing} />
                </div>
                <div>
                  <Label className="text-xs">CVC</Label>
                  <Input defaultValue="123" className="mt-1" disabled={processing} />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                <Lock className="w-3 h-3" />
                Simulated payment — no real charges
              </div>

              <Button type="submit" className="w-full" disabled={processing}>
                {processing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay $${plan.price}/mo`
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
