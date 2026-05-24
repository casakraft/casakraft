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
      className="relative bg-[#f7f7f7] py-10 md:py-14 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-14">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="about-text text-2xl md:text-4xl font-semibold text-black">
            About Us
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT CONTENT */}
          <div className="left-card lg:col-span-5">
            <div className="bg-white p-6 md:p-8 shadow-sm">

              <h2 className="about-text text-2xl md:text-3xl font-semibold leading-snug mb-4 text-black">
                Interior Design Company Dubai - Casa Kraft Interiors
              </h2>

              <p className="about-text text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                Casa Kraft Interiors and Renovations is a leading renovation company in Dubai specializing in apartment and villa interior design, renovation services, landscape design, and turnkey fit-out solutions.
              </p>

              <p className="about-text text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                As one of the most trusted renovation companies in Dubai, we create elegant, functional, and personalized spaces that reflect modern living. Our expert team delivers high-quality results from concept development to final execution with precision and attention to detail.
              </p>

              <Link href="/contact-us">
                <button className="about-text group bg-black hover:bg-[#c68b4e] text-white px-6 py-3 uppercase tracking-widest text-xs flex items-center gap-2 transition">
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
              src="/images/bhd-4.png"
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