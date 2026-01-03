'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cross1Icon } from '@radix-ui/react-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    // Lock body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Prozess', href: '#process' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-olive/50 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream shadow-2xl z-50 md:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 text-olive hover:text-olive-medium transition-colors"
                aria-label="Menu schließen"
              >
                <Cross1Icon className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-6 py-8">
              <ul className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block text-2xl font-display font-semibold text-olive hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="block w-full bg-gold text-white text-center px-6 py-3 rounded-full font-body font-medium hover:bg-gold/90 transition-colors"
                >
                  Kostenlose Beratung
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
