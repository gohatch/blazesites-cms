'use client';

import type { Block } from '@/types';
import { ImageIcon } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function ImageBlock({ block }: { block: Block }) {
  const { src, alt, caption } = block.content as { src: string; alt: string; caption: string };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <AnimateOnScroll className="mx-auto max-w-4xl px-6">
        <figure>
          {src ? (
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={src}
                alt={alt}
                className="w-full transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-2xl border border-current/10 bg-current/5">
              <div className="text-center opacity-40">
                <ImageIcon className="mx-auto h-12 w-12" />
                <p className="mt-2 text-sm">No image selected</p>
              </div>
            </div>
          )}
          {caption && (
            <figcaption className="mt-3 text-center text-sm opacity-60">{caption}</figcaption>
          )}
        </figure>
      </AnimateOnScroll>
    </section>
  );
}
