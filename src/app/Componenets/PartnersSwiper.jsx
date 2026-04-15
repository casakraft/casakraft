"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [
  { id: 1, src: "/images/1.png", alt: "" },
  { id: 2, src: "/images/2.png", alt: "" },
  { id: 3, src: "/images/3.png", alt: "" },
  { id: 4, src: "/images/4.png", alt: "" },
  { id: 5, src: "/images/5.png", alt: "" },
  { id: 7, src: "/images/7.png", alt: "" },
  { id: 8, src: "/images/8.png", alt: "" },
  { id: 9, src: "/images/9.png", alt: "" },
  { id: 10, src: "/images/10.png", alt: "" },
  { id: 11, src: "/images/11.png", alt: "" },
  { id: 12, src: "/images/12.png", alt: "" },
  
  { id: 14, src: "/images/14.png", alt: "" },
  { id: 15, src: "/images/15.png", alt: "" },
  { id: 15, src: "/images/6.png", alt: "" },
  { id: 13, src: "/images/13.png", alt: "" },
];

export default function PartnersSwiper() {
  return (
    <section className="w-full bg-[#f5f7fa] py-2 md:py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:gap-6">
        
        {/* Left Heading */}
        <div className="md:w-1/3">
          <h2 className="text-sm md:text-lg font-black text-gray-800">
            Our Partners
          </h2>
        </div>

        {/* Right Swiper */}
        <div className="md:w-7/8">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000}
            freeMode={true}
            freeModeMomentum={false}
            allowTouchMove={false}
            slidesPerView={2.5}
            spaceBetween={4}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 6 },
              768: { slidesPerView: 4, spaceBetween: 8 },
              1024: { slidesPerView: 5, spaceBetween: 8 },
            }}
            className="!overflow-hidden"
          >
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <div className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={60}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}