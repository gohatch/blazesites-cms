import { LeadCard } from './lead-card';
import type { Lead, LeadStage } from '@/types';

const stageLabels: Record<LeadStage, string> = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  proposal: 'Proposal',
  negotiation: 'Negotiation',
  won: 'Won',
  lost: 'Lost',
};

const stageColors: Record<LeadStage, string> = {
  new: 'bg-blue-500',
  contacted: 'bg-yellow-500',
  qualified: 'bg-purple-500',
  proposal: 'bg-orange-500',
  negotiation: 'bg-pink-500',
  won: 'bg-green-500',
  lost: 'bg-gray-500',
};

interface PipelineColumnProps {
  stage: LeadStage;
  leads: Lead[];
  onLeadClick?: (lead: Lead) => void;
}

export function PipelineColumn({ stage, leads, onLeadClick }: PipelineColumnProps) {
  return (
    <div className="glass-card flex w-64 flex-shrink-0 flex-col rounded-2xl">
      <div className="flex items-center gap-2 border-b border-border/50 p-3">
        <div className={`h-2 w-2 rounded-full ${stageColors[stage]}`} />
        <h3 className="text-sm font-semibold">{stageLabels[stage]}</h3>
        <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{leads.length}</span>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto p-2">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} onClick={() => onLeadClick?.(lead)} />
        ))}
      </div>
    </div>
  );
}
