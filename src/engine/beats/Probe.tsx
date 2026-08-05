import type { Card } from '../../content/types';
import { useProgress, useRecord } from '../../store/progress';
import { CHANNELS, graders, readiness } from '../../interactions/registry';
import { useUi } from '../../store/ui';
import { Action, OptionList } from '../../components/ui';
import { BLUE, DIM, GREEN, INK, RED } from '../../lib/colors';

/**
 * Beat 4 — evidential and verifiable, answered through an interaction.
 * Beat 2 asked what you think; this asks what you can prove.
 */
export function Probe({ card }: { card: Card }) {
  const rec = useRecord(card.id);
  const save = useProgress((s) => s.save);
  const { ab, rotate } = useUi();
  const probe = card.probe;
  if (!probe) return null;

  const answered = !!rec.probeAnswered;
  const ui = { ab, rotate, colour: rec.colour ?? {} };
  const ready = readiness[probe.grade](card, rec, ui);

  const submit = () => {
    if (!ready) return;
    const ok = graders[probe.grade](card, rec, ui);
    save(card.id, { probeAnswered: true, probeCorrect: ok, beat: 4 });
  };

  return (
    <div>
      <div className="mb-2 max-w-[36ch] text-[23px] leading-[1.45]">{probe.prompt}</div>
      {probe.note && (
        <div className="mb-7 max-w-[46ch] text-[12.5px] leading-[1.75] text-muted">{probe.note}</div>
      )}

      {probe.options && (
        <div className="mb-8">
          <OptionList
            options={probe.options.map((o) => {
              const picked = rec.probe === o.key;
              let colour = picked ? BLUE : INK;
              let mark = picked ? '▣' : '▢';
              if (answered) {
                if (o.correct) {
                  colour = GREEN;
                  mark = '▣';
                } else if (picked) {
                  colour = RED;
                  mark = '▨';
                } else {
                  colour = DIM;
                }
              }
              return { key: o.key, text: o.text, mark, colour, picked, disabled: answered };
            })}
            onPick={(key) => save(card.id, { probe: key })}
          />
        </div>
      )}

      {probe.tools.includes('colour') && probe.colourFilters && (
        <div className="mb-8 flex max-w-[46ch] flex-col">
          {probe.colourFilters.map((f) => (
            <div key={f.id} className="flex items-center justify-between gap-[18px] border-b border-hairline py-3.5">
              <span className="text-[13.5px]">{f.label}</span>
              <div className="flex gap-2">
                {CHANNELS.map((ch) => {
                  const active = (rec.colour ?? {})[f.id] === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      aria-label={`${f.label} → ${ch.id}`}
                      onClick={() => {
                        if (answered) return;
                        const m = { ...(rec.colour ?? {}) };
                        Object.keys(m).forEach((k) => {
                          if (m[k] === ch.id) delete m[k];
                        });
                        m[f.id] = ch.id;
                        save(card.id, { colour: m });
                      }}
                      className="h-[26px] w-[26px] cursor-pointer rounded border"
                      style={{
                        background: active ? ch.hex : 'rgba(255,255,255,.35)',
                        borderColor: active ? ch.hex : '#cdc8ba',
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {(probe.tools.includes('hotspot') || probe.tools.includes('rotate')) && (
        <div className="mb-7 max-w-[46ch] text-[12.5px] leading-[1.8] text-muted">
          {probe.tools.includes('hotspot')
            ? rec.hotspot
              ? 'Marked on the plate. Change it by clicking again.'
              : 'Click the plate to mark your answer.'
            : 'Turn the plate with the controls under it, then submit.'}
        </div>
      )}

      <Action disabled={!ready} onClick={submit}>
        {ready ? 'see what the frame supports' : 'answer first'}
      </Action>
    </div>
  );
}
