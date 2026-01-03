'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../animations/ScrollReveal';
import { ChevronLeftIcon, ChevronRightIcon, StarFilledIcon } from '@radix-ui/react-icons';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="section-title text-center mb-4">Was Kunden sagen</h2>
          <p className="narrative-text text-center mb-16 max-w-2xl mx-auto">
            Erfolgsgeschichten von zufriedenen Immobilienmaklern und Eigentümern
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="bg-cream rounded-2xl p-8 lg:p-12 relative">
              {/* Quote Mark */}
              <div className="text-gold text-6xl font-serif absolute top-4 left-4 opacity-20">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <StarFilledIcon key={i} className="w-5 h-5 text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-serif text-xl lg:text-2xl text-olive-medium text-center mb-8 leading-relaxed relative z-10">
                {currentTestimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-olive">
                    {currentTestimonial.name}
                  </p>
                  <p className="font-body text-sm text-olive-light">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-olive text-cream hover:bg-olive/80 transition-colors flex items-center justify-center"
                    aria-label="Vorheriges Testimonial"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-olive text-cream hover:bg-olive/80 transition-colors flex items-center justify-center"
                    aria-label="Nächstes Testimonial"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </div>
              )}

              {/* Dots */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-gold w-8' : 'bg-olive-light'
                      }`}
                      aria-label={`Gehe zu Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
