import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Layout, Rocket, Smartphone, Globe, Database, Plus } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Link } from 'react-scroll';

const webPackages = [
  {
    title: 'Landing Page',
    price: '$500',
    features: ['Single Page Design', 'Responsive Mobile Layout', 'Contact Form Integration', 'Basic SEO Setup', 'Fast Loading Speed'],
    icon: <Globe className="w-6 h-6 text-primary" />,
    addOns: [
      { name: 'AI Content Gen', price: '+$1,000' }
    ]
  },
  {
    title: 'Business Website',
    price: '$1,500',
    features: ['5-7 Custom Pages', 'CMS Integration', 'Advanced SEO', 'Blog Functionality', 'Social Media Integration'],
    icon: <Layout className="w-6 h-6 text-primary" />,
    recommended: true,
    addOns: [
      { name: 'AI Chatbot', price: '+$1,500' },
      { name: 'AI Content Gen', price: '+$1,000' }
    ]
  },
  {
    title: 'Custom Web App',
    price: '$3,000+',
    features: ['Custom Functionality', 'Database Integration', 'User Authentication', 'API Development', 'Admin Dashboard (+$1,500)'],
    icon: <Database className="w-6 h-6 text-primary" />,
    addOns: [
      { name: 'AI Chatbot Integration', price: '+$1,500' },
      { name: 'AI Search (RAG)', price: '+$2,500' },
      { name: 'AI Content Gen', price: '+$1,000' }
    ]
  }
];

const mobilePackages = [
  {
    title: 'Simple App',
    price: '$3,000',
    features: ['Single Platform (iOS/Android)', '5-8 Screens', 'Basic Functionality', 'App Store Submission', 'Standard UI/UX'],
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    addOns: [
      { name: 'AI Content Gen', price: '+$1,000' }
    ]
  },
  {
    title: 'Cross-Platform',
    price: '$5,000',
    features: ['iOS + Android (React Native)', 'Up to 12 Screens', 'Custom Animations', 'Push Notifications', 'API Integration'],
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    recommended: true,
    addOns: [
      { name: 'AI Chatbot', price: '+$1,500' },
      { name: 'AI Content Gen', price: '+$1,000' }
    ]
  },
  {
    title: 'Full App + Backend',
    price: '$8,000+',
    features: ['Complete Solution', 'Custom Backend API', 'Real-time Database', 'Advanced Auth & Security', 'Admin Panel (+$2,000)'],
    icon: <Rocket className="w-6 h-6 text-primary" />,
    addOns: [
      { name: 'AI Chatbot Integration', price: '+$1,500' },
      { name: 'AI Automation', price: '+$2,000' }
    ]
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  return (
    <Section id="services" className="bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-[var(--color-foreground)] mb-6">
            Clear, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto text-[var(--color-muted)] mb-8">
            Choose the package that fits your needs. No hidden fees, just high-quality code delivered on time.
          </p>

          {/* Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-[var(--color-surface-highlight)] border border-[var(--color-border)]">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'web' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]'
              }`}
            >
              <Globe className="w-4 h-4" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'mobile' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8 items-start"
            >
              {(activeTab === 'web' ? webPackages : mobilePackages).map((pkg, index) => (
                <ServiceCard key={index} pkg={pkg} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-16 flex justify-center flex-col items-center">
           <p className="text-[var(--color-muted)] mb-4">Need a custom solution or MVP?</p>
           <Link to="contact" smooth={true} duration={500} className="inline-block">
             <Button variant="outline" className="w-auto px-8">Book a Free Strategy Call</Button>
           </Link>
        </div>
      </div>
    </Section>
  );
};

const ServiceCard = ({ pkg }: { pkg: any }) => (
  <GlassCard 
    className={`h-full flex flex-col relative ${
      pkg.recommended 
        ? 'border-primary bg-primary/5 ring-1 ring-primary/20' 
        : 'border-[var(--color-border)] hover:border-primary/30'
    }`}
  >
    {pkg.recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary/20">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-[var(--color-surface-highlight)]`}>
        {pkg.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--color-foreground)]">{pkg.title}</h3>
      <div className="text-3xl font-bold text-primary mb-3 font-display">{pkg.price}</div>
    </div>
    
    <div className="flex-grow mb-8">
      <ul className="space-y-3">
        {pkg.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start text-sm text-[var(--color-muted)]">
            <Check className={`w-4 h-4 mr-3 flex-shrink-0 text-primary`} />
            {feature}
          </li>
        ))}
      </ul>

      {pkg.addOns && pkg.addOns.length > 0 && (
        <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs font-bold text-[var(--color-foreground)] mb-3 uppercase tracking-wide flex items-center gap-2">
            <Plus className="w-3 h-3 text-primary" /> Available Upgrades
          </p>
          <ul className="space-y-2">
            {pkg.addOns.map((addon: any, i: number) => (
              <li key={i} className="flex items-center justify-between text-sm text-[var(--color-muted)] bg-[var(--color-surface-highlight)] px-3 py-2 rounded-lg">
                <span>{addon.name}</span>
                <span className="text-primary font-mono text-xs">{addon.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
    <Link to="contact" smooth={true} duration={500}>
      <Button 
        variant={pkg.recommended ? 'primary' : 'outline'} 
        className="w-full"
      >
        Get Started
      </Button>
    </Link>
  </GlassCard>
);
