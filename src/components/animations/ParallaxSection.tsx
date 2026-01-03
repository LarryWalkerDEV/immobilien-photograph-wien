'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // 0-1 range, where 0 is no movement and 1 is fast
  className?: string;
}

/**
 * ParallaxLayer: Individual layer with customizable parallax speed
 */
export function ParallaxLayer({ children, speed = 0.5, className = '' }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create parallax effect
    const scrollTrigger = ScrollTrigger.create({
      trigger: layer.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yPos = -(self.progress * 100 * speed);
        gsap.set(layer, { yPercent: yPos, force3D: true });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [speed]);

  return (
    <div ref={layerRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}

/**
 * ParallaxSection: Wrapper for parallax effects
 */
export default function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      // Clean up ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
