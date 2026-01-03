'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * ScrollReveal: Fade-in + slide-up animation on scroll
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const controls = useAnimation();

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      controls.start({ opacity: 1, y: 0 });
      return;
    }

    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Custom easing
        },
      });
    }
  }, [isInView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
