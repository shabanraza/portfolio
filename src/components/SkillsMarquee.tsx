import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Smartphone, Box, Layers, 
  Cpu, Globe, TestTube, Cloud, Zap, FileCode 
} from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code2 className="w-6 h-6" /> },
  { name: 'TypeScript', icon: <FileCode className="w-6 h-6" /> },
  { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
  { name: 'React Native', icon: <Smartphone className="w-6 h-6" /> },
  { name: 'Next.js', icon: <Layers className="w-6 h-6" /> },
  { name: 'Redux', icon: <Box className="w-6 h-6" /> },
  { name: 'GraphQL', icon: <Globe className="w-6 h-6" /> },
  { name: 'TailwindCSS', icon: <Zap className="w-6 h-6" /> },
  { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
  { name: 'AWS', icon: <Cloud className="w-6 h-6" /> },
  { name: 'Docker', icon: <Box className="w-6 h-6" /> },
  { name: 'Jest', icon: <TestTube className="w-6 h-6" /> },
  { name: 'AI Integration', icon: <Cpu className="w-6 h-6" /> }
];

const industries = [
  'FinTech', 'HealthTech', 'E-commerce', 'SaaS', 'Enterprise'
];

export const SkillsMarquee = () => {
  return (
    <section className="py-20 bg-black border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Skills Marquee */}
        <div className="relative flex overflow-hidden group mb-16">
          {/* Left/Right Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="animate-marquee whitespace-nowrap flex gap-12 items-center py-4">
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-gray-500/60 group-hover:text-primary transition-colors duration-300"
              >
                {skill.icon}
                <span className="text-2xl font-display font-bold uppercase tracking-wider">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 items-center py-4">
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-gray-500/60 group-hover:text-primary transition-colors duration-300"
              >
                {skill.icon}
                <span className="text-2xl font-display font-bold uppercase tracking-wider">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Strip */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center border-t border-white/5 pt-8">
          <span className="text-sm font-mono text-primary uppercase tracking-wider">Specialized in:</span>
          {industries.map((industry, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-1 rounded-full bg-white/5 text-gray-400 text-sm border border-white/5 hover:border-primary/50 hover:text-white transition-all cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
