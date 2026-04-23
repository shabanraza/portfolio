const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

const experience = [
  { year: '2024 —', role: 'Independent · Engineer & Founder', company: 'Self-employed', note: 'Building SaaS products end-to-end. Selective senior contracts.' },
  { year: '2022 — 2024', role: 'Senior Frontend Engineer', company: 'Mobiloitte', note: 'Fintech & web3. Component libraries, CI cadence.' },
  { year: '2020 — 2022', role: 'Senior Software Engineer', company: 'GlobalLogic', note: 'Anaplan PlanIQ. Enterprise ML platform.' },
  { year: '2018 — 2020', role: 'Software Engineer', company: 'Iris Software', note: 'Legacy migration. React + Redux-Saga at scale.' },
  { year: '2015 — 2018', role: 'Software Engineer', company: 'HCLTech', note: 'First role. Enterprise web apps. Promoted twice in three years.' },
];

export const Experience = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[60px]"
      style={{
        background: 'var(--t-bg2)',
        borderTop: '1px solid var(--t-border)',
        borderBottom: '1px solid var(--t-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="04" title="git.log" sub="--since='2015' --author=shaban" />
        <div className="mt-7 text-[13px] leading-7">
          {experience.map((e, i) => (
            <div
              key={i}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] py-3.5"
              style={{
                borderBottom: i < experience.length - 1 ? '1px dashed var(--t-border)' : 'none',
              }}
            >
              <span style={{ color: 'var(--t-amber)' }}>{e.year}</span>
              <div>
                <span className="font-semibold" style={{ color: 'var(--t-text)' }}>{e.role}</span>
                <span style={{ color: 'var(--t-dim)' }}> @ {e.company}</span>
                <div className="text-xs" style={{ color: 'var(--t-dim)' }}>// {e.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
