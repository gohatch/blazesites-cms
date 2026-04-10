import { Card, CardContent } from '@/components/ui/card';
import { Building2, Mail, DollarSign } from 'lucide-react';
import type { Lead } from '@/types';

export function LeadCard({ lead, onClick }: { lead: Lead; onClick?: () => void }) {
  return (
    <Card
      className="cursor-pointer transition-shadow hover:shadow-md"
      onClick={onClick}
    >
      <CardContent className="p-3 space-y-1">
        <p className="font-medium text-sm">{lead.name}</p>
        {lead.company && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Building2 className="h-3 w-3" />
            {lead.company}
          </div>
        )}
        {lead.email && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Mail className="h-3 w-3" />
            {lead.email}
          </div>
        )}
        {lead.value && (
          <div className="flex items-center gap-1.5 text-xs text-green-600">
            <DollarSign className="h-3 w-3" />
            ${lead.value.toLocaleString()}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
