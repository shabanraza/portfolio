const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

export const CaseStudies = () => {
  const studies = [
    {
      id: 'planiq',
      title: 'Building the no-code ML forecasting UI at Anaplan',
      tag: 'Enterprise · ML Platform',
      read: '7 min',
      hl: 'Shipped React + Redux UI for PlanIQ. Code-splitting cut load 30%. 90%+ test coverage. Used by JLR & NHS trusts.',
    },
    {
      id: 'dashboard',
      title: 'Rebuilding a legacy dashboard — TTI from 6.4s to 1.8s',
      tag: 'Performance · Fintech',
      read: '9 min',
      hl: 'Migrated legacy system to Next.js + TypeScript at Mobiloitte. Bundle cut 42%, component library, CI cadence.',
    },
    {
      id: 'migration',
      title: 'jQuery → React for 20+ engineers without a rewrite weekend',
      tag: 'Migration · Enterprise',
      read: '12 min',
      hl: 'How we took a legacy B2B app at Iris Software to React + Redux-Saga incrementally. Zero downtime, shared component system.',
    },
  ];

  return (
    <section
      className="px-6 md:px-10 py-[60px]"
      style={{
        background: 'var(--t-bg2)',
        borderTop: '1px solid var(--t-border)',
        borderBottom: '1px solid var(--t-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="02" title="case.studies" sub="the long version, with numbers" />
        <div
          className="mt-7 grid md:grid-cols-3 gap-[2px] rounded-lg overflow-hidden"
          style={{ background: 'var(--t-border)', border: '1px solid var(--t-border)' }}
        >
          {studies.map((c, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-7 min-h-[260px] transition-colors duration-200 cursor-pointer"
              style={{ background: 'var(--t-bg2)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--t-panel)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--t-bg2)')}
            >
              <div>
                <div className="text-[10px] uppercase tracking-[1.5px] mb-3.5" style={{ color: 'var(--t-accent)' }}>
                  {c.tag}
                </div>
                <div className="text-[19px] font-semibold leading-snug tracking-tight" style={{ color: 'var(--t-text)' }}>
                  {c.title}
                </div>
                <p className="text-[13px] leading-relaxed mt-3.5" style={{ color: 'var(--t-dim)' }}>{c.hl}</p>
              </div>
              <div className="flex justify-between text-xs mt-5" style={{ color: 'var(--t-dim)' }}>
                <span>{c.read} read</span>
                <span style={{ color: 'var(--t-accent)' }}>cat {c.id}.md →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
