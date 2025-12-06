import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-background)] py-20 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl text-[var(--color-foreground)] mb-6">
              SHABAN<span className="text-primary">.DEV</span>
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed max-w-sm">
              Helping startups and visionary companies ship high-quality digital products. Based in Noida, working globally.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-foreground)] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[var(--color-muted)]">
              <li><a href="#projects" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-foreground)] mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/shabanraza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/shaban-dev/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:shaban.razaa@gmail.com" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] text-sm text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Mohammad Shaban. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
