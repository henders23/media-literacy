import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Align } from '../content/types';

/** Everything a student leaves behind on one card. No backend — this device only. */
export type CardRecord = {
  beat?: number;
  commit?: string;
  conf?: number;
  probe?: string;
  hotspot?: { x: number; y: number };
  colour?: Record<string, string>;
  probeAnswered?: boolean;
  probeCorrect?: boolean;
  andYet?: string;
  andYetShown?: boolean;
  principle?: string;
  principleShown?: boolean;
  done?: boolean;
};

type ProgressState = {
  records: Record<string, CardRecord>;
  /** Teacher calibration of plate registration, keyed `${cardId}:${assetIndex}`. */
  aligns: Record<string, Align>;
  save: (cardId: string, patch: Partial<CardRecord>) => void;
  setAlign: (key: string, align: Align) => void;
  resetAlign: (key: string) => void;
  clearResponses: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      records: {},
      aligns: {},
      save: (cardId, patch) =>
        set((s) => ({
          records: { ...s.records, [cardId]: { ...s.records[cardId], ...patch } },
        })),
      setAlign: (key, align) => set((s) => ({ aligns: { ...s.aligns, [key]: align } })),
      resetAlign: (key) =>
        set((s) => {
          const aligns = { ...s.aligns };
          delete aligns[key];
          return { aligns };
        }),
      clearResponses: () => set({ records: {} }),
    }),
    { name: 'loupe.responses.v1' },
  ),
);

export const useRecord = (cardId: string): CardRecord =>
  useProgress((s) => s.records[cardId]) ?? {};
