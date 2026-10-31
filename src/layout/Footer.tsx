import { ArrowUp } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-line py-6">
    <div className="site-container flex flex-col items-start justify-between gap-4 text-xs text-muted sm:flex-row sm:items-center">
      <p className="m-0">© {new Date().getFullYear()} Mohammad Shaban. Built with care.</p>
      <a href="#top" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent">
        Back to top <ArrowUp size={14} />
      </a>
    </div>
  </footer>
);
