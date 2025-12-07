import { useState, useEffect } from 'react';
import { Section } from '../components/ui/Section';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Mail, Calendar, Send, CheckCircle2, Clock } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";
import { sendEmail } from '../utils/email';

import whatsappIcon from '../assets/whatsapp.png';

export const Contact = () => {
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('calendar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"styles":{"branding":{"brandColor":"#f59e0b"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendEmail({ name, email, projectType, message });

    if (!success) {
        // Fallback to mailto if EmailJS fails or isn't configured
        const subject = `Project Inquiry from ${name} - ${projectType}`;
        const body = `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`;
        window.location.href = `mailto:shaban.razaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        alert('Message sent successfully!');
    }

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <Section id="contact" className="bg-transparent py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-xs font-medium text-green-500 uppercase tracking-wide">Accepting New Projects</span>
            </div>

            <h2 className="heading-lg text-[var(--color-foreground)] mb-6">
              Ready to ship your <span className="text-primary">next big idea?</span>
            </h2>
            <p className="text-lead text-[var(--color-muted)] mb-8">
              You are one step away from building something great. Schedule a free discovery call to discuss your project.
            </p>

            <div className="space-y-6 mb-12">
               <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-surface-highlight)] rounded-lg">
                     <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <h4 className="text-[var(--color-foreground)] font-bold">Fast Response Promise</h4>
                     <p className="text-[var(--color-muted)] text-sm">I respond to all inquiries within 24 hours.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-2 bg-[var(--color-surface-highlight)] rounded-lg">
                     <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <h4 className="text-[var(--color-foreground)] font-bold">Free Discovery Call</h4>
                     <p className="text-[var(--color-muted)] text-sm">30-minute session to align on vision.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-4">
               <a 
                  href="https://wa.me/918010474045" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group"
               >
                  {/* WhatsApp Icon */}
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                  <div>
                     <p className="text-[#25D366] font-bold group-hover:text-[var(--color-foreground)] transition-colors">Chat on WhatsApp</p>
                     <p className="text-[var(--color-muted)] text-xs">+91 8010474045</p>
                  </div>
               </a>

               <a 
                  href="mailto:shaban.razaa@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[var(--color-surface-highlight)] border border-[var(--color-border)] rounded-xl hover:bg-[var(--color-surface)] transition-all group"
               >
                  <Mail className="w-6 h-6 text-[var(--color-foreground)]" />
                  <div>
                     <p className="text-[var(--color-foreground)] font-bold">Email Me</p>
                     <p className="text-[var(--color-muted)] text-xs">shaban.razaa@gmail.com</p>
                  </div>
               </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-2 mb-6 flex gap-2">
               <button
                 onClick={() => setActiveTab('calendar')}
                 className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                   activeTab === 'calendar' 
                     ? 'bg-[var(--color-foreground)] text-[var(--color-background)]' 
                     : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-highlight)]'
                 }`}
               >
                 <Calendar className="w-4 h-4" /> Book a Call
               </button>
               <button
                 onClick={() => setActiveTab('form')}
                 className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                   activeTab === 'form' 
                     ? 'bg-[var(--color-foreground)] text-[var(--color-background)]' 
                     : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface-highlight)]'
                 }`}
               >
                 <Mail className="w-4 h-4" /> Send Message
               </button>
            </div>

            <GlassCard className="p-0 overflow-hidden min-h-[500px] bg-[var(--color-surface)]">
              {activeTab === 'calendar' ? (
                <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center p-8 text-center">
                   <div className="max-w-md space-y-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">Schedule a Meeting</h3>
                        <p className="text-[var(--color-muted)]">
                          Select a time that works for you.
                        </p>
                      </div>
                      <Button 
                        data-cal-link="mohammad-shaban-1dc27o/30min" 
                        data-cal-config='{"layout":"month_view"}'
                        size="lg"
                        className="w-full"
                      >
                        Open Calendar
                      </Button>
                      <p className="text-xs text-[var(--color-muted)] mt-4">
                        Having trouble? <a href="https://cal.com/mohammad-shaban-1dc27o/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Book directly on Cal.com</a>
                      </p>
                   </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-foreground)]">Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-foreground)] focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-foreground)]">Email</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-foreground)] focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-foreground)]">Project Type</label>
                    <select 
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-foreground)] focus:border-primary focus:outline-none transition-colors"
                    >
                       <option>Web Development</option>
                       <option>Mobile App</option>
                       <option>MVP Launch</option>
                       <option>AI Integration</option>
                       <option>Consulting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-foreground)]">Message</label>
                    <textarea 
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full bg-[var(--color-background)]/50 border border-[var(--color-border)] rounded-lg px-4 py-3 text-[var(--color-foreground)] focus:border-primary focus:outline-none transition-colors"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  );
};
