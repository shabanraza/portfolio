import { useState } from 'react';

const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="flex items-baseline gap-3.5 pb-4 flex-wrap" style={{ borderBottom: '1px solid var(--t-border)' }}>
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

const faqs = [
  { q: 'Are you available full-time?', a: "Yes — I'm actively open to senior / staff full-time engineering roles. I also selectively take consulting engagements for products I believe in." },
  { q: 'What kind of work do you do best?', a: "Zero-to-one product frontends, design-system architecture, performance deep-dives, and \"the previous senior left and nothing compiles\" rescues. I thrive in ambiguity." },
  { q: 'Will you take an equity-only role?', a: "Only if I'd take the role at cash rates anyway. Equity is a bonus, not a salary replacement." },
  { q: 'Do you manage teams?', a: "I've led teams up to 11. I'm a better principal IC than a people manager, and I'll tell you that on day one." },
  { q: 'Timezone?', a: 'IST (UTC+5:30). Overlap with EU is easy; US Pacific is tight but doable for core hours.' },
  { q: 'Can you work with designers / Figma?', a: "Yes — I read Figma fluently, I ship pixel-honest frontends, and I push back on specs that are fighting the platform." },
];

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-6 md:px-10 py-[72px]">
      <div className="max-w-[900px] mx-auto">
        <SectionHeader num="08" title="faq.md" sub="questions I get asked" />
        <div className="mt-5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--t-border)' }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full bg-transparent border-none text-left cursor-pointer py-4 flex justify-between items-center text-[15px]"
                  style={{ color: 'inherit', fontFamily: 'inherit' }}
                >
                  <span style={{ color: 'var(--t-text)' }}>
                    <span className="mr-2.5" style={{ color: 'var(--t-accent)' }}>{isOpen ? '▼' : '▶'}</span>
                    {f.q}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--t-dim)' }}>Q.0{i + 1}</span>
                </button>
                {isOpen && (
                  <div
                    className="text-sm leading-7 pb-5 pl-6 max-w-[680px]"
                    style={{ color: 'var(--t-dim)' }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
