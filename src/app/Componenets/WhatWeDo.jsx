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
    title: "Free 3D Design",
    heading: "Premium Interior Excellence",
    text: `Before starting a project, we provide 3D designs to our clients without any cost which give you a clear and realistic view of your future space. Our interior designers in Dubai ensure every detail is perfected before execution.`,
  },
  {
    id: "concept",
    title: "Transparent Quotation",
    heading: "Modern Design Philosophy",
    text: `We don't add any hidden costs. Our interior design services in Dubai come with a detailed clear quotation which covers every aspect of the project.`,
  },
  {
    id: "history",
    title: "Project Management",
    heading: "Experience & Trust",
    text: `From the first inquiry to the final handover of your project, our team manages everything including NOC approvals, authority documentation and on-site execution.Choose us for the best interior design and renovation experience in Dubai with one team, one contract, zero stress.`,
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
      className="bg-black text-white overflow-hidden py-10 md:py-12"
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
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="wc-content flex items-center">
            <div className="max-w-xl w-full">

              {/* LABEL */}
              <p className="uppercase tracking-[4px] text-xs text-[#4eb5a9] mb-4">
                WHY CHOOSE US
              </p>

              {/* HEADING ANIMATION (UNCHANGED) */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeContent?.heading}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-light mb-5 leading-snug text-white"
                >
                  {activeContent?.heading}
                </motion.h2>
              </AnimatePresence>

              {/* TABS */}
              <div className="flex gap-5 border-b border-white mb-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-xs md:text-sm tracking-wide relative transition ${
                      activeTab === tab.id
                        ? "text-[#4eb5a9]"
                        : "text-white hover:text-white"
                    }`}
                  >
                    {tab.title}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#4eb5a9] transition-all duration-300 ${
                        activeTab === tab.id ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* TEXT ANIMATION (ONLY CHANGED HERE) */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeContent?.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-xs md:text-sm leading-relaxed mb-5"
                >
                  {activeContent?.text}
                </motion.p>
              </AnimatePresence>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white text-xs md:text-sm mb-6">
                <p>• Interior Renovation</p>
                <p>• Sheikh Zayed Office</p>
                <p>• Commercial & Residential</p>
                <p>• Free 3D Design</p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/gallery"
                  className="border border-white px-7 py-3 text-sm hover:bg-white hover:text-black transition text-center"
                >
                  See Projects
                </a>

                <a
                  href="/contact-us"
                  className="text-white px-7 py-3 text-sm bg-[#1f4a45] hover:bg-[#275f58] transition text-center"
                >
                  Free Consultation
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;