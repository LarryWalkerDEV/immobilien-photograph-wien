'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import manifest from '../../public/generated/manifest.json';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Section wrapper with scroll animation
function AnimatedSection({ children, className = '', delay = 0, id }: { children: React.ReactNode; className?: string; delay?: number; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function VariantA() {
  const hero = manifest.heroes.luxusMinimalist;
  const portfolio = manifest.portfolio;

  // Parallax effect for hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Smooth scroll
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const packages = [
    {
      name: 'Schnellverkauf',
      price: '1.290',
      result: '73% schnellere Verkaufszeit',
      features: [
        '3D Virtual Tour (Matterport-Style)',
        '25 Professionelle Fotos',
        'Drohnen-Außenaufnahmen',
        '48h Lieferzeit',
      ],
      highlight: false,
    },
    {
      name: 'Premium-Positionierung',
      price: '2.490',
      result: '40% höhere Verkaufspreise',
      features: [
        'Alles aus Schnellverkauf',
        '4K Video-Tour',
        'Twilight-Fotografie',
        'Grundrisse & Vermessung',
        'Social Media Paket',
      ],
      highlight: true,
    },
    {
      name: 'Luxus-Marketing',
      price: '4.990',
      result: 'Verkauft in <14 Tagen',
      features: [
        'Alles aus Premium',
        'Virtual Staging (3D Möbel)',
        'Professionelles Copywriting',
        'Premium Hosting (1 Jahr)',
        'Persönlicher Account Manager',
      ],
      highlight: false,
    },
  ];

  const processSteps = [
    { step: '01', title: 'Kostenlose Beratung', description: '15 Min Videocall um Ihre Anforderungen zu verstehen' },
    { step: '02', title: 'Termin Vereinbaren', description: 'Flexibler Vor-Ort Termin nach Ihrem Zeitplan' },
    { step: '03', title: '3D-Aufnahme', description: '2-3 Stunden professionelle Aufnahme Ihrer Immobilie' },
    { step: '04', title: 'Bearbeitung', description: '48 Stunden für perfekte Nachbearbeitung' },
    { step: '05', title: 'Lieferung', description: 'Download-Link + unbegrenztes Hosting' },
  ];

  const stats = [
    { value: '73%', label: 'Schnellere Verkaufszeit' },
    { value: '40%', label: 'Höhere Verkaufspreise' },
    { value: '€12.500', label: 'Durchschnittliche Ersparnis' },
    { value: '95%', label: 'Kundenzufriedenheit' },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            IMMOBILIEN-PHOTOGRAPH
          </Link>
          <div className="hidden md:flex gap-8 text-sm tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            <a href="#services" className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300">Services</a>
            <a href="#portfolio" className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300">Portfolio</a>
            <a href="#process" className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300">Prozess</a>
            <a href="#contact" className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300">Kontakt</a>
          </div>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ← Zurück
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Dark Sophistication with 3-Layer Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Layer 1: Background Image (slowest) */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
        >
          <Image
            src={hero.image}
            alt="Luxury Vienna Apartment 3D Tour"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </motion.div>

        {/* Layer 2: Floating accent elements (medium) */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#C9A55C]/10 rounded-full blur-3xl"
        />

        {/* Layer 3: Text content (fastest) */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Virtuelle 3D-Rundgänge für Wien
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[0.95]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            80% Weniger<br />
            <span className="text-[#C9A55C]">Unnötige Besichtigungen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            3D-Rundgänge filtern Zeitverschwender. Nur ernsthafte Käufer vereinbaren Termine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: '#B8944B' }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C9A55C] text-[#0A0A0A] px-10 py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kostenloses Angebot
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, borderColor: '#C9A55C', color: '#C9A55C' }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Portfolio Ansehen
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Scrollen</span>
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="opacity-50">
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="2"/>
              <motion.circle
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                cx="10" cy="8" r="3" fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section - Hormozi Style */}
      <AnimatedSection className="py-32 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeInUp}
              className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Das Problem
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Sie kennen das Problem...
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="space-y-8 text-left max-w-2xl mx-auto"
            >
              {[
                'Wie viele leere Besichtigungen haben Sie diese Woche? Jede kostet Sie 2 Stunden und €0 Fortschritt.',
                'Während Sie Zeit verschwenden mit unqualifizierten Interessenten, verlieren Sie €€€ pro Monat Leerstand.',
                'Ihre Konkurrenz nutzt bereits 3D-Rundgänge. Während Sie noch in Ihrem Auto sitzen.',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-6"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-[#C9A55C]/30 flex items-center justify-center text-[#C9A55C]">
                    {i + 1}
                  </span>
                  <p className="text-lg text-white/70 leading-relaxed pt-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-[#C9A55C] mt-16 font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              "Was wenn es einen besseren Weg gibt?"
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Solution Section - 3D Tour Showcase */}
      <AnimatedSection className="py-32 px-6 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Die Lösung
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Virtuelle 3D-Rundgänge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              3D-Rundgänge filtern 80% der Zeitverschwender BEVOR sie Ihre Zeit stehlen.
              Nur ernsthafte Käufer/Mieter vereinbaren Termine.
            </motion.p>
          </div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden mb-20 group"
          >
            <video
              src={hero.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-[#C9A55C]/90 flex items-center justify-center group-hover:bg-[#C9A55C] transition-colors">
                <svg className="w-10 h-10 text-[#0A0A0A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="text-center p-8 bg-[#1A1A1A] border border-white/5 hover:border-[#C9A55C]/30 transition-colors duration-500"
              >
                <div className="text-4xl md:text-5xl font-light text-[#C9A55C] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection id="portfolio" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Unsere Arbeit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Portfolio
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolio.map((property, i) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[#C9A55C] text-sm tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                      3D Tour ansehen →
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-2 group-hover:text-[#C9A55C] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {property.title}
                </h3>
                <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {property.location}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection id="services" className="py-32 px-6 bg-[#111111]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Investieren Sie in Ergebnisse
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Service-Pakete
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 border transition-all duration-500 ${
                  pkg.highlight
                    ? 'bg-[#C9A55C]/10 border-[#C9A55C]'
                    : 'bg-[#1A1A1A] border-white/10 hover:border-[#C9A55C]/50'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A55C] text-[#0A0A0A] px-4 py-1 text-xs uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Beliebteste Wahl
                  </div>
                )}

                <h3 className="text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-light text-[#C9A55C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    €{pkg.price}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-8 pb-8 border-b border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  ✓ {pkg.result}
                </p>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                      <span className="text-[#C9A55C] mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    pkg.highlight
                      ? 'bg-[#C9A55C] text-[#0A0A0A] hover:bg-[#B8944B]'
                      : 'border border-white/30 text-white hover:border-[#C9A55C] hover:text-[#C9A55C]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Jetzt Buchen
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection id="process" className="py-32 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              So funktioniert es
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Der Prozess
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-0"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="flex gap-8 items-start py-10 border-b border-white/10 last:border-0 group"
              >
                <span className="text-5xl font-light text-[#C9A55C] opacity-50 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {step.step}
                </span>
                <div>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-[#C9A55C] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-white/50" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection id="contact" className="py-32 px-6 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A55C]/5 to-transparent" />
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C9A55C] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Limitiertes Angebot
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Nächste 5 Buchungen:<br />
              <span className="text-[#C9A55C]">-20% Rabatt</span>
            </h2>
            <p className="text-xl text-white/60 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Noch 3 Plätze frei
            </p>
            <p className="text-white/40 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              Angebot endet in 48 Stunden
            </p>

            <motion.a
              href="mailto:info@immobilien-photograph.wien"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#C9A55C] text-[#0A0A0A] px-12 py-5 text-sm tracking-wider uppercase font-medium hover:bg-[#B8944B] transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kostenloses Angebot in 60 Sekunden
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                IMMOBILIEN-PHOTOGRAPH
              </h3>
              <p className="text-white/50 mb-6 max-w-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Professionelle 3D-Rundgänge und Immobilienfotografie für anspruchsvolle Verkäufer in Wien.
              </p>
              <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Raaber-Bahn-Gasse 11, 1100 Wien
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Services
              </h4>
              <ul className="space-y-3 text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-[#C9A55C] transition-colors">3D Virtual Tours</a></li>
                <li><a href="#" className="hover:text-[#C9A55C] transition-colors">Immobilienfotografie</a></li>
                <li><a href="#" className="hover:text-[#C9A55C] transition-colors">Drohnenaufnahmen</a></li>
                <li><a href="#" className="hover:text-[#C9A55C] transition-colors">Video Tours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-3 text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><Link href="/impressum" className="hover:text-[#C9A55C] transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-[#C9A55C] transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-[#C9A55C] transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 immobilien-photograph.wien. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/20 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Dark Sophistication Design
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
