"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Arabella 2 Bedroom Townhouse",
    img: "/images/sample-1.jpg", // replace with your actual image
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/arabella-2-bedroom-townhouse",
  },
  {
    title: "Central Park penthouse",
    img: "/images/sample-2.jpg",
    alt: "Central Park penthouse",
    href: "/projects/central-park",
  },
  {
    title: "District 1 MBR city. Contemporary villa",
    img: "/images/sample-3.jpg",
    alt: "District 1 villa",
    href: "/projects/district-1",
  },
];

const PProjects = () => {
  return (
    <section className="w-full bg-[#EDEDED] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="uppercase tracking-wide text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-600">
          Muse Design Related Services
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
