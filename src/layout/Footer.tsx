export const Footer = () => {
  const links = {
    github: 'https://github.com/shabanraza',
    linkedin: 'https://www.linkedin.com/in/shaban-dev/',
    twitter: 'https://x.com/shaban_dev',
    email: 'mailto:shaban.razaa@gmail.com',
  };

  return (
    <footer
      className="px-6 md:px-10 pt-10 pb-10"
      style={{
        borderTop: '1px solid var(--t-border)',
        background: 'var(--t-bg)',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center text-xs gap-4" style={{ color: 'var(--t-dim)' }}>
        <div>
          © {new Date().getFullYear()} Mohammad Shaban · built with code &amp; caffeine · last deploy{' '}
          <span style={{ color: 'var(--t-accent)' }}>
            ●{' '}
            {new Date().toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
        <div className="flex gap-4">
          {Object.entries(links).map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors duration-150"
              style={{ color: 'var(--t-dim)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--t-dim)')}
            >
              {name}↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
