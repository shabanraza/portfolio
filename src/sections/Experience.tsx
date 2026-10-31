const experience = [
  {
    period: 'Oct 2023 — Present',
    role: 'Senior Software Engineer',
    company: 'GlobalLogic',
    detail: 'Built reusable React components and frontend architecture for Anaplan; reduced load times by 30% through code-splitting and delivered 90%+ test coverage.',
  },
  {
    period: 'Sep 2021 — Oct 2023',
    role: 'Senior Software Engineer',
    company: 'Iris Software',
    detail: 'Modernized legacy systems with React, used Storybook to improve component reuse and developer productivity by 25%, and mentored a team of five.',
  },
  {
    period: 'Sep 2017 — Sep 2021',
    role: 'Senior Software Developer',
    company: 'HCL',
    detail: 'Built and maintained React, Redux, and Node.js applications; browser-based debugging reduced reported defects by 20%.',
  },
  {
    period: 'Mar 2016 — Jul 2017',
    role: 'Software Developer',
    company: 'Mobiloitte Technology',
    detail: 'Built cross-platform applications with AngularJS and Cordova, working directly with clients on requirements.',
  },
  {
    period: 'Jan 2015 — Jan 2016',
    role: 'Software Developer',
    company: 'Softsol Consulting',
    detail: 'Developed UI features with native JavaScript design patterns and improved internal tools.',
  },
];

export const Experience = () => (
  <section id="experience" className="section-pad">
    <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="eyebrow">A little context</p>
        <h2 className="section-title mt-4">A decade of learning by building.</h2>
        <p className="section-intro">
          My path has moved from enterprise teams to independent products—with a consistent focus on making software useful, clear, and dependable.
        </p>
      </div>
      <ol className="divide-y divide-line border-y border-line">
        {experience.map(item => (
          <li key={`${item.company}-${item.period}`} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-5">
            <span className="pt-1 text-xs font-semibold uppercase tracking-[0.08em] text-faint">{item.period}</span>
            <div>
              <h3 className="text-sm font-semibold text-ink">
                {item.role} <span className="font-normal text-muted">· {item.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
