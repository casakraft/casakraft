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
                    "/images/fr1.png",
                    "/images/fr2.png",
                    "/images/fr3.png",
                    "/images/fr4.png",
                    "/images/fr5.png",
                    "/images/fr6.png",
                    "/images/fr7.png",
                    "/images/fr8.png",
                    "/images/fr9.jpeg",
                    "/images/fr10.jpeg",
                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Flooring Services in Dubai | Casa Kraft Interiors
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Casa Kraft Interiors provide professional flooring services in Dubai, offering a wide range of  flooring supply & installation Dubai solutions for residential, commercial, and luxury projects. Casa Kraft is a top flooring company in Dubai, famous in offering premium flooring materials in Dubai with professional craftsmanship and premium materials. If space owners are seeking villa flooring, wooden flooring Dubai, or custom wooden flooring Dubai Marina, our experienced designers ensure seamless installation and timeless elegance.

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
            Our Flooring Services in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
             At Casa Kraft Interiors, we provide extensive flooring services and solutions tailored to every home and business. We offer services from modern apartments to luxury villas, our expert flooring services in Dubai include everything from concept development, material selection to final execution. We deliver flooring installation Dubai by professional teams, including expert fixing & installation for residential & commercial flooring Dubai projects.
            </p>

            <p>
              Casa Kraft is renowned as the best flooring company in Dubai, providing durable, modern, and climate-appropriate solutions across all major areas. Our offerings include:
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             Types of Flooring in Dubai & UAE
            </h2>
            
              <ul className="mt-5 space-y-2 text-[15px] list-inside list-disc">
                <li>
                  Wooden Flooring Dubai / Hardwood Flooring Dubai – Classic sophistication with timeless luxury
                </li>
                <li>
                  Parquet Flooring Dubai – Modern patterns and bespoke designs
                </li>
                <li>
                  Vinyl Flooring Dubai / Vinyl Flooring Solutions in Al Barsha – Waterproof and versatile
                </li>
                <li>
                  Laminate Flooring Dubai – Affordable and chic synthetic flooring solutions 
                </li>
                <li>
                  SPC & WPC Flooring Dubai – Engineered floors with high durability
                </li>
                  <li>
                  Tile Flooring Dubai / Luxury Tile Flooring in Jumeirah – Offering premium quality ceramic, porcelain, and designer tiles
                </li>
                <li>
                  Marble Flooring Dubai –  elegant marble flooring designs for villas and modern apartments
                </li>
                <li>
                  Carpet Flooring Dubai – Soft and comfortable end-to-end services
                </li>
                <li>
                  Luxury Flooring Dubai – Bespoke elegant Floors designs for contemporary interiors
                </li>
                <li>
                 Waterproof Flooring Solutions Dubai – Ideal for restrooms, kitchens, and wet zones.
                </li>
                <li>
                  Industrial Floor Treatments – lasting solutions for  business and industrial areas
                </li>
              
              </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Our Flooring Installation Process
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7">
                  <ol className="mt-5 space-y-2 text-[15px] list-inside list-decimal">
                <li>
                 Consultation & Site Assessment – Improve your area with the best flooring Dubai products recommendations.
                </li>
                <li>
                  Material Selection & Style Guidance – Select from premium flooring Dubai choices to align with your vision and budget.
                </li>
                <li>
                  Subfloor Preparation & Waterproofing – Ensure high-end and solid installation.
                </li>
                <li>
                 Precision Installation by Certified Flooring Contractors Dubai – offers expert flooring services Dubai for all kinds of floors. 
                </li>
                <li>
                 Polishing, Sealing & Finishing Touches – High quality finishes for luxury and durability.
                </li>
                  <li>
                 Final Inspection & Client Handover – Customer satisfaction and premium quality assurance.
                </li>
               
              </ol>
              
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Why Choose Casa Kraft Interiors for Flooring Services in Dubai
            </h2>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                 Casa Kraft Interiors is renowned as the best flooring company in Dubai, providing a wide range of Dubai flooring solutions with premium quality, accuracy, and attention to detail. We are experts in custom flooring solutions Dubai for villas, apartments, offices, and commercial spaces, making sure each project showcase the client’s style and functional requirements. Caa Kraft Interiors provide services extend across all major Dubai areas, including Downtown Dubai, Palm Jumeirah, Business Bay, Dubai Marina, Jumeirah, Emirates Hills, Al Barsha, Dubai Hills Estate, and The Greens.
              </p>

              <p>
                We amalgamate premium flooring materials in Dubai with premium durability and aesthetics, providing skilled craftsmanship in both residential & commercial flooring Dubai projects. With transparent pricing, on-time delivery, and a designers of top-rated flooring experts experienced in installation, fixing, and maintenance, Casa Kraft Interiors is your reliable partner for transforming spaces with modernity and functionality.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                Contact the Best Flooring Company in Dubai
              </h2>  
              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                Ready to elevate your home or office? Connect Casa Kraft Interiors, the best flooring installation company in Dubai, for expert flooring services in Dubai, covering supply, installation, and maintenance. If it’s villa flooring, wooden flooring Dubai, or custom flooring solutions Dubai, Casa Kraft deliver premium, professional, and timeless results.
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
  

 
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 pb-20">
        <h2 className="text-[28px] sm:text-[44px] font-semibold" style={{ color: "#222" }}>
        
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
