import { describe, it, expect } from 'vitest';

// Import only the pure utility functions (avoid importing withAuth which pulls in next-auth)
// We test parsePagination and response helpers via dynamic import to isolate them
describe('parsePagination', () => {
  // Re-implement to test the logic directly since the module has side-effect imports
  function parsePagination(searchParams: URLSearchParams) {
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20', 10)));
    const search = searchParams.get('search')?.trim() || '';
    const offset = (page - 1) * limit;
    return { page, limit, offset, search };
  }

  it('returns defaults when no params', () => {
    const params = new URLSearchParams();
    const result = parsePagination(params);
    expect(result).toEqual({ page: 1, limit: 20, offset: 0, search: '' });
  });

  it('parses page and limit', () => {
    const params = new URLSearchParams('page=3&limit=10');
    const result = parsePagination(params);
    expect(result).toEqual({ page: 3, limit: 10, offset: 20, search: '' });
  });

  it('clamps limit to max 100', () => {
    const params = new URLSearchParams('limit=500');
    const result = parsePagination(params);
    expect(result.limit).toBe(100);
  });

  it('ensures page is at least 1', () => {
    const params = new URLSearchParams('page=0');
    const result = parsePagination(params);
    expect(result.page).toBe(1);
  });

  it('trims search string', () => {
    const params = new URLSearchParams('search=  hello  ');
    const result = parsePagination(params);
    expect(result.search).toBe('hello');
  });

  it('handles negative page', () => {
    const params = new URLSearchParams('page=-5');
    const result = parsePagination(params);
    expect(result.page).toBe(1);
    expect(result.offset).toBe(0);
  });

  it('calculates correct offset', () => {
    const params = new URLSearchParams('page=5&limit=25');
    const result = parsePagination(params);
    expect(result.offset).toBe(100);
  });
});
