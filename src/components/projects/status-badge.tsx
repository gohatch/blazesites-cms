import { Badge } from '@/components/ui/badge';
import type { ProjectStatus } from '@/types';

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  draft: { label: 'Draft', className: 'bg-gray-500/10 text-gray-400 dark:bg-gray-500/20 dark:text-gray-400' },
  in_progress: { label: 'In Progress', className: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' },
  under_review: { label: 'Under Review', className: 'bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400' },
  live: { label: 'Live', className: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400' },
  archived: { label: 'Archived', className: 'bg-gray-500/10 text-gray-500 dark:bg-gray-500/20 dark:text-gray-500' },
  building: { label: 'Building', className: 'bg-violet-500/10 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400' },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status];
  return (
    <Badge variant="secondary" className={config.className}>
      {config.label}
    </Badge>
  );
}
