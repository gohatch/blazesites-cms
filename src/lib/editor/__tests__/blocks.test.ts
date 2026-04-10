import { describe, it, expect } from 'vitest';
import { createBlock, blockDefaults, blockTypeLabels } from '../blocks';

describe('blockTypeLabels', () => {
  it('has labels for all block types', () => {
    const types = ['hero', 'features', 'about', 'testimonials', 'contact', 'cta', 'footer', 'text', 'image', 'gallery', 'pricing', 'faq', 'team', 'stats'];
    for (const type of types) {
      expect(blockTypeLabels[type as keyof typeof blockTypeLabels]).toBeDefined();
    }
  });
});

describe('blockDefaults', () => {
  it('provides defaults for all block types', () => {
    const types = Object.keys(blockTypeLabels);
    for (const type of types) {
      const def = blockDefaults[type as keyof typeof blockDefaults];
      expect(def).toBeDefined();
      expect(def.type).toBe(type);
      expect(def.content).toBeDefined();
      expect(def.settings).toBeDefined();
    }
  });

  it('hero has required content fields', () => {
    const hero = blockDefaults.hero;
    expect(hero.content.heading).toBeDefined();
    expect(hero.content.subheading).toBeDefined();
  });
});

describe('createBlock', () => {
  it('creates a block with unique id', () => {
    const block1 = createBlock('hero', 0);
    const block2 = createBlock('hero', 1);
    expect(block1.id).toBeDefined();
    expect(block2.id).toBeDefined();
    expect(block1.id).not.toBe(block2.id);
  });

  it('sets the correct order', () => {
    const block = createBlock('features', 5);
    expect(block.order).toBe(5);
  });

  it('sets the correct type', () => {
    const block = createBlock('contact', 0);
    expect(block.type).toBe('contact');
  });

  it('includes default content and settings', () => {
    const block = createBlock('pricing', 0);
    expect(block.content).toEqual(blockDefaults.pricing.content);
    expect(block.settings).toEqual(blockDefaults.pricing.settings);
  });
});
