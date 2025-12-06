import { motion } from 'framer-motion';
import { ArrowRight, Camera, Flame } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { Link } from 'react-scroll';
import { HeroVisual } from '../components/HeroVisual';

// Assets
import globalLogicLogo from '../assets/global_logic.svg';
import hclLogo from '../assets/hcltech-new-logo.svg';
import irisLogo from '../assets/Iris-logo.png.webp';
import mobiloitteLogo from '../assets/mobiloitte new logo resized .avif';

export const Hero = () => {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-32 relative overflow-hidden bg-transparent">
      {/* Subtle Background Elements - Adjusted for particle visibility */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 -z-10" />
      
      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6 w-fit"
          >
            <Flame className="w-4 h-4 animate-pulse" />
            <span>Only 2 spots left for January</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            {/* Photo Placeholder */}
            <div className="w-16 h-16 rounded-full bg-[var(--color-surface-highlight)] border-2 border-[var(--color-border)] flex items-center justify-center shrink-0 overflow-hidden relative">
               <img 
                 src="/me.png" 
                 alt="Mohammad Shaban" 
                 className="w-full h-full object-cover object-top"
               />
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-foreground)] font-bold">Mohammad Shaban</span>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Full Stack & Mobile Developer</span>
            </div>
          </motion.div>
          
          <h1 className="heading-xl text-[var(--color-foreground)] mb-8">
            I turn your idea into a <span className="text-primary italic">shipped product.</span>
          </h1>
          
          <p className="text-lead max-w-xl mb-10 text-[var(--color-muted)]">
            Stop struggling with fragmented development. I build high-performance web and mobile applications for startups, businesses, and agencies that need to launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="contact" smooth={true} duration={500}>
            <Button size="lg" className="w-full sm:w-auto group">
              Let's Build Together <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See My Work
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats with Bigger Numbers */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 border-t border-[var(--color-border)] pt-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] font-display">$2M+</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Revenue Generated</p>
            </div>
            <div className="w-[1px] h-10 bg-[var(--color-border)] hidden md:block"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] font-display">100K+</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Users on Apps</p>
            </div>
            <div className="w-[1px] h-10 bg-[var(--color-border)] hidden md:block"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] font-display">50+</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Projects Shipped</p>
            </div>
            <div className="w-[1px] h-10 bg-[var(--color-border)] hidden md:block"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] font-display">10+</p>
              <p className="text-sm text-[var(--color-muted)] mt-1">Years Exp.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Trusted By - Centered Below Hero Content */}
      <div className="w-full mt-20 pt-12 border-t border-[var(--color-border)]">
         <p className="text-xs text-[var(--color-muted)] uppercase tracking-widest mb-8 font-mono text-center">Trusted By</p>
         <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60 hover:opacity-100 transition-all duration-500">
            <img 
              src={globalLogicLogo} 
              alt="GlobalLogic" 
              className="h-8 w-auto object-contain"
              style={{ filter: 'var(--logo-filter)' }}
            />
            <img 
              src={irisLogo} 
              alt="Iris Software" 
              className="h-6 w-auto object-contain"
              style={{ filter: 'var(--logo-filter)' }}
            />
            <img 
              src={hclLogo} 
              alt="HCLTech" 
              className="h-5 w-auto object-contain"
              style={{ filter: 'var(--logo-filter)' }}
            />
            <img 
              src={mobiloitteLogo} 
              alt="Mobiloitte" 
              className="h-6 w-auto object-contain"
              style={{ filter: 'var(--logo-filter)' }}
            />
         </div>
      </div>
    </Section>
  );
};
