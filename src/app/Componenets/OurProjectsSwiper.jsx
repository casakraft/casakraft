"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
  return (
    <section className="w-full bg-[#f7f7f5]  overflow-hidden">

      {/* Heading */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-14">

        <p className="text-[#b6935b] uppercase tracking-[4px] text-sm font-conthrax mb-5">
          Our Projects
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <h2 className="text-black text-3xl sm:text-4xl md:text-5xl leading-tight font-conthrax max-w-4xl">
            RECENTLY COMPLETED WORKS
          </h2>

          <Link
            href="/gallery"
            className="flex items-center gap-3 text-black hover:text-[#b6935b] transition-all duration-300 text-lg font-play"
          >
            More Projects
            <ArrowRight size={20} />
          </Link>

        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        spaceBetween={4}
        slidesPerView={1.1}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1280: {
            slidesPerView: 4.2,
          },
        }}
        className="our-projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>

            <Link
              href={project.link}
          className="relative block h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden group"            >

              {/* Background Image */}
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2500ms] ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-end p-8 md:p-10">

                <div className="w-full">

                  {/* Category */}
                  <p className="text-white/70 uppercase tracking-[4px] text-xs md:text-sm mb-4 font-play">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-white text-2xl md:text-3xl leading-tight font-conthrax max-w-[90%]">
                    {project.title}
                  </h3>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between mt-8">

                    {/* Animated Line */}
                    <div className="w-16 group-hover:w-28 h-[1px] bg-white transition-all duration-500" />

                   <div className="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:bg-white transition-all duration-500">

  <ArrowRight
    size={18}
    className="text-white group-hover:text-black transform group-hover:translate-x-1 transition-all duration-500"
  />

                    </div>

                  </div>

                </div>
              </div>

            </Link>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Button */}
   

      {/* Swiper Styling */}
      <style jsx global>{`
        .our-projects-swiper {
          padding-left: 20px;
        }

        .our-projects-swiper .swiper-button-prev,
        .our-projects-swiper .swiper-button-next {
          color: white;
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          transition: all 0.4s ease;
        }

        .our-projects-swiper .swiper-button-prev:hover,
        .our-projects-swiper .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .our-projects-swiper .swiper-button-prev:after,
        .our-projects-swiper .swiper-button-next:after {
          font-size: 16px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .our-projects-swiper .swiper-button-prev,
          .our-projects-swiper .swiper-button-next {
            width: 42px;
            height: 42px;
          }

          .our-projects-swiper .swiper-button-prev:after,
          .our-projects-swiper .swiper-button-next:after {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}