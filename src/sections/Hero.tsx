import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { settings } = useTheme();
  const variant = settings.heroVariant;

  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState(0);

  const commands = useMemo(() => [
    { cmd: 'whoami', out: 'Mohammad Shaban — Senior Full-Stack / AI Engineer · SaaS Builder' },
    { cmd: 'cat ./bio.txt', out: 'By day I engineer for clients; by night I ship my own SaaS products. A decade of turning ideas into production code across React, Node, and mobile.' },
    { cmd: 'ls ./shipped/', out: 'product-one/  product-two/  product-three/  +more' },
    { cmd: 'git log --stat --since="10.years.ago"', out: '2,800+ commits this year alone\n400+ PRs reviewed · 60+ repos maintained' },
    { cmd: './status.sh', out: '→ open to senior / staff engineering roles' },
  ], []);

  useEffect(() => {
    if (phase >= commands.length) return;
    const cmd = commands[phase].cmd;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(cmd.slice(0, i));
      if (i >= cmd.length) {
        clearInterval(id);
        setTimeout(() => { setPhase(p => p + 1); setTyped(''); }, 900);
      }
    }, 40);
    return () => clearInterval(id);
  }, [phase, commands]);

  const terminal = (
    <div
      className="rounded-xl overflow-hidden self-start"
      style={{
        background: 'var(--t-bg2)',
        border: '1px solid var(--t-border)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
      }}
    >
      <div
        className="flex items-center gap-[7px] px-3.5 py-2"
        style={{ background: 'var(--t-panel)', borderBottom: '1px solid var(--t-border)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-3 text-xs" style={{ color: 'var(--t-dim)' }}>shaban@dev — zsh — 90x32</span>
      </div>
      <div className="p-5 text-[13px] leading-7 min-h-[420px]">
        {commands.slice(0, phase).map((c, i) => (
          <div key={i} className="mb-3.5">
            <div>
              <span style={{ color: 'var(--t-accent)' }}>➜</span>{' '}
              <span style={{ color: 'var(--t-blue)' }}>~</span> {c.cmd}
            </div>
            <div className="pl-4 whitespace-pre-wrap" style={{ color: 'var(--t-dim)' }}>{c.out}</div>
          </div>
        ))}
        {phase < commands.length ? (
          <div>
            <span style={{ color: 'var(--t-accent)' }}>➜</span>{' '}
            <span style={{ color: 'var(--t-blue)' }}>~</span> {typed}
            <span style={{ color: 'var(--t-accent)', animation: 'termblink 1s steps(2) infinite' }}>▊</span>
          </div>
        ) : (
          <div>
            <span style={{ color: 'var(--t-accent)' }}>➜</span>{' '}
            <span style={{ color: 'var(--t-blue)' }}>~</span>{' '}
            <span style={{ color: 'var(--t-accent)', animation: 'termblink 1s steps(2) infinite' }}>▊</span>
          </div>
        )}
      </div>
    </div>
  );

  const heroText = (
    <div>
      <div className="flex items-center gap-2.5 mb-5 text-[13px]" style={{ color: 'var(--t-dim)' }}>
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: 'var(--t-accent)', boxShadow: '0 0 10px var(--t-accent)' }}
        />
        open to work · Noida, IN
      </div>
      <h1
        className="font-bold leading-none m-0"
        style={{
          fontSize: variant === 'stacked' ? 96 : 72,
          letterSpacing: -2.5,
          fontFamily: 'var(--t-mono)',
        }}
      >
        <span style={{ color: 'var(--t-dim)' }}>$ </span>
        Mohammad Shaban
        <span style={{ color: 'var(--t-accent)' }}>.</span>
      </h1>
      <div className="text-[22px] mt-4 leading-relaxed" style={{ color: 'var(--t-dim)' }}>
        Senior Full-Stack{' '}
        <span style={{ color: 'var(--t-dimmer)' }}>/</span>{' '}
        <span style={{ color: 'var(--t-blue)' }}>AI Engineer</span>{' '}
        <span style={{ color: 'var(--t-dimmer)' }}>//</span>{' '}
        <span style={{ color: 'var(--t-amber)' }}>SaaS Builder</span>
      </div>
      <p className="mt-8 text-base leading-7 max-w-[560px]" style={{ color: 'var(--t-text)' }}>
        10 years of building scalable software. By day I engineer for clients; by night I ship my
        own products. React, Node, mobile — still in love with it.
      </p>
      <div className="mt-9 flex gap-3 flex-wrap">
        <a
          href="#contact"
          className="px-5 py-3 font-semibold no-underline rounded-md text-sm inline-flex items-center gap-2"
          style={{
            background: 'var(--t-accent)',
            color: 'var(--t-bg)',
            boxShadow: '0 0 20px color-mix(in srgb, var(--t-accent) 27%, transparent)',
          }}
        >
          ./hire_me.sh <span>→</span>
        </a>
        <a
          href="#saas"
          className="px-5 py-3 no-underline rounded-md text-sm"
          style={{
            background: 'transparent',
            color: 'var(--t-text)',
            border: '1px solid var(--t-border)',
          }}
        >
          see products
        </a>
        <button
          onClick={() => navigator.clipboard?.writeText('shaban.razaa@gmail.com')}
          className="px-5 py-3 rounded-md text-sm cursor-pointer"
          style={{
            background: 'transparent',
            color: 'var(--t-dim)',
            border: '1px dashed var(--t-border)',
            fontFamily: 'inherit',
          }}
        >
          cp shaban.razaa@gmail.com
        </button>
      </div>
      <div className="flex gap-6 mt-8 text-xs" style={{ color: 'var(--t-dimmer)' }}>
        <span>↑ scroll</span>
        <span>⌘K for commands</span>
        <span>↑↑↓↓←→←→BA for a surprise</span>
      </div>
    </div>
  );

  if (variant === 'stacked') {
    return (
      <section className="px-6 md:px-10 pt-20 pb-10 max-w-[1200px] mx-auto">
        {heroText}
        <div className="mt-14">{terminal}</div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return (
      <section className="px-6 md:px-10 pt-20 pb-10 max-w-[1200px] mx-auto">
        {heroText}
      </section>
    );
  }

  // default: split
  return (
    <section className="px-6 md:px-10 pt-20 pb-10 relative">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
        {heroText}
        {terminal}
      </div>
    </section>
  );
};
