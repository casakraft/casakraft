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
                    "/images/apartment-bedroom-curtains-in-dubai.png",
                    "/images/apartment-living-room-blinds-in-dubai.png",
                    "/images/villa-bed-room-curtains-in-dubai.png",
                    "/images/office-blinds-in-dubai.png",
                    "/images/apartment-curtains-dubai.png",
                    "/images/modern-living-room-corner-curtains-in-dubai.png",
                   
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Customized Curtains & Blinds Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
               Casa Kraft offers premium Curtains and Blinds installation services in Dubai. Our experts provide customized solutions for homes, villas, and offices to enhance elegance, privacy, and comfort. We handle everything from measuring, design consultation, and fabric selection to flawless installation of curtains, roller blinds, and modern window treatments.
               <br /><br />
               Whether you want luxurious drapes, blackout curtains, or stylish blinds, Casa Kraft ensures precise fitting, smooth operation, and a chic finish tailored to your space.
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

      {/* 3) After this: Benefits of curtains & blinds services */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2
            className="text-center font-semibold text-[24px] sm:text-[30px]"
            style={{ color: PURPLE }}
          >
           Our Comprehensive Curtains & Blinds Services
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
             At Casa Kraft Interiors, we provide complete Curtains and Blinds solutions in Dubai designed to 
             elevate style, ensure privacy, control natural light, and complement your interior decor.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Curtains & Blinds Installation Dubai
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             We install a variety of curtains and blinds including roller blinds, Venetian blinds, blackout curtains, and luxurious drapes. Our team ensures perfect alignment, smooth operation, and a premium finish for every window.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Custom Curtains & Blinds Solutions
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Casa Kraft provides bespoke curtains and blinds tailored to your space, style, and functional needs. From fabric selection and color matching to precise fitting, we ensure every installation enhances aesthetics and comfort.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Curtain & Blind Repairs
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               We repair and maintain your curtains and blinds to restore smooth operation, fix broken mechanisms, replace damaged fabric, or re-align tracks for flawless functionality.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
                Types of Curtains & Blinds We Offer
              </h2>
              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Casa Kraft provides a wide range of options to suit any property:
              </p>
              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Roller Blinds –</b> modern, practical, and sleek.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Venetian & Vertical Blinds –</b> adjustable light control with style.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Blackout Curtains –</b> full privacy and darkness for bedrooms.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Luxury Drapes –</b> premium fabrics, perfect for living rooms and villas.
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
               For tailored curtains and blinds services in Dubai, Casa Kraft ensures professional installation, maintenance, and design guidance across all spaces.
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
        q: "What types of curtains and blinds does Casa Kraft offer in Dubai?",
        a: "We provide a full range of Curtains and Blinds including roller blinds, Venetian blinds, vertical blinds, blackout curtains, and luxury drapes. Each option can be customized for size, fabric, and style to fit your space perfectly.",
      },
      {
        q: "Do you offer custom design and installation?",
        a: "Yes, Casa Kraft specializes in fully customized Curtains & Blinds solutions. We handle everything from design consultation and fabric selection to professional installation for residential and commercial spaces in Dubai.",
      },
      {
        q: "Can you repair existing curtains or blinds?",
        a: "Absolutely. Our team can repair damaged tracks, mechanisms, and fabric to restore functionality and aesthetics of your curtains and blinds.",
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
    "/images/curtain1.jpg",
    "/images/curtain2.jpg",
    "/images/curtain3.jpg",
    "/images/blind1.jpg",
    "/images/blind2.jpg",
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
                  className={`w-full border ${activeIndex === idx ? "border-black" : "border-white"}`}
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