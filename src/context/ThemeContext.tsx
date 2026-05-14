import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type TerminalTheme = 'dark' | 'matrix' | 'amber' | 'light';
type FontPair = 'jetbrains' | 'geist' | 'plex';
type HeroVariant = 'split' | 'stacked' | 'minimal';
type Density = 'comfortable' | 'compact';

interface TerminalSettings {
  theme: TerminalTheme;
  font: FontPair;
  heroVariant: HeroVariant;
  density: Density;
}

interface ThemeContextType {
  settings: TerminalSettings;
  updateSetting: <K extends keyof TerminalSettings>(key: K, value: TerminalSettings[K]) => void;
}

const defaults: TerminalSettings = {
  theme: 'dark',
  font: 'jetbrains',
  heroVariant: 'split',
  density: 'comfortable',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<TerminalSettings>(() => {
    try {
      const saved = localStorage.getItem('terminal-settings');
      if (saved) return { ...defaults, ...JSON.parse(saved) };
    } catch { /* ignore */ }
    return defaults;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Theme class
    root.classList.remove('theme-dark', 'theme-matrix', 'theme-amber', 'theme-light');
    root.classList.add(`theme-${settings.theme}`);
    // Font class
    root.classList.remove('font-geist', 'font-plex');
    if (settings.font !== 'jetbrains') {
      root.classList.add(`font-${settings.font}`);
    }
    localStorage.setItem('terminal-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <K extends keyof TerminalSettings>(key: K, value: TerminalSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ThemeContext.Provider value={{ settings, updateSetting }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
