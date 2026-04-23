const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

interface ClientProject {
  client: string;
  project: string;
  role: string;
  year: string;
  impact: string;
  tags: string[];
}

const clientWork: ClientProject[] = [
  {
    client: 'Mobiloitte',
    project: 'Fintech & web3 product suite',
    role: 'Senior FE Lead',
    year: '2022 — 2024',
    impact: 'Rebuilt legacy dashboard in Next.js + TypeScript — TTI down from 6.4s to 1.8s, bundle cut by 42%.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    client: 'GlobalLogic / Anaplan',
    project: 'PlanIQ ML forecasting platform',
    role: 'Senior Software Engineer',
    year: '2020 — 2022',
    impact: 'React + Redux UI for enterprise ML. Code-splitting cut load 30%. 90%+ test coverage on core library.',
    tags: ['React', 'TypeScript', 'Redux', 'Jest'],
  },
  {
    client: 'Iris Software',
    project: 'Enterprise B2B dashboard migration',
    role: 'Software Engineer',
    year: '2018 — 2020',
    impact: 'Migrated jQuery to React + Redux-Saga. Designed shared component system for 20+ engineers.',
    tags: ['React', 'Redux-Saga', 'Node.js'],
  },
];

export const ClientWork = () => {
  return (
    <section id="work" className="px-6 md:px-10 py-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="03" title="client.work" sub="a decade of engagements" />
        <div className="mt-7">
          {clientWork.map((w, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[160px_1fr_240px] gap-4 md:gap-8 py-6 items-start"
              style={{
                borderBottom: i < clientWork.length - 1 ? '1px solid var(--t-border)' : 'none',
              }}
            >
              <div>
                <div className="text-xs mb-1" style={{ color: 'var(--t-accent)' }}>[{w.year}]</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--t-text)' }}>{w.client}</div>
              </div>
              <div>
                <div className="text-[19px] font-medium mb-1 tracking-tight" style={{ color: 'var(--t-text)' }}>{w.project}</div>
                <div className="text-[13px] mb-2" style={{ color: 'var(--t-dim)' }}>{w.role}</div>
                <div className="text-[13px] leading-relaxed" style={{ color: 'var(--t-text)', opacity: 0.8 }}>{w.impact}</div>
              </div>
              <div className="flex gap-1 flex-wrap md:justify-end md:content-start">
                {w.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-1.5 py-0.5 rounded-sm"
                    style={{ color: 'var(--t-dim)', border: '1px solid var(--t-border)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
