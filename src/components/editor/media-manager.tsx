'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Upload, Trash2, Check, Loader2 } from 'lucide-react';
import type { Media } from '@/types';

interface MediaManagerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
  projectId?: string;
}

export function MediaManager({ open, onClose, onSelect, projectId }: MediaManagerProps) {
  const [media, setMedia] = useState<Media[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    async function fetchMedia() {
      try {
        const url = projectId ? `/api/media?project_id=${projectId}` : '/api/media';
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          setMedia(json.data || json);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMedia();
  }, [open, projectId]);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', files[0]);
    if (projectId) formData.append('project_id', projectId);

    try {
      const res = await fetch('/api/media', { method: 'POST', body: formData });
      if (res.ok) {
        const newMedia = await res.json();
        setMedia([newMedia, ...media]);
      }
    } finally {
      setUploading(false);
      if (fileInput.current) fileInput.current.value = '';
    }
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/media/${id}`, { method: 'DELETE' });
    if (res.ok) setMedia(media.filter((m) => m.id !== id));
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Media Library</DialogTitle>
          <DialogDescription>Upload and manage images</DialogDescription>
        </DialogHeader>

        <div className="flex justify-end">
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <Button
            onClick={() => fileInput.current?.click()}
            disabled={uploading}
            size="sm"
          >
            {uploading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Upload className="mr-2 h-4 w-4" />
            )}
            Upload Image
          </Button>
        </div>

        {loading ? (
          <div className="flex h-48 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : media.length === 0 ? (
          <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
            No images uploaded yet
          </div>
        ) : (
          <div className="grid max-h-96 grid-cols-4 gap-3 overflow-y-auto">
            {media.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border"
              >
                <img
                  src={item.url}
                  alt={item.filename}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8"
                    onClick={() => {
                      onSelect(item.url);
                      onClose();
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="absolute bottom-0 w-full truncate bg-black/60 px-2 py-1 text-xs text-white">
                  {item.filename}
                </p>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
