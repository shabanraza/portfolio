import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

let greeted = false;

export const EasterEgg = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!greeted) {
      greeted = true;
      console.log(
        '%cshaban.dev',
        'color:#14b8a6;font-family:ui-sans-serif,system-ui;font-size:28px;font-weight:800;letter-spacing:-0.02em;'
      );
      console.log(
        '%chey dev. snooping around the source?',
        'color:#94a3b8;font-family:ui-monospace,monospace;font-size:13px;'
      );
      console.log(
        '%ckonami code works here →  ↑ ↑ ↓ ↓ ← → ← → B A',
        'color:#64748b;font-family:ui-monospace,monospace;font-size:12px;'
      );
      console.log(
        "%clet's build something →  shaban.razaa@gmail.com",
        'color:#14b8a6;font-family:ui-monospace,monospace;font-size:13px;'
      );
    }

    let index = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === KONAMI[index].toLowerCase()) {
        index += 1;
        if (index === KONAMI.length) {
          index = 0;
          setUnlocked(true);
          window.setTimeout(() => setUnlocked(false), 7000);
        }
      } else {
        index = key === KONAMI[0].toLowerCase() ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <div className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl bg-[#050505] border border-primary/40 shadow-2xl font-mono text-sm">
            <span className="text-primary">konami.unlocked</span>
            <span className="text-[var(--color-muted)]">—</span>
            <span className="text-gray-200">thanks for snooping. drop a line →</span>
            <a
              href="mailto:shaban.razaa@gmail.com"
              className="text-primary hover:underline"
            >
              shaban.razaa@gmail.com
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
