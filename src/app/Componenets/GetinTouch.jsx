"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 3 info blocks stagger animation
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // CTA buttons animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white border-t border-b border-gray-200">


      
      {/* CTA SECTION */}
      <div
        ref={ctaRef}
        className="bg-[#e6e6e6] py-10 px-4 text-center"
      >
        <h2 className="text-[26px] sm:text-[25px] font-bold mb-2">
          <span className="text-[#c8a56a]">GET IN TOUCH WITH CASA KRAFT</span>
        </h2>

        <p className="text-black text-base mb-10">
          Luxury Interior Design & Renovation Company in Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            href="/gallery"
            className="bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            See Our Projects
          </Link>

          <a
            href="https://wa.me/971586023677"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:info@casakraftinteriors.ae"
            className="bg-[#b6935b] hover:bg-[#a2814f] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            Request Quote
          </a>

        </div>
      </div>

    </section>
  );
};

export default GetInTouch;