const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

const testimonials = [
  {
    quote: 'Mohammad ships more in a month than most teams ship in a quarter. And it\'s clean, maintainable code.',
    author: 'Engineering Lead',
    role: 'GlobalLogic',
  },
  {
    quote: 'The rare engineer who can architect a large-scale codebase and also obsess over the user experience details.',
    author: 'Product Manager',
    role: 'Mobiloitte',
  },
];

export const Testimonials = () => {
  return (
    <section
      className="px-6 md:px-10 py-[72px]"
      style={{
        background: 'var(--t-bg2)',
        borderTop: '1px solid var(--t-border)',
        borderBottom: '1px solid var(--t-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="06" title="reviews.txt" sub="what people say (unsolicited)" />
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-lg p-7"
              style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)' }}
            >
              <div
                className="text-[28px] leading-none"
                style={{ color: 'var(--t-accent)', fontFamily: "'Fraunces', serif" }}
              >
                "
              </div>
              <p
                className="text-[17px] leading-relaxed my-3"
                style={{
                  color: 'var(--t-text)',
                  fontFamily: "'Fraunces', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, var(--t-accent), var(--t-magenta))',
                    color: 'var(--t-bg)',
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: 'var(--t-text)' }}>{t.author}</div>
                  <div className="text-xs" style={{ color: 'var(--t-dim)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
