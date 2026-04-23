import { useState, useEffect, useRef } from 'react';

interface CommandPaletteProps {
  onClose: () => void;
}

interface CmdItem {
  group: string;
  cmd: string;
  href?: string;
  action?: () => void;
  k: string;
}

export const CommandPalette = ({ onClose }: CommandPaletteProps) => {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CmdItem[] = [
    { group: 'nav', cmd: 'Go to shipped products', href: '#saas', k: 'g s' },
    { group: 'nav', cmd: 'Go to case studies', href: '#work', k: 'g c' },
    { group: 'nav', cmd: 'Go to experience', href: '#about', k: 'g e' },
    { group: 'nav', cmd: 'Go to now', href: '#now', k: 'g n' },
    { group: 'nav', cmd: 'Go to contact', href: '#contact', k: 'g h' },
    { group: 'action', cmd: 'Copy email address', action: () => navigator.clipboard?.writeText('shaban.razaa@gmail.com'), k: '⌘c' },
    { group: 'action', cmd: 'Download resume.pdf', action: () => { const a = document.createElement('a'); a.href = '/resume.pdf'; a.download = ''; a.click(); }, k: '⌘d' },
    { group: 'social', cmd: 'Open GitHub (shabanraza) →', href: 'https://github.com/shabanraza', k: 'g g' },
    { group: 'social', cmd: 'Open X/Twitter (@shaban_dev) →', href: 'https://x.com/shaban_dev', k: 'g t' },
    { group: 'social', cmd: 'Open LinkedIn →', href: 'https://www.linkedin.com/in/shaban-dev/', k: 'g l' },
  ];

  const filtered = items.filter(i => i.cmd.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = '';
      clearTimeout(t);
    };
  }, []);

  const run = (it: CmdItem) => {
    if (it.action) it.action();
    if (it.href) {
      if (it.href.startsWith('#')) {
        window.location.hash = it.href;
      } else {
        window.open(it.href, '_blank');
      }
    }
    onClose();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && filtered[sel]) { e.preventDefault(); run(filtered[sel]); }
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        onKeyDown={onKeyDown}
        className="w-full max-w-[600px] rounded-xl overflow-hidden"
        style={{
          background: 'var(--t-bg2)',
          border: '1px solid var(--t-border)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
        }}
      >
        <div
          className="flex items-center px-4 py-3.5"
          style={{ borderBottom: '1px solid var(--t-border)' }}
        >
          <span className="mr-2.5" style={{ color: 'var(--t-accent)' }}>$</span>
          <input
            ref={inputRef}
            autoFocus
            value={q}
            onChange={e => { setQ(e.target.value); setSel(0); }}
            placeholder="type a command..."
            className="flex-1 bg-transparent border-none outline-none text-sm"
            style={{ color: 'var(--t-text)', fontFamily: 'inherit' }}
          />
          <kbd
            className="px-2 py-0.5 rounded-sm text-[11px]"
            style={{ background: 'var(--t-bg)', color: 'var(--t-dim)' }}
          >
            esc
          </kbd>
        </div>
        <div className="p-1.5 max-h-[420px] overflow-y-auto">
          {filtered.map((it, i) => (
            <div
              key={i}
              onClick={() => run(it)}
              onMouseEnter={() => setSel(i)}
              className="px-3 py-2.5 text-[13px] flex justify-between items-center rounded-md cursor-pointer"
              style={{
                color: 'var(--t-text)',
                background: sel === i ? 'var(--t-panel)' : 'transparent',
              }}
            >
              <div>
                <span
                  className="text-[10px] uppercase tracking-wider mr-2.5"
                  style={{ color: 'var(--t-dim)' }}
                >
                  {it.group}
                </span>
                {it.cmd}
              </div>
              <kbd
                className="px-1.5 py-0.5 rounded-sm text-[11px]"
                style={{
                  background: 'var(--t-bg)',
                  color: 'var(--t-dim)',
                  border: '1px solid var(--t-border)',
                }}
              >
                {it.k}
              </kbd>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="py-5 text-[13px] text-center" style={{ color: 'var(--t-dim)' }}>
              no results — try different keywords
            </div>
          )}
        </div>
        <div
          className="px-3.5 py-2 text-[11px] flex gap-4"
          style={{
            borderTop: '1px solid var(--t-border)',
            color: 'var(--t-dimmer)',
          }}
        >
          <span>↑↓ navigate</span>
          <span>⏎ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
};
