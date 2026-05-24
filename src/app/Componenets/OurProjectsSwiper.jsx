"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    src: "/images/acacia-2.png",
    title: "Accacia 3 Bedroom Apartment",
    category: "Apartment Interior",
    link: "/acacia-3-bedroom-apartment",
  },
  {
    id: 2,
    src: "/images/bluewaters-3.png",
    title: "Bluewaters 3 Bedroom Design",
    category: "Luxury Apartment",
    link: "/gallery",
  },
  {
    id: 3,
    src: "/images/boulevard-5.png",
    title: "Boulevard Point Penthouse",
    category: "Penthouse Interior",
    link: "/gallery",
  },
  {
    id: 4,
    src: "/images/bulgari-4.png",
    title: "Bulgari 2 Bedroom Apartment",
    category: "Modern Living",
    link: "/gallery",
  },
  {
    id: 5,
    src: "/images/citywalk-1.png",
    title: "City Walk 3 Bedroom Apartment",
    category: "Luxury Renovation",
    link: "/gallery",
  },
  {
    id: 6,
    src: "/images/damac-9.png",
    title: "Villa Damac Hills 5 Bedroom",
    category: "Villa Renovation",
    link: "/gallery",
  },
  {
    id: 7,
    src: "/images/jbr-2.png",
    title: "JBR Luxury Apartment",
    category: "Interior Design",
    link: "/gallery",
  },
  {
    id: 8,
    src: "/images/marina-3.png",
    title: "Dubai Marina Residence",
    category: "Modern Apartment",
    link: "/gallery",
  },
];

export default function OurProjectsSwiper() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".projects-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".project-slide", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black overflow-hidden py-10"
    >

      {/* HEADER */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-8">

        <p className="projects-title text-[#367a72] uppercase tracking-[3px] text-xs mb-3">
          Our Projects
        </p>

        <div className="projects-title flex items-center justify-between gap-4">

          <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
            Recently Completed Works
          </h2>

          <Link
            href="/gallery"
            className="flex items-center gap-2 text-white hover:text-[#5f6f52] transition text-sm md:text-base"
          >
            More
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={900}
        spaceBetween={10}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
        className="our-projects-swiper"
      >

        {projects.map((project) => (
          <SwiperSlide key={project.id} className="project-slide">

            <Link
              href={project.link}
              className="relative block h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden group"
            >

              {/* IMAGE */}
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-[2000ms]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-4 left-4 right-4 text-white">

                <p className="text-[10px] uppercase tracking-[3px] text-white/70 mb-1">
                  {project.category}
                </p>

                <h3 className="text-sm md:text-base font-semibold leading-snug">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mt-4">

                  <div className="w-10 h-[1px] bg-white/70 group-hover:w-16 transition-all duration-500" />

                  <div className="w-9 h-9 border border-white/30 flex items-center justify-center group-hover:bg-white transition">

                    <ArrowRight
                      size={14}
                      className="text-white group-hover:text-black"
                    />

                  </div>

                </div>

              </div>

            </Link>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* SWIPER STYLE */}
      <style jsx global>{`
        .our-projects-swiper {
          padding-left: 12px;
        }

        .our-projects-swiper .swiper-button-prev,
        .our-projects-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: white;
          backdrop-filter: blur(8px);
        }

        .our-projects-swiper .swiper-button-prev:after,
        .our-projects-swiper .swiper-button-next:after {
          font-size: 12px;
        }
      `}</style>

    </section>
  );
}