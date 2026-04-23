import { useMemo } from 'react';

const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

const nowItems = [
  'Building SaaS products end-to-end — React, Node, mobile',
  'Shipped a Tauri desktop app with native screen/audio capture',
  'Open to senior / staff engineering roles',
  'Exploring AI-assisted development with Cursor & Claude Code',
  'Based in Noida, working remotely',
];

export const Now = () => {
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section
      id="now"
      className="px-6 md:px-10 py-[72px]"
      style={{
        background: 'var(--t-bg2)',
        borderTop: '1px solid var(--t-border)',
        borderBottom: '1px solid var(--t-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="07" title="now.txt" sub={`updated ${dateStr}`} />
        <div className="mt-7 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <div className="text-xs mb-3.5" style={{ color: 'var(--t-dim)' }}>$ tail -f ~/now.log</div>
            {nowItems.map((n, i) => (
              <div key={i} className="text-[15px] leading-7 flex gap-3 py-1" style={{ color: 'var(--t-text)' }}>
                <span style={{ color: 'var(--t-accent)' }}>▸</span>
                <span>{n}</span>
              </div>
            ))}
          </div>
          <div
            className="rounded-md p-4"
            style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)' }}
          >
            <div className="text-[11px] uppercase tracking-[1.5px] mb-2.5" style={{ color: 'var(--t-dim)' }}>
              github activity · last 12mo
            </div>
            <Heatmap />
            <div className="mt-3 flex justify-between text-[11px]" style={{ color: 'var(--t-dim)' }}>
              <span>Less</span>
              <span className="flex gap-1">
                {['var(--t-border)', '#003d24', '#008048', '#00b368', 'var(--t-accent)'].map((c, l) => (
                  <span key={l} className="w-2.5 h-2.5 rounded-[1px]" style={{ background: c }} />
                ))}
              </span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Heatmap = () => {
  const weeks = 52;
  const days = 7;
  const cells = useMemo(() => {
    const out: number[] = [];
    for (let w = 0; w < weeks; w++) {
      for (let dd = 0; dd < days; dd++) {
        const base = (Math.sin(w * 0.4) + 1) / 2 * 0.8 + Math.random() * 0.4;
        const weekend = dd === 0 || dd === 6 ? 0.5 : 1;
        const v = base * weekend;
        if (v < 0.25) out.push(0);
        else if (v < 0.5) out.push(1);
        else if (v < 0.75) out.push(2);
        else if (v < 0.95) out.push(3);
        else out.push(4);
      }
    }
    return out;
  }, []);

  const colors = ['var(--t-border)', '#003d24', '#008048', '#00b368', 'var(--t-accent)'];

  return (
    <div className="grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="grid gap-[2px]" style={{ gridTemplateRows: `repeat(${days}, 1fr)` }}>
          {Array.from({ length: days }).map((_, dd) => (
            <div
              key={dd}
              className="w-full rounded-[1px]"
              style={{
                aspectRatio: '1',
                background: colors[cells[w * days + dd]],
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
