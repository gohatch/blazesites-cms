'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe, CheckCircle2, XCircle, Loader2, Copy, ExternalLink, AlertCircle } from 'lucide-react';

interface DomainSettingsProps {
  projectId: string;
  subdomain: string;
  customDomain?: string;
  dnsVerified?: boolean;
  status?: string;
}

export function DomainSettings({ projectId, subdomain, customDomain: initialDomain, dnsVerified: initialVerified, status }: DomainSettingsProps) {
  const [domain, setDomain] = useState(initialDomain || '');
  const [verified, setVerified] = useState(initialVerified || false);
  const [saving, setSaving] = useState(false);
  const [checking, setChecking] = useState(false);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const appDomain = process.env.NEXT_PUBLIC_APP_DOMAIN || 'blazesites.com.au';
  const cnameTarget = `${subdomain}.${appDomain}`;
  const subdomainUrl = `https://${cnameTarget}`;

  const handleSaveDomain = async () => {
    setSaving(true);
    setMessage('');
    setVerified(false);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ custom_domain: domain || null, dns_verified: false }),
      });
      if (res.ok) {
        setMessage(domain ? 'Domain saved. Follow the instructions below to verify.' : 'Custom domain removed.');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleVerify = async () => {
    setChecking(true);
    setMessage('');
    try {
      const res = await fetch(`/api/projects/${projectId}/verify-dns`, { method: 'POST' });
      const data = await res.json();
      setVerified(data.verified);
      setMessage(data.message);
    } catch {
      setMessage('Failed to check DNS. Please try again.');
    } finally {
      setChecking(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
      <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-1">
          <Globe className="w-4 h-4 text-zinc-500" />
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Domain Settings</h3>
        </div>
        <p className="text-xs text-zinc-500">Configure how visitors access your site.</p>
      </div>

      <div className="p-5 space-y-5">
        {/* Default subdomain */}
        <div>
          <Label className="text-xs text-zinc-500">Default Subdomain</Label>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-mono text-zinc-700 dark:text-zinc-300">
              {cnameTarget}
            </div>
            {status === 'live' && (
              <a href={subdomainUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Custom domain */}
        <div>
          <Label className="text-xs text-zinc-500">Custom Domain</Label>
          <div className="flex gap-2 mt-1">
            <Input
              placeholder="www.yourbusiness.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveDomain} disabled={saving} size="sm" variant="outline">
              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Save'}
            </Button>
          </div>
        </div>

        {/* DNS Instructions */}
        {domain && (
          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 space-y-3">
            <h4 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">DNS Configuration</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Add the following CNAME record in your domain registrar&apos;s DNS settings:
            </p>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-zinc-400 block mb-1">Type</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700 block">CNAME</span>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Host</span>
                <span className="font-mono text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700 block">
                  {domain.startsWith('www.') ? 'www' : '@'}
                </span>
              </div>
              <div>
                <span className="text-zinc-400 block mb-1">Value</span>
                <button
                  onClick={() => copyToClipboard(cnameTarget)}
                  className="font-mono text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700 block w-full text-left flex items-center gap-1 hover:border-zinc-400 transition-colors"
                >
                  <span className="truncate">{cnameTarget}</span>
                  <Copy className="w-3 h-3 flex-shrink-0 text-zinc-400" />
                </button>
              </div>
            </div>
            {copied && <p className="text-[10px] text-green-500">Copied to clipboard!</p>}

            <div className="flex items-center gap-2 pt-2">
              <Button onClick={handleVerify} disabled={checking} size="sm" variant="outline" className="gap-1.5">
                {checking ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : verified ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5" />
                )}
                {checking ? 'Checking...' : 'Verify DNS'}
              </Button>

              {verified && (
                <span className="flex items-center gap-1 text-xs text-green-500">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
          </div>
        )}

        {/* Status message */}
        {message && (
          <div className={`flex items-start gap-2 p-3 rounded-lg text-xs ${verified ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'}`}>
            {verified ? <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" /> : <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />}
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
