import { create } from 'zustand';

export type CropBox = { x: number; y: number; w: number; h: number };
export const DEFAULT_CROP: CropBox = { x: 6, y: 6, w: 88, h: 88 };

/**
 * Ephemeral, per-session UI state. Shared between the plate, the probe panel
 * and the teacher panel; never persisted.
 */
type UiState = {
  teacherOpen: boolean;
  currentCardId: string | null;
  ab: number;
  rotate: number;
  crop: CropBox;
  diff: boolean;
  toggleTeacher: () => void;
  setCurrentCard: (id: string | null) => void;
  setAb: (i: number) => void;
  setRotate: (deg: number) => void;
  setCrop: (c: CropBox) => void;
  toggleDiff: () => void;
  resetPlate: () => void;
};

export const useUi = create<UiState>((set) => ({
  teacherOpen: false,
  currentCardId: null,
  ab: 0,
  rotate: 0,
  crop: DEFAULT_CROP,
  diff: false,
  toggleTeacher: () => set((s) => ({ teacherOpen: !s.teacherOpen })),
  setCurrentCard: (id) => set({ currentCardId: id }),
  setAb: (i) => set({ ab: i }),
  setRotate: (deg) => set({ rotate: deg }),
  setCrop: (c) => set({ crop: c }),
  toggleDiff: () => set((s) => ({ diff: !s.diff })),
  resetPlate: () => set({ ab: 0, rotate: 0, crop: DEFAULT_CROP, diff: false }),
}));
