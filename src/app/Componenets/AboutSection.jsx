"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });

      tl.from(
        ".experience-badge",
        {
          y: 40,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      tl.from(
        ".about-text",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.5"
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section bg-[#f8f8f8] py-10 sm:py-15">

      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-12">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 relative">

          <div className="relative overflow-hidden">

            <Image
              src="/images/Top_Interior_Design_Firm_For_Apartments_And_Villas_In_Dubai.png"
              alt="Interior Design Dubai"
              width={800}
              height={600}
              className="about-image w-full h-auto object-cover"
            />

          </div>

          {/* BADGE */}
          <div className="experience-badge absolute top-10 right-10 bg-white/90 backdrop-blur-md shadow-xl px-6 py-5 rounded-xl text-center">
            <p className="text-xs tracking-widest text-gray-500 uppercase">
           Luxury Interiors
            </p>
            <h3 className="text-2xl font-bold text-[#b49a55]">Dubai</h3>
            <p className="text-sm text-gray-600 mt-1">Design • Fit-out • Renovation</p>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h2 className="about-text text-[#c68b4e] text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Interior Design Company Dubai - Casa Kraft Interiors
          </h2>

          <p className="about-text text-gray-700 text-sm sm:text-base mb-4">
            Casa Kraft Interiors and Renovations is a leading{" "}
            <b className="text-[#b49a55]">
              <a href="https://www.casakraftinteriors.ae/renovation-dubai">
                renovation company in Dubai
              </a>
            </b>{" "}
            which specializes in apartment and villa interior design, renovation services, landscape design, and turnkey fit-out services in Dubai.
          </p>

          <p className="about-text text-gray-700 text-sm sm:text-base mb-6">
            As one of the most trusted renovation companies in Dubai, Casa Kraft creates elegant, functional, and personalized spaces that reflect modern living style. Our expert team delivers high-quality results from concept to completion.
          </p>

          {/* BUTTONS */}
          <div className="about-text flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

            <Link href="/gallery">
              <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
                See Our Projects
              </button>
            </Link>

            <Link href="/contact-us">
              <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
                Free Consultation
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;