'use client';

import { useState, FormEvent } from 'react';
import ScrollReveal from '../animations/ScrollReveal';

interface ContactFormProps {
  variant?: 'minimal' | 'standard';
}

export default function ContactForm({ variant = 'standard' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Austrian phone regex: accepts +43... or 0...
  const PHONE_REGEX = /^(\+43|0)[1-9][0-9]{3,12}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    // Phone validation
    const normalizedPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!normalizedPhone) {
      newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein';
    } else if (!PHONE_REGEX.test(normalizedPhone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige österreichische Telefonnummer ein (+43... oder 0...)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Mock submission (no backend)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-center mb-4">Kontakt</h2>
          <p className="narrative-text text-center mb-16 max-w-2xl mx-auto">
            Bereit für beeindruckende Immobilienfotos? Kontaktieren Sie uns für eine kostenlose Beratung
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-body font-medium text-olive mb-2">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-olive-light'
                  } focus:outline-none focus:ring-2 focus:ring-gold font-body`}
                  placeholder="Ihr Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-body">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body font-medium text-olive mb-2">
                  E-Mail <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-olive-light'
                  } focus:outline-none focus:ring-2 focus:ring-gold font-body`}
                  placeholder="ihre.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-body">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-body font-medium text-olive mb-2">
                  Telefon <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-olive-light'
                  } focus:outline-none focus:ring-2 focus:ring-gold font-body`}
                  placeholder="+43 664 1234567 oder 0664 1234567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 font-body">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-body font-medium text-olive mb-2">
                  Nachricht <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-olive-light'
                  } focus:outline-none focus:ring-2 focus:ring-gold font-body resize-none`}
                  placeholder="Erzählen Sie uns von Ihrer Immobilie..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-body">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gold text-white px-8 py-4 rounded-full font-body font-medium text-lg transition-all ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gold/90 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg font-body text-center">
                  ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
