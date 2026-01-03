'use client';

import Image from 'next/image';
import ParallaxSection, { ParallaxLayer } from '../animations/ParallaxSection';
import ScrollReveal from '../animations/ScrollReveal';

interface HeroSectionProps {
  variant: 'luxusMinimalist' | 'cinematicStorytelling' | 'dataRoiDriven' | 'editorialMagazine';
  videoUrl?: string;
  posterUrl: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

export default function HeroSection({
  variant,
  videoUrl,
  posterUrl,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary
}: HeroSectionProps) {
  const variantStyles = {
    luxusMinimalist: {
      overlay: 'bg-gradient-to-b from-olive/30 via-transparent to-cream/50',
      textColor: 'text-cream',
      headlineFont: 'font-display',
      subheadlineFont: 'font-serif',
      ctaStyle: 'bg-gold text-white hover:bg-gold/90'
    },
    cinematicStorytelling: {
      overlay: 'bg-gradient-to-t from-olive/80 via-olive/40 to-transparent',
      textColor: 'text-cream',
      headlineFont: 'font-display',
      subheadlineFont: 'font-serif',
      ctaStyle: 'bg-cream text-olive hover:bg-cream/90'
    },
    dataRoiDriven: {
      overlay: 'bg-gradient-to-b from-trust/20 via-transparent to-white/50',
      textColor: 'text-olive',
      headlineFont: 'font-display',
      subheadlineFont: 'font-body',
      ctaStyle: 'bg-trust text-white hover:bg-trust/90'
    },
    editorialMagazine: {
      overlay: 'bg-gradient-to-b from-olive/20 via-transparent to-cream/60',
      textColor: 'text-olive',
      headlineFont: 'font-serif',
      subheadlineFont: 'font-body',
      ctaStyle: 'bg-olive text-cream hover:bg-olive/90'
    }
  };

  const styles = variantStyles[variant];

  return (
    <ParallaxSection className="relative min-h-screen flex items-center justify-center">
      {/* Background Layer (slowest) */}
      <ParallaxLayer speed={0.2} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Background Image or Video */}
          {videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={posterUrl}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={posterUrl}
              alt="Hero background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}

          {/* Overlay */}
          <div className={`absolute inset-0 ${styles.overlay}`} />
        </div>
      </ParallaxLayer>

      {/* Content Layer (faster) */}
      <ParallaxLayer speed={0.5} className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal delay={0.2}>
              <h1 className={`text-hero ${styles.headlineFont} font-bold ${styles.textColor} mb-6 leading-tight`}>
                {headline}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className={`text-narrative-lg ${styles.subheadlineFont} ${styles.textColor} mb-8 max-w-2xl mx-auto opacity-90`}>
                {subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className={`${styles.ctaStyle} px-8 py-4 rounded-full font-body font-medium text-lg transition-all transform hover:scale-105 inline-block`}
                >
                  {ctaPrimary}
                </a>

                {ctaSecondary && (
                  <a
                    href="#portfolio"
                    className="bg-transparent border-2 border-cream text-cream px-8 py-4 rounded-full font-body font-medium text-lg hover:bg-cream/10 transition-all inline-block"
                  >
                    {ctaSecondary}
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxLayer>

      {/* Foreground Accent (fastest) */}
      <ParallaxLayer speed={0.8} className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-32 bg-gradient-to-t from-cream to-transparent" />
      </ParallaxLayer>
    </ParallaxSection>
  );
}
