'use client';

import type { Block } from '@/types';
import { AnimateOnScroll } from './animate-on-scroll';

export function ContactBlock({ block }: { block: Block }) {
  const { heading, fields, submitText } = block.content as {
    heading: string;
    fields: string[];
    submitText: string;
  };
  const { backgroundColor, textColor, padding } = block.settings;

  return (
    <section style={{ backgroundColor, color: textColor, padding }}>
      <div className="mx-auto max-w-xl px-6">
        {heading && (
          <AnimateOnScroll>
            <h2 className="mb-8 text-center font-bold">{heading}</h2>
          </AnimateOnScroll>
        )}
        <AnimateOnScroll delay={0.1}>
          <div className="block-card p-6 sm:p-10">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {fields?.map((field) => (
                <div key={field}>
                  <label className="mb-1.5 block text-sm font-semibold capitalize">{field}</label>
                  {field === 'message' ? (
                    <textarea
                      className="w-full rounded-lg border-2 border-current/10 bg-transparent p-3.5 text-sm transition-colors focus:border-[var(--accent-color)] focus:outline-none"
                      rows={4}
                      placeholder={`Your ${field}`}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      className="w-full rounded-lg border-2 border-current/10 bg-transparent p-3.5 text-sm transition-colors focus:border-[var(--accent-color)] focus:outline-none"
                      placeholder={`Your ${field}`}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="block-btn-accent mt-2 w-full py-3.5 text-center">
                {submitText || 'Send'}
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
