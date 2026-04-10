'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, X, Loader2, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  projectId?: string;
  accept?: string;
  className?: string;
  compact?: boolean;
  label?: string;
}

export function MediaUploader({
  value,
  onChange,
  projectId,
  accept = 'image/jpeg,image/png,image/svg+xml,image/webp',
  className,
  compact = false,
  label = 'Upload image',
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = useCallback(async (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      setError('File too large (max 10MB)');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    if (projectId) formData.append('project_id', projectId);

    try {
      const res = await fetch('/api/media', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Upload failed');
        return;
      }
      onChange(data.url);
    } catch {
      setError('Network error');
    } finally {
      setUploading(false);
    }
  }, [onChange, projectId]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) upload(file);
  }, [upload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
    e.target.value = '';
  }, [upload]);

  // Compact mode: small button + preview
  if (compact) {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        {value && (
          <div className="relative w-10 h-10 rounded border border-zinc-700 overflow-hidden flex-shrink-0">
            <img src={value} alt="" className="w-full h-full object-cover" />
            <button
              onClick={() => onChange('')}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            >
              <X className="w-2.5 h-2.5 text-white" />
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md border border-zinc-700 transition-colors disabled:opacity-50"
        >
          {uploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
          {uploading ? 'Uploading...' : value ? 'Replace' : label}
        </button>
        <input ref={inputRef} type="file" accept={accept} onChange={handleFileSelect} className="hidden" />
        {error && <span className="text-[10px] text-red-400">{error}</span>}
      </div>
    );
  }

  // Full mode: drop zone
  return (
    <div className={className}>
      {value ? (
        <div className="relative rounded-lg overflow-hidden border border-zinc-700">
          <img src={value} alt="" className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-3 py-1.5 text-xs bg-white text-zinc-900 rounded-md font-medium"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              className="px-3 py-1.5 text-xs bg-red-500 text-white rounded-md font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => !uploading && inputRef.current?.click()}
          className={cn(
            'flex flex-col items-center justify-center gap-2 p-6 rounded-lg border-2 border-dashed cursor-pointer transition-all',
            dragOver
              ? 'border-violet-500 bg-violet-500/10'
              : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800/50',
            uploading && 'pointer-events-none opacity-60'
          )}
        >
          {uploading ? (
            <Loader2 className="w-6 h-6 text-zinc-400 animate-spin" />
          ) : (
            <ImageIcon className="w-6 h-6 text-zinc-500" />
          )}
          <span className="text-xs text-zinc-400">
            {uploading ? 'Uploading...' : 'Drop an image or click to upload'}
          </span>
          <span className="text-[10px] text-zinc-500">JPG, PNG, SVG, WebP — max 10MB</span>
        </div>
      )}
      <input ref={inputRef} type="file" accept={accept} onChange={handleFileSelect} className="hidden" />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
