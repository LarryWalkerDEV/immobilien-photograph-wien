'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import manifest from '../../public/generated/manifest.json';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Section wrapper
function AnimatedSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function VariantB() {
  const hero = manifest.heroes.cinematicStorytelling;
  const portfolio = manifest.portfolio;

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

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
    { step: '01', title: 'Kostenlose Beratung', description: '15 Min Videocall um Ihre Anforderungen zu verstehen', icon: '📞' },
    { step: '02', title: 'Termin Vereinbaren', description: 'Flexibler Vor-Ort Termin nach Ihrem Zeitplan', icon: '📅' },
    { step: '03', title: '3D-Aufnahme', description: '2-3 Stunden professionelle Aufnahme Ihrer Immobilie', icon: '📸' },
    { step: '04', title: 'Bearbeitung', description: '48 Stunden für perfekte Nachbearbeitung', icon: '✨' },
    { step: '05', title: 'Lieferung', description: 'Download-Link + unbegrenztes Hosting', icon: '🚀' },
  ];

  const stats = [
    { value: '73%', label: 'Schnellere Verkaufszeit', color: '#2E5EAA' },
    { value: '40%', label: 'Höhere Verkaufspreise', color: '#00C49A' },
    { value: '€12.500', label: 'Durchschnittliche Ersparnis', color: '#2E5EAA' },
    { value: '95%', label: 'Kundenzufriedenheit', color: '#00C49A' },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#2E5EAA]/10 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#2E5EAA]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            immobilien-photograph.wien
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            <a href="#services" className="text-[#1A1A1A]/60 hover:text-[#2E5EAA] transition-colors">Services</a>
            <a href="#portfolio" className="text-[#1A1A1A]/60 hover:text-[#2E5EAA] transition-colors">Portfolio</a>
            <a href="#process" className="text-[#1A1A1A]/60 hover:text-[#2E5EAA] transition-colors">Prozess</a>
            <a href="#contact" className="bg-[#2E5EAA] text-white px-5 py-2 rounded-lg hover:bg-[#254A8A] transition-colors">
              Kontakt
            </a>
          </div>
          <Link href="/" className="text-sm text-[#1A1A1A]/60 hover:text-[#2E5EAA] transition-colors md:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            ← Zurück
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Clean Professional Split Screen */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="grid lg:grid-cols-2 min-h-screen w-full">
          {/* Left: Visual */}
          <motion.div style={{ y: heroY }} className="relative h-[50vh] lg:h-auto">
            <Image
              src={hero.image}
              alt="Professional Real Estate 3D Tour"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FAFAFA] lg:from-transparent lg:to-[#FAFAFA]" />
            <div className="absolute inset-0 bg-[#2E5EAA]/10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            style={{ y: textY, opacity: heroOpacity }}
            className="flex items-center justify-center p-8 lg:p-16 bg-[#FAFAFA]"
          >
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 bg-[#00C49A]/10 text-[#00C49A] px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="w-2 h-2 bg-[#00C49A] rounded-full animate-pulse" />
                Datengetrieben & Messbar
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="text-[#2E5EAA]">€12.500</span> Durchschnittliche<br />
                Ersparnis Pro Vermietung
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-[#1A1A1A]/60 mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Datengetriebene 3D-Technologie reduziert Leerstand um 73%.
                Messbare Ergebnisse, garantierte Zufriedenheit.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex gap-8 mb-10"
              >
                <div>
                  <div className="text-3xl font-bold text-[#2E5EAA]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>73%</div>
                  <div className="text-sm text-[#1A1A1A]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Schneller</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#00C49A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>40%</div>
                  <div className="text-sm text-[#1A1A1A]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Höherer Preis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#2E5EAA]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>95%</div>
                  <div className="text-sm text-[#1A1A1A]/50" style={{ fontFamily: 'Inter, sans-serif' }}>Zufriedenheit</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#2E5EAA] text-white px-8 py-4 rounded-xl text-center font-semibold shadow-lg shadow-[#2E5EAA]/25 hover:bg-[#254A8A] transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  ROI-Kalkulator Starten
                </motion.a>
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-[#2E5EAA]/20 text-[#2E5EAA] px-8 py-4 rounded-xl text-center font-semibold hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/5 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Erfolgsgeschichten
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex flex-col items-center text-[#2E5EAA]"
          >
            <span className="text-xs font-medium tracking-wider uppercase mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Mehr erfahren</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section - Data-Driven */}
      <AnimatedSection className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-[#2E5EAA]/10 text-[#2E5EAA] px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Das Problem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Die Zahlen lügen nicht
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Jede leere Besichtigung kostet Sie Zeit und Geld. Hier ist die Rechnung:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { number: '10+', label: 'Besichtigungen pro Objekt', sublabel: 'im Durchschnitt' },
                { number: '2h', label: 'pro Besichtigung', sublabel: 'inklusive Anfahrt' },
                { number: '€500', label: 'Opportunitätskosten', sublabel: 'pro Tag Leerstand' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-[#FAFAFA] p-8 rounded-2xl text-center border border-[#2E5EAA]/5 hover:border-[#2E5EAA]/20 transition-colors"
                >
                  <div className="text-5xl font-bold text-[#2E5EAA] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.number}
                  </div>
                  <div className="text-lg font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </div>
                  <div className="text-sm text-[#1A1A1A]/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-[#2E5EAA] to-[#00C49A] text-white px-8 py-4 rounded-2xl">
                <p className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  = Bis zu <span className="text-2xl">€12.500</span> Verlust pro Vermietung
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection className="py-24 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#00C49A]/10 text-[#00C49A] px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Die Lösung
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              3D-Rundgänge mit messbarem ROI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Interessenten erkunden Ihre Immobilie virtuell. Nur wirklich interessierte vereinbaren Termine.
            </motion.p>
          </div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-[#2E5EAA]/10 group"
          >
            <video
              src={hero.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:bg-white transition-colors">
                <svg className="w-8 h-8 text-[#2E5EAA] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl text-center shadow-lg shadow-[#2E5EAA]/5 border border-[#2E5EAA]/5"
              >
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#1A1A1A]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection id="portfolio" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#2E5EAA]/10 text-[#2E5EAA] px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Erfolgsgeschichten
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Projekte mit messbaren Ergebnissen
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
                whileHover={{ y: -8 }}
                className="group bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-lg shadow-[#2E5EAA]/5 hover:shadow-xl hover:shadow-[#2E5EAA]/10 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#00C49A] text-white px-3 py-1 rounded-full text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Verkauft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#2E5EAA] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {property.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {property.location}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#2E5EAA]/10">
                    <div className="flex items-center gap-2 text-[#00C49A] font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Verkauft in 3 Wochen
                    </div>
                    <span className="text-[#2E5EAA] text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Tour ansehen →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection id="services" className="py-24 px-6 bg-gradient-to-b from-[#FAFAFA] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#2E5EAA]/10 text-[#2E5EAA] px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Transparente Preise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Investieren Sie in Ergebnisse
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
                className={`relative p-8 rounded-3xl transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#2E5EAA] to-[#254A8A] text-white shadow-2xl shadow-[#2E5EAA]/30'
                    : 'bg-white border-2 border-[#2E5EAA]/10 hover:border-[#2E5EAA]/30'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C49A] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Empfohlen
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-[#1A1A1A]'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${pkg.highlight ? 'text-white' : 'text-[#2E5EAA]'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    €{pkg.price}
                  </span>
                </div>
                <p className={`text-sm mb-8 pb-6 border-b ${pkg.highlight ? 'text-white/80 border-white/20' : 'text-[#1A1A1A]/60 border-[#2E5EAA]/10'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-[#00C49A]">✓</span> {pkg.result}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${pkg.highlight ? 'text-white/90' : 'text-[#1A1A1A]/70'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      <svg className={`w-5 h-5 flex-shrink-0 ${pkg.highlight ? 'text-[#00C49A]' : 'text-[#00C49A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    pkg.highlight
                      ? 'bg-white text-[#2E5EAA] hover:bg-[#FAFAFA]'
                      : 'bg-[#2E5EAA] text-white hover:bg-[#254A8A]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Jetzt Starten
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection id="process" className="py-24 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#00C49A]/10 text-[#00C49A] px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Einfacher Prozess
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              In 5 Schritten zum 3D-Rundgang
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-lg shadow-[#2E5EAA]/5 border border-[#2E5EAA]/5 hover:border-[#2E5EAA]/20 transition-all group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2E5EAA] to-[#00C49A] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#2E5EAA]/20" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#2E5EAA] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
                <div className="text-4xl hidden sm:block">
                  {step.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection id="contact" className="py-24 px-6 bg-gradient-to-br from-[#2E5EAA] to-[#254A8A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00C49A] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Limitiertes Angebot
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nächste 5 Buchungen:<br />
              <span className="text-[#00C49A]">-20% Rabatt</span>
            </h2>
            <p className="text-xl text-white/80 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Noch 3 Plätze frei
            </p>
            <p className="text-white/60 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Berechnen Sie Ihren persönlichen ROI in 60 Sekunden
            </p>

            <motion.a
              href="mailto:info@immobilien-photograph.wien"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-[#2E5EAA] px-10 py-5 rounded-xl font-bold shadow-2xl shadow-black/20 hover:bg-[#FAFAFA] transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ROI-Kalkulator Starten →
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-[#2E5EAA]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#2E5EAA] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                immobilien-photograph.wien
              </h3>
              <p className="text-[#1A1A1A]/60 mb-6 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Datengetriebene 3D-Rundgänge und Immobilienfotografie mit messbaren Ergebnissen.
              </p>
              <p className="text-[#1A1A1A]/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Raaber-Bahn-Gasse 11, 1100 Wien
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Services
              </h4>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-[#2E5EAA] transition-colors">3D Virtual Tours</a></li>
                <li><a href="#" className="hover:text-[#2E5EAA] transition-colors">Immobilienfotografie</a></li>
                <li><a href="#" className="hover:text-[#2E5EAA] transition-colors">Drohnenaufnahmen</a></li>
                <li><a href="#" className="hover:text-[#2E5EAA] transition-colors">Video Tours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><Link href="/impressum" className="hover:text-[#2E5EAA] transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-[#2E5EAA] transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-[#2E5EAA] transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2E5EAA]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#1A1A1A]/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 immobilien-photograph.wien. Alle Rechte vorbehalten.
            </p>
            <p className="text-[#1A1A1A]/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clean Professional Design
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
