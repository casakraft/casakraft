"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".left-card", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".left-card",
          start: "top 85%",
        },
      });

      gsap.from(".center-image", {
        scale: 1.08,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".center-image",
          start: "top 85%",
        },
      });

      gsap.from(".right-image", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".right-image",
          start: "top 85%",
        },
      });

      gsap.from(".about-text", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.to(".floating-image", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-10 md:py-14 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-14">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-[#367a72] uppercase tracking-[3px] text-xs mb-3">
            About Us
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT CONTENT */}
          <div className="left-card lg:col-span-5">
            <div className="bg-[#111] p-6 md:p-8 border border-white/10">

              <h2 className="about-text text-2xl md:text-3xl font-semibold leading-snug mb-4 text-white">
                Interior Design Company Dubai - Casa Kraft Interiors
              </h2>

              <p className="about-text text-white-400 text-xs md:text-sm leading-relaxed mb-6">
                Every space is an art and a great space is formed with a vision. Casa kraft interior design and renovation is a leading <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">interior design company in Dubai</a></b> and is devoted to creating beautiful and liveable spaces. From apartments to villas and offices to restaurants, we are among the best interior design companies in Dubai, known for the spaces that speak before even saying a word.
              </p>

              <p className="about-text text-white-400 text-xs md:text-sm leading-relaxed mb-6">
               Our team of interior designers in Dubai use their expertise in residential interior design and <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/renovation-dubai">home renovation services</a></b>. They guide every project from sketch to final touches. We have set a standard of our interior design services in different areas across Dubai like Palm Jumeirah, Downtown Dubai, Dubai Marina.
              </p>

              {/* ✅ FIXED BUTTON (removed about-text class) */}
              <Link href="/contact-us">
                <button className="group bg-[#1f4a45] hover:bg-[#275f58] text-white px-6 py-3 uppercase tracking-widest text-xs flex items-center gap-2 transition">
                  Free Consultation
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </button>
              </Link>

            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="center-image floating-image lg:col-span-4 relative h-[320px] md:h-[420px] overflow-hidden">
            <Image
              src="/images/Top_Interior_Design_Firm_For_Apartments_And_Villas_In_Dubai.png"
              alt="Luxury Interior Dubai"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="right-image hidden lg:block lg:col-span-3 relative h-[280px] md:h-[360px] overflow-hidden">
            <Image
              src="/images/kitchen-design.png"
              alt="Renovation Work"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;