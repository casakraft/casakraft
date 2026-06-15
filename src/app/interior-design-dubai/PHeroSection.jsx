"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PHeroSection = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".fade-up", {
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-full overflow-hidden bg-black text-white">

      {/* HERO SECTION (Same style as About page) */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/acacia-7.png"
          alt="Interior Design Dubai"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-20 w-full hero-anim">

          <div className="max-w-xl ml-[8%] lg:ml-[10%] px-6">

            <span className="uppercase tracking-[5px] text-xs text-[#4eb5a9]">
              Casa Kraft Interiors
            </span>

            <h1 className="mt-6 text-3xl md:text-3xl font-semibold leading-tight">
              Interior Design Dubai – Areas We Serve - Services We Provide
            </h1>

            <p className="mt-6 text-gray-300 text-sm md:text-base leading-7">
              Casa Kraft Interior Design & Renovation is a leading interior design company in Dubai,
              delivering luxury residential and commercial interiors across Palm Jumeirah, Downtown Dubai,
              Business Bay, Dubai Marina, and Jumeirah.
            </p>

            {/* BUTTONS (same style as About page) */}
            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="/contact-us"
                className="bg-[#1f4a45] hover:bg-[#275f58] transition-all duration-300 px-6 py-3 text-sm text-white"
              >
                Free Consultation
              </a>

              <a
                href="/gallery"
                className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 text-sm text-white"
              >
               View projects
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PHeroSection;