import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Github, Linkedin, Cpu } from 'lucide-react';

// Official tech icons from devicon CDN
const skills = {
  Frontend: [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  ],
  Mobile: [
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  ],
  Testing: [
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
  ],
  Tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    { name: 'Storybook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
  ]
};

export const About = () => {
  return (
    <Section id="about" className="bg-transparent border-t border-[var(--color-border)]">
      <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">
        <div className="relative md:sticky md:top-24">
           <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-surface-highlight)] relative z-10 flex flex-col items-center justify-center border border-[var(--color-border)] group hover:border-primary/50 transition-colors duration-300">
              <img 
                src="/profile.JPG" 
                alt="Mohammad Shaban" 
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20">
                 <p className="text-white font-bold text-xl mb-1">Mohammad Shaban</p>
                 <p className="text-primary font-mono text-xs uppercase tracking-wide">Senior Developer</p>
              </div>
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
           <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
        </div>

        <div className="pt-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-mono text-sm tracking-wider uppercase block mb-4"
          >
            About Me
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-md text-[var(--color-foreground)] mb-6"
          >
            10+ Years of Building <br />
            <span className="text-[var(--color-muted)]">Scalable Software.</span>
          </motion.h2>

          <div className="space-y-6 text-[var(--color-muted)] text-lg leading-relaxed mb-8">
            <p>
              I am a Senior Software Developer with over a decade of experience building high-performance web and mobile applications. I specialize in React.js, Node.js, and scalable frontend architectures.
            </p>
            <p>
              My background includes delivering enterprise-grade solutions for global companies like GlobalLogic and Iris Software. I focus on performance optimization, code reusability, and delivering clean, testable code.
            </p>
          </div>

          {/* AI Badge */}
          <div className="mb-10 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-start gap-3">
             <Cpu className="w-6 h-6 text-purple-400 mt-1" />
             <div>
                <h4 className="text-[var(--color-foreground)] font-bold text-sm uppercase tracking-wide mb-1">AI-Assisted Development</h4>
                <p className="text-[var(--color-muted)] text-sm">Proficient with Cursor, Claude Code, Windsurf, and GitHub Co-pilot to accelerate delivery speed by 40%.</p>
             </div>
          </div>

          <div className="flex gap-4 mb-10">
            <a href="https://github.com/shabanraza" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-surface-highlight)] text-[var(--color-foreground)] hover:bg-[var(--color-surface)] hover:scale-110 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shaban-dev/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-surface-highlight)] text-[var(--color-foreground)] hover:bg-[var(--color-surface)] hover:scale-110 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/shaban_dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[var(--color-surface-highlight)] text-[var(--color-foreground)] hover:bg-[var(--color-surface)] hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8">
             <h3 className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-wider mb-6">Tech Arsenal</h3>
             <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                     <span className="text-xs text-[var(--color-muted)] uppercase tracking-wide mb-3 block">{category}</span>
                     <div className="flex flex-wrap gap-2">
                        {items.map((tech) => (
                           <span key={tech.name} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface-highlight)] text-[var(--color-muted)] text-sm rounded border border-[var(--color-border)] hover:border-primary/30 hover:text-[var(--color-foreground)] transition-all">
                              <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                              {tech.name}
                           </span>
                        ))}
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
