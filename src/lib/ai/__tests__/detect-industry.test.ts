import { describe, it, expect } from 'vitest';
import { detectIndustry } from '../detect-industry';

describe('detectIndustry', () => {
  it('detects dental industry', () => {
    const result = detectIndustry('Best dental clinic for teeth whitening and orthodontics');
    expect(result.industry).toBe('Dental');
    expect(result.confidence).toBeGreaterThan(0);
  });

  it('detects real estate industry', () => {
    const result = detectIndustry('Find your dream home with our real estate agents and property listings');
    expect(result.industry).toBe('Real Estate');
  });

  it('detects food & dining', () => {
    const result = detectIndustry('Welcome to our restaurant featuring Italian cuisine and fine dining');
    expect(result.industry).toBe('Food & Dining');
  });

  it('returns General Business for ambiguous content', () => {
    const result = detectIndustry('Welcome to our company');
    expect(result.industry).toBe('General Business');
  });

  it('returns confidence between 0 and 1', () => {
    const result = detectIndustry('dental clinic teeth whitening braces');
    expect(result.confidence).toBeGreaterThanOrEqual(0);
    expect(result.confidence).toBeLessThanOrEqual(1);
  });

  it('handles empty string', () => {
    const result = detectIndustry('');
    expect(result.industry).toBe('General Business');
    expect(result.confidence).toBe(0);
  });
});
