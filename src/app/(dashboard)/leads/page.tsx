'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PipelineColumn } from '@/components/leads/pipeline-column';
import { LeadForm } from '@/components/leads/lead-form';
import { Plus } from 'lucide-react';
import type { Lead, LeadStage } from '@/types';

const stages: LeadStage[] = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost'];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | undefined>();

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch('/api/leads');
        if (res.ok) {
          const json = await res.json();
          setLeads(json.data || json);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  function handleSave(saved: Lead) {
    setLeads((prev) => {
      const existing = prev.findIndex((l) => l.id === saved.id);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = saved;
        return updated;
      }
      return [saved, ...prev];
    });
    setEditingLead(undefined);
  }

  function handleLeadClick(lead: Lead) {
    setEditingLead(lead);
    setFormOpen(true);
  }

  return (
    <div className="relative z-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lead Pipeline</h1>
          <p className="text-muted-foreground">Track and manage your sales pipeline</p>
        </div>
        <Button onClick={() => { setEditingLead(undefined); setFormOpen(true); }}>
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {loading ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.slice(0, 5).map((s) => (
            <div key={s} className="h-96 w-64 flex-shrink-0 animate-pulse rounded-2xl bg-muted/50" />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <PipelineColumn
              key={stage}
              stage={stage}
              leads={leads.filter((l) => l.stage === stage)}
              onLeadClick={handleLeadClick}
            />
          ))}
        </div>
      )}

      <LeadForm
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditingLead(undefined); }}
        onSave={handleSave}
        lead={editingLead}
      />
    </div>
  );
}
