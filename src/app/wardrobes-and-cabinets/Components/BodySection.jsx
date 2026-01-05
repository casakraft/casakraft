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
                    "/images/wc1.png",
                    "/images/wc2.png",
                    "/images/wc3.png",
                    "/images/wc4.png",
                    "/images/wc4.png",
                    "/images/wc5.png",
                    "/images/wc6.png",
                    "/images/wc8.png",
                    "/images/wc9.png",
                    "/images/wc10.png",
                    "/images/wc11.jpeg",
                    "/images/wc12.jpeg",
                    "/images/wc13.jpeg",
                    "/images/wc14.jpeg",
                    "/images/wc15.jpeg",
                    "/images/wc16.jpeg",
                    "/images/wc17.jpeg",
                    "/images/wc18.jpeg",
                    "/images/wc19.jpeg",
                    "/images/wc20.jpeg",
                    "/images/wc21.jpeg",
                    "/images/wc22.jpeg",
                    "/images/wc23.jpeg",
                    "/images/wc24.jpeg",
                    "/images/wc25.jpeg",
                    "/images/wc26.jpeg",
                    "/images/wc27.jpeg",
                    "/images/wc28.jpeg",
                    "/images/wc29.jpeg",
                    "/images/wc30.jpeg",
                    "/images/wc31.jpeg",
                    "/images/wc32.jpeg",
                    
                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Wardrobe and Cabinet Designer in Dubai Casa Kraft Interiors
              </h1>

              <p className="mt-2 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Seeking a Built in Wardrobe and Cabinet Designer in Dubai who provides modernity, premium quality, and practicality? At Casa Kraft Interiors, we deliver Premier Wardrobe & Cabinet Solutions in Dubai, expert in Custom Built-In & Modern Designs for homes, villas, and sophisticated residences.
              </p>
               <p className="mt-2 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Whether you want to Buy the Best Wardrobe Cabinet in Dubai, improve your storage space in the bedroom or invest in wardrobes and cabinet design in Dubai, our trained professionals at Casa Kraft help you with the most effective reliable design and installation services on your space and budget. Casa Kraft is a Leading Wooden Cabinet Company as well as a Modern Custom wardrobe designer in Dubai.
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
            className="text-center font-semibold text-[20px] sm:text-[24px]"
            style={{ color: PURPLE }}
          >
           Best Wardrobe and Cabinet Designer Services in Dubai 
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
            Casa Kraft Interiors reputation is built on professional craftsmanship, modern aesthetics, and flawless project finishes. As experts in wardrobe cabinet services in Dubai, we create storage that elevate both functionality and interior elegance.
            </p>

          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-[20px]" style={{ color: PURPLE }}>
              Why Choose Casa Kraft Interiors For Wardrobe Services?
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              We provide a wide range of wardrobe services including expert wardrobe fit-out and custom design with high-end quality materials and contemporary finishes to design storage solutions that are both stylish and practical. We craft specific layouts for small rooms and modern bedrooms, making sure each inch of space is used thoughtfully and efficiently while maintaining a pure aesthetic.
            </p>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Casa Kraft Interiors provide modern appliance devices, effective space-utilizing designs, along with a high emphasis on every detail, we also offer you with a wardrobe design that enhances your living. Our professionals ensure premium quality, on-time delivery, transparent pricing, and timeless elegance, so you cherish a flawless and modern experience from concept development to final execution. Casa Kraft Interiors craft Customized Wardrobe Cabinets in Dubai that perfectly match contemporary living standards.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>
             Our Wardrobe & Cabinet Services In Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Casa Kraft Interiors offer premium wardrobe cabinet services in Dubai, delivering custom built-in and modern designs specific for apartments, villas, and luxury homes. Our experienced designers deliver luxurious, functional solutions as a reliable wardrobe and cabinet designer in Dubai.
              </p>

              <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Custom Built-In Wardrobes in Dubai
              </h4>
              <p className="text-[15px] leading-7">
              Our built-in wardrobes in Dubai are created to amalgamate flawlessly modernity and functionality together into your interiors, designing a pure, elegant look while maximizing storage.
            </p>

             <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Walk-In Wardrobe Design
              </h4>
              <p className="text-[15px] leading-7">
             Walk-in wardrobes is modern and luxurious offer specific sections for clothing, shoes, bags, and accessories, best for modern master bedrooms and luxurious villa.
            </p>

             <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Modern Sliding & Mirrored Wardrobes
              </h4>
              <p className="text-[15px] leading-7">
              The modern wardrobe cabinets in Dubai by Casa Kraft Interiors come with sliders, as well as mirror options, to increase storage space and add to the beauty of small rooms.
            </p>

             <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
             Wooden Wardrobes & Cabinets
              </h4>
              <p className="text-[15px] leading-7">
              Casa Kraft interiors is a Leading Wooden Cabinet Company, offering luxurious and elegant wooden wardrobes created using premium durable and moisture-resistant material.
            </p>

             <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Corner & Compact Wardrobe Solutions
              </h4>
              <p className="text-[15px] leading-7">
              We create smart corner wardrobes and L-shaped cabinets to optimize awkward or limited spaces.
            </p>

             <h4 className="flex items-center gap-3 font-bold text-[18px] text-black">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              Wardrobe Renovations
              </h4>
              <p className="text-[15px] leading-7">
              Casa Kraft Interiors also deliver full wardrobe renovations, transforming old-fashioned storage into luxurious, modern solutions.
            </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-[20px]" style={{ color: PURPLE }}>
              Custom Built-In & Modern Designs for Every Space
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                From modern apartments to elegant villas, our wardrobes and cabinet design in Dubai adapts to every interior style. We focus on:
              </p>
              
                  <ul className="mt-5 space-y-2 text-[15px] list-inside list-disc">
                <li>
                 Space planning & functional zoning
                </li>
                <li>
                  Soft-close hinges and smooth sliding systems
                </li>
                <li>
                 LED lighting integration
                </li>
                <li>
                Modular accessories for organization
                </li>
              </ul>
              <p>
                Our goal is to provide elegant, functional, and modern wardrobe cabinets in Dubai that strengthen everyday living.
              </p>
              
              

            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-[20px]">
                Our Simple 3-Step Process
              </h2>

              <ul className="mt-5 space-y-2 text-[15px]">
                <li>
                  Consultation & Measurement — Understand your needs and measure your space

                </li>
                <li>
               Design & Approval — Create your custom wardrobe layout and material selection

                </li>
                <li>
                Manufacturing & Installation — Precision production and professional fitting
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                From concept to completion, we ensure a smooth experience with our reliable design and installation services.
              </p>
            </div>

                <div className="mt-10">
            <h2 className="font-semibold text-[20px]" style={{ color: PURPLE }}>
              Buy Wardrobe Cabinet Dubai — Premium Quality Guaranteed
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             If you’re seeking to Buy Wardrobe Cabinet Dubai, we offer fully personalized solutions rather than generic furniture. Every cabinet is created for your room dimensions, storage needs, and unique aesthetic preferences.
            </p>
            <p>
              Whether you desire to Buy the Best Wardrobe Cabinet in Dubai or enhance your existing storage, we make sure of expert craftsmanship and luxurious finishes.
            </p>
          </div>
              <div className="mt-10">
            <h2 className="font-semibold text-[20px]" style={{ color: PURPLE }}>
              Get the Best Wardrobe & Cabinet Solutions in Dubai
            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Upgrade your home with Casa Kraft Interiors Premier Wardrobe & Cabinet Solutions in Dubai  crafted for beauty, efficiency, and long-term use. Contact Casa Kraft Interiors today for a free consultation and discover why we’re known for the best wardrobe and cabinet designer services in Dubai.
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
        q: "How long does installation take?",
        a: " Generally 3–6 weeks depending on complexity.",
      },
      {
        q: "What is the difference between a closet and a wardrobe?",
        a: "The difference between a closet and a wardrobe is that a closet showcases a simple storage solution, but a wardrobe is a customized storage solution that incorporates shelves, drawers, and other storage solutions, which is essentially seen in wardrobe cabinets in Dubai for contemporary homes.",
      },
      {
        q: " Do you offer custom wardrobe design services?",
        a: "Yes, we also provide fully custom wardrobe design services in Dubai, as per the area and the interior design you have chosen.",
      },
       {
        q: "Are built-in wardrobes better than walk-in wardrobes?",
        a: "Built-in wardrobes in Dubai are the perfect option for space conservation, while walk-in wardrobes add a bit of modernity and luxury and this choice depends on the size of your Dubai room and living style.",
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
