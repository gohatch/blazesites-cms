'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Loader2, X, Check, AlertCircle, ImageIcon } from 'lucide-react';
import type { BrandProfile } from '@/types';

interface ImportFromSiteProps {
  onApply: (profile: BrandProfile) => void;
  onCancel: () => void;
}

type State = 'idle' | 'scanning' | 'results' | 'error';

export function ImportFromSite({ onApply, onCancel }: ImportFromSiteProps) {
  const [state, setState] = useState<State>('idle');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [profile, setProfile] = useState<BrandProfile | null>(null);

  async function handleScan() {
    if (!url.trim()) return;
    setState('scanning');
    setError('');

    try {
      let scanUrl = url.trim();
      if (!scanUrl.startsWith('http')) scanUrl = 'https://' + scanUrl;

      const res = await fetch('/api/scrape-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scanUrl }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || 'Failed to analyze website');
        setState('error');
        return;
      }

      setProfile(data.data);
      setState('results');
    } catch {
      setError('Failed to connect to the website');
      setState('error');
    }
  }

  function updateProfile(updates: Partial<BrandProfile>) {
    if (!profile) return;
    setProfile({ ...profile, ...updates });
  }

  function updateColors(updates: Partial<BrandProfile['colors']>) {
    if (!profile) return;
    setProfile({ ...profile, colors: { ...profile.colors, ...updates } });
  }

  function updateContact(updates: Partial<BrandProfile['contact']>) {
    if (!profile) return;
    setProfile({ ...profile, contact: { ...profile.contact, ...updates } });
  }

  function updateContent(updates: Partial<BrandProfile['content']>) {
    if (!profile) return;
    setProfile({ ...profile, content: { ...profile.content, ...updates } });
  }

  function updateImages(updates: Partial<BrandProfile['images']>) {
    if (!profile) return;
    setProfile({ ...profile, images: { ...profile.images, ...updates } });
  }

  function removeGalleryImage(index: number) {
    if (!profile?.images?.gallery) return;
    const updated = profile.images.gallery.filter((_, i) => i !== index);
    updateImages({ gallery: updated.length > 0 ? updated : undefined });
  }

  if (state === 'idle' || state === 'error') {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="h-4 w-4" />
                Import from Existing Website
              </CardTitle>
              <CardDescription>
                Paste a URL and we&apos;ll extract colors, logo, and content
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onCancel} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}
          <div className="flex gap-2">
            <Input
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleScan()}
            />
            <Button onClick={handleScan} disabled={!url.trim()}>
              Scan
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (state === 'scanning') {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Analyzing {url}...</p>
        </CardContent>
      </Card>
    );
  }

  if (state === 'results' && profile) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Brand Profile Extracted</CardTitle>
              <CardDescription>Review and edit before applying</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onCancel} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Business Name */}
          <div className="space-y-2">
            <Label className="text-xs">Business Name</Label>
            <Input
              value={profile.businessName}
              onChange={(e) => updateProfile({ businessName: e.target.value })}
            />
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <Label className="text-xs">Brand Colors</Label>
            <div className="flex flex-wrap gap-3">
              {(['primary', 'secondary', 'accent'] as const).map((key) => {
                const color = profile.colors[key];
                if (!color) return null;
                return (
                  <div key={key} className="flex items-center gap-2">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => updateColors({ [key]: e.target.value })}
                      className="h-8 w-8 cursor-pointer rounded border"
                    />
                    <span className="text-xs text-muted-foreground capitalize">{key}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Logo */}
          {profile.logoUrl && (
            <div className="space-y-2">
              <Label className="text-xs">Logo</Label>
              <div className="flex items-center gap-3">
                <img
                  src={profile.logoUrl}
                  alt="Logo"
                  className="h-10 max-w-[120px] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <Input
                  value={profile.logoUrl}
                  onChange={(e) => updateProfile({ logoUrl: e.target.value })}
                  className="flex-1 text-xs"
                />
              </div>
            </div>
          )}

          {/* Scraped Images */}
          {(profile.images?.hero || profile.images?.about || (profile.images?.gallery && profile.images.gallery.length > 0)) && (
            <div className="space-y-3">
              <Label className="flex items-center gap-1.5 text-xs">
                <ImageIcon className="h-3.5 w-3.5" />
                Scraped Images
              </Label>
              {profile.images?.hero && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Hero / Banner</p>
                  <div className="relative">
                    <img
                      src={profile.images.hero}
                      alt="Hero"
                      className="h-24 w-full rounded-lg object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-6 w-6 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => updateImages({ hero: undefined })}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )}
              {profile.images?.about && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">About</p>
                  <div className="relative inline-block">
                    <img
                      src={profile.images.about}
                      alt="About"
                      className="h-20 rounded-lg object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1 h-6 w-6 bg-black/50 text-white hover:bg-black/70"
                      onClick={() => updateImages({ about: undefined })}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )}
              {profile.images?.gallery && profile.images.gallery.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    Gallery ({profile.images.gallery.length} images)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.images.gallery.map((src, i) => (
                      <div key={i} className="relative">
                        <img
                          src={src}
                          alt={`Gallery ${i + 1}`}
                          className="h-16 w-16 rounded-md object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-black/50 text-white hover:bg-black/70"
                          onClick={() => removeGalleryImage(i)}
                        >
                          <X className="h-2.5 w-2.5" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contact */}
          <div className="space-y-2">
            <Label className="text-xs">Contact Info</Label>
            <div className="grid gap-2 md:grid-cols-2">
              <Input
                placeholder="Email"
                value={profile.contact.email || ''}
                onChange={(e) => updateContact({ email: e.target.value })}
              />
              <Input
                placeholder="Phone"
                value={profile.contact.phone || ''}
                onChange={(e) => updateContact({ phone: e.target.value })}
              />
            </div>
            <Input
              placeholder="Address"
              value={profile.contact.address || ''}
              onChange={(e) => updateContact({ address: e.target.value })}
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label className="text-xs">Tagline</Label>
            <Input
              value={profile.content.tagline || ''}
              onChange={(e) => updateContent({ tagline: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">About</Label>
            <Textarea
              rows={3}
              value={profile.content.about || ''}
              onChange={(e) => updateContent({ about: e.target.value })}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button onClick={() => onApply(profile)} className="flex-1">
              <Check className="mr-2 h-4 w-4" />
              Apply Branding
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}
