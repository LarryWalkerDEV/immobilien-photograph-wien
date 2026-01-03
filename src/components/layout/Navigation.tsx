'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="font-display font-bold text-xl lg:text-2xl text-olive">
              immobilien-photograph.wien
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#portfolio"
                className="text-olive-medium hover:text-olive transition-colors font-body"
              >
                Portfolio
              </Link>
              <Link
                href="#process"
                className="text-olive-medium hover:text-olive transition-colors font-body"
              >
                Prozess
              </Link>
              <Link
                href="#pricing"
                className="text-olive-medium hover:text-olive transition-colors font-body"
              >
                Preise
              </Link>
              <Link
                href="#contact"
                className="bg-gold text-white px-6 py-2.5 rounded-full font-body font-medium hover:bg-gold/90 transition-colors"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-mobile-menu-trigger
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-olive hover:text-olive-medium transition-colors"
              aria-label="Menu öffnen"
            >
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
