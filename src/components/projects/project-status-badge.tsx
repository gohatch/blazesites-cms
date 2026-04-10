import { Badge } from '@/components/ui/badge';
import type { ProjectStatus } from '@/types';

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  draft: { label: 'Draft', className: 'bg-gray-500/10 text-gray-500 border-gray-500/20' },
  in_progress: { label: 'In Progress', className: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  under_review: { label: 'Under Review', className: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  building: { label: 'Building', className: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  live: { label: 'Live', className: 'bg-green-500/10 text-green-500 border-green-500/20' },
  archived: { label: 'Archived', className: 'bg-red-500/10 text-red-500 border-red-500/20' },
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status] || statusConfig.draft;
  return (
    <Badge variant="outline" className={config.className}>
      {status === 'live' && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />}
      {config.label}
    </Badge>
  );
}
