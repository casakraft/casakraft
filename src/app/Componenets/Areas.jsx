"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  { id: 1, name: "Palm Jumeirah", href: "/palm-jumeirah", src: "/images/palm-jumeirah.jpg" },
  { id: 2, name: "Atlantis The Royal", href: "/atlantis-royal", src: "/images/atlantiss.jpg" },
  { id: 3, name: "Dubai Marina", href: "/dubai-marina", src: "/images/dubai-marina.jpg" },
  { id: 4, name: "Business Bay", href: "/business-bay", src: "/images/business-bay.jpg" },
  { id: 5, name: "Downtown Dubai", href: "/downtown-dubai", src: "/images/downtown.jpg" },
  { id: 6, name: "Damac Hills", href: "/dubai-hills", src: "/images/damac-hills.jpg" },
  { id: 7, name: "Blue waters Dubai", href: "/jlt", src: "/images/bluewaters-dubai.jpg" },
  { id: 8, name: "Dubai Creek Harbour", href: "/jvc", src: "/images/dubai-creek.jpg" },
];

const Areas = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".area-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="areas"
      className="w-full mt-10 pb-14 px-4 md:px-10 lg:px-14 bg-[#f7f7f7]"
    >

      {/* TITLE */}
      <h2 className="text-black mb-10  lg md:text-3xl font-bold text-center">
        Communities we work in Dubai
      </h2>

      {/* GRID 4 COLUMNS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {areas.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="area-card group relative overflow-hidden rounded-md shadow-sm"
          >

            {/* IMAGE */}
            <Image
              src={item.src}
              alt={item.name}
              width={700}
              height={400}
              className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* DARK PREMIUM GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 group-hover:opacity-100 transition duration-300" />

            {/* TEXT */}
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-sm md:text-base font-semibold">
                {item.name}
              </h3>

              <p className="text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition duration-300">
                Interior projects in {item.name}
              </p>
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default Areas;