"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------- AREAS ----------------
const areas = [
  { id: 1, name: "Palm Jumeirah", href: "/interior-design-palm-jumeirah", src: "/images/palm-jumeirah.jpg" },
  { id: 2, name: "Atlantis The Royal", href: "/interior-design-company-royal-atlantis", src: "/images/atlantiss.jpg" },
  { id: 3, name: "Dubai Marina", href: "/interior-design-dubai-marina", src: "/images/dubai-marina.jpg" },
  { id: 4, name: "Business Bay", href: "/interior-design-company-business-bay", src: "/images/business-bay.jpg" },
  { id: 5, name: "Downtown Dubai", href: "/interior-design-downtown-dubai", src: "/images/downtown.jpg" },
  { id: 6, name: "Damac Hills", href: "/interior-design-company-damac-hills", src: "/images/damac-hills.jpg" },
  { id: 7, name: "Bluewaters Dubai", href: "/interior-design-bluewaters-dubai", src: "/images/bluewaters-dubai.jpg" },
  { id: 8, name: "Dubai Creek Harbour", href: "/interior-design-dubai-creek-harbour", src: "/images/dubai-creek.jpg" },
];

// ---------------- SERVICES ----------------
const services = [
  { id: 1, name: "Villa Interior Design", href: "/villa-interior-design-dubai", src: "/images/villa-design-dubai.png" },
  { id: 2, name: "Apartment Interior Design", href: "/apartment-interior-design-dubai", src: "/images/apartment-interior-design.png" },
  { id: 3, name: "Office Interior Design", href: "/office-interior-design-dubai", src: "/images/CEO-office-interior-renovations.png" },
  { id: 4, name: "Home Renovation Dubai", href: "/home-renovation-dubai", src: "/images/kitchen-interior-design.png" },
  { id: 5, name: "Joinery", href: "/joinery-dubai", src: "/images/beach-front-design.png" },
  { id: 6, name: "Landscape Design Dubai", href: "/landscape-design-dubai", src: "/images/landscape-design.png" },
  { id: 7, name: "Villa Renovation Dubai", href: "/villa-renovation", src: "/images/villa-renovation.png" },
  { id: 8, name: "Apartment Renovation Dubai", href: "/apartment-renovation", src: "/images/apartment-renovation.png" },
];

const PProjects = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Areas animation
      gsap.from(".area-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".areas-section",
          start: "top 85%",
        },
      });

      // Services animation
      gsap.from(".service-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/images/p-bg.webp')] bg-cover bg-center bg-no-repeat text-white py-14"
    >
      {/* ================= AREAS ================= */}
      <div className="areas-section max-w-6xl mx-auto px-4 md:px-10 lg:px-14 mb-20">
        <h2 className="text-white mb-10 md:text-3xl font-bold text-center">
          AREAS WE SERVICE IN DUBAI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="area-card group relative overflow-hidden rounded-md border border-white/10"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={700}
                height={400}
                className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm md:text-base font-semibold">
                  {item.name}
                </h3>

                <p className="text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition duration-300">
                  Interior projects in {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="services-section max-w-6xl mx-auto px-4 md:px-10 lg:px-14">
        <h2 className="text-white mb-10 md:text-3xl font-bold text-center">
          OUR INTERIOR DESIGN SERVICES IN DUBAI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="service-card group relative overflow-hidden rounded-md border border-white/10"
            >
              <Image
                src={item.src}
                alt={item.name}
                width={700}
                height={400}
                className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-sm md:text-base font-semibold">
                  {item.name}
                </h3>

                <p className="text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition duration-300">
                  Premium {item.name} in Dubai
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="mailto:info@wedointerior.ae"
            className="uppercase font-semibold tracking-wide px-20 py-3.5 text-sm text-[#4eb5a9] bg-transparent transition duration-300 hover:bg-[#4eb5a9]/10 border border-transparent"
            style={{
              borderImage: "linear-gradient(to right, #caa193, #4eb5a9)",
              borderImageSlice: 1,
            }}
          >
            SEND YOUR ENQUIRY NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default PProjects;