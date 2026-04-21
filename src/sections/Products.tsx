import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useMagneticHover } from '../hooks/useMagneticHover';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'building';
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { live?: string; github?: string };
  accent: string;
}

const products: Product[] = [
  {
    id: 'product-one',
    name: 'Product One',
    tagline: 'Your SaaS one-liner goes here.',
    description:
      'Short description of what this product does, who it\'s for, and why it exists. Replace with real copy when ready.',
    status: 'live',
    metrics: [
      { label: 'Users', value: '—' },
      { label: 'MRR', value: '—' },
      { label: 'Built in', value: '—' },
    ],
    stack: ['React', 'Node', 'Postgres'],
    links: { live: '#', github: '#' },
    accent: 'from-teal-400 to-emerald-500',
  },
  {
    id: 'product-two',
    name: 'Product Two',
    tagline: 'Another one-liner for your second product.',
    description:
      'Describe the problem, the solve, and the outcome. Keep it tight — the metrics do the heavy lifting.',
    status: 'beta',
    metrics: [
      { label: 'Users', value: '—' },
      { label: 'Signups/wk', value: '—' },
      { label: 'Stack', value: 'Next.js' },
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma'],
    links: { live: '#' },
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    id: 'product-three',
    name: 'Product Three',
    tagline: 'What you\'re shipping right now.',
    description:
      'In-progress product. Use this card for the thing you\'re building live. Show progress, not polish.',
    status: 'building',
    metrics: [
      { label: 'Status', value: 'Building' },
      { label: 'ETA', value: '—' },
      { label: 'Waitlist', value: '—' },
    ],
    stack: ['React Native', 'Expo', 'Supabase'],
    links: {},
    accent: 'from-amber-400 to-rose-500',
  },
];

const statusLabel: Record<Product['status'], { text: string; color: string }> = {
  live: { text: 'Live', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  beta: { text: 'Beta', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  building: { text: 'Building', color: 'bg-primary/10 text-primary border-primary/20' },
};

export const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const trackX = useTransform(scrollYProgress, [0, 1], ['0%', `-${(products.length - 1) * 100}vw`]);

  return (
    <section id="products" className="relative">
      {/* Intro */}
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-wider uppercase block mb-4"
          >
            Products I've shipped
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-[var(--color-foreground)] max-w-3xl"
          >
            Built in public. <span className="text-[var(--color-muted)]">Used by real people.</span>
          </motion.h2>
          <p className="text-lead mt-6 max-w-2xl text-[var(--color-muted)]">
            Side projects that graduated into real products. Each one shipped, iterated on, and
            (mostly) still running.
          </p>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden px-4 space-y-6 pb-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Desktop: horizontal scroll */}
      <div
        ref={scrollRef}
        className="hidden lg:block relative"
        style={{ height: `${products.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
          <motion.div
            style={{ x: trackX }}
            className="flex gap-0 will-change-transform"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-[8vw]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticHover(0.08);
  const status = statusLabel[product.status];

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-4xl glass-panel rounded-2xl p-8 md:p-12 group"
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-start mb-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${status.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {status.text}
            </span>
            <span className={`h-[1px] w-12 bg-gradient-to-r ${product.accent}`} />
          </div>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-3">
            {product.name}
          </h3>
          <p className="text-primary text-lg mb-4">{product.tagline}</p>
          <p className="text-[var(--color-muted)] max-w-xl leading-relaxed">{product.description}</p>
        </div>

        <div className="flex gap-3">
          {product.links.live && (
            <a
              href={product.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary-light transition-colors"
            >
              Visit <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {product.links.github && (
            <a
              href={product.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.name} source on GitHub`}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-surface-highlight)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-primary/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-4 mb-8 border-t border-b border-[var(--color-border)] py-6">
        {product.metrics.map((m) => (
          <div key={m.label}>
            <p className="font-display font-bold text-2xl md:text-3xl text-[var(--color-foreground)]">
              {m.value}
            </p>
            <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mt-1">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative flex flex-wrap gap-2">
        {product.stack.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-[var(--color-surface-highlight)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-muted)]"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
