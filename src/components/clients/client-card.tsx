import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Mail, Phone } from 'lucide-react';
import type { Client } from '@/types';

const statusColors: Record<string, string> = {
  active: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400',
  inactive: 'bg-gray-500/10 text-gray-500 dark:bg-gray-500/20 dark:text-gray-400',
  prospect: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
};

export function ClientCard({ client }: { client: Client }) {
  return (
    <Link href={`/clients/${client.id}`}>
      <Card className="transition-all hover:shadow-lg dark:hover:shadow-primary/5">
        <CardHeader className="flex flex-row items-start justify-between pb-2">
          <CardTitle className="text-base">{client.name}</CardTitle>
          <Badge variant="secondary" className={statusColors[client.status]}>
            {client.status}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-1.5 text-sm text-muted-foreground">
          {client.company && (
            <div className="flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5" />
              {client.company}
            </div>
          )}
          {client.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              {client.email}
            </div>
          )}
          {client.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              {client.phone}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
