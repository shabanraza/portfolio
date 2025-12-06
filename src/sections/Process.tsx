import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Compass, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a solid roadmap.',
    icon: <Compass className="w-6 h-6 text-[var(--color-background)]" />,
    duration: 'Week 1'
  },
  {
    id: 2,
    title: 'Design',
    description: 'I create high-fidelity interactive prototypes. You see exactly what we are building before a single line of code is written.',
    icon: <PenTool className="w-6 h-6 text-[var(--color-background)]" />,
    duration: 'Week 2'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Agile sprints with weekly demos. You get a staging link to track progress and provide feedback in real-time.',
    icon: <Code2 className="w-6 h-6 text-[var(--color-background)]" />,
    duration: 'Weeks 3-6'
  },
  {
    id: 4,
    title: 'Launch',
    description: 'Rigorous testing, deployment to production, and post-launch support to ensure everything runs smoothly.',
    icon: <Rocket className="w-6 h-6 text-[var(--color-background)]" />,
    duration: 'Week 7'
  }
];

export const Process = () => {
  return (
    <Section className="bg-transparent border-y border-[var(--color-border)]">
      <div className="text-center mb-20">
        <h2 className="heading-lg text-[var(--color-foreground)] mb-6">
          From <span className="text-primary">Chaos</span> to Clarity
        </h2>
        <p className="text-lead max-w-2xl mx-auto text-[var(--color-muted)]">
          A transparent, battle-tested process designed to minimize risk and maximize speed. No black boxes, just results.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-12 left-0 w-full h-0.5 bg-[var(--color-border)] hidden md:block"></div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Icon Circle */}
              <div className="relative z-10 w-24 h-24 mx-auto bg-[var(--color-background)] rounded-full border-4 border-[var(--color-background)] flex items-center justify-center mb-8 group cursor-pointer">
                 <div className="w-20 h-20 rounded-full bg-[var(--color-foreground)] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    {step.icon}
                 </div>
                 <div className="absolute -top-2 right-0 bg-[var(--color-surface-highlight)] text-[var(--color-muted)] text-xs px-2 py-1 rounded-full border border-[var(--color-border)]">
                    {step.duration}
                 </div>
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-3">{step.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
