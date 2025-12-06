import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Work', to: 'projects' },
  { name: 'Process', to: 'process' },
  { name: 'Services', to: 'services' },
  { name: 'About', to: 'about' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer z-50"
          >
            <span className="font-display font-bold text-2xl text-[var(--color-foreground)] tracking-tight transition-colors">
              SHABAN<span className="text-primary">.DEV</span>
            </span>
          </Link>

          {/* Availability Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-500 uppercase tracking-wide">Available for Projects</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-primary"
              className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-foreground)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Link to="contact" smooth={true} duration={500}>
            <Button size="sm" variant="primary">
              Book a Call
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle & Menu Button */}
        <div className="flex items-center gap-4 md:hidden z-50">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-foreground)]"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-foreground)]"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[var(--color-background)] z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-[var(--color-foreground)] hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                <Button size="lg">Let's Talk</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
