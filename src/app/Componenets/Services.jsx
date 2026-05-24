"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-black"
    >
      {/* TITLE */}
      <h2 className="text-center text-white font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
        Our Interior Design Services In Dubai
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[92%] mx-auto">

        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="service-card group block"
          >
            {/* CARD */}
            <div className="relative bg-[#111111] border border-[#4eb5a9]/20 shadow-sm overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:border-[#4eb5a9s]/50">

              {/* IMAGE */}
              <div className="relative w-full h-52 md:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* TEXT ON IMAGE */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-white font-semibold text-sm md:text-base tracking-wide">
                  {service.title}
                </h3>

                {/* UNDERLINE */}
                <div className="mt-2 w-10 h-[1px] bg-[#4eb5a9] group-hover:w-16 transition-all duration-500" />
              </div>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default Services;