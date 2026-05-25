"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const CheroSection = () => {
  return (
    <div className="w-full">

      {/* CONTACT HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/damac-11.png"
          alt="Contact Hero"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-20 w-full h-full flex items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl ml-[8%] lg:ml-[10%] px-6 space-y-4 pt-30"
          >

            {/* LABEL */}
            <motion.span
              variants={item}
              className="uppercase tracking-[5px] text-xs text-[#4eb5a9] inline-block"
            >
              Renovation Dubai
            </motion.span>

            {/* HEADING */}
            <motion.h1
              variants={item}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
             Dubai's Most Trusted Renovation Experts
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              variants={item}
              className="text-white/80 text-sm sm:text-base leading-relaxed"
            >
              Have a project in mind? Contact us today and our expert team will help you
              design, renovate, and transform your space into something truly luxurious.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={item}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <a
                href="/projects"
                className="bg-[#1f4a45] hover:bg-[#275f58] text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
              >
                Our Projects
              </a>

              <a
                href="/gallery"
                className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
              >
                View Gallery
              </a>
            </motion.div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default CheroSection;