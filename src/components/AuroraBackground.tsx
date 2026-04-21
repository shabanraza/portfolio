import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AuroraBackground = () => {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { damping: 30, stiffness: 80 });
  const sy = useSpring(my, { damping: 30, stiffness: 80 });

  const blobAX = useTransform(sx, (v) => `${v * 30}%`);
  const blobAY = useTransform(sy, (v) => `${v * 30}%`);
  const blobBX = useTransform(sx, (v) => `${(1 - v) * 40}%`);
  const blobBY = useTransform(sy, (v) => `${(1 - v) * 40}%`);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: 'var(--bg-gradient)' }}
    >
      <motion.div
        className="absolute w-[60vmax] h-[60vmax] rounded-full blur-[120px] opacity-[0.28]"
        style={{
          x: blobAX,
          y: blobAY,
          left: '10%',
          top: '5%',
          background:
            'radial-gradient(circle at 30% 30%, var(--color-primary) 0%, transparent 60%)',
        }}
      />
      <motion.div
        className="absolute w-[55vmax] h-[55vmax] rounded-full blur-[140px] opacity-[0.22]"
        style={{
          x: blobBX,
          y: blobBY,
          right: '5%',
          bottom: '10%',
          background:
            'radial-gradient(circle at 70% 70%, var(--color-primary-light) 0%, transparent 60%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
