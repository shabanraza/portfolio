import { useState, useEffect } from 'react';

export const StatusStrip = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-40 flex justify-between items-center px-4 py-1 text-[11px]"
      style={{
        background: 'var(--t-bg)',
        borderTop: '1px solid var(--t-border)',
        color: 'var(--t-dim)',
        fontFamily: 'var(--t-mono)',
      }}
    >
      <div className="flex gap-4">
        <span>
          <span style={{ color: 'var(--t-accent)' }}>●</span> connected
        </span>
        <span>main ✓</span>
        <span>0 errors · 0 warnings</span>
      </div>
      <div className="flex gap-4">
        <span>UTF-8</span>
        <span>LF</span>
        <span>
          {time.toLocaleTimeString('en-US', { hour12: false })} IST
        </span>
      </div>
    </div>
  );
};
