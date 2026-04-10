'use client';

import type { Block } from '@/types';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function FooterBlock({ block }: { block: Block }) {
  const { companyName, tagline, links, email, phone, address } = block.content as {
    companyName: string;
    tagline: string;
    links: Array<{ label: string; href: string }>;
    email: string;
    phone: string;
    address?: string;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <footer style={{ backgroundColor, color: textColor, padding }}>
      <AnimateOnScroll direction="none">
        <div className="mx-auto max-w-7xl px-6">
          {/* Main footer */}
          <div className="grid gap-12 py-16 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-extrabold">{companyName}</h3>
              {tagline && (
                <p className="mt-3 text-sm leading-relaxed text-white/60">{tagline}</p>
              )}
            </div>
            {links && links.length > 0 && (
              <div>
                <h4 className="font-semibold" style={{ color: 'var(--accent-color)' }}>Quick Links</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="font-semibold" style={{ color: 'var(--accent-color)' }}>Contact</h4>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Mail className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-color)' }} />
                    {email}
                  </a>
                )}
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-color)' }} />
                    {phone}
                  </a>
                )}
                {address && (
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-color)' }} />
                    {address}
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
