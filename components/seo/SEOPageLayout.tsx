'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Breadcrumb {
  name: string;
  href: string;
}

interface SEOPageLayoutProps {
  children: ReactNode;
  breadcrumbs: Breadcrumb[];
  heroImage?: string;
  heroTitle: string;
  heroSubtitle?: string;
}

export function SEOPageLayout({
  children,
  breadcrumbs,
  heroImage,
  heroTitle,
  heroSubtitle,
}: SEOPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-light tracking-wider text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            IMMOBILIEN-PHOTOGRAPH
          </Link>
          <div
            className="hidden md:flex gap-8 text-sm tracking-wide"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <Link
              href="/360-grad-rundgaenge-immobilien-wien"
              className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300"
            >
              360° Rundgänge
            </Link>
            <Link
              href="/immobilienfotografie-wien"
              className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300"
            >
              Fotografie
            </Link>
            <Link
              href="/preise-pakete"
              className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300"
            >
              Preise
            </Link>
            <Link
              href="/kontakt"
              className="text-white/60 hover:text-[#C9A55C] transition-colors duration-300"
            >
              Kontakt
            </Link>
          </div>
          <Link
            href="/kontakt"
            className="hidden md:block bg-[#C9A55C] text-[#0A0A0A] px-6 py-2 text-sm tracking-wider uppercase font-medium hover:bg-[#B8944B] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Angebot
          </Link>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="pt-24 pb-4 px-6 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/50">
            <ol className="flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span className="text-white/30">›</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-[#C9A55C]">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-[#C9A55C] transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image src={heroImage} alt={heroTitle} fill className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/90 to-[#0A0A0A]" />
          </div>
        )}
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {heroTitle}
          </motion.h1>
          {heroSubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
            >
              {heroSubtitle}
            </motion.p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <article className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-light prose-headings:text-white
              prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-[#C9A55C]
              prose-h4:text-xl prose-h4:md:text-2xl prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-white/70 prose-li:leading-relaxed
              prose-strong:text-[#C9A55C] prose-strong:font-medium
              prose-a:text-[#C9A55C] prose-a:no-underline hover:prose-a:underline
              prose-ul:my-6 prose-ol:my-6
              prose-blockquote:border-l-[#C9A55C] prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {children}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bereit für professionelle Immobilienvisualisierung?
          </h2>
          <p
            className="text-white/60 mb-8"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-[#C9A55C] text-[#0A0A0A] px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-[#B8944B] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kostenloses Angebot
            </Link>
            <Link
              href="/preise-pakete"
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-wider uppercase font-medium hover:border-[#C9A55C] hover:text-[#C9A55C] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Preise Ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                IMMOBILIEN-PHOTOGRAPH
              </h3>
              <p
                className="text-white/50 mb-6 max-w-sm"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Professionelle 360° Rundgänge und Immobilienfotografie für anspruchsvolle Verkäufer
                in Wien.
              </p>
              <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Raaber-Bahn-Gasse 11, 1100 Wien
              </p>
            </div>
            <div>
              <h4
                className="text-sm uppercase tracking-wider mb-6 text-white/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Services
              </h4>
              <ul
                className="space-y-3 text-white/40 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <li>
                  <Link
                    href="/360-grad-rundgaenge-immobilien-wien"
                    className="hover:text-[#C9A55C] transition-colors"
                  >
                    360° Rundgänge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/immobilienfotografie-wien"
                    className="hover:text-[#C9A55C] transition-colors"
                  >
                    Immobilienfotografie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/drohnenaufnahmen-immobilien-wien"
                    className="hover:text-[#C9A55C] transition-colors"
                  >
                    Drohnenaufnahmen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/matterport-3d-touren-wien"
                    className="hover:text-[#C9A55C] transition-colors"
                  >
                    Matterport 3D
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="text-sm uppercase tracking-wider mb-6 text-white/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Legal
              </h4>
              <ul
                className="space-y-3 text-white/40 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <li>
                  <Link href="/impressum" className="hover:text-[#C9A55C] transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-[#C9A55C] transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="hover:text-[#C9A55C] transition-colors">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2026 immobilien-photograph.wien. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
