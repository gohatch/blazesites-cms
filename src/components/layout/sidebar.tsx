'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTier } from '@/lib/hooks/use-tier';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  LayoutTemplate,
  Target,
  BarChart3,
  Settings,
  CreditCard,
} from 'lucide-react';

const allNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, crmOnly: false },
  { name: 'Clients', href: '/clients', icon: Users, crmOnly: true },
  { name: 'Projects', href: '/projects', icon: FolderKanban, crmOnly: false },
  { name: 'Templates', href: '/templates', icon: LayoutTemplate, crmOnly: false },
  { name: 'Leads', href: '/leads', icon: Target, crmOnly: true },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, crmOnly: false },
  { name: 'Billing', href: '/billing', icon: CreditCard, crmOnly: false },
];

const bottomNav = [
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isCrm } = useTier();

  const navigation = allNavigation.filter((item) => !item.crmOnly || isCrm);

  return (
    <aside className="glass-sidebar relative z-20 flex h-full w-64 flex-col">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <Image src="/logo.svg" alt="Blazesites" width={120} height={24} />
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/15 text-primary shadow-sm'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border px-3 py-4">
        {bottomNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary/15 text-primary shadow-sm'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
