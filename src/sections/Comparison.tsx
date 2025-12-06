import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Check, X, Minus, Crown } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Full-Stack Expertise',
    me: true,
    agency: true,
    freelancer: 'partial',
  },
  {
    feature: 'Direct Communication',
    me: true,
    agency: false,
    freelancer: true,
  },
  {
    feature: 'Enterprise Experience',
    me: true,
    agency: true,
    freelancer: false,
  },
  {
    feature: 'Fixed Pricing (No Surprises)',
    me: true,
    agency: false,
    freelancer: 'partial',
  },
  {
    feature: 'Mobile App Development',
    me: true,
    agency: true,
    freelancer: 'partial',
  },
  {
    feature: 'AI Integration Skills',
    me: true,
    agency: 'partial',
    freelancer: false,
  },
  {
    feature: 'Code Ownership',
    me: true,
    agency: true,
    freelancer: true,
  },
  {
    feature: 'Post-Launch Support',
    me: true,
    agency: true,
    freelancer: 'partial',
  },
  {
    feature: 'Fast Turnaround',
    me: true,
    agency: false,
    freelancer: true,
  },
  {
    feature: 'Affordable Pricing',
    me: true,
    agency: false,
    freelancer: true,
  },
];

const renderValue = (value: boolean | string) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-emerald-400" />;
  } else if (value === false) {
    return <X className="w-5 h-5 text-red-400" />;
  } else {
    return <Minus className="w-5 h-5 text-yellow-400" />;
  }
};

export const Comparison = () => {
  return (
    <Section className="bg-transparent">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg text-[var(--color-foreground)] mb-4"
        >
          Why Choose <span className="text-primary">Me</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto"
        >
          Get the best of both worlds: agency-level expertise with freelancer agility and pricing.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left py-4 px-4 text-[var(--color-muted)] font-medium">Feature</th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1 text-primary font-bold">
                    <Crown className="w-4 h-4" />
                    Me
                  </div>
                  <span className="text-xs text-[var(--color-muted)]">Best Value</span>
                </div>
              </th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-2">
                  <span className="text-[var(--color-muted)] font-medium">Agency</span>
                  <span className="text-xs text-[var(--color-muted)]">$50k+</span>
                </div>
              </th>
              <th className="py-4 px-4 text-center">
                <div className="inline-flex flex-col items-center gap-2">
                  <span className="text-[var(--color-muted)] font-medium">Freelancer</span>
                  <span className="text-xs text-[var(--color-muted)]">Hit or Miss</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-highlight)] transition-colors"
              >
                <td className="py-4 px-4 text-[var(--color-muted)]">{row.feature}</td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">{renderValue(row.me)}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">{renderValue(row.agency)}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">{renderValue(row.freelancer)}</div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center"
      >
        <p className="text-[var(--color-muted)] text-lg">
          <span className="text-primary font-bold">Bottom line:</span> You get senior-level expertise, direct communication, 
          and agency-quality output at a fraction of the cost.
        </p>
      </motion.div>
    </Section>
  );
};
