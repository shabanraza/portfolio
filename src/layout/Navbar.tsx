import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Selected work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-page/90 backdrop-blur-md">
      <div className="site-container flex h-[76px] items-center justify-between gap-5">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Mohammad Shaban, home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-lg text-page">MS</span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">Mohammad Shaban</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/shabanraza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaban-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="button-link button-primary min-h-0 px-4 py-2 text-xs">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${menuOpen ? 'block' : 'hidden'} border-t border-line bg-page px-4 py-4 md:hidden`}
        aria-label="Mobile navigation"
      >
        <div className="site-container flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-3 text-sm font-semibold text-page"
          >
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
};
