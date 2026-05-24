"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: "awards",
    title: "AWARDS",
    heading: "Premium Interior Excellence",
    text: `Casa Kraft delivers complete design and build solutions under one contract, ensuring seamless execution from concept to completion with consistency and premium quality.`,
  },
  {
    id: "concept",
    title: "CONCEPT",
    heading: "Modern Design Philosophy",
    text: `Our Sheikh Zayed Road showroom lets clients explore luxury materials and finishes while we blend architectural precision with modern interior styling.`,
  },
  {
    id: "history",
    title: "HISTORY",
    heading: "Experience & Trust",
    text: `We provide 10-year warranty and free 3D visualization before execution, ensuring confidence, clarity, and long-term value for every project.`,
  },
];

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("awards");
  const sectionRef = useRef(null);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".wc-image", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".wc-content", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f7f7] text-black overflow-hidden py-10 md:py-12"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-14">

        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* LEFT IMAGE WITH ANIMATION */}
          <div className="wc-image relative h-[260px] md:h-[340px] lg:h-[400px] overflow-hidden">
            <Image
              src="/images/jbr-2.png"
              alt="Casa Kraft Interior Design"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="wc-content flex items-center">
            <div className="max-w-xl w-full">

              {/* LABEL */}
              <p className="uppercase tracking-[4px] text-xs text-gray-500 mb-4">
                WHY CHOOSE US
              </p>

              {/* HEADING ANIMATION */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeContent?.heading}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-light mb-5 leading-snug"
                >
                  {activeContent?.heading}
                </motion.h2>
              </AnimatePresence>

              {/* TABS */}
              <div className="flex gap-5 border-b border-black/10 mb-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-xs md:text-sm tracking-wide relative transition ${
                      activeTab === tab.id
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab.title}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
                        activeTab === tab.id ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* TEXT ANIMATION */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeContent?.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 text-sm md:text-base leading-relaxed mb-5"
                >
                  {activeContent?.text}
                </motion.p>
              </AnimatePresence>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm mb-6">
                <p>• Design & Build Contract</p>
                <p>• Sheikh Zayed Showroom</p>
                <p>• 10-Year Warranty</p>
                <p>• Free 3D Design</p>
              </div>

             {/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4">
  
  <Link href="/gallery">
    <button className="border border-black px-7 py-3 text-sm tracking-wide font-medium hover:bg-black hover:text-white transition duration-300">
      See Projects
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="bg-black text-white px-7 py-3 text-sm tracking-wide font-medium hover:bg-gray-800 transition duration-300">
      Free Consultation
    </button>
  </Link>

</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;