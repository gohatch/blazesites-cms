import type { AstroBrandContent } from '@/types';

/**
 * Deep merges brand content with user overrides.
 * Priority: userEdits > base (AI-generated or scraped)
 * Only non-empty/non-null values from edits override the base.
 */
export function mergeBrandContent(
  base: AstroBrandContent,
  edits: Partial<AstroBrandContent>
): AstroBrandContent {
  return deepMerge(
    base as unknown as Record<string, unknown>,
    edits as unknown as Record<string, unknown>
  ) as unknown as AstroBrandContent;
}

function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = target[key];

    // Skip null/undefined/empty string overrides
    if (sourceVal === null || sourceVal === undefined || sourceVal === '') {
      continue;
    }

    // If both are plain objects, recurse
    if (
      isPlainObject(targetVal) &&
      isPlainObject(sourceVal)
    ) {
      result[key] = deepMerge(
        targetVal as Record<string, unknown>,
        sourceVal as Record<string, unknown>
      );
    }
    // If source is an array with items, use it
    else if (Array.isArray(sourceVal) && sourceVal.length > 0) {
      result[key] = sourceVal;
    }
    // Otherwise use source value
    else {
      result[key] = sourceVal;
    }
  }

  return result;
}

function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}
