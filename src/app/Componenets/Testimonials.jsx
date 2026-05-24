"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

/* ---------- ICONS ---------- */

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${filled ? "text-[#c8a96a]" : "text-gray-300"}`}
  >
    <path
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      fill="currentColor"
    />
  </svg>
);

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  return (
    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#c8a96a] to-[#8b6b2e] text-black flex items-center justify-center font-semibold text-sm">
      {name?.charAt(0)}
    </div>
  );
}

/* ---------- DATA ---------- */

const REVIEWS = [
  {
    name: "Sohshu",
    subtitle: "Google Review",
    time: "5 weeks ago",
    rating: 5,
    text: "Casa Kraft showroom experience was amazing. Elegant interiors and premium designs everywhere.",
  },
  {
    name: "Shumaiza",
    subtitle: "Dubai Client",
    time: "5 days ago",
    rating: 5,
    text: "Professional team, smooth process and beautiful results. Highly recommended.",
  },
  {
    name: "Moiz Ansari",
    subtitle: "Villa Owner",
    time: "4 days ago",
    rating: 5,
    text: "Great renovation work in Emirates Hills. Everything was handled professionally.",
  },
  {
    name: "Tehreem",
    subtitle: "Apartment Client",
    time: "3 days ago",
    rating: 5,
    text: "Very well managed project in Business Bay. Clean execution and good communication.",
  },
];

/* ---------- CARD ---------- */

function ReviewCard({ review }) {
  return (
    <div className="h-[210px] bg-white rounded-md p-5 shadow-sm border border-black/5 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Avatar name={review.name} />

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {review.name}
            </h3>
            <p className="text-[11px] text-gray-500">{review.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <Stars rating={review.rating} />
          <span className="text-[11px] text-gray-400">{review.time}</span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {review.text}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-[11px] text-gray-400">
          Verified Google Review
        </span>

        <span className="text-[#c8a96a] text-[11px] font-medium">
          ★ Google
        </span>
      </div>
    </div>
  );
}

/* ---------- MAIN (ONLY ANIMATION ADDED) ---------- */

export default function TestimonialsWidget() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-anim", {
        opacity: 0,
        y: 30,
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
      className="bg-[#193c38] py-14 text-black overflow-hidden"
    >
      {/* HEADER */}
      <div className="text-center mb-10 px-4">
        <p className="text-[#c8a96a] uppercase tracking-[4px] text-xs mb-2">
          Testimonials
        </p>

        <h2 className="text-2xl md:text-4xl text-white font-semibold">
          What Our Clients Say
        </h2>

        <p className="text-white/70 mt-3 text-sm max-w-xl mx-auto">
          Real feedback from our clients across Dubai luxury projects
        </p>
      </div>

      {/* SWIPER */}
      <div className="px-6 md:px-12 lg:px-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={18}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="review-anim">
                <ReviewCard review={review} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}