"use client";

import { useMemo, useState } from "react";
import { createPortal } from "react-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const PURPLE = "#5b2d57"; // close to screenshot heading color
const TEXT = "#4b4b4b";
const MUTED = "#6a6a6a";
const DIVIDER = "#d9d9d9";

export default function BodySection() {
  return (
    <>
      {/* ========= IMAGE + CONTENT SECTION (Mobile stacked | Desktop side-by-side) ========= */}
      <section className="bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* Mobile: stacked vertical | Desktop: 12-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* 1) Gallery + Swiper on top (mobile), centered */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[760px]">
                <HeroGallerySwiper
                  images={[
                    "/images/acacia-1.png",
                    "/images/acacia-2.png",
                    "/images/acacia-3.png",
                    "/images/acacia-4.png",
                    "/images/acacia-5.png",
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Villa Renovation in Dubai By Casa Kraft Interiors
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Casa Kraft Interiors is the best and  <b> <a href="https://www.casakraftinteriors.ae/"> leading villa renovation company in Dubai </a></b>, offering meticulous and stylish 
                renovation services for modern villas and private residences. As a reliable renovation company in Dubai, Casa 
                Kraft is skilled in offering premium villa renovation services in Dubai, blending custom design, professional 
                interior designers, and flawless design finishing.
               <br /> <br />
               If you are planning a full villa transformation, a modern interior upgrade, or a stylish home renovation, Casa 
               Kraft Interiors is the best among the best villa renovation companies in Dubai providing masterpiece, transparency,
                and reliability from ideation to completion.

              </p>

              {/* Buttons: vertical on mobile, horizontal from sm+, left aligned on desktop */}
              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="/contact-us"
                  className="h-11 w-full sm:w-[220px] flex items-center justify-center text-xs tracking-wider uppercase text-white bg-[#1e4a45]"
                >
                  Book a Consultation
                </a>

                <a
                  href="/contact-us"
                  className="h-11 w-full sm:w-[220px] flex items-center justify-center text-xs tracking-wider uppercase text-white bg-black/70"
                >
                  Get Your Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) After this: Benefits of apartment renovation (already vertical) */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2
            className="text-center font-semibold text-[24px] sm:text-[30px]"
            style={{ color: PURPLE }}
          >
            Why Casa Kraft Is Among the Best Villa Renovation Companies in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Casa Kraft Interiors is renowned as one of the best villa renovation companies in Dubai and a reliable renovation company 
              in Dubai for high-end residential projects. As an expert villa renovation contractor in Dubai, we blend professional 
              designers, engineers, and expert craftsmen with dedicated project management to offer premium quality, on-time delivery. 
              Our transparent pricing, <b><a href="https://www.casakraftinteriors.ae/renovation-dubai">wide range of renovation Dubai services</a></b> , premium materials, and best quality control makes sure each villa 
              renovation in Dubai meets the highest standards, while our smart renovation in Dubai solutions add excellence and 
              future-ready luxury  creating Casa Kraft Interiors a long-term partner for exclusive living.
            </p>
          </div>

          <div className="mt-3">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
            Luxury Villa Renovation Services in Dubai
            </h2>
             <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Our Luxury Villa Renovation Services in Dubai are created for clients who expect masterpiece and accuracy. 
              We manage everything  from planning and approvals to construction and finishing making us your complete villa 
              contractor in Dubai. Services include:
             </p>
          </div>

          <div className="mt-10">
           <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              1- Complete Villa Renovation Services In Dubai
            </h3>

           <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
           <p>
           Casa Kraft delivers complete villa renovation services including interior, exterior, structural, and practical 
           upgrades. From old fashioned designed space to contemporary elegant villas, we enhance spaces with sophistication 
           and comfort.
          </p>
          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          2- Interior Fit-Out & Renovation Company in Dubai
          </h3>
          <p>
          We are a reliable Interior Fit-Out & Renovation Company in Dubai, we design and build custom interiors including 
          ceilings, walls, lighting, flooring, and custom joinery.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          3- Kitchen Renovation Dubai
          </h3>
          <p>
          We offer comprehensive kitchen renovation services covering contemporary designs, modern cabinets, practical 
          appliances, and warm lighting to elevate your everyday experiences.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          4- Bathroom Renovation in Dubai
          </h3>
          <p>
          Spa styled bathrooms with high-end layouts, aesthetic ambiance, tiling, and perfect space optimization that align 
          with Dubai's modernity and trend.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          5- Villa Extension Services In Dubai
          </h3> 
          <p>
          We provide expert villa extension services, expanding your living space with flawless 
          architectural integration
          </p>
            </div>

          </div>

          <div className="mt-3">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px] " style={{ color: PURPLE }}>
              Our Villa Renovation Process In Dubai
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Our professional team follows the best designing process and created practical yet luxurious 
                designs to ensure that every villa renovation in Dubai is unique, functional, and professionally executed.
              </p>
            <ul class="list-disc">
              <li> <b style={{ color: PURPLE }}>Consultation & Site Assessment – </b>
              Casa Kraft professional designers start to work in each villa 
              renovation in Dubai with a wide consultation and on-site assessment to understand your desire.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Design Development & 3D Visualization - </b>
              We create personalized layouts and 3D designs, providing functional villa renovation ideas for 
              a clear and sophisticated sight of your project.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Material Selection & Cost Planning - </b>
              As a reliable renovation company in Dubai, we help you in choosing premium materials while deciding 
              costs for your villa renovation services.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Authority Approvals & Community NOCs  - </b>
              We handle all necessary permits and approvals, making sure flawless finishing for your home renovation 
              in Dubai.
              </li>
              <br />
              <li> <b style={{ color: PURPLE }}>Construction & Project Execution  - </b>
              Our professional designers integrate each element of your villa renovation project perfectly, from 
              planning interiors to structural works, with precision and premium quality.
              </li>
              <br />
               <li> <b style={{ color: PURPLE }}>Quality Inspection & Final Handover  - </b>
              Before handover, we conduct rigorous quality checks to deliver one of the best villa renovation services 
              in Dubai, making sure your space is ready to inspire and enjoy.
              </li>
            </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                Areas We are Serving Across Dubai 
              </h2>

              

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                Casa Kraft Interiors provides high-end home renovation in Dubai and villa renovation services across 
                the city’s most beautiful residential communities, including Palm Jumeirah, Arabian Ranches, Dubai 
                Hills, Emirates Hills, Jumeirah Islands, Nad Al Sheba, The Meadows, and The Springs. As a reliable 
                renovation company in Dubai and professional villa renovation contractor in Dubai, we have the 
                knowledge of the architectural styles, authority requirements, and community regulations of each 
                location, enabling us to handle approvals and execution efficiently. 

                <br />
                <br />
                Whether you are desiring a full villa renovation in Dubai, a modern and luxury interior, or a full 
                villa remodeling in Dubai, our expert designers provide, meticulous solutions across Dubai, placing 
                Casa Kraft Interiors as one of the most reliable villa renovation companies Dubai, clients trust for 
                premium renovation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) After it: FAQs (already vertical) */}
      <FAQSection />
    </>
  );
}

function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        q: "How long does a villa renovation take in Dubai?",
        a: " Most villa renovation projects in Dubai take 6–12 weeks, depending on size, design complexity, and customization requirements.",
      },
      {
        q: "Can villa renovations services be customized",
        a: "Yes, Casa Kraft's villa renovation services in Dubai are fully customizable from layout and materials to modern finishes and smart storage solutions.",
      },
      {
        q: "How much does it cost to renovate a villa in Dubai?",
        a: "The cost of villa renovation in Dubai depends on the size, materials, and level of customization. We provide transparent quotes for every project.",
      },
      {
        q: "Can you renovate specific areas or the entire villa?",
        a: "We handle both partial and full villa renovations in Dubai, including kitchens, bathrooms, bedrooms, living rooms, and wardrobes."
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 pb-20">
        <h2 className="text-[28px] sm:text-[44px] font-semibold" style={{ color: "#222" }}>
          Frequently Asked Questions
        </h2>

        <div className="mt-6">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="py-8">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-start justify-between gap-6 text-left"
                >
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-medium" style={{ color: "#222" }}>
                      {item.q}
                    </p>

                    {isOpen ? (
                      <p className="mt-4 text-[14px] sm:text-[15px] leading-7" style={{ color: MUTED }}>
                        {item.a}
                      </p>
                    ) : null}
                  </div>

                  <Chevron isOpen={isOpen} />
                </button>

                <div className="mt-8 h-px w-full" style={{ backgroundColor: DIVIDER }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Chevron({ isOpen }) {
  return (
    <span className="mt-1 shrink-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 200ms ease",
        }}
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="#222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* =====================================================================================
   Swiper Gallery (click thumbnails -> opens FULLSCREEN Swiper)
===================================================================================== */

function HeroGallerySwiper({
  images = [
    "/images/acacia-1.png",
    "/images/acacia-2.png",
    "/images/acacia-3.png",
    "/images/acacia-4.png",
    "/images/acacia-5.png",
  ],
}) {
  const slides = images.map((src, i) => ({ src, alt: `Gallery image ${i + 1}` }));

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        {/* Main */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Thumbs, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            className="w-full"
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsOpen(true);
                  }}
                  className="block w-full"
                  aria-label="Open fullscreen gallery"
                >
                  {/* Mobile-friendly height */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[240px] sm:h-[360px] lg:h-[420px] object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbs */}
        <div className="mt-3">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            freeMode
            watchSlidesProgress
            slidesPerView={5}
            spaceBetween={10}
            className="w-full"
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full border ${
                    activeIndex === idx ? "border-black" : "border-white"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="h-16 sm:h-20 w-full object-cover" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fullscreen */}
      {isOpen ? (
        <FullscreenGallery
          slides={slides}
          initialIndex={activeIndex}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}

function FullscreenGallery({ slides, initialIndex, onClose }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/90">
      <div className="absolute top-4 right-4 z-[10000]">
        <button
          type="button"
          onClick={onClose}
          className="h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          aria-label="Close fullscreen gallery"
        >
          ✕
        </button>
      </div>

      <div className="h-full w-full flex items-center justify-center px-3">
        <div className="w-full max-w-6xl">
          <Swiper
            modules={[Navigation, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            initialSlide={initialIndex}
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[86vh] flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>,
    document.body
  );
}
