"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); 

const blogs = [
  {
    id: 1,
    slug: "modern-apartment-interior-design",
    title: "Modern Apartment Interior Design",
    image: "/images/blog-1.png",
    date: "2025-01-01",
    tag: "Blog",
  },
  {
    id: 2,
    slug: "villa-renovation-company-dubai",
    title: " Villa Renovation Company In Dubai",
    image: "/images/blog-2.png",
    date: "2024-12-01",
    tag: "Blog",
  },
  {
    id: 3,
    slug: "modern-apartment-interior-design",
    title: "Revamp Your Dubai Apartment Ideas for a Modern Look",
    image: "/images/blog-3.png",
    date: "2024-07-01",
    tag: "Blog",
  },
  {
    id: 4,
    slug: "modern-apartment-interior-design",
    title: "Luxury Apartment Interior Design",
    image: "/images/blog-1.png",
    date: "2025-01-01",
    tag: "Blog",
  },
  {
    id: 5,
    slug: "modern-apartment-interior-design",
    title: "Top Villa Interior Trends in Dubai",
    image: "/images/blog-2.png",
    date: "2024-12-01",
    tag: "Blog",
  },
  {
    id: 6,
    slug: "modern-apartment-interior-design",
    title: "Modern Living Room Design Ideas",
    image: "/images/blog-3.png",
    date: "2024-07-01",
    tag: "Blog",
  },
];

export default function BHeroSection() {
  return (
    <div className="w-full px-0">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="w-full"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id} className="pb-0">
            <Link
              href={`/${blog.slug}`} // ✅ FIXED HERE — removed `/blogs/`
              className="block h-[60vh] relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.05] bg-black"
              aria-label={`Read blog: ${blog.title}`}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex flex-col justify-end p-5 sm:p-6 md:p-10 text-white">
                <span className="bg-gradient-to-br from-[#caa193] to-[#a0624d] text-xs px-3 py-1 rounded uppercase font-semibold w-fit">
                  {blog.tag}
                </span>
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-2xl font-conthrax mt-2 sm:mt-3">
                  {blog.title}
                </h2>
                <p className="text-xs sm:text-sm mt-1 text-[#a0624d]">
                  {dayjs(blog.date).fromNow()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
