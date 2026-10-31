import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    company: 'Anaplan · via GlobalLogic',
    type: 'Enterprise ML platform',
    title: 'Make complex forecasting workflows feel usable.',
    description:
      'Built React and Redux interfaces for PlanIQ, an enterprise machine-learning forecasting product. Contributed to code-splitting and a reusable, tested component library.',
    technologies: ['React', 'Redux', 'TypeScript', 'Jest'],
  },
  {
    company: 'Mobiloitte',
    type: 'Fintech product suite',
    title: 'Modernize a dashboard without slowing the product down.',
    description:
      'Reworked a legacy dashboard in Next.js and TypeScript, improving the loading experience and establishing reusable UI patterns for continued product work.',
    technologies: ['Next.js', 'TypeScript', 'Performance'],
  },
  {
    company: 'Iris Software',
    type: 'Enterprise B2B',
    title: 'Move a legacy interface forward, one part at a time.',
    description:
      'Helped migrate a jQuery application to React and Redux-Saga incrementally, building shared components while keeping the existing product moving.',
    technologies: ['React', 'Redux-Saga', 'JavaScript'],
  },
];

export const CaseStudies = () => (
  <section id="work" className="section-pad border-y border-line bg-surface">
    <div className="site-container">
      <p className="eyebrow">Selected engineering work</p>
      <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <h2 className="section-title">Thoughtful engineering, in real products.</h2>
        <p className="section-intro lg:mb-1 lg:max-w-[26rem]">
          Product work has taught me to balance the user experience with the systems and constraints behind it.
        </p>
      </div>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {projects.map((project, index) => (
          <article key={project.company} className="grid gap-5 py-7 md:grid-cols-[3.5rem_1fr_1.2fr] md:gap-8 md:py-9">
            <span className="font-display text-xl italic text-accent">0{index + 1}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-faint">{project.type}</p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-ink">{project.company}</h3>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-ink">{project.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technologies.map(technology => (
                  <li key={technology} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/shabanraza"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-accent"
      >
        More public work on GitHub <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);
