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
    <section
      ref={sectionRef}
      className="bg-[#111111] border-t border-b border-white/10"
    >

      {/* CTA SECTION */}
      <div
        ref={ctaRef}
        className="bg-[#111111] py-10 px-4 text-center"
      >
        <h2 className="text-[26px] sm:text-[25px] font-bold mb-2">
          <span className="text-white">
            GET IN TOUCH WITH CASA KRAFT
          </span>
        </h2>

        <p className="text-white text-base mb-10">
          Luxury Interior Design & Renovation Company in Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            href="/gallery"
            className="bg-[#1f4a45] hover:bg-[#275f58] text-white font-semibold py-3 px-10 transition"
          >
            See Our Projects
          </Link>

          <a
            href="https://wa.me/971586023677"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] border border-[#4eb5a9] hover:bg-[#b49a55] hover:text-black text-white font-semibold py-3 px-10 transition"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:info@casakraftinteriors.ae"
            className="bg-white hover:bg-[#b49a55] hover:text-black text-black font-semibold py-3 px-10  transition"
          >
            Request Quote
          </a>

        </div>
      </div>

    </section>
  );
};

export default GetInTouch;