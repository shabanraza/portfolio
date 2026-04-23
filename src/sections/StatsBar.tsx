export const StatsBar = () => {
  const stats = [
    { label: 'years shipping', val: '10+', sub: 'and counting' },
    { label: 'SaaS products', val: '3', sub: 'built & shipped' },
    { label: 'users in prod', val: '100K+', sub: 'across all products' },
    { label: 'enterprises', val: '4', sub: 'shipped for' },
  ];

  return (
    <section
      className="px-6 md:px-10 py-5"
      style={{
        borderTop: '1px solid var(--t-border)',
        borderBottom: '1px solid var(--t-border)',
        background: 'var(--t-bg2)',
      }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="py-2">
            <div
              className="text-[10px] uppercase tracking-[1.5px]"
              style={{ color: 'var(--t-dim)' }}
            >
              {s.label}
            </div>
            <div
              className="text-[32px] font-bold mt-1 tracking-tight"
              style={{ color: 'var(--t-text)' }}
            >
              {s.val}
              <span className="font-normal" style={{ color: 'var(--t-accent)' }}>_</span>
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: 'var(--t-dimmer)' }}>
              // {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
