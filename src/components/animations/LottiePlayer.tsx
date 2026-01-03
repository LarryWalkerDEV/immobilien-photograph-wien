'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottiePlayerProps {
  animationPath: string; // Path to JSON file in /public/lottie/
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

/**
 * LottiePlayer: Wrapper for Lottie animations with reduced motion support
 */
export default function LottiePlayer({
  animationPath,
  loop = true,
  autoplay = true,
  className = ''
}: LottiePlayerProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Load animation data
    fetch(animationPath)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Failed to load Lottie animation:', error));
  }, [animationPath]);

  if (!animationData) {
    return null; // or loading placeholder
  }

  if (prefersReducedMotion) {
    // Show first frame only
    return (
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className={className}
        initialSegment={[0, 1]}
      />
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
