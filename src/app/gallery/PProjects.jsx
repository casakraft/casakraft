"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Accacia 3 Bedroom Apartment",
    img: "/images/gp-1.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/acacia-3-bedroom-apartment",
  },
    {
    title: "Bluewaters 3 Bedroom Design",
    img: "/images/gp-2.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/bluewaters-3-bedroom-design",
  },
    {
    title: "Boulevard Point Penthouse",
    img: "/images/gp-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/boulevard-point-penthouse",
  },
    {
    title: "Bulgari 2 Bedroom Apartment",
    img: "/images/gp-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/bulgari-2-bedroom-apartment",
  },
    {
    title: "City Walk 3 Bedroom Apartment",
    img: "/images/gp-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/city-walk-3-bedroom-apartment",
  },
    {
    title: "Villa Damac Hills 5 Bedroom",
    img: "/images/gp-6.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/villa-damac-hills-5-bedroom",
  },
    {
    title: "JBR 3 Bedroom Apartment",
    img: "/images/gp-7.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/jbr-3-bedroom-apartment",
  },
    {
    title: "Marina Gate Penthouse",
    img: "/images/gp-8.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/marina-gate-penthouse",
  },
    {
    title: "Marina Gate Penthouse 2",
    img: "/images/gp-9.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/marina-gate-penthouse-2",
  },
    {
    title: "Dubai Marina Penthouse",
    img: "/images/gp-10.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/dubai-marina-penthouse",
  },
    {
    title: "Meadows Contemporary Villa",
    img: "/images/gp-11.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/meadows-contemporary-villa",
  },
    {
    title: "Nikki Beach 2 Bedroom Apartment",
    img: "/images/gp-12.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/nikki-beach-2-bedroom-apartment",
  },
    {
    title: "Palm Jumeirah Apartment",
    img: "/images/gp-13.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/palm-jumeirah-apartment",
  },

];

const PProjects = () => {
  return (
    <section className="w-full bg-[#EDEDED] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="uppercase tracking-wide text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-600">
          Casa Kraft Interiors Related Services
        </h2>

        {/* Decorative Divider */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <span className="hidden sm:block h-[2px] w-40 bg-neutral-400/60" />
          <div className="flex items-center gap-3">
            <span className="inline-block w-5 h-5 rounded-full border-2 border-[#C89A5B] bg-white" />
            <span className="inline-block w-5 h-5 rounded-full border-2 border-[#C89A5B] bg-white" />
            <span className="inline-block w-5 h-5 rounded-full border-2 border-[#C89A5B] bg-white" />
          </div>
          <span className="hidden sm:block h-[2px] w-40 bg-neutral-400/60" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="mt-8 mx-6 mb-6 text-center border border-neutral-400 px-6 py-3 text-lg text-neutral-800 group-hover:bg-neutral-100 transition">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PProjects;
