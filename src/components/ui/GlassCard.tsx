import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ 
  children, 
  className,
  hoverEffect = false,
  ...props 
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        'glass-panel p-8',
        hoverEffect && 'glass-panel-hover',
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
