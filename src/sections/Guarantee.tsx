import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Shield, RefreshCw, Clock, CheckCircle2 } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: '100% Satisfaction Guarantee',
    description: 'Not happy with the first milestone? Get a full refund. No questions asked.',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'I iterate until you are 100% satisfied with the design and functionality.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Miss the deadline? You get 10% off for every week of delay. I never miss.',
  },
  {
    icon: CheckCircle2,
    title: '30-Day Bug-Free Warranty',
    description: 'Any bugs discovered post-launch are fixed for free within 30 days.',
  },
];

export const Guarantee = () => {
  return (
    <Section className="bg-gradient-to-b from-transparent to-emerald-500/5 border-y border-emerald-500/10">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
        >
          <Shield className="w-4 h-4" />
          <span>Zero Risk</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg text-[var(--color-foreground)] mb-4"
        >
          My <span className="text-emerald-400">Iron-Clad</span> Guarantee
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto"
        >
          I take all the risk so you don't have to. If I don't deliver, you don't pay.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((guarantee, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <guarantee.icon className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-[var(--color-foreground)] font-bold text-lg mb-2">{guarantee.title}</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">{guarantee.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
