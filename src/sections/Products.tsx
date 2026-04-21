import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { MobileDeviceFrame } from '../components/ui/MobileDeviceFrame';
import { useMagneticHover } from '../hooks/useMagneticHover';

type DeviceType = 'phone' | 'laptop';
type Status = 'live' | 'beta' | 'building';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: Status;
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { live?: string; github?: string };
  accent: string;
  device: DeviceType;
}

const products: Product[] = [
  {
    id: 'product-one',
    name: 'Product One',
    tagline: 'Your SaaS one-liner goes here.',
    description:
      "Short description of what this product does, who it's for, and why it exists. Replace with real copy when ready.",
    status: 'live',
    metrics: [
      { label: 'Users', value: '—' },
      { label: 'MRR', value: '—' },
      { label: 'Built in', value: '—' },
    ],
    stack: ['React', 'Node', 'Postgres'],
    links: { live: '#', github: '#' },
    accent: 'from-teal-400 to-emerald-500',
    device: 'laptop',
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
    device: 'phone',
  },
  {
    id: 'product-three',
    name: 'Product Three',
    tagline: "What you're shipping right now.",
    description:
      "In-progress product. Use this card for the thing you're building live. Show progress, not polish.",
    status: 'building',
    metrics: [
      { label: 'Status', value: 'Building' },
      { label: 'ETA', value: '—' },
      { label: 'Waitlist', value: '—' },
    ],
    stack: ['React Native', 'Expo', 'Supabase'],
    links: {},
    accent: 'from-amber-400 to-rose-500',
    device: 'phone',
  },
];

const statusLabel: Record<Status, { text: string; color: string }> = {
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

  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(products.length - 1) * 100}vw`]
  );

  return (
    <section id="products" className="relative">
      <div className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-wider uppercase block mb-4"
          >
            01 — Products I&apos;ve shipped
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-[var(--color-foreground)] max-w-3xl"
          >
            Built in public.{' '}
            <span className="text-[var(--color-muted)]">Used by real people.</span>
          </motion.h2>
          <p className="text-lead mt-6 max-w-2xl text-[var(--color-muted)]">
            Side projects that graduated into real products. Each one shipped, iterated on, and
            (mostly) still running.
          </p>
        </div>
      </div>

      <div className="lg:hidden px-4 space-y-6 pb-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div
        ref={scrollRef}
        className="hidden lg:block relative"
        style={{ height: `${products.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
          <motion.div style={{ x: trackX }} className="flex gap-0 will-change-transform">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-[6vw]"
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
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagneticHover(0.05);
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
      className="relative w-full max-w-6xl glass-panel rounded-2xl p-6 md:p-10 group"
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${status.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {status.text}
            </span>
            <span className={`h-[1px] w-12 bg-gradient-to-r ${product.accent}`} />
          </div>

          <h3 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-foreground)] mb-3 leading-[0.95]">
            {product.name}
          </h3>
          <p className="text-primary text-base md:text-lg mb-4">{product.tagline}</p>
          <p className="text-[var(--color-muted)] max-w-xl leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-[var(--color-border)] py-5">
            {product.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display font-bold text-2xl md:text-3xl text-[var(--color-foreground)]">
                  {m.value}
                </p>
                <p className="text-[10px] md:text-xs text-[var(--color-muted)] uppercase tracking-wider mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-[var(--color-surface-highlight)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-muted)]"
              >
                {s}
              </span>
            ))}
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

        <div className="order-1 lg:order-2 relative flex items-center justify-center py-4">
          <TiltedDevice product={product} />
        </div>
      </div>
    </motion.div>
  );
};

const TiltedDevice = ({ product }: { product: Product }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 150 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 150 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    if (window.matchMedia('(hover: none)').matches) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full max-w-[480px] [perspective:1200px]"
    >
      <div
        className={`absolute inset-0 rounded-[2rem] blur-3xl opacity-30 bg-gradient-to-br ${product.accent} -z-10`}
      />
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="relative w-full"
      >
        <MobileDeviceFrame variant={product.device}>
          <MockupContent accent={product.accent} device={product.device} />
        </MobileDeviceFrame>
      </motion.div>
    </div>
  );
};

const MockupContent = ({ accent, device }: { accent: string; device: DeviceType }) => {
  if (device === 'laptop') {
    const bars = [35, 60, 50, 80, 45, 70, 55, 85, 40, 75];
    return (
      <div className="w-full h-full bg-black flex">
        <div className="w-[14%] border-r border-gray-800 flex flex-col items-center py-3 gap-2">
          <div className={`w-5 h-5 rounded bg-gradient-to-br ${accent} opacity-80`} />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-[70%] h-1.5 rounded bg-gray-800" />
          ))}
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-2 rounded bg-gray-900 border border-gray-800">
                <div
                  className={`w-3 h-3 rounded mb-1.5 bg-gradient-to-br ${accent} opacity-60`}
                />
                <div className="w-full h-1 rounded bg-gray-800 mb-1" />
                <div className="w-1/2 h-1.5 rounded bg-gray-700" />
              </div>
            ))}
          </div>
          <div className="p-2 rounded bg-gray-900 border border-gray-800 h-[60%] flex items-end justify-between gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.06,
                  repeat: Infinity,
                  repeatDelay: 4,
                  repeatType: 'reverse',
                }}
                className={`w-full rounded-t-[1px] bg-gradient-to-t ${accent} opacity-70`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black flex flex-col">
      <div className="h-6 border-b border-gray-800 flex items-center justify-between px-2 pt-1.5">
        <div className="w-4 h-1 rounded bg-gray-700" />
        <div className="w-8 h-1.5 rounded bg-gray-600" />
        <div className="w-4 h-1 rounded bg-gray-700" />
      </div>
      <motion.div
        className="flex-1 p-2 space-y-2 overflow-hidden"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className={`w-full aspect-[16/9] rounded bg-gradient-to-br ${accent} opacity-60`} />
        <div className="flex gap-1.5 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-4 w-10 rounded-full bg-gray-900 border border-gray-800 flex-shrink-0"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded bg-gray-900 border border-gray-800 p-1.5 flex flex-col justify-end"
            >
              <div className="w-full h-1 rounded bg-gray-800 mb-1" />
              <div className={`w-1/2 h-1.5 rounded bg-gradient-to-r ${accent} opacity-60`} />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="h-5 border-t border-gray-800 flex justify-center items-center">
        <div className="w-10 h-1 rounded-full bg-gray-700" />
      </div>
    </div>
  );
};
