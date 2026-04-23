import { useState } from 'react';

export const Contact = () => {
  const email = 'shaban.razaa@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-[120px] pb-20"
      style={{
        background: 'var(--t-bg2)',
        borderTop: '1px solid var(--t-border)',
      }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <div className="text-[13px] mb-5" style={{ color: 'var(--t-accent)' }}>
          $ ./get_in_touch.sh --serious
        </div>
        <h2
          className="text-4xl md:text-6xl font-bold m-0 tracking-tight leading-tight"
          style={{ color: 'var(--t-text)' }}
        >
          Got something<br />
          <span style={{ color: 'var(--t-accent)' }}>interesting</span> to build?
        </h2>
        <p
          className="text-[17px] mt-5 max-w-[560px] mx-auto"
          style={{ color: 'var(--t-dim)' }}
        >
          I'm open to senior / staff roles and selective consulting. Short descriptions get short replies. Detailed ones get thoughtful ones.
        </p>
        <div className="flex gap-3 justify-center mt-10 flex-wrap">
          <a
            href={`mailto:${email}`}
            className="px-6 py-3.5 font-semibold no-underline rounded-md text-[15px]"
            style={{
              background: 'var(--t-accent)',
              color: 'var(--t-bg)',
              boxShadow: '0 0 24px color-mix(in srgb, var(--t-accent) 33%, transparent)',
            }}
          >
            {email} →
          </a>
          <button
            onClick={copyEmail}
            className="px-6 py-3.5 rounded-md text-[15px] cursor-pointer"
            style={{
              background: 'transparent',
              color: 'var(--t-text)',
              border: '1px solid var(--t-border)',
              fontFamily: 'inherit',
            }}
          >
            {copied ? '✓ copied' : 'cp email'}
          </button>
          <a
            href="https://cal.com/mohammad-shaban-1dc27o/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 no-underline rounded-md text-[15px]"
            style={{
              background: 'transparent',
              color: 'var(--t-text)',
              border: '1px solid var(--t-border)',
            }}
          >
            schedule call
          </a>
        </div>
        <div
          className="text-xs mt-11 flex gap-5 justify-center flex-wrap"
          style={{ color: 'var(--t-dimmer)' }}
        >
          <span>avg reply: <span style={{ color: 'var(--t-accent)' }}>24h</span></span>
          <span>tz: IST (UTC+5:30)</span>
          <span>won't ghost you</span>
          <span>NDAs welcome</span>
        </div>
      </div>
    </section>
  );
};
