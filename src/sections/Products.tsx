import { useState } from 'react';

interface Product {
  name: string;
  tagline: string;
  url: string;
  status: 'live' | 'beta' | 'building';
  year: string;
  accent: string;
  ogImage?: string;
}

const products: Product[] = [
  {
    name: 'Drazel',
    tagline: 'Your SaaS one-liner goes here',
    url: 'drazel.store',
    status: 'live',
    year: '2024',
    accent: '#00ff88',
  },
  {
    name: 'CiteGrove',
    tagline: 'Another product one-liner',
    url: 'citegrove.com',
    status: 'beta',
    year: '2024',
    accent: '#6366f1',
  },
  {
    name: 'Plotr',
    tagline: 'What you\'re shipping right now',
    url: 'plotrai.in',
    status: 'building',
    year: '2025',
    accent: '#f97316',
  },
  {
    name: 'Postloom',
    tagline: 'Your SaaS one-liner goes here',
    url: 'postloom.studio',
    status: 'building',
    year: '2025',
    accent: '#ec4899',
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
        <div className="grid md:grid-cols-2 gap-5 mt-8">
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
  const [imgLoaded, setImgLoaded] = useState(false);
  const href = p.url.startsWith('http') ? p.url : `https://${p.url}`;
  const bannerSrc =
    p.ogImage ??
    `https://api.microlink.io/?url=${encodeURIComponent(href)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=630`;
  const statusColor = p.status === 'live' ? p.accent : 'var(--t-amber)';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group block rounded-xl overflow-hidden relative transition-all duration-200 cursor-pointer no-underline"
      style={{
        background: 'var(--t-bg2)',
        border: `1px solid ${hov ? p.accent : 'var(--t-border)'}`,
        transform: hov ? 'translateY(-3px)' : 'none',
        boxShadow: hov ? `0 12px 32px -8px ${p.accent}30` : 'none',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '1200 / 630',
          background: 'var(--t-bg)',
          borderBottom: '1px solid var(--t-border)',
        }}
      >
        {!imgLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${p.accent}08, transparent)`,
            }}
          >
            <div
              className="text-[11px] uppercase tracking-[2px]"
              style={{ color: 'var(--t-dimmer)' }}
            >
              loading preview…
            </div>
          </div>
        )}
        <img
          src={bannerSrc}
          alt={`${p.name} banner`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className="w-full h-full object-cover object-top transition-transform duration-500"
          style={{
            opacity: imgLoaded ? 1 : 0,
            transform: hov ? 'scale(1.03)' : 'scale(1)',
          }}
        />
        <span
          className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm backdrop-blur-sm"
          style={{
            color: statusColor,
            background: 'rgba(0,0,0,0.55)',
            border: `1px solid ${statusColor}`,
          }}
        >
          {p.status}
        </span>
      </div>

      <div className="p-5 relative">
        <div className="flex justify-between items-baseline gap-3">
          <div className="text-xl font-bold tracking-tight" style={{ color: 'var(--t-text)' }}>
            {p.name}<span style={{ color: p.accent }}>.</span>
          </div>
          <span className="text-[11px]" style={{ color: 'var(--t-dimmer)' }}>since {p.year}</span>
        </div>
        <div className="text-[13px] mt-1" style={{ color: 'var(--t-dim)' }}>{p.tagline}</div>
        <div
          className="flex justify-between items-center mt-4 pt-3 text-xs"
          style={{ borderTop: '1px dashed var(--t-border)' }}
        >
          <span style={{ color: 'var(--t-dim)' }}>{p.url}</span>
          <span style={{ color: p.accent }}>visit →</span>
        </div>
      </div>
    </a>
  );
};
