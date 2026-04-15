"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
  { id: 1, src: "/images/acacia-2.png", alt: "Project 1" },
  { id: 1, src: "/images/bluewaters-3.png", alt: "Project 1" },
  { id: 1, src: "/images/boulevard-5.png", alt: "Project 1" },
  { id: 1, src: "/images/bulgari-4.png", alt: "Project 1" },
  { id: 1, src: "/images/citywalk-1.png", alt: "Project 1" },
  { id: 1, src: "/images/damac-9.png", alt: "Project 1" },
  { id: 1, src: "/images/jbr-2.png", alt: "Project 1" },
  { id: 1, src: "/images/marina-3.png", alt: "Project 1" },

];

export default function OurProjectsSwiper() {
  return (
    <section className="w-full bg-[#f3f3f3] py-6 md:py-6">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#241326] sm:text-2xl md:text-3xl">
            Our Projects
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          centeredSlides={false}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          spaceBetween={12}
          slidesPerView={1.1}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 22,
            },
          }}
          className="our-projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-[400px] sm:h-[200px] md:h-[240px] lg:h-[300px]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .our-projects-swiper .swiper-button-prev,
        .our-projects-swiper .swiper-button-next {
          color: rgba(255, 255, 255, 0.95);
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
        }

        .our-projects-swiper .swiper-button-prev:after,
        .our-projects-swiper .swiper-button-next:after {
          font-size: 16px;
          font-weight: 700;
        }

        @media (max-width: 767px) {
          .our-projects-swiper .swiper-button-prev,
          .our-projects-swiper .swiper-button-next {
            width: 36px;
            height: 36px;
          }

          .our-projects-swiper .swiper-button-prev:after,
          .our-projects-swiper .swiper-button-next:after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}