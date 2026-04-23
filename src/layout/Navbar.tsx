import { useState, useEffect } from 'react';

interface NavbarProps {
  onCmd: () => void;
  onTweaks: () => void;
}

export const Navbar = ({ onCmd, onTweaks }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['saas', 'work', 'about', 'now', 'contact'];

  return (
    <div
      className="sticky top-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--t-bg) 85%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--t-border)' : 'transparent'}`,
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-3.5 text-[13px] max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 no-underline">
            <span style={{ color: 'var(--t-accent)' }}>●</span>
            <span style={{ color: 'var(--t-dim)' }}>~/</span>
            <span className="font-semibold" style={{ color: 'var(--t-text)' }}>shaban</span>
            <span style={{ color: 'var(--t-dim)' }}>$</span>
          </a>
          <nav className="hidden md:flex gap-5">
            {navLinks.map(x => (
              <a
                key={x}
                href={`#${x}`}
                className="no-underline transition-colors duration-150"
                style={{ color: 'var(--t-dim)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-dim)')}
              >
                ./{x}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex gap-3 items-center">
          <span
            className="hidden lg:flex items-center gap-1.5 text-xs"
            style={{ color: 'var(--t-dim)' }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: 'var(--t-accent)',
                boxShadow: '0 0 8px var(--t-accent)',
              }}
            />
            open to work
          </span>
          <button
            onClick={onCmd}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded cursor-pointer text-xs"
            style={{
              background: 'var(--t-panel)',
              border: '1px solid var(--t-border)',
              color: 'var(--t-dim)',
              fontFamily: 'inherit',
            }}
          >
            <span>⌘K</span>
          </button>
          <button
            onClick={onTweaks}
            title="Tweaks"
            className="px-2.5 py-1.5 rounded cursor-pointer text-xs"
            style={{
              background: 'var(--t-panel)',
              border: '1px solid var(--t-border)',
              color: 'var(--t-dim)',
              fontFamily: 'inherit',
            }}
          >
            ⚙
          </button>
        </div>
      </div>
    </div>
  );
};
