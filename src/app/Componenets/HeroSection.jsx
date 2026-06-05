"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";

const slides = [
  {
    image: "/images/apartment-interior-design.png",
    title: "Luxury Apartment & Villa Interior Design in Dubai",
    subtitle:
      "Premium apartment interior design and renovation solutions crafted for modern luxury living in Dubai.",
  },
  {
    image: "/images/aptt3.png",
    title: "Home Renovation Services in Dubai – Luxury Fit-Out Specialists",
    subtitle:
      "Transforming apartments, villas, and interiors with bespoke craftsmanship and timeless aesthetics.",
  },
  {
    image: "/images/bluewaters-2.png",
    title: "Commercial Interior Design & Fit-Out Company in Dubai",
    subtitle:
      "Specialized in luxury renovation, fit-out, and interior design services tailored for sophisticated lifestyles.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl"
            >
              {/* Brand Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-conthrax"
              >
              
              </motion.p>

              {/* SEO-Friendly Heading */}
              {current === 0 ? (
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                >
                  {slides[current].title}
                </motion.h1>
              ) : (
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                >
                  {slides[current].title}
                </motion.h2>
              )}

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/80 text-base sm:text-lg md:text-2xl mt-8 leading-relaxed max-w-3xl font-play"
              >
                {slides[current].subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-6 mt-12 flex-wrap"
              >
                <Link
                  href="/services"
                  className="bg-white text-black px-8 md:px-10 py-4 md:py-5 text-sm md:text-base uppercase tracking-[2px] font-conthrax hover:bg-[#193c38] hover:text-white transition-all duration-500 flex items-center gap-4"
                >
                  Our Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/gallery"
                  className="text-white text-sm md:text-lg font-play underline underline-offset-8 hover:text-gray-300 transition-all duration-300"
                >
                  View Our Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-6 md:right-10 z-30 text-white font-conthrax text-sm md:text-lg tracking-[3px]">
        0{current + 1} / 0{slides.length}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;