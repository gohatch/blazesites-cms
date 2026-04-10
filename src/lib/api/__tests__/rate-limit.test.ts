import { describe, it, expect } from 'vitest';
import { checkRateLimit } from '../rate-limit';

describe('checkRateLimit', () => {
  it('allows first request', () => {
    expect(checkRateLimit('test-ip-1')).toBe(true);
  });

  it('allows requests within limit', () => {
    const key = 'test-ip-2';
    for (let i = 0; i < 60; i++) {
      expect(checkRateLimit(key)).toBe(true);
    }
  });

  it('blocks requests over limit', () => {
    const key = 'test-ip-3';
    for (let i = 0; i < 60; i++) {
      checkRateLimit(key);
    }
    expect(checkRateLimit(key)).toBe(false);
  });

  it('different keys have separate limits', () => {
    const key1 = 'ip-a-unique';
    const key2 = 'ip-b-unique';
    for (let i = 0; i < 60; i++) {
      checkRateLimit(key1);
    }
    expect(checkRateLimit(key1)).toBe(false);
    expect(checkRateLimit(key2)).toBe(true);
  });
});
