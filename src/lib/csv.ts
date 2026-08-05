import { CARDS } from '../content/cards';
import type { CardRecord } from '../store/progress';

export function exportCsv(records: Record<string, CardRecord>): void {
  const head = ['plate', 'card', 'lens', 'commit', 'confidence', 'probe_correct', 'and_yet', 'principle', 'verdict'];
  const rows = CARDS.map((c) => {
    const r = records[c.id] ?? {};
    const opt = (c.commit?.options ?? []).find((o) => o.key === r.commit);
    const commitText = opt ? opt.text : c.mode === 'unseen' && r.principle ? r.principle : r.commit ?? '';
    return [
      c.ref,
      c.id,
      c.lens,
      commitText,
      r.conf == null ? '' : r.conf,
      r.probeCorrect == null ? '' : r.probeCorrect ? 'yes' : 'no',
      r.andYet ?? '',
      r.principle ?? '',
      c.principle ? c.principle.verdict : '',
    ]
      .map((v) => '"' + String(v).replace(/"/g, '""') + '"')
      .join(',');
  });
  const blob = new Blob([head.join(',') + '\n' + rows.join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'loupe-responses.csv';
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
