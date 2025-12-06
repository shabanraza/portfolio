import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { FileText, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { sendLeadMagnet } from '../utils/email';

export const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Attempt to send email
    const success = await sendLeadMagnet(email);
    
    // Whether email succeeds or fails, we give them value.
    setIsSubmitted(true);
    setIsLoading(false);

    if (!success) {
        // If email failed (e.g. ad blocker), open directly as fallback
        window.open('/mvp-checklist.html', '_blank');
    }
  };

  const benefits = [
    '7-step validation framework used by YC startups',
    'Tech stack decision matrix',
    'Budget estimation template',
    'Timeline planning worksheet',
    'Common mistakes to avoid',
  ];

  return (
    <Section className="bg-gradient-to-b from-transparent to-primary/5 border-y border-primary/10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Free Resource</span>
          </div>

          <h2 className="heading-lg text-[var(--color-foreground)] mb-4">
            Not ready to start yet? <br />
            <span className="text-primary">Download the MVP Checklist</span>
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-8">
            The same checklist I use with $1M+ startups to validate ideas before writing a single line of code. 
            Avoid the #1 mistake that kills 90% of apps.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-[var(--color-muted)]"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative card */}
          <div className="absolute -top-4 -left-4 w-full h-full bg-primary/5 rounded-2xl border border-primary/10 -z-10" />
          
          <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[var(--color-foreground)] font-bold text-xl">MVP Launch Checklist</h3>
                    <p className="text-[var(--color-muted)] text-sm">PDF Guide • 12 Pages</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface-highlight)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full group" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Get Free Checklist'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-[var(--color-muted)] text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-[var(--color-foreground)] font-bold text-xl mb-2">Check Your Email!</h3>
                <p className="text-[var(--color-muted)] mb-6">
                  The MVP Checklist has been sent to <strong>{email}</strong>.
                </p>
                <Button variant="outline" onClick={() => window.open('/mvp-checklist.html', '_blank')}>
                    Open it now
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
