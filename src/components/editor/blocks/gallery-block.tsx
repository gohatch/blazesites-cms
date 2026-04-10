'use client';

import type { Block } from '@/types';
import { ImageIcon } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './animate-on-scroll';

export function GalleryBlock({ block }: { block: Block }) {
  const { heading, images } = block.content as {
    heading: string;
    images: Array<{ src: string; alt: string }>;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="mb-12 text-center font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}
        {!images || images.length === 0 ? (
          <div className="flex h-48 items-center justify-center rounded-xl border border-current/10 bg-current/5">
            <div className="text-center opacity-40">
              <ImageIcon className="mx-auto h-12 w-12" />
              <p className="mt-2 text-sm">No images in gallery</p>
            </div>
          </div>
        ) : (
          <StaggerChildren className="block-grid-gallery" staggerDelay={0.08}>
            {images.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt && (
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-white">{img.alt}</p>
                  )}
                </div>
              </div>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
