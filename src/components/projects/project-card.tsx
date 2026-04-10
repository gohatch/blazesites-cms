import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge } from './status-badge';
import { Calendar, User } from 'lucide-react';
import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-start justify-between pb-2">
          <CardTitle className="text-base">{project.name}</CardTitle>
          <StatusBadge status={project.status} />
        </CardHeader>
        <CardContent className="space-y-1.5 text-sm text-muted-foreground">
          {project.client && (
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5" />
              {project.client.name}
            </div>
          )}
          {project.subdomain && (
            <div className="text-xs text-muted-foreground">
              /sites/{project.subdomain}
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(project.created_at).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
