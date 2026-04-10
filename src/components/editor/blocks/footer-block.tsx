'use client';

import type { Block } from '@/types';
import { Mail, Phone } from 'lucide-react';
import { AnimateOnScroll } from './animate-on-scroll';

export function FooterBlock({ block }: { block: Block }) {
  const { companyName, tagline, links, email, phone } = block.content as {
    companyName: string;
    tagline: string;
    links: Array<{ label: string; href: string }>;
    email: string;
    phone: string;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <footer style={{ backgroundColor, color: textColor, padding }}>
      <AnimateOnScroll direction="none">
        <div
          className="mx-auto max-w-6xl px-6"
          style={{ borderTop: '2px solid var(--accent-color, transparent)', paddingTop: '2rem' }}
        >
          <div className="block-grid-footer">
            <div>
              <h3 className="text-xl font-bold">{companyName}</h3>
              {tagline && <p className="mt-2 text-sm opacity-60">{tagline}</p>}
            </div>
            {links && links.length > 0 && (
              <div>
                <h4 className="font-semibold">Links</h4>
                <ul className="mt-3 space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm opacity-60 transition-all duration-200 hover:opacity-100"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="font-semibold">Contact</h4>
              <div className="mt-3 space-y-2 text-sm opacity-60">
                {email && (
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-color)' }} />
                    {email}
                  </p>
                )}
                {phone && (
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--accent-color)' }} />
                    {phone}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-current/10 pt-6 text-center text-sm opacity-40">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
