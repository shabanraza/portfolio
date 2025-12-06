import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolution = () => {
  const problems = [
    "Fragmented development process",
    "Missed deadlines & ghosting",
    "Unscalable spaghetti code",
    "Poor mobile performance"
  ];

  const solutions = [
    "Unified full-stack architecture",
    "Transparent weekly sprints",
    "Enterprise-grade code quality",
    "Native-feel mobile experiences"
  ];

  return (
    <Section className="bg-transparent">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="heading-lg text-[var(--color-foreground)]">
            Most projects fail due to <span className="text-red-400">execution gap.</span>
          </h2>
          <p className="text-lead">
            You have a vision, but finding a developer who understands both the business goals and the technical implementation is rare. This often leads to...
          </p>
          
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
              >
                <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                <span className="text-[var(--color-muted)]">{problem}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-[100px] opacity-20" />
            
            <div className="relative z-10 pl-8 md:border-l border-[var(--color-border)]">
              <h3 className="heading-md text-[var(--color-foreground)] mb-6">
                I bridge that gap.
              </h3>
              <p className="text-[var(--color-muted)] mb-8">
                My process is designed to eliminate risk and deliver a market-ready product that scales with your business.
              </p>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-[var(--color-foreground)] font-medium">{solution}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-primary font-medium cursor-pointer group">
                <span>See my process</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
