import { ArrowUpRight, Github } from 'lucide-react';

interface Product {
  name: string;
  category: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  linkLabel: string;
  kind: 'product' | 'open-source';
  sourceHref?: string;
  commitPeriod?: string;
  commitHighlight?: string;
}

const products: Product[] = [
  {
    name: 'Drazel',
    category: 'Product intelligence',
    description: 'Find rising apps, mine customer complaints, and turn market signals into clearer product decisions.',
    href: 'https://drazel.store',
    imageSrc: '/product-previews/drazel.png',
    imageAlt: 'Drazel app intelligence dashboard preview',
    linkLabel: 'Visit Drazel',
    kind: 'product',
  },
  {
    name: 'CiteGrove',
    category: 'AI search visibility',
    description: 'See where AI answer engines cite competitors and turn visibility gaps into a focused worklist.',
    href: 'https://citegrove.com',
    imageSrc: '/product-previews/citegrove.png',
    imageAlt: 'CiteGrove AI citation benchmarking product preview',
    linkLabel: 'Visit CiteGrove',
    kind: 'product',
  },
  {
    name: 'PlotrAI',
    category: 'Home design tools',
    description: 'A practical toolkit for Indian homeowners, from Vastu checks and room renders to property calculators.',
    href: 'https://plotrai.in',
    imageSrc: '/product-previews/plotrai.png',
    imageAlt: 'PlotrAI home design and homeowner tools preview',
    linkLabel: 'Visit PlotrAI',
    kind: 'product',
    sourceHref: 'https://github.com/shabanraza/plotrai',
    commitPeriod: 'Jul 2026',
    commitHighlight: 'Added property tools and render-credit workflows.',
  },
  {
    name: 'Postloom',
    category: 'Creator tools',
    description: 'A focused editor for polished social cards, with quick PNG and GIF exports and no watermark.',
    href: 'https://postloom.studio',
    imageSrc: '/product-previews/postloom.png',
    imageAlt: 'Postloom social card editor preview',
    linkLabel: 'Visit Postloom',
    kind: 'product',
    sourceHref: 'https://github.com/shabanraza/postloom',
    commitPeriod: 'Apr 2026',
    commitHighlight: 'Redesigned the editor and added analytics for actions and downloads.',
  },
  {
    name: 'HisaabKro',
    category: 'Open-source accounting',
    description: 'GST billing, khata ledgers, inventory, and accounting tools for Indian businesses.',
    href: 'https://hisaabkro.in',
    imageSrc: '/product-previews/hisaabkro.png',
    imageAlt: 'HisaabKro GST accounting app preview',
    linkLabel: 'Visit HisaabKro',
    kind: 'open-source',
    sourceHref: 'https://github.com/shabanraza/gst-accounting-software',
    commitPeriod: 'Oct 2026',
    commitHighlight: 'Built an AI assistant for read-only questions about accounting data.',
  },
  {
    name: 'Qaftr',
    category: 'Invoicing',
    description: 'A VAT invoicing app for Saudi freelancers, built around local ZATCA requirements.',
    href: 'https://qaftr.com',
    imageSrc: '/product-previews/qaftr.png',
    imageAlt: 'Qaftr VAT invoicing product preview',
    linkLabel: 'Visit Qaftr',
    kind: 'open-source',
    sourceHref: 'https://github.com/shabanraza/qaftr',
    commitPeriod: 'Jun 2026',
    commitHighlight: 'Built ZATCA pages and hardened invoice and billing flows.',
  },
];

export const Products = () => (
  <section id="products" className="section-pad">
    <div className="site-container">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Products I’m building</p>
          <h2 className="section-title mt-4">From idea to something people can use.</h2>
        </div>
        <p className="section-intro md:mb-1 md:max-w-[25rem]">
          A mix of live products and open-source builds—each shaped around a real workflow or user need.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <article key={product.name} className="project-card flex min-h-full flex-col">
            <div className="project-art">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="project-preview"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{product.name}</h3>
                {product.kind === 'open-source' && <Github className="mt-1 shrink-0 text-muted" size={18} aria-hidden="true" />}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
              {product.commitHighlight && product.commitPeriod && (
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-faint">
                    GitHub build · {product.commitPeriod}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">{product.commitHighlight}</p>
                </div>
              )}
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-accent"
                >
                  {product.linkLabel} <ArrowUpRight size={16} />
                </a>
                {product.sourceHref && product.sourceHref !== product.href && (
                  <a
                    href={product.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    <Github size={15} /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
