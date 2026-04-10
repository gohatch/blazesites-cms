import { describe, it, expect } from 'vitest';
import { generatePageHTML } from '../generate-html';
import type { Block } from '@/types';

function makeBlock(type: string, content: Record<string, unknown>, order = 0): Block {
  return {
    id: 'test-id',
    type: type as Block['type'],
    content,
    settings: { backgroundColor: '#ffffff', textColor: '#1a1a2e', padding: '64px 0' },
    order,
  };
}

describe('generatePageHTML', () => {
  it('produces valid HTML document', () => {
    const html = generatePageHTML({ blocks: [], metaTitle: 'Test' });
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<html');
    expect(html).toContain('</html>');
    expect(html).toContain('<title>Test</title>');
  });

  it('includes meta description when provided', () => {
    const html = generatePageHTML({ blocks: [], metaTitle: 'T', metaDescription: 'A test page' });
    expect(html).toContain('content="A test page"');
  });

  it('renders hero block', () => {
    const block = makeBlock('hero', { heading: 'Hello World', subheading: 'Welcome', ctaText: 'Click Me', ctaLink: '/go' });
    const html = generatePageHTML({ blocks: [block] });
    expect(html).toContain('Hello World');
    expect(html).toContain('Welcome');
    expect(html).toContain('Click Me');
  });

  it('renders features block', () => {
    const block = makeBlock('features', {
      heading: 'Features',
      features: [{ title: 'Fast', description: 'Very fast' }],
    });
    const html = generatePageHTML({ blocks: [block] });
    expect(html).toContain('Features');
    expect(html).toContain('Fast');
    expect(html).toContain('Very fast');
  });

  it('renders contact block with form', () => {
    const block = makeBlock('contact', { heading: 'Contact Us', submitText: 'Send' });
    const html = generatePageHTML({ blocks: [block] });
    expect(html).toContain('Contact Us');
    expect(html).toContain('<form');
    expect(html).toContain('Send');
  });

  it('renders blocks in order', () => {
    const hero = makeBlock('hero', { heading: 'First' }, 0);
    const cta = makeBlock('cta', { heading: 'Second' }, 1);
    const html = generatePageHTML({ blocks: [cta, hero] }); // intentionally reversed
    const firstIdx = html.indexOf('First');
    const secondIdx = html.indexOf('Second');
    expect(firstIdx).toBeLessThan(secondIdx);
  });

  it('renders footer block', () => {
    const block = makeBlock('footer', { companyName: 'ACME', tagline: 'Best stuff', email: 'hi@acme.com' });
    const html = generatePageHTML({ blocks: [block] });
    expect(html).toContain('ACME');
    expect(html).toContain('hi@acme.com');
  });
});
