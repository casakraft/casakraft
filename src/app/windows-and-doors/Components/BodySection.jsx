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
                    "/images/wd1.png",
                    "/images/wd2.png",
                    "/images/wd3.png",
                    "/images/wd4.png",
                    "/images/wd5.png",
                    "/images/wd6.png",
                    "/images/wd7.jpeg",
                    "/images/wd8.jpeg",
                    "/images/wd9.jpeg",
                    "/images/wd10.jpeg",
                    "/images/wd11.jpeg",
                    "/images/wd12.jpeg",
                    "/images/wd13.jpeg",
                    "/images/wd14.jpeg",
                    "/images/wd15.jpeg",
                    "/images/wd16.jpeg",
                    "/images/wd17.jpeg",
                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Windows & Doors Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
               Casa Kraft offers Door and Window Services in Dubai through high-quality, fashionable, 
               and functioning doors and windows. At Casa Kraft, our experts perform Door and Window 
               Repair & Installation services to ensure that your entire windows and doors function 
               perfectly and appear attractive. We can do custom wooden window and door installations 
               as well as modern Glass Door and Window installation
               <br /><br />
               If you desire top-quality doors and windows in Dubai, the best glass doors in Dubai, or 
               full replacements, Casa Kraft makes sure smooth installation and the best alignment for 
               a timeless, sophisticated finish.
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
           Our Comprehensive Doors & Windows Services
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
             At Casa Kraft Interiors, we offer a complete range of Windows and Doors Services in Dubai designed to 
             enhance the comfort, security, energy efficiency, and visual appeal of your property.
            </p>

           
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Windows and Doors Repair Services Dubai
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Renowned for our exclusive expertise in Door & Window Alignment for managing issues such as 
             stuck doors, creaking hinges, damaged handles, or faulty locks. Our experienced designers 
             make sure your doors & windows work perfectly while managing the luxury as well as the 
             security of your space.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Window Repairs & Replacement Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                We have the expertise to handle all aspects of window repairs, including damaged glass, 
                drafts, damaged frames, and damaged mechanics. Our expert windows and doors services in 
                Dubai improve the energy efficiency factor as well as upgrade the look of your environment. 
                When required, we offer the best door and window replacement using premium materials.

              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Windows & Doors Installation
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               Casa Kraft provides accurate Door and Window Installation for both new build space and renovation 
               projects. From Glass Doors and Windows to premium Aluminium & Glass solutions, our installations 
               make sure flawless operation and inspiring appeal. Casa Kraft is also skilled in custom wooden 
               window and door installations to meet with your space's luxurious interior design.
              </p>

            </div>

            <div className="mt-5">
              <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
                Types of Windows and Doors We Offer
              </h2>
              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Casa Kraft offers a comprehensive options to align with any property:
              </p>
              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Aluminium windows and doors –</b> modern, trendy, and robust.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Glass Doors –</b> elegant, well-lit, and of luxury quality.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> UPVC Windows & Doors –</b> low-maintenance, energy-efficient, and secure.
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Custom Wooden Windows and Doors – </b>as per your design requirements.
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
               If you are seeking top-quality doors and windows in Dubai or the best glass doors 
               in Dubai, we offer high-end solutions for all spaces.
              </p>

              
            </div>
          </div>
          <div className="mt-5">
            <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
              Window Repairs & Replacement Dubai
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               Casa Kraft handles each step of your project to ensure premium quality results:
              </p>
             <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Consultation & Site Assessment:</b> Professionals analyze your needs and recommend optimal approaches.
                </li>

                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Selection & Design:</b> Select from Glass Doors and Windows, Aluminium or wooden options, 
                 and bespoke designs.
                </li>

                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Installation & Quality Check: </b> Our professionals manage Door and Window Installation 
                 and make sure perfect alignment and practicality.
                </li>

                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Aftercare & Support:</b> We offer maintenance tips and follow-up services for timeless performance.

                </li>
            </ul>
            </div>
             <div className="mt-5">
            <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
             Why Choose Casa Kraft for windows and doors in Dubai?
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              Casa Kraft is renowned for expert window and door services in Dubai because of our commitment to high-end 
              materials, experienced designers, and flawless finishes. We offer luxurious solutions for residential villas, 
              homes, and commercial spaces, providing premium Aluminium & Glass solutions as well as custom wooden windows 
              and doors installations. Our focus is to blend elegance, security, and practicality, providing space owners 
              the best door replacements in Al Barsha Dubai and across all key areas of the city.
              <br /><br />
              We deliver Windows and Doors Services in Dubai across key areas including Dubai Marina, Downtown Dubai, Jumeirah, 
              Business Bay, Al Barsha, and surrounding communities, offering high-end solutions wherever you are.

              </p>
              </div>
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
        q: "What types of windows and Doors in Dubai does Casa Kraft offer?",
        a: "Casa Kraft provides complete Doors and Windows windows and DoorsServices in Dubai, including door and window installation, door and window repair, door and window alignment, and full door and window replacement. We work with glass doors and windows, aluminium doors and windows, UPVC systems, and custom wooden doors and windows for both residential and commercial spaces.",
      },
      {
        q: "Do you offer energy-efficient windows and Doors in Dubai?",
        a: "Yes, Our energy-efficient windows and Doors in Dubai improve insulation, help reduce heat transfer, and lower energy costs. We use high-performance aluminium & glass systems, UPVC windows and doors, and premium sealing technology to enhance comfort and sustainability.",
      },
      {
        q: "Does Casa Kraft provide custom wooden doors and windows in Dubai?",
        a: "Yes, Casa Kraft specializes in custom wooden doors and windows in Dubai, designed to match your interior style and architectural needs.",
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
