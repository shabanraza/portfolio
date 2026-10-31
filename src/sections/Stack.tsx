const skillGroups = [
  {
    title: 'Product interfaces',
    detail: 'Build clear, responsive experiences that make complex workflows easier to use.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Applications & data',
    detail: 'Connect frontends to dependable APIs, business logic, and persistent data.',
    skills: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Shipping & quality',
    detail: 'Keep delivery practical with tests, maintainable systems, and modern deployment tools.',
    skills: ['Jest', 'Storybook', 'Docker', 'AWS', 'Cloudflare', 'Vercel', 'Supabase'],
  },
];

export const Stack = () => (
  <section id="expertise" className="section-pad border-y border-line bg-surface">
    <div className="site-container">
      <p className="eyebrow">How I build</p>
      <h2 className="section-title mt-4">Broad enough to own the whole slice.</h2>
      <p className="section-intro">
        I choose tools to fit the product and team, and stay hands-on from the interface down to the data and delivery.
      </p>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {skillGroups.map(group => (
          <article key={group.title} className="rounded-2xl border border-line bg-page p-5 sm:p-6">
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{group.detail}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
              {group.skills.map(skill => (
                <li key={skill} className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
