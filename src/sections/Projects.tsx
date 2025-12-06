import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Anaplan PlanIQ',
    category: 'Enterprise ML Platform',
    challenge: 'GlobalLogic client (Anaplan) needed an intuitive, no-code ML forecasting interface for enterprise business users that could handle complex data models.',
    solution: 'Developed React-based UI components for the PlanIQ forecasting dashboard. Implemented code-splitting reducing load time by 30%. Built reusable component library with 90%+ test coverage using Jest & Enzyme.',
    results: [
      'Used by JLR & South Central Ambulance',
      '30% Faster Load Time',
      '90%+ Test Coverage'
    ],
    tech: ['React.js', 'Redux', 'TypeScript', 'Jest', 'Enzyme'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 2,
    title: 'Enterprise Dashboard',
    category: 'B2B Web Application',
    challenge: 'Iris Software needed to modernize a legacy system with a scalable frontend architecture that could support multiple cross-functional teams.',
    solution: 'Led frontend migration to React with Redux state management. Designed component architecture serving cross-functional teams and improving development velocity.',
    results: [
      'Modernized Legacy System',
      'Improved Dev Efficiency',
      'Scalable Architecture'
    ],
    tech: ['React.js', 'Redux-Saga', 'Node.js', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    color: 'from-emerald-500 to-teal-700'
  },
  {
    id: 3,
    title: 'FinanceFlow Mobile App',
    category: 'Mobile Application',
    challenge: 'A FinTech startup needed a high-performance mobile app to handle real-time stock tracking and portfolio management with zero latency.',
    solution: 'Built a React Native application with optimized native modules for charts. Implemented WebSocket connections for live data and offline-first architecture.',
    results: [
      '4.8/5 App Store Rating',
      '50k+ Active Users',
      '<100ms Data Latency'
    ],
    tech: ['React Native', 'Redux', 'Node.js', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    color: 'from-orange-400 to-red-600'
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="bg-transparent">
      <div className="mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-mono text-sm tracking-wider uppercase block mb-4"
        >
          Selected Work
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="heading-lg text-[var(--color-foreground)] max-w-3xl"
        >
          Proven results across <span className="text-[var(--color-muted)]">enterprises & startups.</span>
        </motion.h2>
      </div>

      <div className="space-y-32">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-1 bg-gradient-to-r ${study.color}`}></div>
                  <span className="text-[var(--color-muted)] font-mono text-sm uppercase tracking-wider">{study.category}</span>
                </div>
                
                <h3 className="heading-md text-[var(--color-foreground)] mb-6">{study.title}</h3>
                
                <div className="space-y-8 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-[var(--color-muted)] leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="border-l-2 border-[var(--color-border)] pl-6 mb-8">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Key Outcomes</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-[var(--color-foreground)] font-medium flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.color}`} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[var(--color-surface-highlight)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-muted)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-surface-highlight)]">
                    View Live <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-surface-highlight)] border border-[var(--color-border)] group-hover:border-primary/30 transition-colors duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-10 mix-blend-overlay z-10`}></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay UI Mockup Elements */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <div className="flex items-center justify-between">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <Button size="lg">
          View All Projects <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </Section>
  );
};
