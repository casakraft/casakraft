"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Star = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${filled ? '' : 'opacity-30'}`}>
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" fill="currentColor" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="h-6 w-6">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.826 31.911 29.276 35 24 35c-7.18 0-13-5.82-13-13s5.82-13 13-13c3.31 0 6.32 1.242 8.598 3.27l5.657-5.657C34.943 3.053 29.74 1 24 1 11.85 1 2 10.85 2 23s9.85 22 22 22 22-9.85 22-22c0-1.474-.152-2.91-.389-4.417z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.818C14.54 16.13 18.922 13 24 13c3.31 0 6.32 1.242 8.598 3.27l5.657-5.657C34.943 6.053 29.74 4 24 4 16.318 4 9.66 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 46c5.18 0 9.86-1.977 13.42-5.2l-6.2-5.238C29.035 36.488 26.64 37 24 37c-5.242 0-9.807-3.337-11.41-7.987l-6.54 5.037C9.35 41.22 16.08 46 24 46z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303A12.01 12.01 0 0 1 24 37c-5.242 0-9.807-3.337-11.41-7.987l-6.54 5.037C9.35 41.22 16.08 46 24 46c12.15 0 22-9.85 22-22 0-1.474-.152-2.91-.389-4.417z"/>
  </svg>
);

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

function Avatar({ name, avatar }) {
  if (avatar) {
    return <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />;
  }
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="h-14 w-14 rounded-full bg-emerald-700 text-white grid place-items-center text-2xl font-semibold">
      {initial}
    </div>
  );
}

const REVIEWS = [
  {
    name: "sohshu",
    subtitle: "Local Guide · 1 reviews",
    time: "5 week ago",
    isNew: true,
    rating: 5,
    text: `I recently visited Casa Kraft’s showroom, and it was an amazing experience! The moment I walked in, I was impressed by the elegant interiors and the beautifully designed display models. Each setup was thoughtfully arranged and truly eye‑catching — it made me say “wow!”\n\nThe team at Casa Kraft was very welcoming and professional, taking time to explain their design concepts and materials. You can clearly see their creativity and passion for design in every corner of the showroom.\n\nI highly recommend Casa Kraft for anyone eager to transform their home or commercial space into a truly stunning and stylish environment. A fantastic interior design experience awaits here!`,
  },
  {
    name: "Shumaiza",
    subtitle: "Local Guide · 3 reviews reviews · 1 photo",
    time: "5 days ago",
    rating: 5,
    title: "Casa Kraft – A True Destination for Modern Luxury Living",
    text: `I worked with Casa Kraft Interiors for the interior design of my living room in Palm Jumeirah. The team was professional and easy to communicate with throughout the process. They listened to my ideas and delivered a final result that matched what I was looking for. Overall, I had a positive experience with their interior design services.`,
  },
  {
    name: "MoIz Ansari",
    subtitle: "2 reviews",
    time: "4 days ago",
    rating: 5,
    text: `I hired Casa Kraft Interiors for a renovation project at my villa in Emirates Hills. The team managed the work professionally and kept communication clear throughout the process. The design and execution were handled with attention to detail, and the project was completed as discussed. Overall, I had a positive experience working with them.`,
  },
  {
    name: "Tehreem Waqas",
    subtitle: "2 reviews · 1 photo",
    time: "3 days ago",
    rating: 5,
    text: `I worked with Casa Kraft Interiors and Renovations for my apartment work in Business Bay. They managed the design and fit-out work professionally from start to finish and kept communication clear throughout the process. The team handled the project well. Overall, it was a positive experience working with them.`,
  },
  {
    name: "Madiha Tabassum",
    subtitle: "Local Guide · 0 reviews",
    time: "6 months ago",
    rating: 5,
    text: `I hired Casa Kraft Interiors for work on my apartment at Bluewaters Island. The team managed the design and fit-out professionally and maintained clear communication throughout the project. The work was completed with attention to detail and the final result met my expectations. Overall, it was a positive experience.`,
  },
  {
    name: "Usman Shaukat",
    subtitle: "0 reviews",
    time: "20 hours ago ago",
    rating: 5,
    text: `I hired Casa Kraft Interiors for renovation work on my home in Dubai Hills Estate. The team managed both the design and execution professionally, maintaining clear communication throughout the process. Overall, it was a very nice experience working with them.`,
  },

];

function ReviewCard({ review }) {
  const collapsedHeight = 168; // ~7 lines at 17px size; adjust if you want
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    if (pRef.current) {
      const el = pRef.current;
      setIsOverflowing(el.scrollHeight > collapsedHeight + 4);
    }
  }, []);

  return (
    <article className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-left">
      <div className="absolute right-5 top-5">
        <GoogleG />
      </div>
      <div className="flex items-center gap-4">
        <Avatar name={review.name} avatar={review.avatar} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.subtitle}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm">
        <Stars rating={review.rating} />
        <span className="text-gray-500">{review.time}</span>
        {review.isNew && (
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">NEW</span>
        )}
      </div>
      {review.title && <p className="mt-3 font-semibold italic text-gray-900">{review.title}</p>}

      <div className="relative mt-4">
        <p
          ref={pRef}
          className="text-gray-800 whitespace-pre-line leading-7 text-[17px] transition-[max-height] duration-300 ease-in-out overflow-hidden"
          style={{ maxHeight: expanded ? "none" : collapsedHeight }}
        >
          {review.text}
        </p>
        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {isOverflowing && (
        <button
          className="mt-4 text-emerald-700 font-medium underline underline-offset-4 hover:no-underline"
          onClick={() => setExpanded((s) => !s)}
          aria-label={expanded ? "Show less" : "Read more"}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}

export default function TestimonialsWidget() {
  // Uniform card height (px) — tweak as needed
  const CARD_HEIGHT = 360;

  return (
    <section id="testimonials" className="bg-[#193c38] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-conthrax tracking-widest text-xl sm:text-2xl mb-10">
          OUR CLIENT REVIEWS
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {REVIEWS.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCardUniform review={review} cardHeight={CARD_HEIGHT} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// New uniform-height card variant
function ReviewCardUniform({ review, cardHeight }) {
  const collapsedHeight = 160; // controls visible text height (px)
  const [expanded, setExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const pRef = React.useRef(null);

  React.useEffect(() => {
    if (pRef.current) {
      const el = pRef.current;
      setIsOverflowing(el.scrollHeight > collapsedHeight + 4);
    }
  }, []);

  return (
    <article
      className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-left flex flex-col"
      style={{ height: cardHeight }}
    >
      {/* Google badge */}
      <div className="absolute right-5 top-5">
        <GoogleG />
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Avatar name={review.name} avatar={review.avatar} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.subtitle}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center gap-3 text-sm">
        <Stars rating={review.rating} />
        <span className="text-gray-500">{review.time}</span>
        {review.isNew && (
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">NEW</span>
        )}
      </div>

      {review.title && (
        <p className="mt-3 font-semibold italic text-gray-900">{review.title}</p>
      )}

      {/* Body (flex-1 makes it fill available height) */}
      <div className="relative mt-4 flex-1 overflow-hidden">
        <p
          ref={pRef}
          className={`text-gray-800 whitespace-pre-line leading-7 text-[17px] transition-[max-height] duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-full" : ""
          }`}
          style={{ maxHeight: expanded ? "none" : collapsedHeight }}
        >
          {review.text}
        </p>
        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />)
        }
      </div>

      {/* Footer (button pinned bottom) */}
      {isOverflowing && (
        <button
          className="mt-4 text-emerald-700 font-medium underline underline-offset-4 hover:no-underline"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}
