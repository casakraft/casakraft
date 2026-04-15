"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const logos = [
  "/images/dm.png",
  "/images/dcd.png",
  "/images/nakheel.png",
  "/images/emaar.png",
  "/images/dm.png",
  "/images/dcd.png",
  "/images/nakheel.png",
  "/images/emaar.png",
];

const OurAuthorities = () => {
  return (
    <section className="bg-white px-4 py-10 text-center text-black sm:px-8 lg:px-16">
      <div className="mb-8">
        <h2 className="mt-10 text-sm font-conthrax tracking-widest sm:text-xl">
          OUR AUTHORITIES
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={800}
          centeredSlides={true}
          spaceBetween={12}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className="our-authorities-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Authority logo ${index + 1}`}
                  width={160}
                  height={100}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .our-authorities-swiper {
          padding: 0 36px;
        }

        .our-authorities-swiper .swiper-button-prev,
        .our-authorities-swiper .swiper-button-next {
          color: #000;
          width: 40px;
          height: 40px;
        }

        .our-authorities-swiper .swiper-button-prev:after,
        .our-authorities-swiper .swiper-button-next:after {
          font-size: 20px;
          font-weight: 700;
        }

        .our-authorities-swiper .swiper-button-prev {
          left: 0;
        }

        .our-authorities-swiper .swiper-button-next {
          right: 0;
        }
      `}</style>
    </section>
  );
};

export default OurAuthorities;