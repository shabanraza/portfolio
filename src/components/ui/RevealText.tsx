import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RevealTextProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
  delay?: number;
  stagger?: number;
  className?: string;
}

const wordVariants: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const RevealText = ({
  children,
  as = 'span',
  delay = 0,
  stagger = 0.08,
  className,
}: RevealTextProps) => {
  const words = children.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn('inline-block', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-flex overflow-hidden align-baseline"
          style={{ marginRight: i < words.length - 1 ? '0.25em' : 0 }}
        >
          <motion.span className="inline-block will-change-transform" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};
