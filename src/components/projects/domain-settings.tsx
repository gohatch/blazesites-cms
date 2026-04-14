'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, ArrowRight, Copy, ChevronDown, Loader2, ExternalLink, ArrowLeft } from 'lucide-react';

interface DomainSettingsProps {
  projectId: string;
  subdomain: string;
  customDomain?: string;
  dnsVerified?: boolean;
  status?: string;
}

type WizardStep = 1 | 2 | 3 | 4;

function getInitialStep(customDomain?: string, dnsVerified?: boolean): WizardStep {
  if (!customDomain) return 1;
  if (!dnsVerified) return 2;
  return 4;
}

export function DomainSettings({ projectId, subdomain, customDomain: initialDomain, dnsVerified: initialVerified, status }: DomainSettingsProps) {
  const [step, setStep] = useState<WizardStep>(() => getInitialStep(initialDomain, initialVerified));
  const [domain, setDomain] = useState(initialDomain || '');
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);
  const [failedChecks, setFailedChecks] = useState(0);
  const [verifyMessage, setVerifyMessage] = useState('');
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blazesites.com.au';
  const cnameTarget = `${subdomain}.${appDomain}`;

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  const cleanDomain = (input: string) => {
    let cleaned = input.trim().toLowerCase();
    cleaned = cleaned.replace(/^https?:\/\//, '');
    cleaned = cleaned.replace(/\/+$/, '');
    return cleaned;
  };

  const isDomainValid = (d: string) => {
    const cleaned = cleanDomain(d);
    return /^([a-z0-9-]+\.)+[a-z]{2,}$/.test(cleaned);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // Step 1 — Connect domain
  // ---------------------------------------------------------------------------
  const handleConnect = async () => {
    const cleaned = cleanDomain(domain);
    setDomain(cleaned);
    setSaving(true);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ custom_domain: cleaned }),
      });
      if (res.ok) {
        setStep(2);
      }
    } finally {
      setSaving(false);
    }
  };

  // ---------------------------------------------------------------------------
  // Step 3 — DNS verification polling
  // ---------------------------------------------------------------------------
  const checkDns = useCallback(async () => {
    try {
      const res = await fetch(`/api/projects/${projectId}/verify-dns`, { method: 'POST' });
      const data = await res.json();
      if (data.verified) {
        setStep(4);
        setFailedChecks(0);
        return true;
      }
      setFailedChecks((prev) => prev + 1);
      setVerifyMessage(data.message || '');
      return false;
    } catch {
      setFailedChecks((prev) => prev + 1);
      setVerifyMessage('Failed to check DNS. Please try again.');
      return false;
    }
  }, [projectId]);

  // Auto-poll when on step 3
  useEffect(() => {
    if (step !== 3) {
      if (pollRef.current) clearInterval(pollRef.current);
      return;
    }

    // Immediate first check
    checkDns();

    pollRef.current = setInterval(() => {
      if (failedChecks >= 3) {
        if (pollRef.current) clearInterval(pollRef.current);
        return;
      }
      checkDns();
    }, 15000);

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [step, checkDns, failedChecks]);

  // ---------------------------------------------------------------------------
  // Registrar tips
  // ---------------------------------------------------------------------------
  const [openTip, setOpenTip] = useState<string | null>(null);

  const registrarTips: { name: string; instructions: string }[] = [
    { name: 'GoDaddy', instructions: 'Go to My Products > DNS > Manage Zones. Find your domain, click DNS, then Add Record. Select CNAME, enter the Host and Value above, and save.' },
    { name: 'Namecheap', instructions: 'Go to Domain List > Manage > Advanced DNS. Click Add New Record, choose CNAME, enter the Host and Target values above, then save.' },
    { name: 'Cloudflare', instructions: 'Go to your domain dashboard > DNS > Records. Click Add Record, choose CNAME type, enter the Name and Target from above. Toggle proxy off (DNS only) for initial setup.' },
  ];

  // ---------------------------------------------------------------------------
  // Step indicator
  // ---------------------------------------------------------------------------
  const steps = [
    { num: 1, label: 'Domain' },
    { num: 2, label: 'DNS' },
    { num: 3, label: 'Verify' },
    { num: 4, label: 'Live' },
  ] as const;

  const hostValue = domain.startsWith('www.') ? 'www' : '@';

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
      {/* Step indicator bar */}
      <div className="flex items-center gap-0 border-b border-zinc-200 dark:border-zinc-800 px-5 py-3">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center">
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors ${
                  step === s.num
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                    : step > s.num
                    ? 'bg-green-500 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                }`}
              >
                {step > s.num ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span
                className={`text-xs font-medium ${
                  step === s.num ? 'text-zinc-900 dark:text-white' : 'text-zinc-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-6 h-px bg-zinc-200 dark:bg-zinc-700 mx-2" />
            )}
          </div>
        ))}
      </div>

      <div className="p-5">
        {/* ================================================================= */}
        {/* STEP 1 — Enter your domain                                        */}
        {/* ================================================================= */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Enter your domain</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Type the domain you want visitors to use for your site.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 pointer-events-none select-none">
                    www.
                  </span>
                  <Input
                    placeholder="yourbusiness.com"
                    value={domain.replace(/^www\./, '')}
                    onChange={(e) => setDomain('www.' + e.target.value.replace(/^www\./, ''))}
                    className="pl-11"
                  />
                </div>
              </div>
              <p className="text-[11px] text-zinc-400">
                Don&apos;t include http:// or https:// — we&apos;ll handle that for you.
              </p>
            </div>

            <Button
              onClick={handleConnect}
              disabled={saving || !isDomainValid(domain)}
              size="sm"
              className="gap-1.5"
            >
              {saving ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5" />
              )}
              Connect Domain
            </Button>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 2 — Update your DNS                                          */}
        {/* ================================================================= */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Update your DNS</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Add this DNS record at your domain registrar to point <span className="font-mono font-medium text-zinc-700 dark:text-zinc-300">{domain}</span> to your site.
              </p>
            </div>

            {/* DNS record table */}
            <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <div className="grid grid-cols-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-wide bg-zinc-50 dark:bg-zinc-800/50 px-3 py-2">
                <span>Type</span>
                <span>Host</span>
                <span>Value</span>
              </div>
              <div className="grid grid-cols-3 px-3 py-2.5 text-sm font-mono text-zinc-800 dark:text-zinc-200 items-center">
                <span>CNAME</span>
                <span>{hostValue}</span>
                <button
                  onClick={() => copyToClipboard(cnameTarget)}
                  className="flex items-center gap-1.5 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors text-left"
                >
                  <span className="truncate">{cnameTarget}</span>
                  <Copy className="w-3 h-3 flex-shrink-0 text-zinc-400" />
                </button>
              </div>
            </div>

            {copied && (
              <p className="text-[11px] text-green-500 -mt-2">Copied to clipboard!</p>
            )}

            {/* Registrar tips */}
            <div className="space-y-1">
              <p className="text-[11px] text-zinc-400 font-medium uppercase tracking-wide">Popular registrars</p>
              {registrarTips.map((tip) => (
                <div key={tip.name} className="rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <button
                    onClick={() => setOpenTip(openTip === tip.name ? null : tip.name)}
                    className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    {tip.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                        openTip === tip.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openTip === tip.name && (
                    <div className="px-3 pb-2.5 text-xs text-zinc-500 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-2">
                      {tip.instructions}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(1)}
                className="gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </Button>
              <Button
                size="sm"
                onClick={() => { setFailedChecks(0); setVerifyMessage(''); setStep(3); }}
                className="gap-1.5"
              >
                I&apos;ve updated my DNS
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 3 — Verifying DNS                                            */}
        {/* ================================================================= */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Verifying...</h3>
              <p className="text-xs text-zinc-500 mt-1">
                We&apos;re checking if your DNS records have been updated.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 py-6">
              {failedChecks < 3 ? (
                <>
                  <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Checking DNS records...</p>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-600 text-lg">!</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Not found yet — this is normal
                  </p>
                  {verifyMessage && (
                    <p className="text-xs text-zinc-500 text-center max-w-xs">{verifyMessage}</p>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setFailedChecks(0);
                      setVerifyMessage('');
                    }}
                    className="gap-1.5 mt-1"
                  >
                    Check Again
                  </Button>
                </>
              )}
            </div>

            <p className="text-[11px] text-zinc-400 text-center">
              DNS changes can take up to 48 hours, but usually happen within minutes.
            </p>

            <div className="flex justify-start">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(2)}
                className="gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </Button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 4 — Connected!                                               */}
        {/* ================================================================= */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-3 py-6">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Connected!</h3>
              <p className="text-xs text-zinc-500">
                Your domain is live and pointing to your site.
              </p>
              <a
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-1"
              >
                https://{domain}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(1)}
              >
                Change Domain
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
