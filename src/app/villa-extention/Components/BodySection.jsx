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
               Villa Extension Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Looking for expert villa extension services in Dubai? Casa Kraft Interiors, the No.1 Villa Extension 
                Company Dubai, offers premium villa extension services for both commercial and residential properties, 
                combining modern design, structural expertise, and luxury finishes. If you desire to elevate your 
                living space, renovate, or create personalized additions, our expert designers provide the best 
                villa extension services in Dubai specific to your needs.

                <br /><br />
                We are experts in villa structural extensions, villa extensions in Dubai, and Villa Extension and 
                Alteration Services in Dubai, offering high-end solutions from concept development and design to 
                construction and interior fit-out. 
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
           Why Choose Casa Kraft for Villa Extension?
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              As a leading Villa Extension Company in Dubai, Casa Kraft Interiors brings years of expertise and 
              a strong commitment to excellence. Our luxury villa extension services in Dubai cover fully bespoke 
              interior designs that enhance your living style, the use of premium quality materials and durable 
              construction for quality villa extension in Dubai, transparent pricing, and on-time delivery. 
              <br /><br />
              We manage each step of the project, from elegant design, planning, and permit approvals to high-end 
              Villa Extension and Modifications, covering planning, interior fit-out, and finishing touches. 
              Our focus is to deliver the best villa extension services in Dubai that flawlessly integrate 
              with your property while elevating both its practicality and value.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
             Our Villa Extension Services In Dubai
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             No Matter if it’s a villa extension in Dubai for additional bedrooms, home offices, kitchens, or living 
             areas, we provide bespoke villa extension services that match your property’s style. Our team integrates 
             modular designs, smart home solutions, and high-end finishes for quality villa extension in Dubai that 
             elevates your home’s value and comfort.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Design & Planning
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              We design specific plans for villa extension services in Dubai, covering 3D visualization, space optimization, 
              and align with Dubai building regulations.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Structural Extensions
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Our villa structural extensions ensure safe and durable additions, from extra rooms and floors to complete 
                property expansions.
              </p>
            </div>


           <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Interior Fit-Out & Finishing
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               Casa Kraft provides premium finishing services, including flooring, ceilings, walls, and lighting, ensuring 
               your luxury villa extension services in Dubai look seamless and elegant.
              </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Doors & Windows Installation
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               We install high-quality glass doors, sliding doors, and windows for villa extension and modifications, 
               enhancing aesthetics, energy efficiency, and natural light.
               </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Villa Extension Renovations
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               We also offer Villa Extension and Alteration Services in Dubai, upgrading existing extensions or 
               modifying layouts for modern living.
               </p>
            </div>
            

            <div className="mt-5">
              <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Our 3-Step Villa Extension Process
              </h2>

              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Consultation & Assessment — </b> Understand your goals and evaluate feasibility for villa extension services 
                  in Dubai
                </li>
               <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Design & Approvals — </b>Plan and obtain permits for Villa Extension Dubai projects.
                </li>
                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Construction & Interior Fit-Out —</b> Execute with precision and high-quality finishes for villa extensions 
                 in Dubai.
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
               Clients believe us for  Villa Extension and Modifications because of our many years of experience, premium 
               quality materials and commitment to excellence. Every villa extension in Dubai is managed by skilled project 
               managers, making sure smooth execution, on-time delivery, and long lasting quality. With Casa Kraft, you get 
               the best villa extension services in Dubai, backed by superior craftsmanship and a reputation as the No.1 Villa 
               Extension Company Dubai.
              </p>
              <h2 className=" mt-6 text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Get the Best Villa Extension Services in Dubai
              </h2>
              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Upgrade your home with Casa Kraft Interiors’ Villa Extension Services in Dubai. From structural extensions 
                to interior fit-out, we deliver quality villa extensions in Dubai that combine luxury, functionality, and style. 
                Contact Casa Kraft Interiors today for a consultation and discover why we’re the No.1 Villa Extension Company 
                Dubai for residential and commercial properties.
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
        q: " How long does a villa extension take in Dubai?",
        a: "Most villa extension projects in Dubai take 8–16 weeks depending on size and complexity.",
      },
      {
        q: "Can I customize the villa extension layout?",
        a: "Yes, our Villa Extension and Alteration Services in Dubai are fully customizable to suit your needs and lifestyle.",
      },
      {
        q: "Do you handle permits for villa extensions?",
        a: "Yes, Casa Kraft manages all approvals and compliance for villa extension services in Dubai. ",
      },
      {
        q: "Can you renovate or modify an existing villa extension?",
        a: "Absolutely, we provide Villa Extension and Modifications to upgrade or alter existing spaces with modern design and finishes.",
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
