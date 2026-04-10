'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  Pencil,
  Trash2,
  MessageSquare,
  Calendar,
} from 'lucide-react';
import type { Client, ClientNote } from '@/types';

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  prospect: 'bg-blue-100 text-blue-800',
};

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);
  const [notes, setNotes] = useState<ClientNote[]>([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClient() {
      try {
        const [clientRes, notesRes] = await Promise.all([
          fetch(`/api/clients/${params.id}`),
          fetch(`/api/clients/${params.id}/notes`),
        ]);
        if (clientRes.ok) setClient(await clientRes.json());
        if (notesRes.ok) setNotes(await notesRes.json());
      } finally {
        setLoading(false);
      }
    }
    fetchClient();
  }, [params.id]);

  async function addNote() {
    if (!newNote.trim()) return;
    const res = await fetch(`/api/clients/${params.id}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newNote, type: 'note' }),
    });
    if (res.ok) {
      const note = await res.json();
      setNotes([note, ...notes]);
      setNewNote('');
    }
  }

  async function deleteClient() {
    if (!confirm('Are you sure you want to delete this client?')) return;
    const res = await fetch(`/api/clients/${params.id}`, { method: 'DELETE' });
    if (res.ok) {
      router.push('/clients');
      router.refresh();
    }
  }

  if (loading) {
    return <div className="h-96 animate-pulse rounded-lg bg-muted" />;
  }

  if (!client) {
    return <div className="text-center text-muted-foreground">Client not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/clients" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{client.name}</h1>
            <Badge variant="secondary" className={statusColors[client.status]}>
              {client.status}
            </Badge>
          </div>
          {client.company && (
            <p className="text-muted-foreground">{client.company}</p>
          )}
        </div>
        <div className="flex gap-2">
          <Link href={`/clients/${client.id}/edit`} className={buttonVariants({ variant: "outline" })}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Link>
          <Button variant="destructive" size="icon" onClick={deleteClient}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Client Details */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {client.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${client.email}`} className="hover:underline">
                  {client.email}
                </a>
              </div>
            )}
            {client.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                {client.phone}
              </div>
            )}
            {client.industry && (
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                {client.industry}
              </div>
            )}
            <Separator />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Added {new Date(client.created_at).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>

        {/* Notes & Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Notes & Activity</CardTitle>
            <CardDescription>Log calls, meetings, and notes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows={2}
                className="flex-1"
              />
              <Button onClick={addNote} disabled={!newNote.trim()}>
                Add
              </Button>
            </div>
            <Separator />
            {notes.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No notes yet. Add one above.
              </p>
            ) : (
              <div className="space-y-3">
                {notes.map((note) => (
                  <div key={note.id} className="flex gap-3 rounded-lg border p-3">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm">{note.content}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(note.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
