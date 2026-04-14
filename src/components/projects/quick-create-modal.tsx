'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Globe, Loader2, Check, ArrowRight, Rocket } from 'lucide-react';
import { useTier } from '@/lib/hooks/use-tier';
import type { Client, BrandProfile } from '@/types';

type GenerationStep = 'scan' | 'generate' | 'create';

const GENERATION_STEPS: { key: GenerationStep; label: string; subtitle: string }[] = [
  { key: 'scan', label: 'Scanning website', subtitle: 'Extracting content and branding...' },
  { key: 'generate', label: 'Generating content', subtitle: 'AI is writing your content...' },
  { key: 'create', label: 'Creating project', subtitle: 'Setting up your new site...' },
];

interface QuickCreateModalProps {
  open: boolean;
  onClose: () => void;
  templateId: string;
  templateName?: string;
  brandProfile?: BrandProfile | null;
}

export function QuickCreateModal({ open, onClose, templateId, templateName, brandProfile }: QuickCreateModalProps) {
  const router = useRouter();
  const { isCrm } = useTier();
  const [name, setName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [clientId, setClientId] = useState('');
  const [clients, setClients] = useState<Client[]>([]);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

  // URL generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeStep, setActiveStep] = useState<GenerationStep | null>(null);
  const [completedSteps, setCompletedSteps] = useState<GenerationStep[]>([]);
  const [stepError, setStepError] = useState<{ step: GenerationStep; message: string } | null>(null);

  // Fetch clients for CRM users
  useEffect(() => {
    if (!open || !isCrm) return;
    fetch('/api/clients?limit=100')
      .then((r) => r.json())
      .then((json) => setClients(json.data || json))
      .catch(() => {});
  }, [open, isCrm]);

  // Auto-suggest name from template
  useEffect(() => {
    if (open && templateName && !name) {
      setName(`My ${templateName} Site`);
    }
  }, [open, templateName]);

  // Reset generation state when modal closes
  useEffect(() => {
    if (!open) {
      setIsGenerating(false);
      setActiveStep(null);
      setCompletedSteps([]);
      setStepError(null);
    }
  }, [open]);

  const markStepComplete = (step: GenerationStep) => {
    setCompletedSteps((prev) => [...prev, step]);
  };

  const handleCreateWithUrl = async () => {
    setIsGenerating(true);
    setStepError(null);
    setCompletedSteps([]);

    let scrapedData: unknown = null;
    let generatedContent: unknown = null;

    // Step 1: Scan website
    setActiveStep('scan');
    try {
      const scrapeRes = await fetch('/api/scrape-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: websiteUrl.trim() }),
      });
      if (!scrapeRes.ok) {
        const err = await scrapeRes.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to scan website');
      }
      scrapedData = await scrapeRes.json();
      markStepComplete('scan');
    } catch (e) {
      setStepError({ step: 'scan', message: e instanceof Error ? e.message : 'Failed to scan website' });
      return;
    }

    // Step 2: Generate content
    setActiveStep('generate');
    try {
      const genRes = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scraped: scrapedData }),
      });
      if (!genRes.ok) {
        const err = await genRes.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to generate content');
      }
      generatedContent = await genRes.json();
      markStepComplete('generate');
    } catch (e) {
      setStepError({ step: 'generate', message: e instanceof Error ? e.message : 'Failed to generate content' });
      return;
    }

    // Step 3: Create project
    setActiveStep('create');
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          template_id: templateId,
          client_id: clientId || null,
          brand_profile: generatedContent,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to create project');
      }
      const project = await res.json();
      markStepComplete('create');
      onClose();
      router.push(`/projects/${project.id}/editor`);
    } catch (e) {
      setStepError({ step: 'create', message: e instanceof Error ? e.message : 'Failed to create project' });
    }
  };

  const handleRetry = () => {
    if (!stepError) return;
    // Re-run starting from the failed step
    setStepError(null);
    handleCreateWithUrl();
  };

  const handleSkipUrl = () => {
    // Skip URL generation and just create project normally
    setIsGenerating(false);
    setStepError(null);
    setWebsiteUrl('');
    handleCreateDirect();
  };

  const handleCreateDirect = async () => {
    if (!name.trim()) {
      setError('Project name is required');
      return;
    }

    setCreating(true);
    setError('');

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          template_id: templateId,
          client_id: clientId || null,
          brand_profile: brandProfile || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to create project');
        setCreating(false);
        return;
      }

      const project = await res.json();
      onClose();
      router.push(`/projects/${project.id}/editor`);
    } catch {
      setError('Failed to create project');
      setCreating(false);
    }
  };

  const handleCreate = async () => {
    if (!name.trim()) {
      setError('Project name is required');
      return;
    }

    setError('');

    if (websiteUrl.trim()) {
      handleCreateWithUrl();
    } else {
      handleCreateDirect();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !creating && !isGenerating) {
      handleCreate();
    }
  };

  const renderStepIcon = (step: GenerationStep, index: number) => {
    if (completedSteps.includes(step)) {
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
          <Check className="h-4 w-4" />
        </div>
      );
    }
    if (activeStep === step && !stepError) {
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      );
    }
    if (stepError?.step === step) {
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-destructive bg-destructive/10 text-destructive text-xs font-bold">
          !
        </div>
      );
    }
    return (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-muted-foreground/30 text-muted-foreground text-xs font-medium">
        {index + 1}
      </div>
    );
  };

  const renderProgressView = () => (
    <div className="flex flex-col items-center gap-6 py-4">
      <div className="w-full space-y-3">
        {GENERATION_STEPS.map((step, i) => {
          const isActive = activeStep === step.key && !stepError;
          const isCompleted = completedSteps.includes(step.key);
          const hasError = stepError?.step === step.key;
          return (
            <div
              key={step.key}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                isActive ? 'bg-primary/5' : isCompleted ? 'bg-green-500/5' : hasError ? 'bg-destructive/5' : ''
              }`}
            >
              {renderStepIcon(step.key, i)}
              <div className="min-w-0 flex-1">
                <p className={`text-sm font-medium ${isCompleted ? 'text-green-600 dark:text-green-400' : isActive ? 'text-primary' : hasError ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {step.label}
                </p>
                {(isActive || hasError) && (
                  <p className={`text-xs ${hasError ? 'text-destructive' : 'text-muted-foreground'}`}>
                    {hasError ? stepError.message : step.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {stepError && (
        <div className="flex w-full gap-2">
          <Button variant="outline" onClick={handleSkipUrl} className="flex-1" size="sm">
            Skip & Create Without URL
          </Button>
          <Button onClick={handleRetry} className="flex-1" size="sm">
            Retry
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && !isGenerating && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            {templateName ? `Using "${templateName}" template` : 'Set up your new site'}
          </DialogDescription>
        </DialogHeader>

        {isGenerating ? (
          renderProgressView()
        ) : (
          <div className="space-y-4 pt-2" onKeyDown={handleKeyDown}>
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Awesome Site"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website-url">Website URL</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="website-url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourbusiness.com (optional)"
                  className="pl-9"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter your website and AI will import your branding automatically
              </p>
            </div>

            {isCrm && clients.length > 0 && (
              <div className="space-y-2">
                <Label htmlFor="client">Client (optional)</Label>
                <Select value={clientId} onValueChange={(v) => setClientId(v ?? '')}>
                  <SelectTrigger>
                    <SelectValue placeholder="No client" />
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
            )}

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button onClick={handleCreate} disabled={creating} className="w-full">
              {creating ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : websiteUrl.trim() ? (
                <ArrowRight className="mr-2 h-4 w-4" />
              ) : (
                <Rocket className="mr-2 h-4 w-4" />
              )}
              {websiteUrl.trim() ? 'Import & Create' : 'Create & Open Editor'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
