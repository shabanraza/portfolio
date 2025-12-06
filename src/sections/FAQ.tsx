import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on complexity. A simple MVP can be shipped in 4-6 weeks, while a full-scale platform typically takes 3-4 months. I provide a detailed timeline during our discovery call."
  },
  {
    question: "What is your tech stack?",
    answer: "I specialize in the React ecosystem. For web, I use React/Next.js with TypeScript. For mobile, I use React Native. On the backend, I typically use Node.js or serverless solutions like Supabase/Firebase for speed and scalability."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Absolutely. I offer 2 weeks of free bug-fixing support after launch. For ongoing maintenance, updates, and new features, I have flexible retainer packages."
  },
  {
    question: "How do we communicate during the project?",
    answer: "I believe in radical transparency. We'll have a shared Slack channel for daily updates, and weekly video calls to demo progress. You'll never have to wonder where the project stands."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-transparent">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="heading-lg text-[var(--color-foreground)] mb-4">
            Common <span className="text-[var(--color-muted)]">Questions</span>
          </h2>
          <p className="text-lead text-[var(--color-muted)]">
            Everything you need to know about working with me. Can't find the answer you're looking for?
          </p>
          <a href="#contact" className="text-primary font-bold mt-4 inline-block hover:underline">
            Ask me directly &rarr;
          </a>
        </div>

        <div className="md:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-[var(--color-border)] last:border-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-medium transition-colors ${openIndex === index ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-black' : 'bg-[var(--color-surface-highlight)] text-[var(--color-foreground)] group-hover:bg-[var(--color-surface)]'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[var(--color-muted)] leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
