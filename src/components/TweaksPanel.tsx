import { useTheme } from '../context/ThemeContext';

interface TweaksPanelProps {
  onClose: () => void;
}

export const TweaksPanel = ({ onClose }: TweaksPanelProps) => {
  const { settings, updateSetting } = useTheme();

  return (
    <div
      className="fixed bottom-9 right-5 w-80 z-[300] rounded-xl overflow-hidden text-xs"
      style={{
        background: 'var(--t-bg2)',
        color: 'var(--t-text)',
        border: '1px solid var(--t-border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        fontFamily: 'var(--t-mono)',
      }}
    >
      <div
        className="flex justify-between items-center px-4 py-3.5"
        style={{ borderBottom: '1px solid var(--t-border)' }}
      >
        <div
          className="font-semibold uppercase tracking-[1.5px] text-[11px]"
          style={{ color: 'var(--t-dim)' }}
        >
          Tweaks
        </div>
        <button
          onClick={onClose}
          className="bg-transparent border-none cursor-pointer text-base"
          style={{ color: 'var(--t-dim)' }}
        >
          ×
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <TweakRow label="Theme">
          <Segmented
            value={settings.theme}
            options={['dark', 'matrix', 'amber']}
            onChange={v => updateSetting('theme', v as 'dark' | 'matrix' | 'amber')}
          />
        </TweakRow>
        <TweakRow label="Mono font">
          <Segmented
            value={settings.font}
            options={['jetbrains', 'geist', 'plex']}
            onChange={v => updateSetting('font', v as 'jetbrains' | 'geist' | 'plex')}
          />
        </TweakRow>
        <TweakRow label="Hero variant">
          <Segmented
            value={settings.heroVariant}
            options={['split', 'stacked', 'minimal']}
            onChange={v => updateSetting('heroVariant', v as 'split' | 'stacked' | 'minimal')}
          />
        </TweakRow>
        <TweakRow label="Density">
          <Segmented
            value={settings.density}
            options={['comfortable', 'compact']}
            onChange={v => updateSetting('density', v as 'comfortable' | 'compact')}
          />
        </TweakRow>
        <div
          className="text-[10px] leading-relaxed pt-2"
          style={{ color: 'var(--t-dimmer)', borderTop: '1px dashed var(--t-border)' }}
        >
          Tip: press{' '}
          <kbd className="px-1 py-0.5 rounded text-[10px]" style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)' }}>⌘K</kbd>{' '}
          for commands, try{' '}
          <kbd className="px-1 py-0.5 rounded text-[10px]" style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)' }}>↑↑↓↓←→←→BA</kbd>{' '}
          for a surprise.
        </div>
      </div>
    </div>
  );
};

const TweakRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <div
      className="text-[10px] uppercase tracking-[1.5px] mb-2"
      style={{ color: 'var(--t-dim)' }}
    >
      {label}
    </div>
    {children}
  </div>
);

interface SegmentedProps {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}

const Segmented = ({ value, options, onChange }: SegmentedProps) => (
  <div
    className="flex rounded-md p-0.5 gap-0.5"
    style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)' }}
  >
    {options.map(o => (
      <button
        key={o}
        onClick={() => onChange(o)}
        className="flex-1 py-1.5 px-2 border-none rounded cursor-pointer capitalize text-[11px]"
        style={{
          background: value === o ? 'var(--t-panel)' : 'transparent',
          color: value === o ? 'var(--t-text)' : 'var(--t-dim)',
          fontFamily: 'inherit',
        }}
      >
        {o}
      </button>
    ))}
  </div>
);
