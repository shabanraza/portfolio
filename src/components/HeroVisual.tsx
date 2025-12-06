import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { CheckCircle, TrendingUp, Menu, Bell } from 'lucide-react';

export const HeroVisual = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulated Data
  const chartBars = [40, 70, 55, 85, 60, 75, 50, 90, 65, 80, 70, 95];

  return (
    <div className="relative w-full h-[350px] md:h-[500px] [perspective:1000px]">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Laptop Base Layer */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[85%] md:w-[80%] aspect-[16/10] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden z-10 backdrop-blur-sm"
          style={{ transform: 'translateZ(0px)' }}
        >
            {/* Laptop Header */}
            <div className="h-6 bg-[var(--color-surface-highlight)] border-b border-[var(--color-border)] flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <div className="ml-4 w-40 h-2 bg-[var(--color-border)] rounded-full opacity-20" />
            </div>
            
            {/* Live Dashboard Mockup */}
            <div className="relative w-full h-full overflow-hidden bg-[var(--color-surface)] flex">
                {/* Sidebar */}
                <div className="w-12 md:w-16 border-r border-[var(--color-border)] flex flex-col items-center py-4 gap-4 z-20 bg-[var(--color-surface)]">
                    <div className="w-6 h-6 rounded bg-primary/20 mb-2" />
                    <div className="flex flex-col gap-3 w-full px-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-full h-2 rounded bg-[var(--color-border)] opacity-30" />
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col relative">
                    {/* Header */}
                    <div className="h-10 border-b border-[var(--color-border)] flex items-center justify-between px-4 bg-[var(--color-surface)]/90 backdrop-blur z-10">
                        <div className="w-24 h-2 rounded bg-[var(--color-border)] opacity-30" />
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-[var(--color-border)] opacity-30" />
                            <div className="w-4 h-4 rounded-full bg-[var(--color-border)] opacity-30" />
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="flex-1 overflow-hidden relative">
                        <motion.div 
                            className="absolute inset-0 w-full p-4 space-y-4"
                            animate={{ y: [0, -120, 0] }} 
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="p-3 rounded border border-[var(--color-border)] bg-[var(--color-surface-highlight)]">
                                        <div className="w-6 h-6 rounded bg-primary/10 mb-2" />
                                        <div className="w-12 h-1.5 rounded bg-[var(--color-border)] opacity-40 mb-1" />
                                        <div className="w-8 h-2.5 rounded bg-[var(--color-foreground)] opacity-60" />
                                    </div>
                                ))}
                            </div>

                            {/* Main Chart */}
                            <div className="p-3 rounded border border-[var(--color-border)] bg-[var(--color-surface-highlight)] h-32 flex items-end justify-between gap-1">
                                {chartBars.map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        className="w-full bg-primary/20 rounded-t-[1px]"
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity, repeatDelay: 5 }}
                                    />
                                ))}
                            </div>

                            {/* Recent Activity Table */}
                            <div className="rounded border border-[var(--color-border)] bg-[var(--color-surface-highlight)] overflow-hidden">
                                <div className="h-8 border-b border-[var(--color-border)] bg-[var(--color-surface)]/50" />
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-10 border-b border-[var(--color-border)] flex items-center px-3 gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-border)] opacity-20" />
                                        <div className="w-20 h-1.5 rounded bg-[var(--color-border)] opacity-40" />
                                        <div className="ml-auto w-8 h-1.5 rounded bg-[var(--color-border)] opacity-20" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Mobile Phone Float Layer */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[0%] md:-right-[5%] bottom-[5%] md:bottom-[10%] w-[25%] md:w-[22%] aspect-[9/19] bg-[var(--color-surface)] border-[3px] border-[var(--color-border)] rounded-[2rem] shadow-2xl overflow-hidden z-20 backdrop-blur-md"
          style={{ transform: 'translateZ(50px)' }}
        >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-30" />
            
            {/* Live Mobile App Mockup */}
            <div className="w-full h-full bg-[var(--color-surface)] overflow-hidden flex flex-col relative">
                {/* App Header */}
                <div className="h-12 border-b border-[var(--color-border)] flex items-center justify-between px-3 pt-4 bg-[var(--color-surface)]/90 backdrop-blur z-10">
                    <Menu className="w-3 h-3 text-[var(--color-muted)]" />
                    <span className="text-[10px] font-bold text-[var(--color-foreground)]">Store</span>
                    <Bell className="w-3 h-3 text-[var(--color-muted)]" />
                </div>

                {/* Scrolling App Content */}
                <motion.div 
                    className="flex-1 p-2 space-y-2"
                    animate={{ y: [0, -180, 0] }} 
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Hero Banner */}
                    <div className="w-full aspect-video rounded bg-gradient-to-br from-primary/20 to-purple-500/20" />
                    
                    {/* Categories */}
                    <div className="flex gap-1.5 overflow-hidden">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-4 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-highlight)] flex-shrink-0" />
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="aspect-[3/4] rounded border border-[var(--color-border)] bg-[var(--color-surface-highlight)] p-1.5 flex flex-col justify-end">
                                <div className="w-full h-1.5 rounded bg-[var(--color-border)] opacity-30 mb-1" />
                                <div className="w-1/2 h-1.5 rounded bg-[var(--color-foreground)] opacity-60" />
                            </div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Bottom Nav */}
                <div className="h-10 border-t border-[var(--color-border)] bg-[var(--color-surface)] absolute bottom-0 w-full z-20 flex justify-center items-center">
                    <div className="w-10 h-1 rounded-full bg-[var(--color-border)]" />
                </div>
            </div>
        </motion.div>

        {/* Floating Success Widget */}
        <motion.div
             animate={{ y: [-5, 5, -5] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -left-[5%] top-[20%] bg-[var(--color-surface)]/90 backdrop-blur border border-[var(--color-border)] p-4 rounded-xl shadow-xl z-30 flex items-center gap-3 min-w-[160px]"
             style={{ transform: 'translateZ(75px)' }}
        >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
                <p className="text-xs text-[var(--color-muted)]">Status</p>
                <p className="text-sm font-bold text-[var(--color-foreground)]">Deployed</p>
            </div>
        </motion.div>

        {/* Floating Analytics Widget */}
        <motion.div
             animate={{ y: [5, -5, 5] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
             className="absolute -right-[5%] top-[60%] bg-[var(--color-surface)]/90 backdrop-blur border border-[var(--color-border)] p-4 rounded-xl shadow-xl z-5 flex items-center gap-3 min-w-[140px]"
             style={{ transform: 'translateZ(-20px)' }}
        >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
                <p className="text-xs text-[var(--color-muted)]">Revenue</p>
                <p className="text-sm font-bold text-[var(--color-foreground)]">+128%</p>
            </div>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[80px] -z-10 rounded-full" />
      </motion.div>
    </div>
  );
};
