"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Villa Interior Design", image: "/images/villa-design-dubai.png", href: "/villa-interior-design-dubai" },
  { title: "Apartment Interior Design", image: "/images/apartment-interior-design.png", href: "/apartment-interior-design-dubai" },
  { title: "Renovation Dubai", image: "/images/penthouse-interior-design.png", href: "/renovation-dubai" },
  { title: "Home Renovation Dubai", image: "/images/kitchen-interior-design.png", href: "/" },
  { title: "Joinery", image: "/images/beach-front-design.png", href: "/" },
  { title: "Landscape Design Dubai", image: "/images/landscape-design.png", href: "/" },
  { title: "Villa Renovation Dubai", image: "/images/villa-renovation.png", href: "/villa-renovation" },
  { title: "Apartment Renovation Dubai", image: "/images/apartment-renovation.png", href: "/apartment-renovation" },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#f6f6f6] py-16">
      {/* Title */}
      <h2 className="text-center text-[#c79d63] font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
        Our Most Demanding Interior Design Services In Dubai
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] sm:w-[85%] mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all hover:scale-[1.03]">
              <div className="relative w-full h-48 md:h-56 lg:h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-black font-semibold text-sm md:text-base">
                  {service.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
