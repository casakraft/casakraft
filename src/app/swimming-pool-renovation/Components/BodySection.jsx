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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* 1) Gallery + Swiper on top (mobile), centered */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[760px]">
                <HeroGallerySwiper
                  images={[
                    "/images/villa-swimming-pool-construction-services-in-dubai.png",
                    "/images/residential-swimming-pool-in-dubai.png",
                    "/images/villa-swimming-pool-contractors-in-dubai.png",
                    "/images/apartment-pool-swimming-pool-construction.png",
                    "/images/rooftop-apartment-swimming-pool-in-dubai.png",
                    "/images/top-view-swimming-pool-design-dubai.png",
                   
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
               Swimming Pool Renovation Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Casa Kraft Interiors offers premium Swimming Pool Renovation Services in Dubai, creating 
                luxurious and safe pools tailored to your lifestyle. Our team specializes in designing, building, 
                and finishing residential and commercial pools with modern aesthetics, high-quality materials, 
                and attention to detail.
                <br /><br />
                From concept and 3D design to construction, finishing, and maintenance solutions, we deliver 
                complete swimming pool services that elevate your property’s value and comfort.
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

      {/* 3) Benefits / Services Section */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2
            className="text-center font-semibold text-[24px] sm:text-[30px]"
            style={{ color: PURPLE }}
          >
           Why Choose Casa Kraft for Swimming Pool Construction?
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Casa Kraft Interiors is a leading Swimming Pool Construction Company in Dubai. We provide 
              custom-designed pools that enhance outdoor living spaces, using high-quality materials and 
              modern construction techniques. Our transparent pricing, timely execution, and premium finishes 
              ensure the best swimming pool services in Dubai.
              <br /><br />
              We handle all stages of your pool project: concept design, structural engineering, construction, 
              interior fit-out, finishing, and maintenance.
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
             Our Swimming Pool Services In Dubai
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Whether you need a residential pool, infinity pool, lap pool, or commercial pool, we provide tailored 
             construction and design solutions. Our team integrates modern designs, energy-efficient solutions, 
             and premium finishes for pools that combine luxury, safety, and durability.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Design & Planning
            </h3>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                We create detailed 3D designs and layouts for your pool, ensuring optimal space usage and aesthetic appeal, 
                fully aligned with Dubai building regulations.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Structural Construction
            </h3>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                We ensure safe and durable pool structures, from foundation and waterproofing to walls, floors, and safety features.
              </p>
            </div>

           <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Pool Finishing & Aesthetics
            </h3>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               High-quality finishes, including tiles, decking, lighting, and water features, ensure your pool looks elegant and luxurious.
              </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Pool Equipment Installation
            </h3>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               We install pumps, filtration systems, heating, and automation for energy efficiency and easy maintenance.
              </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Pool Renovation & Upgrades
            </h3>
            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               Upgrade or modify existing pools with modern design, enhanced features, and improved safety.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Our 3-Step Swimming Pool Construction Process
              </h2>

              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Consultation & Planning — </b> Understand your goals, site assessment, and pool design options.
                </li>
               <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Design & Approvals — </b> Develop detailed layouts, 3D designs, and obtain necessary permits.
                </li>
                <li>
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b>Construction & Finishing —</b> Build the pool with premium materials, safety, and aesthetic finishing.
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
               Clients trust Casa Kraft for Swimming Pool Construction in Dubai because of our experience, top-quality materials, 
               and commitment to excellence. Every pool project is managed by skilled professionals to ensure smooth execution, 
               timely delivery, and lasting quality.
              </p>
              <h2 className=" mt-6 text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Get the Best Swimming Pool Construction Services in Dubai
              </h2>
              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Upgrade your property with Casa Kraft Interiors’ Swimming Pool Construction Services in Dubai. From custom design 
                to finishing and maintenance, we deliver pools that combine luxury, safety, and elegance. Contact Casa Kraft Interiors today 
                for a consultation and discover why we’re a top choice for Swimming Pool Construction in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) FAQs */}
      <FAQSection />
    </>
  );
}

function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        q: " How long does a swimming pool construction take in Dubai?",
        a: "Most swimming pool projects in Dubai take 6–12 weeks depending on design and complexity.",
      },
      {
        q: "Can I customize the swimming pool design?",
        a: "Yes, our Swimming Pool Construction Services in Dubai are fully customizable to suit your property and lifestyle.",
      },
      {
        q: "Do you handle permits for pool construction?",
        a: "Yes, Casa Kraft manages all approvals and compliance for swimming pool construction projects in Dubai.",
      },
      {
        q: "Do you offer pool renovation or upgrades?",
        a: "Absolutely, we provide pool renovation, upgrades, and feature additions to enhance existing pools.",
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

function HeroGallerySwiper({
  images = [
    "/images/pool1.png",
    "/images/pool2.png",
    "/images/pool3.png",
    "/images/pool4.png",
    "/images/pool5.png",
  ],
}) {
  const slides = images.map((src, i) => ({ src, alt: `Gallery image ${i + 1}` }));

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
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