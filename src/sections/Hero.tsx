import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="top" className="section-pad overflow-hidden pt-12 md:pt-16">
      <div className="site-container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative z-10 min-w-0">
          <p className="eyebrow">Product engineer · Full-stack builder</p>
          <h1 className="display-heading mt-6 max-w-3xl text-[clamp(3.35rem,8vw,6.6rem)] leading-[0.98] text-ink">
            I build useful products
            <span className="mt-2 block italic text-accent">and the software behind them.</span>
          </h1>
          <p className="mt-7 max-w-[39rem] text-base leading-8 text-muted md:text-lg">
            I’m Mohammad Shaban — a product-minded engineer who takes ideas from the first user problem
            through thoughtful design, full-stack implementation, and production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="button-link button-primary">
              Explore selected work <ArrowDownRight size={17} />
            </a>
            <a href="#contact" className="button-link button-secondary">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <a
              href="https://github.com/shabanraza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shaban-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <span className="text-faint">Based in Noida, India · Open to product engineering roles</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[28rem] lg:ml-auto">
          <div className="absolute inset-5 rotate-3 rounded-[2rem] bg-accent-soft" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface">
            <img
              src="/me.png"
              alt="Portrait of Mohammad Shaban"
              className="aspect-square w-full object-contain object-bottom"
              fetchPriority="high"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-surface/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                <span className="h-2 w-2 rounded-full bg-accent" />
                In the build loop
              </div>
              <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
                Problem → product → production.
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Comfortable owning the details all the way through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
