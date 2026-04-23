import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let greeted = false;

export const EasterEgg = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!greeted) {
      greeted = true;
      console.log('%cshaban.dev', 'color:#00ff88;font-family:ui-monospace,monospace;font-size:28px;font-weight:800;letter-spacing:-0.02em;');
      console.log('%chey dev. snooping around the source?', 'color:#6e7681;font-family:ui-monospace,monospace;font-size:13px;');
      console.log('%ckonami code works here →  ↑ ↑ ↓ ↓ ← → ← → B A', 'color:#484f58;font-family:ui-monospace,monospace;font-size:12px;');
      console.log("%clet's build something →  shaban.razaa@gmail.com", 'color:#00ff88;font-family:ui-monospace,monospace;font-size:13px;');
    }

    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) {
          setUnlocked(true);
          idx = 0;
        }
      } else {
        idx = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setUnlocked(false)}
          className="fixed inset-0 z-[400] flex items-center justify-center cursor-pointer"
          style={{ background: 'rgba(0,0,0,0.85)' }}
        >
          <div className="text-center" style={{ color: 'var(--t-accent)' }}>
            <pre className="text-sm leading-tight" style={{ textShadow: '0 0 20px var(--t-accent)' }}>{`
    ╔═══════════════════════════════╗
    ║                               ║
    ║    ACHIEVEMENT UNLOCKED       ║
    ║    > old_school.mode = true   ║
    ║                               ║
    ║    you know the sequence.     ║
    ║    we should work together.   ║
    ║                               ║
    ╚═══════════════════════════════╝
            `}</pre>
            <div className="mt-5 text-sm" style={{ color: 'var(--t-text)' }}>click anywhere to dismiss</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
