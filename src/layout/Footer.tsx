import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface GitHubStats {
  repos: number;
  followers: number;
  accountAge: number;
}

const CACHE_KEY = 'gh:shabanraza';
const CACHE_TTL = 1000 * 60 * 60;

const yearsSince = (iso: string) => {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return 0;
  return Math.max(0, Math.floor((Date.now() - then) / (1000 * 60 * 60 * 24 * 365.25)));
};

const loadCached = (): GitHubStats | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { stats: GitHubStats; at: number };
    if (Date.now() - parsed.at > CACHE_TTL) return null;
    return parsed.stats;
  } catch {
    return null;
  }
};

const saveCached = (stats: GitHubStats) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ stats, at: Date.now() }));
  } catch {
    /* quota / incognito — ignore */
  }
};

export const Footer = () => {
  const [stats, setStats] = useState<GitHubStats | null>(() => loadCached());

  useEffect(() => {
    if (stats) return;
    let cancelled = false;
    const controller = new AbortController();
    fetch('https://api.github.com/users/shabanraza', { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`gh ${r.status}`))))
      .then((data) => {
        if (cancelled) return;
        const fresh: GitHubStats = {
          repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          accountAge: yearsSince(data.created_at),
        };
        setStats(fresh);
        saveCached(fresh);
      })
      .catch(() => {
        /* rate-limited or offline — fall back to static */
      });
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [stats]);

  return (
    <footer className="bg-[var(--color-background)] py-20 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-foreground)] mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/shabanraza" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/shaban-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/shaban_dev" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="mailto:shaban.razaa@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full bg-[var(--color-surface-highlight)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-primary hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-12 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 font-mono text-xs">
          <div className="flex items-center gap-2 mb-4 text-[var(--color-muted)] uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span>live — github.com/shabanraza</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <LiveStat label="public repos" value={stats ? String(stats.repos) : null} />
            <LiveStat label="followers" value={stats ? String(stats.followers) : null} />
            <LiveStat
              label="on github"
              value={stats ? `${stats.accountAge}y` : null}
              suffix="building in public"
            />
            <LiveStat label="status" value="open to work" tone="primary" static />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] text-sm text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Mohammad Shaban. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 items-center font-mono text-xs">
            <span className="hidden md:inline">press <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-highlight)] border border-[var(--color-border)]">⌘K</kbd> for terminal</span>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-foreground)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LiveStatProps {
  label: string;
  value: string | null;
  suffix?: string;
  tone?: 'default' | 'primary';
  static?: boolean;
}

const LiveStat = ({ label, value, suffix, tone = 'default', static: isStatic }: LiveStatProps) => (
  <div>
    <p className={`font-display font-bold text-2xl ${tone === 'primary' ? 'text-primary' : 'text-[var(--color-foreground)]'}`}>
      {value ?? (isStatic ? '—' : <span className="inline-block w-12 h-5 rounded bg-[var(--color-surface-highlight)] animate-pulse" />)}
    </p>
    <p className="text-[var(--color-muted)] uppercase tracking-wider mt-1">{label}</p>
    {suffix && <p className="text-[var(--color-muted)]/70 mt-0.5 normal-case">{suffix}</p>}
  </div>
);
