import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary-light shadow-lg shadow-primary/25 font-bold border border-transparent',
    secondary: 'bg-[var(--color-surface-highlight)] text-[var(--color-foreground)] hover:bg-[var(--color-surface)] border border-[var(--color-border)] font-bold',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-[var(--color-muted)] hover:text-primary hover:bg-primary/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'font-body font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
