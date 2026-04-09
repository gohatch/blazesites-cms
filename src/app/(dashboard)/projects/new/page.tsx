'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TemplateCard } from '@/components/templates/template-card';
import { ImportFromSite } from '@/components/projects/import-from-site';
import { ArrowLeft, ArrowRight, Globe, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Client, Template, BrandProfile } from '@/types';

type Step = 'details' | 'template';

export default function NewProjectPage() {
  return (
    <Suspense>
      <NewProjectContent />
    </Suspense>
  );
}

function NewProjectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedTemplate = searchParams.get('template');
  const [step, setStep] = useState<Step>('details');
  const [clients, setClients] = useState<Client[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [clientId, setClientId] = useState('');
  const [templateId, setTemplateId] = useState(preselectedTemplate || '');
  const [brandProfile, setBrandProfile] = useState<BrandProfile | null>(null);
  const [showImport, setShowImport] = useState(false);

  // Read brand profile from sessionStorage (passed from template preview)
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('blazesites_brand_profile');
      if (stored) {
        setBrandProfile(JSON.parse(stored));
        sessionStorage.removeItem('blazesites_brand_profile');
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    Promise.all([
      fetch('/api/clients').then((r) => r.ok ? r.json() : []),
      fetch('/api/templates?limit=100').then((r) => r.ok ? r.json() : []),
    ]).then(([c, t]) => {
      setClients(c.data || c);
      setTemplates(t.data || t);
    });
  }, []);

  async function handleCreate() {
    setLoading(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          client_id: clientId || null,
          template_id: templateId || null,
          brand_profile: brandProfile || null,
        }),
      });

      if (res.ok) {
        const project = await res.json();
        router.push(`/projects/${project.id}/editor`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Project</h1>
          <p className="text-muted-foreground">
            {step === 'details'
              ? preselectedTemplate ? 'Name your project' : 'Step 1: Project Details'
              : 'Step 2: Choose a Template'}
          </p>
        </div>
      </div>

      {step === 'details' && (
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Name your project and assign it to a client</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name *</Label>
              <Input
                id="name"
                placeholder="e.g. Acme Corp Website Redesign"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client">Client (optional)</Label>
              <Select value={clientId} onValueChange={(v) => setClientId(v ?? '')}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              {preselectedTemplate ? (
                <Button onClick={handleCreate} disabled={!name.trim() || loading}>
                  {loading ? 'Creating...' : 'Create & Open Editor'}
                </Button>
              ) : (
                <Button onClick={() => setStep('template')} disabled={!name.trim()}>
                  Next: Choose Template
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'template' && (
        <div className="space-y-4">
          {/* Import from existing site */}
          {showImport ? (
            <ImportFromSite
              onApply={(profile) => {
                setBrandProfile(profile);
                setShowImport(false);
              }}
              onCancel={() => setShowImport(false)}
            />
          ) : (
            <Card>
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Have an existing website?</p>
                    <p className="text-xs text-muted-foreground">
                      Import colors, content, and branding automatically
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowImport(true)}>
                  Import Branding
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Brand profile badge */}
          {brandProfile && !showImport && (
            <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Branding imported
              </Badge>
              <span className="text-sm text-muted-foreground">
                from {brandProfile.businessName || brandProfile.sourceUrl}
              </span>
              <div className="ml-auto flex items-center gap-2">
                {brandProfile.colors.primary && (
                  <div
                    className="h-5 w-5 rounded-full border"
                    style={{ backgroundColor: brandProfile.colors.primary }}
                  />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setBrandProfile(null)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

          {/* Template selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose a Template</CardTitle>
              <CardDescription>
                Select a starting template for your website
                {brandProfile && ' — branding will be applied automatically'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {templates.length === 0 ? (
                <p className="py-8 text-center text-muted-foreground">
                  No templates available. You can still create a blank project.
                </p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {templates.map((template) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      selected={templateId === template.id}
                      onClick={() => setTemplateId(template.id)}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep('details')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleCreate} disabled={loading}>
              {loading ? 'Creating...' : 'Create Project'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
