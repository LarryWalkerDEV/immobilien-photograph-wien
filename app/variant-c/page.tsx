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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

// Glass card component
function GlassCard({ children, className = '', hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

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

export default function VariantC() {
  const hero = manifest.heroes.dataRoiDriven;
  const portfolio = manifest.portfolio;

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const floatY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
      gradient: 'from-purple-500/20 to-blue-500/20',
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
      gradient: 'from-cyan-500 to-purple-500',
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
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Kostenlose Beratung', description: '15 Min Videocall um Ihre Anforderungen zu verstehen', icon: '🎯' },
    { step: '02', title: 'Termin Vereinbaren', description: 'Flexibler Vor-Ort Termin nach Ihrem Zeitplan', icon: '📅' },
    { step: '03', title: '3D-Aufnahme', description: '2-3 Stunden professionelle Aufnahme Ihrer Immobilie', icon: '🔮' },
    { step: '04', title: 'KI-Bearbeitung', description: '48 Stunden für perfekte Nachbearbeitung', icon: '⚡' },
    { step: '05', title: 'Lieferung', description: 'Download-Link + unbegrenztes Hosting', icon: '🚀' },
  ];

  const stats = [
    { value: '73%', label: 'Schnellere Verkaufszeit', icon: '⚡' },
    { value: '40%', label: 'Höhere Verkaufspreise', icon: '📈' },
    { value: '€12.500', label: 'Durchschnittliche Ersparnis', icon: '💰' },
    { value: '95%', label: 'Kundenzufriedenheit', icon: '⭐' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F0A1F] via-[#1A1035] to-[#0A0F1F] text-white overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Navigation - Glassmorphism */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-4 mt-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              immobilien-photograph.wien
            </Link>
            <div className="hidden md:flex gap-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#services" className="text-white/60 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-white/60 hover:text-cyan-400 transition-colors">Portfolio</a>
              <a href="#process" className="text-white/60 hover:text-cyan-400 transition-colors">Prozess</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity">
                Demo Anfragen
              </a>
            </div>
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              ← Zurück
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Tech Forward with Floating Elements */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        {/* Floating 3D elements */}
        <motion.div
          style={{ y: floatY }}
          className="absolute top-32 right-20 hidden lg:block"
        >
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-xl rounded-2xl border border-white/20"
          />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
          className="absolute bottom-40 left-20 hidden lg:block"
        >
          <motion.div
            animate={{ rotateX: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-xl rounded-full border border-white/20"
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-white/80">Die Zukunft der Immobilienpräsentation</span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 rounded-full text-xs font-bold">
              NEU
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              3D-Technologie,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Die Verkauft
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Während Sie schlafen, erkunden Interessenten Ihre Immobilie in immersiven 3D-Touren.
            KI-gestützt. Automatisiert. Revolutionär.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-purple-500/25 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="relative z-10">Live-Demo Anfordern</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="backdrop-blur-xl bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Portfolio Entdecken
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero video preview - floating */}
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6"
        >
          <GlassCard className="p-2 overflow-hidden" hover={false}>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <video
                src={hero.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent" />
            </div>
          </GlassCard>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white/40"
          >
            <span className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Erkunden</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Glass Cards */}
      <AnimatedSection className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
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
              >
                <GlassCard className="p-8 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Problem Section - Tech Style */}
      <AnimatedSection className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 backdrop-blur-xl bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Das Problem
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  Legacy-Prozesse
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  kosten Sie Geld
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: '⏱️', value: '10+', label: 'Besichtigungen', sublabel: 'pro Objekt durchschnittlich' },
                { icon: '💸', value: '€500', label: 'Tägliche Kosten', sublabel: 'durch Leerstand' },
                { icon: '😤', value: '80%', label: 'Zeitverschwender', sublabel: 'unqualifizierte Interessenten' },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="p-8 text-center h-full">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.value}
                    </div>
                    <div className="text-lg text-white/80 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.label}
                    </div>
                    <div className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.sublabel}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Solution Section */}
      <AnimatedSection className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium text-cyan-400 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Die Lösung
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                KI-Gestützte
              </span>
              <br />
              <span className="text-white">3D-Rundgänge</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/60 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Automatisierte Filterung. 24/7 Verfügbarkeit. Immersive Erlebnisse.
            </motion.p>
          </div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-4 overflow-hidden" hover={false}>
              <div className="relative aspect-video rounded-2xl overflow-hidden group">
                <Image
                  src={hero.image}
                  alt="3D Virtual Tour Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-24 h-24 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <p className="text-sm text-cyan-400 font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Live Demo</p>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Erleben Sie die Zukunft</p>
                  </div>
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-4 py-2 rounded-xl">
                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>4K · 360°</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection id="portfolio" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-medium text-blue-400 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">Unsere </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Erfolge
              </span>
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
              >
                <GlassCard className="overflow-hidden group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 backdrop-blur-xl bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-bold text-cyan-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      3D Tour
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {property.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-cyan-400 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Tour starten →
                      </span>
                      <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Verkauft in 3 Wochen
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection id="services" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-medium text-purple-400 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              Preise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">Transparente </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pakete
              </span>
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
                className="relative"
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Empfohlen
                    </span>
                  </div>
                )}
                <div className={`h-full p-8 rounded-3xl border transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-purple-500/20 to-cyan-500/20 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'backdrop-blur-xl bg-white/5 border-white/10 hover:border-white/20'
                }`}>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-5xl font-bold ${pkg.highlight ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent' : 'text-white'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      €{pkg.price}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mb-8 pb-6 border-b border-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="text-cyan-400">✓</span> {pkg.result}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span className="text-cyan-400 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90'
                        : 'backdrop-blur-xl bg-white/5 border border-white/20 text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Jetzt Starten
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection id="process" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium text-cyan-400 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Prozess
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">So </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                funktioniert's
              </span>
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
              >
                <GlassCard className="p-6 flex gap-6 items-center group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <span className="text-sm font-bold text-cyan-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        SCHRITT {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:flex text-white/20 group-hover:text-cyan-400 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection id="contact" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <GlassCard className="p-12 text-center relative overflow-hidden" hover={false}>
            {/* Gradient orbs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <span className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white/80 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                🔥 Limitiertes Angebot
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-white">Nächste 5 Buchungen:</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  -20% Rabatt
                </span>
              </h2>
              <p className="text-xl text-white/60 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Noch 3 Plätze frei
              </p>
              <p className="text-white/40 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Erleben Sie die Zukunft der Immobilienpräsentation
              </p>

              <motion.a
                href="mailto:info@immobilien-photograph.wien"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-purple-500/30 hover:shadow-cyan-500/30 transition-shadow"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Live-Demo Anfordern →
              </motion.a>
            </motion.div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-16 px-6 relative z-10 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                immobilien-photograph.wien
              </h3>
              <p className="text-white/50 mb-6 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Die Zukunft der Immobilienpräsentation. KI-gestützte 3D-Rundgänge für Wien.
              </p>
              <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Raaber-Bahn-Gasse 11, 1100 Wien
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Services
              </h4>
              <ul className="space-y-3 text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">3D Virtual Tours</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Immobilienfotografie</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Drohnenaufnahmen</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Video Tours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-3 text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li><Link href="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-cyan-400 transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-cyan-400 transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 immobilien-photograph.wien. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/20 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Data-Driven ROI Design
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
