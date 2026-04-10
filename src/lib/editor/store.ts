import { create } from 'zustand';
import type { Block, WebsitePage, BlockType } from '@/types';
import { createBlock } from './blocks';

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

const MAX_HISTORY = 50;

interface EditorState {
  // Pages
  pages: WebsitePage[];
  activePageId: string | null;
  setPages: (pages: WebsitePage[]) => void;
  setActivePageId: (id: string) => void;

  // Blocks
  selectedBlockId: string | null;
  setSelectedBlockId: (id: string | null) => void;

  // Block operations
  updateBlock: (blockId: string, updates: Partial<Block>) => void;
  addBlock: (type: BlockType, atIndex?: number) => void;
  removeBlock: (blockId: string) => void;
  moveBlock: (blockId: string, newOrder: number) => void;
  duplicateBlock: (blockId: string) => void;

  // History (undo/redo)
  history: Block[][];
  historyIndex: number;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;

  // Device preview
  deviceMode: DeviceMode;
  setDeviceMode: (mode: DeviceMode) => void;

  // Page metadata (SEO)
  updatePageMeta: (pageId: string, updates: { meta_title?: string; meta_description?: string; og_image?: string; slug?: string }) => void;
  seoOpen: boolean;
  setSeoOpen: (open: boolean) => void;

  // Saving
  isDirty: boolean;
  isSaving: boolean;
  setIsSaving: (saving: boolean) => void;
  markClean: () => void;

  // Helpers
  getActiveBlocks: () => Block[];
  getActivePage: () => WebsitePage | undefined;
}

function updateActivePageBlocks(
  pages: WebsitePage[],
  activePageId: string | null,
  updater: (blocks: Block[]) => Block[]
): WebsitePage[] {
  return pages.map((page) => {
    if (page.id !== activePageId) return page;
    return { ...page, blocks: updater(page.blocks) };
  });
}

function pushToHistory(state: EditorState, newBlocks: Block[]): Partial<EditorState> {
  const history = state.history.slice(0, state.historyIndex + 1);
  history.push(newBlocks);
  if (history.length > MAX_HISTORY) history.shift();
  return { history, historyIndex: history.length - 1 };
}

export const useEditorStore = create<EditorState>((set, get) => ({
  pages: [],
  activePageId: null,
  selectedBlockId: null,
  history: [[]],
  historyIndex: 0,
  deviceMode: 'desktop',
  seoOpen: false,
  isDirty: false,
  isSaving: false,

  setPages: (pages) => {
    const blocks = pages[0]?.blocks || [];
    set({ pages, activePageId: pages[0]?.id || null, history: [blocks], historyIndex: 0 });
  },

  setActivePageId: (id) => {
    const page = get().pages.find((p) => p.id === id);
    const blocks = page?.blocks || [];
    set({ activePageId: id, selectedBlockId: null, history: [blocks], historyIndex: 0 });
  },

  setSelectedBlockId: (id) => set({ selectedBlockId: id }),

  updateBlock: (blockId, updates) => {
    const { pages, activePageId } = get();
    const updatedPages = updateActivePageBlocks(pages, activePageId, (blocks) =>
      blocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              ...updates,
              content: updates.content ? { ...block.content, ...updates.content } : block.content,
              settings: updates.settings ? { ...block.settings, ...updates.settings } : block.settings,
            }
          : block
      )
    );
    const newBlocks = updatedPages.find((p) => p.id === activePageId)?.blocks || [];
    set((s) => ({ pages: updatedPages, isDirty: true, ...pushToHistory(s, newBlocks) }));
  },

  addBlock: (type, atIndex) => {
    const { pages, activePageId } = get();
    const updatedPages = updateActivePageBlocks(pages, activePageId, (blocks) => {
      const index = atIndex ?? blocks.length;
      const newBlock = createBlock(type, index);
      const newBlocks = [...blocks];
      newBlocks.splice(index, 0, newBlock);
      return newBlocks.map((b, i) => ({ ...b, order: i }));
    });
    const newBlocks = updatedPages.find((p) => p.id === activePageId)?.blocks || [];
    set((s) => ({ pages: updatedPages, isDirty: true, ...pushToHistory(s, newBlocks) }));
  },

  removeBlock: (blockId) => {
    const { pages, activePageId, selectedBlockId } = get();
    const updatedPages = updateActivePageBlocks(pages, activePageId, (blocks) =>
      blocks.filter((b) => b.id !== blockId).map((b, i) => ({ ...b, order: i }))
    );
    const newBlocks = updatedPages.find((p) => p.id === activePageId)?.blocks || [];
    set((s) => ({
      pages: updatedPages,
      isDirty: true,
      selectedBlockId: selectedBlockId === blockId ? null : selectedBlockId,
      ...pushToHistory(s, newBlocks),
    }));
  },

  moveBlock: (blockId, newOrder) => {
    const { pages, activePageId } = get();
    const updatedPages = updateActivePageBlocks(pages, activePageId, (blocks) => {
      const arr = [...blocks];
      const currentIndex = arr.findIndex((b) => b.id === blockId);
      if (currentIndex === -1) return blocks;
      const [moved] = arr.splice(currentIndex, 1);
      arr.splice(newOrder, 0, moved);
      return arr.map((b, i) => ({ ...b, order: i }));
    });
    const newBlocks = updatedPages.find((p) => p.id === activePageId)?.blocks || [];
    set((s) => ({ pages: updatedPages, isDirty: true, ...pushToHistory(s, newBlocks) }));
  },

  duplicateBlock: (blockId) => {
    const { pages, activePageId } = get();
    const updatedPages = updateActivePageBlocks(pages, activePageId, (blocks) => {
      const index = blocks.findIndex((b) => b.id === blockId);
      if (index === -1) return blocks;
      const dupe: Block = { ...JSON.parse(JSON.stringify(blocks[index])), id: crypto.randomUUID() };
      const arr = [...blocks];
      arr.splice(index + 1, 0, dupe);
      return arr.map((b, i) => ({ ...b, order: i }));
    });
    const newBlocks = updatedPages.find((p) => p.id === activePageId)?.blocks || [];
    set((s) => ({ pages: updatedPages, isDirty: true, ...pushToHistory(s, newBlocks) }));
  },

  undo: () => {
    const { historyIndex, history, pages, activePageId } = get();
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    const restoredBlocks = history[newIndex];
    const updatedPages = pages.map((p) =>
      p.id === activePageId ? { ...p, blocks: restoredBlocks } : p
    );
    set({ pages: updatedPages, historyIndex: newIndex, isDirty: true });
  },

  redo: () => {
    const { historyIndex, history, pages, activePageId } = get();
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    const restoredBlocks = history[newIndex];
    const updatedPages = pages.map((p) =>
      p.id === activePageId ? { ...p, blocks: restoredBlocks } : p
    );
    set({ pages: updatedPages, historyIndex: newIndex, isDirty: true });
  },

  canUndo: () => get().historyIndex > 0,
  canRedo: () => get().historyIndex < get().history.length - 1,

  updatePageMeta: (pageId, updates) => {
    const { pages } = get();
    const updatedPages = pages.map((page) => {
      if (page.id !== pageId) return page;
      return { ...page, ...updates };
    });
    set({ pages: updatedPages, isDirty: true });
  },

  setSeoOpen: (open) => set({ seoOpen: open, selectedBlockId: open ? null : get().selectedBlockId }),

  setDeviceMode: (mode) => set({ deviceMode: mode }),
  setIsSaving: (saving) => set({ isSaving: saving }),
  markClean: () => set({ isDirty: false }),

  getActiveBlocks: () => {
    const { pages, activePageId } = get();
    const page = pages.find((p) => p.id === activePageId);
    return page?.blocks || [];
  },

  getActivePage: () => {
    const { pages, activePageId } = get();
    return pages.find((p) => p.id === activePageId);
  },
}));
