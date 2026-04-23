import { useState } from 'react';

interface Product {
  name: string;
  tagline: string;
  url: string;
  users: string;
  mrr: string;
  stack: string[];
  status: 'live' | 'beta' | 'building';
  year: string;
  accent: string;
  story: string;
}

const products: Product[] = [
  {
    name: 'Product One',
    tagline: 'Your SaaS one-liner goes here',
    url: 'productone.dev',
    users: '—',
    mrr: '—',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    status: 'live',
    year: '2024',
    accent: '#00ff88',
    story: 'Replace with the real story behind this product — what problem it solves and why you built it.',
  },
  {
    name: 'Product Two',
    tagline: 'Another product one-liner',
    url: 'producttwo.dev',
    users: '—',
    mrr: '—',
    stack: ['Next.js', 'TypeScript', 'Prisma'],
    status: 'beta',
    year: '2024',
    accent: '#6366f1',
    story: 'Describe the problem, the solve, and the outcome. Keep it tight — the metrics do the heavy lifting.',
  },
  {
    name: 'Product Three',
    tagline: 'What you\'re shipping right now',
    url: 'productthree.dev',
    users: '—',
    mrr: '—',
    stack: ['React Native', 'Expo', 'Supabase'],
    status: 'building',
    year: '2025',
    accent: '#f97316',
    story: 'In-progress product. Use this card for the thing you\'re building live. Show progress, not polish.',
  },
];

const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div
    className="flex items-baseline gap-3.5 pb-4 flex-wrap"
    style={{ borderBottom: '1px solid var(--t-border)' }}
  >
    <span className="text-[13px]" style={{ color: 'var(--t-dimmer)' }}>{num}</span>
    <h2 className="m-0 text-[26px] font-semibold tracking-tight" style={{ color: 'var(--t-text)' }}>
      <span style={{ color: 'var(--t-accent)' }}>~/</span>{title}
    </h2>
    <span className="text-[13px] ml-auto" style={{ color: 'var(--t-dim)' }}>{sub}</span>
  </div>
);

export const Products = () => {
  return (
    <section id="saas" className="px-6 md:px-10 py-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader num="01" title="shipped.saas" sub="products I built, run, and bill for monthly" />
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {products.map((p, i) => (
            <ProductCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ p }: { p: Product }) => {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-lg p-6 relative overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        background: 'var(--t-bg2)',
        border: `1px solid ${hov ? p.accent : 'var(--t-border)'}`,
        transform: hov ? 'translateY(-2px)' : 'none',
      }}
    >
      {hov && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 20% 0%, ${p.accent}18, transparent 60%)`,
          }}
        />
      )}
      <div className="flex justify-between items-start relative">
        <div>
          <div className="text-2xl font-bold tracking-tight" style={{ color: 'var(--t-text)' }}>
            {p.name}<span style={{ color: p.accent }}>.</span>
          </div>
          <div className="text-sm" style={{ color: 'var(--t-dim)' }}>{p.tagline}</div>
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm"
          style={{
            color: p.status === 'live' ? p.accent : 'var(--t-amber)',
            border: `1px solid ${p.status === 'live' ? p.accent : 'var(--t-amber)'}`,
          }}
        >
          {p.status}
        </span>
      </div>
      <p className="text-[13px] leading-relaxed my-4 relative" style={{ color: 'var(--t-text)', opacity: 0.75 }}>
        <span style={{ color: 'var(--t-dimmer)' }}>/*</span> {p.story} <span style={{ color: 'var(--t-dimmer)' }}>*/</span>
      </p>
      <div className="flex gap-1.5 flex-wrap mt-3.5 relative">
        {p.stack.map((s, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-0.5 rounded-sm"
            style={{
              color: 'var(--t-dim)',
              background: 'var(--t-bg)',
              border: '1px solid var(--t-border)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <div
        className="flex justify-between items-center mt-5 pt-4 text-xs relative"
        style={{ borderTop: '1px dashed var(--t-border)' }}
      >
        <div className="flex gap-4">
          <span><span style={{ color: 'var(--t-dimmer)' }}>users </span><span style={{ color: 'var(--t-text)' }}>{p.users}</span></span>
          <span><span style={{ color: 'var(--t-dimmer)' }}>mrr </span><span style={{ color: p.accent }}>{p.mrr}</span></span>
          <span><span style={{ color: 'var(--t-dimmer)' }}>since </span><span style={{ color: 'var(--t-text)' }}>{p.year}</span></span>
        </div>
        <span style={{ color: 'var(--t-dim)' }}>{p.url} <span style={{ color: p.accent }}>→</span></span>
      </div>
    </div>
  );
};
