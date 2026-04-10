'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ClientForm } from '@/components/clients/client-form';
import type { Client } from '@/types';

export default function EditClientPage() {
  const params = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClient() {
      try {
        const res = await fetch(`/api/clients/${params.id}`);
        if (res.ok) setClient(await res.json());
      } finally {
        setLoading(false);
      }
    }
    fetchClient();
  }, [params.id]);

  if (loading) return <div className="h-96 animate-pulse rounded-lg bg-muted" />;
  if (!client) return <div className="text-center text-muted-foreground">Client not found</div>;

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Edit Client</CardTitle>
          <CardDescription>Update {client.name}&apos;s profile</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientForm client={client} />
        </CardContent>
      </Card>
    </div>
  );
}
