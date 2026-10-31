import { ArrowUpRight, CalendarDays, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="section-pad">
    <div className="site-container">
      <div className="overflow-hidden rounded-[1.75rem] bg-ink px-6 py-10 text-page sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow !text-[#b9d1c0]">Let’s make something useful</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Looking for a product-minded engineer?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-page/75 sm:text-base">
              I’m open to Product Engineer and Full-Stack Engineer roles. If you’re building something that needs a thoughtful, hands-on engineer, I’d like to hear about it.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href="mailto:shaban.razaa@gmail.com?subject=Product%20engineering%20opportunity"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-page px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft"
            >
              <Mail size={17} /> shaban.razaa@gmail.com <ArrowUpRight size={16} />
            </a>
            <a
              href="https://cal.com/mohammad-shaban-1dc27o/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-page/80 transition-colors hover:text-page"
            >
              <CalendarDays size={16} /> Schedule a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-page/20 pt-6">
          <a
            href="https://github.com/shabanraza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-page/80 hover:text-page"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaban-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-page/80 hover:text-page"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
