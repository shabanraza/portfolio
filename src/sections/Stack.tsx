const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Python'],
  Frontend: ['React', 'Next.js', 'Redux', 'React Native', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  Mobile: ['React Native', 'iOS', 'Android', 'Expo'],
  Infra: ['AWS', 'Docker', 'Cloudflare', 'Vercel', 'Supabase'],
  Testing: ['Jest', 'Mocha', 'Enzyme', 'Storybook'],
};

export const Stack = () => {
  const entries = Object.entries(skills);

  return (
    <section className="px-6 md:px-10 py-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="05" title="stack.json" sub="what I reach for" />
        <div
          className="mt-6 p-6 rounded-md text-[13px] leading-8"
          style={{
            background: 'var(--t-bg2)',
            border: '1px solid var(--t-border)',
          }}
        >
          <span style={{ color: 'var(--t-dim)' }}>{'{'}</span>
          {entries.map(([k, arr], i) => (
            <div key={k} className="pl-5">
              <span style={{ color: 'var(--t-magenta)' }}>"{k}"</span>
              <span style={{ color: 'var(--t-dim)' }}>: [</span>
              {arr.map((s, j) => (
                <span key={j}>
                  <span style={{ color: 'var(--t-accent)' }}>"{s}"</span>
                  {j < arr.length - 1 && <span style={{ color: 'var(--t-dim)' }}>, </span>}
                </span>
              ))}
              <span style={{ color: 'var(--t-dim)' }}>]{i < entries.length - 1 ? ',' : ''}</span>
            </div>
          ))}
          <span style={{ color: 'var(--t-dim)' }}>{'}'}</span>
        </div>
      </div>
    </section>
  );
};
