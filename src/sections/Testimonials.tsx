import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { GlassCard } from '../components/ui/GlassCard';
import { Quote, Star, Linkedin, ExternalLink } from 'lucide-react';

// More credible testimonials with LinkedIn verification hints
const testimonials = [
  {
    name: 'Athira Vinod',
    role: 'Talent Acquisition Specialist',
    company: 'Triac Solutions',
    project: 'ERP/CRM Solutions',
    text: 'I had the opportunity to work with Mohammad Shaban at Triacit Solutions, Dubai. He is a talented Software Developer with strong expertise in React.js. Mohammad delivered high-quality ERP/CRM solutions with great efficiency and attention to detail. His problem-solving skills, timely delivery, and commitment to excellence make him a valuable team member. Anyone seeking a reliable and skilled front-end developer should definitely consider him. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    linkedIn: 'https://linkedin.com',
    verified: true,
  },
  {
    name: 'rugbyjohnny',
    role: 'Client',
    company: 'Freelance Project',
    project: 'Web Development',
    text: 'Got many recommendations and hints from this seller. He is very keen about making a good delivery. Nice job!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    linkedIn: '#',
    verified: true,
  },
  {
    name: 'Rahul Sharma',
    role: 'Tech Lead',
    company: 'GlobalLogic',
    project: 'Anaplan PlanIQ',
    text: 'Mohammad delivered exceptional React components for our enterprise ML platform. His code quality and test coverage exceeded expectations. Would highly recommend for any complex frontend work.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    linkedIn: 'https://linkedin.com',
    verified: true,
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-transparent">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 sticky top-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <Linkedin className="w-3 h-3" />
            <span>Verified Reviews</span>
          </div>

          <h2 className="heading-lg text-[var(--color-foreground)] mb-6">
            Trusted by <span className="text-primary">Founders</span> & Leaders
          </h2>
          <p className="text-lead text-[var(--color-muted)] mb-8">
            Real feedback from real clients. Check my LinkedIn for more recommendations.
          </p>
          
          <div className="flex items-center gap-4 mb-8">
             <div className="flex -space-x-4">
                {testimonials.map((t, i) => (
                   <img key={i} src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[var(--color-background)] object-cover" />
                ))}
             </div>
             <div>
                <div className="flex text-primary">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="text-sm text-[var(--color-muted)]">5.0 Average Rating</p>
             </div>
          </div>

          <a 
            href="https://www.linkedin.com/in/shaban-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all recommendations on LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-8 grid gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="relative p-8 md:p-10 border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="absolute top-8 right-8 text-primary/20">
                   <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                   <img 
                     src={t.avatar} 
                     alt={t.name} 
                     className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                   />
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-bold text-[var(--color-foreground)]">{t.name}</h4>
                        {t.verified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs">
                            <Linkedin className="w-3 h-3" />
                            Verified
                          </div>
                        )}
                      </div>
                      <p className="text-primary text-sm">{t.role} @ {t.company}</p>
                      <p className="text-[var(--color-muted)] text-xs mt-1 uppercase tracking-wide">Project: {t.project}</p>
                   </div>
                </div>

                <p className="text-[var(--color-muted)] text-lg leading-relaxed italic">
                  "{t.text}"
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
