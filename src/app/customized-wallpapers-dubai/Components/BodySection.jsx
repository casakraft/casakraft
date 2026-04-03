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

const PURPLE = "#5b2d57";
const TEXT = "#4b4b4b";
const MUTED = "#6a6a6a";
const DIVIDER = "#d9d9d9";

export default function BodySection() {
  return (
    <>
      {/* ========= IMAGE + CONTENT SECTION (Mobile stacked | Desktop side-by-side) ========= */}
      <section className="bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Gallery */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[760px]">
                <HeroGallerySwiper
                  images={[
                     "/images/study-room-interior-wallpaper-in-dubai.png",
                    "/images/bedroom-interior-soft-floral-wallpaper-in-dubai.png",
                    "/images/living-room-apartment-interior-wallpaper-in-dubai.png",
                    "/images/interior-wallpaper-in-dubai.png",
                    "/images/villa-interior-wallpaper-in-dubai.png",
                    
                  ]}
                />
              </div>
            </div>

            {/* Heading + para + buttons */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Customized Wallpaper Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Casa Kraft provides high-quality customized wallpaper services in Dubai, 
                transforming any residential or commercial space into a stunning, personalized environment. 
                Our experts handle wallpaper design, selection, and professional installation 
                to ensure a flawless, long-lasting finish.
                <br /><br />
                Whether you want modern, classic, or fully bespoke wallpaper designs, 
                Casa Kraft ensures every wall reflects your style and enhances your interior.
              </p>

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

      {/* Comprehensive Wallpaper Services */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
            Our Customized Wallpaper Services
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Casa Kraft provides complete wallpaper solutions in Dubai, from custom designs to 
              flawless installation, helping you achieve stylish, luxurious interiors.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Wallpaper Design & Consultation
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Our experts help you choose patterns, textures, and colors that match your interior theme. 
              We provide tailored designs for apartments, villas, offices, and commercial spaces.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Wallpaper Installation in Dubai
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Casa Kraft ensures precise wallpaper installation, smooth alignment, and durable adhesion. 
              Our team handles all surfaces and provides a seamless, professional finish for every wall.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Types of Wallpapers We Offer
            </h3>
            <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
              <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Vinyl Wallpapers – </b> durable, moisture-resistant, and stylish.
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Fabric Wallpapers – </b> elegant, textured, and premium quality.
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Custom Printed Wallpapers – </b> fully personalized designs.
              </li>
              <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> 3D & Textured Wallpapers – </b> create depth and visual interest.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
              Why Choose Casa Kraft for Wallpaper Services in Dubai?
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Casa Kraft is your trusted partner for premium wallpaper services in Dubai. 
              Our team delivers exceptional design, flawless installation, and complete satisfaction. 
              We cater to residential and commercial clients across Dubai Marina, Downtown Dubai, Jumeirah, 
              Business Bay, Al Barsha, and nearby areas, creating interiors that truly impress.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />
    </>
  );
}

function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        q: "Do you provide customized wallpaper designs in Dubai?",
        a: "Yes, Casa Kraft specializes in fully customized wallpaper designs tailored to your interior style, room size, and preferences.",
      },
      {
        q: "What types of wallpaper materials do you use?",
        a: "We use premium vinyl, fabric, textured, and custom-printed wallpapers suitable for residential and commercial spaces.",
      },
      {
        q: "Do you offer wallpaper installation services?",
        a: "Absolutely. Our experienced team ensures professional installation with precise alignment and long-lasting results.",
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

function HeroGallerySwiper({ images = [] }) {
  const slides = images.map((src, i) => ({ src, alt: `Gallery image ${i + 1}` }));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        {/* Main Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Thumbs, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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

        {/* Thumbnails */}
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

      {/* Fullscreen Swiper */}
      {isOpen && (
        <FullscreenGallery slides={slides} initialIndex={activeIndex} onClose={() => setIsOpen(false)} />
      )}
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
          <Swiper modules={[Navigation, Keyboard]} navigation keyboard={{ enabled: true }} initialSlide={initialIndex}>
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-[86vh] flex items-center justify-center">
                  <img src={img.src} alt={img.alt} className="max-h-full max-w-full object-contain" />
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