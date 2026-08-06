export type LensId =
  | 'staged'
  | 'cropped'
  | 'miscaptioned'
  | 'retouched'
  | 'one-frame-of-many'
  | 'wrong-context'
  | 'no-referent';

export type RightsStatus = 'public-domain' | 'embed' | 'link-out' | 'described';
export type DisplayMode = 'host' | 'embed' | 'link' | 'diagram';
export type Verdict = 'deceptive' | 'acceptable' | 'unresolved';
export type Sensitivity = 'none' | 'discussion' | 'graphic';
export type Tier = 'core' | 'extended' | 'gated';

/** Interaction plugins, selected by string — a card never imports a component. */
export type InteractionId = 'ab' | 'loupe' | 'crop' | 'rotate' | 'hotspot' | 'colour';
export type GradeMode = 'options' | 'hotspot' | 'rotate' | 'colour';

export type Align = { scale: number; dx: number; dy: number };

export type Asset = {
  label: string;
  /** '/images/…' when hosted; absolute URL only for embed/link-out material. */
  src: string;
  alt: string;
  /** Intrinsic aspect ratio of the scan, when it differs from the plate frame. */
  ratio?: number;
  /** Registration against the other plate of the pair (teacher calibration). */
  align?: Align;
};

export type Option = { key: string; text: string; correct?: boolean };

export type Hotspot = { x: number; y: number; w: number; h: number; label: string };

export type Probe = {
  prompt: string;
  note?: string;
  tools: InteractionId[];
  grade: GradeMode;
  options?: Option[];
  hotspot?: Hotspot;
  /** Accepted rotations, degrees clockwise from the published orientation. */
  rotateAnswer?: number[];
  colourFilters?: { id: string; label: string }[];
  colourAnswer?: Record<string, string>;
};

export type Card = {
  id: string;
  /** Catalogue number — real structure, not decoration. */
  ref: string;
  unit: number;
  unitLabel: string;
  title: string;
  lens: LensId | '—';
  tier: Tier;
  /** Aspect ratio of the plate frame. */
  ratio: number;
  sensitivity: Sensitivity;
  /** Force beat 2 into lens retrieval before the configured threshold. */
  lensRetrieval?: boolean;
  /** 'unseen' = the unassessed capstone: no scaffolding, one question. */
  mode?: 'unseen';

  rights: {
    status: RightsStatus;
    display: DisplayMode;
    holder: string;
    credit: string;
    sourceUrl: string;
  };

  assets: Asset[];

  /** Beat 1 — when and where ONLY. */
  look: string;
  /**
   * Beat 1 background: what was going on in the world, and why a photographer
   * was there. Plain English for intermediate learners. Never about the
   * photograph itself — that would bias the read.
   */
  lookIntro?: string;
  /** Beat 2 — interpretive, ungraded, always with confidence. */
  commit?: { prompt: string; note?: string; options: Option[] };
  /** Beat 3. */
  context?: string[];
  /** Beat 4 — evidential and verifiable. */
  probe?: Probe;
  /** Beat 5 — quotes the beat-2 answer back verbatim. */
  reveal?: { correct: string; incorrect: string; extra?: string };
  /** Beat 6 — the student defends the photographer first. */
  andYet?: { prompt: string; canonical: string };
  /** Beat 7 — the student writes the rule before seeing the canonical. */
  principle?: { canonical: string; verdict: Verdict };

  unseen?: { prompt: string; note: string; after: string };

  teacherNotes: string;
};
