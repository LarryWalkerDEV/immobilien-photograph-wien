'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import manifest from '../../public/generated/manifest.json';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

// Section wrapper
function AnimatedSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function VariantD() {
  const hero = manifest.heroes.editorialMagazine;
  const portfolio = manifest.portfolio;

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

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
    <main className="min-h-screen bg-[#F5F3EE] text-[#2C2824] overflow-x-hidden">
      {/* Navigation - Editorial Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-lg border-b border-[#2C2824]/10"
      >
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
            Immobilien-Photograph Wien
          </Link>
          <div className="hidden md:flex gap-10 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
            <a href="#services" className="text-[#6B6560] hover:text-[#8B7355] transition-colors">Services</a>
            <a href="#portfolio" className="text-[#6B6560] hover:text-[#8B7355] transition-colors">Portfolio</a>
            <a href="#process" className="text-[#6B6560] hover:text-[#8B7355] transition-colors">Prozess</a>
            <a href="#contact" className="text-[#6B6560] hover:text-[#8B7355] transition-colors">Kontakt</a>
          </div>
          <Link href="/" className="text-sm text-[#6B6560] hover:text-[#8B7355] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
            ← Zurück
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section - Editorial Magazine Style */}
      <section ref={heroRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Editorial Text */}
            <motion.div style={{ y: textY, opacity: heroOpacity }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Ausgabe Jänner 2026 · Wien
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.05]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="float-left text-[140px] sm:text-[180px] lg:text-[220px] leading-none mr-4 -mt-4 text-[#8B7355]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  D
                </motion.span>
                ie Kunst der<br />
                virtuellen Inszenierung
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl lg:text-2xl leading-relaxed text-[#6B6560] mb-10 max-w-lg"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
              >
                Wie 3D-Rundgänge Ihre Immobilie in ein begehrtes Objekt verwandeln.
                Eine fotografische Reise durch Wiens eleganteste Wohnräume.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-[#2C2824] text-[#2C2824] px-8 py-4 text-lg hover:bg-[#2C2824] hover:text-[#F5F3EE] transition-all duration-300"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Erfolgsgeschichten Lesen
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-[#8B7355] px-8 py-4 text-lg hover:text-[#2C2824] transition-colors"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  Kontakt aufnehmen →
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Editorial Image */}
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[700px]">
                <Image
                  src={hero.image}
                  alt="Editorial Photography Vienna"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-[#8B7355]/5" />
              </div>
              {/* Editorial overlay */}
              <div className="absolute -bottom-8 -left-8 bg-[#F5F3EE] p-8 shadow-2xl">
                <p className="text-sm text-[#8B7355] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Virtuelle Tour
                </p>
                <p className="text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                  Penthouse Döbling
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center text-[#8B7355]"
          >
            <span className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Weiterlesen</span>
            <div className="w-px h-12 bg-[#8B7355]/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* Editorial Divider */}
      <div className="container mx-auto px-8">
        <div className="border-t border-[#2C2824]/10" />
      </div>

      {/* Problem Section - Editorial Style */}
      <AnimatedSection className="py-24 px-8 bg-[#F5F3EE]">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p
              variants={fadeInUp}
              className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-8 text-center"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Kapitel I · Das Dilemma
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              <span className="text-[#8B7355] text-7xl md:text-8xl">„</span><br />
              Die verborgenen Kosten<br />
              leerer Besichtigungen
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="prose prose-lg max-w-none"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {[
                'Stellen Sie sich vor: Ein weiterer Nachmittag, eine weitere Besichtigung. Der Interessent betritt Ihre Immobilie, blickt sich kurz um, und nach zehn Minuten ist klar – es passt nicht. Zwei Stunden Ihrer Zeit, verloren.',
                'In Wien wiederholt sich diese Szene tausendfach, jeden Tag. Makler und Eigentümer opfern kostbare Stunden für Menschen, die nie ernsthaft kaufen wollten. Der wahre Preis? Nicht nur Zeit, sondern auch verpasste Chancen.',
                'Während Sie mit dem zehnten Interessenten durch leere Räume wandern, entscheidet sich der perfekte Käufer für eine andere Immobilie – eine, die er bereits virtuell erkunden konnte.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  className="text-xl text-[#6B6560] leading-relaxed mb-8 first-letter:text-5xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:text-[#8B7355]"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Solution Section - Magazine Layout */}
      <AnimatedSection className="py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-8 text-center"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Kapitel II · Die Revolution
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl text-center mb-16"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Virtuelle Rundgänge:<br />
            <span className="italic">Eine neue Ära</span>
          </motion.h2>

          {/* Video Preview - Magazine Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] mb-20 group"
          >
            <video
              src={hero.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2824]/40 via-transparent to-transparent" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="w-24 h-24 border-2 border-white flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </motion.div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Video-Tour</p>
              <p className="text-2xl" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                Erleben Sie den Unterschied
              </p>
            </div>
          </motion.div>

          {/* Stats - Editorial Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2C2824]/10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 text-center hover:bg-[#F5F3EE] transition-colors"
              >
                <div className="text-4xl md:text-5xl mb-3 text-[#8B7355]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B6560] uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section - Magazine Grid */}
      <AnimatedSection id="portfolio" className="py-24 px-8 bg-[#F5F3EE]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Kapitel III · Die Galerie
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Ausgewählte Projekte
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {portfolio.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-8">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="text-6xl text-[#8B7355]/40" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-3xl mb-2 group-hover:text-[#8B7355] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                      {property.title}
                    </h3>
                    <p className="text-[#6B6560] italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {property.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing Section - Editorial Cards */}
      <AnimatedSection id="services" className="py-24 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Kapitel IV · Die Investition
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Unsere Pakete
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
                whileHover={{ y: -10 }}
                className={`relative p-10 transition-all duration-500 ${
                  pkg.highlight
                    ? 'bg-[#2C2824] text-[#F5F3EE]'
                    : 'bg-[#F5F3EE] border border-[#2C2824]/10 hover:border-[#8B7355]/50'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-8 bg-[#8B7355] text-[#F5F3EE] px-4 py-1 text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Empfohlen
                  </div>
                )}

                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-5xl ${pkg.highlight ? 'text-[#F5F3EE]' : 'text-[#8B7355]'}`} style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
                    €{pkg.price}
                  </span>
                </div>
                <p className={`text-sm italic mb-8 pb-8 border-b ${pkg.highlight ? 'border-[#F5F3EE]/20 text-[#F5F3EE]/80' : 'border-[#2C2824]/10 text-[#6B6560]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {pkg.result}
                </p>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${pkg.highlight ? 'text-[#F5F3EE]/90' : 'text-[#6B6560]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      <span className="text-[#8B7355]">·</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 text-center transition-all ${
                    pkg.highlight
                      ? 'bg-[#F5F3EE] text-[#2C2824] hover:bg-[#8B7355] hover:text-[#F5F3EE]'
                      : 'border-2 border-[#2C2824] text-[#2C2824] hover:bg-[#2C2824] hover:text-[#F5F3EE]'
                  }`}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Anfrage Starten
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Process Section - Editorial Timeline */}
      <AnimatedSection id="process" className="py-24 px-8 bg-[#F5F3EE]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              Kapitel V · Der Weg
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Von der Vision zur Realität
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#8B7355]/30" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="flex gap-12 mb-12 last:mb-0 group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5F3EE] border border-[#8B7355]/30 flex items-center justify-center text-2xl text-[#8B7355] group-hover:bg-[#8B7355] group-hover:text-[#F5F3EE] transition-all" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {step.step}
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl mb-2 group-hover:text-[#8B7355] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#6B6560] italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section - Editorial */}
      <AnimatedSection id="contact" className="py-32 px-8 bg-[#2C2824] text-[#F5F3EE] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B7355] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#8B7355] uppercase tracking-[0.3em] text-xs mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Epilog · Ihr nächster Schritt
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              Bereit, Ihre Geschichte<br />
              <span className="italic text-[#8B7355]">neu zu schreiben?</span>
            </h2>
            <p className="text-xl text-[#F5F3EE]/60 mb-12 max-w-xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
              Nächste 5 Buchungen: 20% Rabatt. Noch 3 Plätze verfügbar.
            </p>

            <motion.a
              href="mailto:info@immobilien-photograph.wien"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block border-2 border-[#F5F3EE] text-[#F5F3EE] px-12 py-5 text-lg hover:bg-[#F5F3EE] hover:text-[#2C2824] transition-all duration-300"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Ihre Geschichte beginnt hier
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer - Editorial */}
      <footer className="py-16 px-8 bg-[#F5F3EE] border-t border-[#2C2824]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                Immobilien-Photograph Wien
              </h3>
              <p className="text-[#6B6560] mb-6 max-w-sm italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Die Kunst der virtuellen Inszenierung. Professionelle 3D-Rundgänge und Immobilienfotografie.
              </p>
              <p className="text-[#6B6560]/60 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Raaber-Bahn-Gasse 11, 1100 Wien
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-6 text-[#8B7355]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Services
              </h4>
              <ul className="space-y-3 text-[#6B6560] text-sm italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <li><a href="#" className="hover:text-[#8B7355] transition-colors">3D Virtual Tours</a></li>
                <li><a href="#" className="hover:text-[#8B7355] transition-colors">Immobilienfotografie</a></li>
                <li><a href="#" className="hover:text-[#8B7355] transition-colors">Drohnenaufnahmen</a></li>
                <li><a href="#" className="hover:text-[#8B7355] transition-colors">Video Tours</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-6 text-[#8B7355]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-3 text-[#6B6560] text-sm italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <li><Link href="/impressum" className="hover:text-[#8B7355] transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-[#8B7355] transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="hover:text-[#8B7355] transition-colors">AGB</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2C2824]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B6560]/60 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              © 2026 immobilien-photograph.wien
            </p>
            <p className="text-[#8B7355]/50 text-xs italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Editorial Magazine Design
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
