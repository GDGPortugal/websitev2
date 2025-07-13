import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimateOnScrollProps = {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedAnimation}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
