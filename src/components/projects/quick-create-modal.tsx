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
import { Loader2, Rocket } from 'lucide-react';
import { useTier } from '@/lib/hooks/use-tier';
import type { Client, BrandProfile } from '@/types';

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
  const [clientId, setClientId] = useState('');
  const [clients, setClients] = useState<Client[]>([]);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

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

  const handleCreate = async () => {
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !creating) {
      handleCreate();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            {templateName ? `Using "${templateName}" template` : 'Set up your new site'}
          </DialogDescription>
        </DialogHeader>

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
            ) : (
              <Rocket className="mr-2 h-4 w-4" />
            )}
            Create & Open Editor
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
