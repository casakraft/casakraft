"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [
  { id: 1, src: "/images/agt.png", alt: "" },
  { id: 2, src: "/images/egger.png", alt: "" },
  { id: 3, src: "/images/kesse.png", alt: "" },
  { id: 4, src: "/images/rak.png", alt: "" },
  { id: 5, src: "/images/italian.png", alt: "" },
  { id: 6, src: "/images/jaquar.png", alt: "" },
  { id: 7, src: "/images/teka.png", alt: "" },
  { id: 8, src: "/images/elba.png", alt: "" },
  { id: 9, src: "/images/jotun.png", alt: "" },
  { id: 10, src: "/images/asian.png", alt: "" },
  { id: 11, src: "/images/conate.png", alt: "" },
  { id: 12, src: "/images/kozu.png", alt: "" },
  { id: 13, src: "/images/blum.jpeg", alt: "" },
  { id: 14, src: "/images/quooker.jpeg", alt: "" },
  { id: 15, src: "/images/glaze.jpeg", alt: "" },
  { id: 16, src: "/images/schneider.jpeg", alt: "" },
];

export default function PartnersSwiper() {
  return (
    <section className="w-full bg-[#f5f7fa] py-2 md:py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:gap-10">
        
        {/* Left Heading */}
        <div className="md:w-1/3">
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
            
          </p>
          <h2 className="text-sm font-medium leading-relaxed text-gray-800 md:text-xl">
            Our Partners
          </h2>
        </div>

        {/* Right Swiper */}
        <div className="md:w-2/3">
          <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  speed={6000} // smoother, longer travel
  freeMode={true}
  freeModeMomentum={false}
  allowTouchMove={false}  // optional: disables user drag for perfect continuous motion
  slidesPerView={2.5}
  spaceBetween={8}
  breakpoints={{
    480: { slidesPerView: 3, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 12 },
    1024: { slidesPerView: 4, spaceBetween: 12 },
  }}
  className="!overflow-hidden"
>
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <div className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
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
