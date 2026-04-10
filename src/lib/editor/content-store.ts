import { create } from 'zustand';
import type { AstroBrandContent } from '@/types';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

const MAX_HISTORY = 50;

// ---------------------------------------------------------------------------
// Path utilities (dot-notation with numeric array indices)
// e.g. "services.2.name" -> obj.services[2].name
// ---------------------------------------------------------------------------

function parsePath(path: string): (string | number)[] {
  return path.split('.').map((seg) => {
    const n = Number(seg);
    return Number.isInteger(n) && n >= 0 ? n : seg;
  });
}

function getByPath(obj: unknown, path: string): unknown {
  const segments = parsePath(path);
  let current: unknown = obj;
  for (const seg of segments) {
    if (current == null) return undefined;
    current = (current as Record<string | number, unknown>)[seg];
  }
  return current;
}

function setByPath<T>(obj: T, path: string, value: unknown): T {
  const segments = parsePath(path);
  if (segments.length === 0) return obj;

  const root = structuredClone(obj);
  let current: Record<string | number, unknown> = root as Record<string | number, unknown>;

  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    const next = current[seg];
    if (next == null) {
      // create object or array depending on next segment type
      current[seg] = typeof segments[i + 1] === 'number' ? [] : {};
    } else {
      current[seg] = Array.isArray(next) ? [...next] : { ...(next as object) };
    }
    current = current[seg] as Record<string | number, unknown>;
  }

  current[segments[segments.length - 1]] = value;
  return root as T;
}

// ---------------------------------------------------------------------------
// Snapshot helper
// ---------------------------------------------------------------------------

function snapshot(content: AstroBrandContent): AstroBrandContent {
  return structuredClone(content);
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export interface ContentEditorState {
  brandContent: AstroBrandContent | null;
  originalContent: AstroBrandContent | null;
  activeSection: string | null;

  // Init
  setContent(content: AstroBrandContent): void;

  // Field updates (deep path: 'hero.heading', 'services.2.name', 'colors.primary')
  updateField(path: string, value: unknown): void;

  // Array operations
  addArrayItem(path: string, item: unknown): void;
  removeArrayItem(path: string, index: number): void;
  moveArrayItem(path: string, fromIndex: number, toIndex: number): void;

  // Section selection
  setActiveSection(section: string | null): void;

  // History (snapshot-based, max 50)
  history: AstroBrandContent[];
  historyIndex: number;
  undo(): void;
  redo(): void;
  canUndo(): boolean;
  canRedo(): boolean;

  // Status
  isDirty: boolean;
  isSaving: boolean;
  isRebuilding: boolean;
  deviceMode: DeviceMode;
  setDeviceMode(mode: DeviceMode): void;
  setSaving(saving: boolean): void;
  setRebuilding(rebuilding: boolean): void;
  markClean(): void;
}

function pushHistory(
  history: AstroBrandContent[],
  historyIndex: number,
  entry: AstroBrandContent,
): { history: AstroBrandContent[]; historyIndex: number } {
  const trimmed = history.slice(0, historyIndex + 1);
  trimmed.push(entry);
  if (trimmed.length > MAX_HISTORY) trimmed.shift();
  return { history: trimmed, historyIndex: trimmed.length - 1 };
}

export const useContentEditorStore = create<ContentEditorState>((set, get) => ({
  brandContent: null,
  originalContent: null,
  activeSection: null,
  history: [],
  historyIndex: -1,
  isDirty: false,
  isSaving: false,
  isRebuilding: false,
  deviceMode: 'desktop',

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------
  setContent: (content) => {
    const snap = snapshot(content);
    set({
      brandContent: snap,
      originalContent: snapshot(content),
      history: [snap],
      historyIndex: 0,
      isDirty: false,
    });
  },

  // ---------------------------------------------------------------------------
  // Field updates
  // ---------------------------------------------------------------------------
  updateField: (path, value) => {
    const { brandContent, history, historyIndex } = get();
    if (!brandContent) return;
    const updated = setByPath(brandContent, path, value);
    const hist = pushHistory(history, historyIndex, snapshot(updated));
    set({ brandContent: updated, isDirty: true, ...hist });
  },

  // ---------------------------------------------------------------------------
  // Array operations
  // ---------------------------------------------------------------------------
  addArrayItem: (path, item) => {
    const { brandContent, history, historyIndex } = get();
    if (!brandContent) return;
    const arr = getByPath(brandContent, path);
    if (!Array.isArray(arr)) return;
    const updated = setByPath(brandContent, path, [...arr, item]);
    const hist = pushHistory(history, historyIndex, snapshot(updated));
    set({ brandContent: updated, isDirty: true, ...hist });
  },

  removeArrayItem: (path, index) => {
    const { brandContent, history, historyIndex } = get();
    if (!brandContent) return;
    const arr = getByPath(brandContent, path);
    if (!Array.isArray(arr)) return;
    const newArr = arr.filter((_, i) => i !== index);
    const updated = setByPath(brandContent, path, newArr);
    const hist = pushHistory(history, historyIndex, snapshot(updated));
    set({ brandContent: updated, isDirty: true, ...hist });
  },

  moveArrayItem: (path, fromIndex, toIndex) => {
    const { brandContent, history, historyIndex } = get();
    if (!brandContent) return;
    const arr = getByPath(brandContent, path);
    if (!Array.isArray(arr)) return;
    const newArr = [...arr];
    const [moved] = newArr.splice(fromIndex, 1);
    newArr.splice(toIndex, 0, moved);
    const updated = setByPath(brandContent, path, newArr);
    const hist = pushHistory(history, historyIndex, snapshot(updated));
    set({ brandContent: updated, isDirty: true, ...hist });
  },

  // ---------------------------------------------------------------------------
  // Section selection
  // ---------------------------------------------------------------------------
  setActiveSection: (section) => set({ activeSection: section }),

  // ---------------------------------------------------------------------------
  // History (undo / redo)
  // ---------------------------------------------------------------------------
  undo: () => {
    const { historyIndex, history } = get();
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    set({ brandContent: snapshot(history[newIndex]), historyIndex: newIndex, isDirty: true });
  },

  redo: () => {
    const { historyIndex, history } = get();
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    set({ brandContent: snapshot(history[newIndex]), historyIndex: newIndex, isDirty: true });
  },

  canUndo: () => get().historyIndex > 0,
  canRedo: () => get().historyIndex < get().history.length - 1,

  // ---------------------------------------------------------------------------
  // Status helpers
  // ---------------------------------------------------------------------------
  setDeviceMode: (mode) => set({ deviceMode: mode }),
  setSaving: (saving) => set({ isSaving: saving }),
  setRebuilding: (rebuilding) => set({ isRebuilding: rebuilding }),
  markClean: () => set({ isDirty: false, originalContent: get().brandContent ? snapshot(get().brandContent!) : null }),
}));
