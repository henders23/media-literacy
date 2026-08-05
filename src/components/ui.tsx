import type { ReactNode } from 'react';

/** Buttons say what happens — never "Next". */
export function Action({
  children,
  onClick,
  disabled,
  tone = 'blue',
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tone?: 'blue' | 'red';
}) {
  const colour = disabled ? 'border-dim text-dim cursor-not-allowed' : tone === 'red'
    ? 'border-red text-red hover:bg-red hover:text-paper cursor-pointer'
    : 'border-blue text-blue hover:bg-blue hover:text-paper cursor-pointer';
  return (
    <button
      type="button"
      onClick={() => {
        if (!disabled) onClick?.();
      }}
      aria-disabled={disabled}
      className={`inline-block rounded border px-[18px] py-[11px] font-mono text-[11px] uppercase tracking-[.16em] transition-colors motion-reduce:transition-none ${colour}`}
    >
      {children}
    </button>
  );
}

export function Kicker({ children, tone = 'muted' }: { children: ReactNode; tone?: 'muted' | 'red' }) {
  return (
    <div
      className={`font-mono text-[10px] uppercase tracking-[.16em] ${tone === 'red' ? 'text-red' : 'text-muted'}`}
    >
      {children}
    </div>
  );
}

export function OptionList({
  options,
  onPick,
}: {
  options: { key: string; text: string; mark: string; colour: string; picked: boolean; disabled?: boolean }[];
  onPick: (key: string) => void;
}) {
  return (
    <div className="flex flex-col">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          onClick={() => {
            if (!o.disabled) onPick(o.key);
          }}
          className={`grid cursor-pointer grid-cols-[18px_1fr] gap-3 border-b border-hairline py-[13px] pr-2.5 text-left hover:bg-white/40 ${o.picked ? 'bg-blue/5' : ''}`}
          style={{ color: o.colour }}
        >
          <span className="text-xs">{o.mark}</span>
          <span className="text-[14.5px] leading-relaxed">{o.text}</span>
        </button>
      ))}
    </div>
  );
}
