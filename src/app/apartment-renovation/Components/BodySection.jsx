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
              Apartment Renovation Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
               Casa Kraft Interiors is the No.1 apartment renovation Dubai company, providing high-end 
               apartment renovation services in Dubai that turn old-fashioned living spaces into elegant, 
               contemporary homes. As a reliable apartment renovation contractor in Dubai, we are experts 
               in both complete apartment renovation and individual transformation. Whether you are 
               renovating your apartment in Dubai for living style enhancement, elevated property value, 
               or elegant aesthetics, our professional designers make sure each apartment renovation project 
               is completed with accuracy, artistic, and practical.
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
          Our Apartment Renovation Services in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
             Casa Kraft apartment renovation Dubai services handle each element of interior design and 
             remodeling, placing us one of the best apartment renovation companies in Dubai. We manage 
             each process of the renovation of apartments, making sure contemporary, Innovative, and 
             luxurious results.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Full Apartment Renovation and Remodeling
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Casa Kraft Interiors provide full apartment renovation in Dubai, whether it’s a studio, one-bedroom, 
              or multi-bedroom apartment. From modern layout redesigns to final execution, our apartment renovation 
              projects change spaces into elegant and sophisticated spaces.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Kitchen Renovation Dubai
            </h3>

          <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              We deliver comprehensive kitchen renovation services and provide contemporary and practical kitchen spaces. 
              Casa Kraft is a reliable apartment renovation contractor in Dubai, we handle customized cabinetry, benchtop, 
              and practical appliances to design a kitchen that enhances your everyday living.
            </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Bathroom Renovation and Upgrades
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Casa Kraft Interiors offers luxurious bathroom renovation services in Dubai, including contemporary 
                appliances, premium tiling, and Innovative space optimization. Each apartment renovation project 
                includes bathrooms designed for both functionality and excellence.
              </p>

              <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Living Room and Bedroom Renovation
            </h3>
            <p>
              Casa Kraft experienced team enhanced apartment interior design – remodeling in Dubai, transforming 
              living rooms and bedrooms with practical layouts, elegant finishes, and bespoke touches. Each element 
              of renovation is designed to showcase the client's vision and personality.
            </p>
            
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Custom Storage and Wardrobe Solutions
            </h3>
            <p>
              We offer functional storage solutions, built-in wardrobes, and stylish cabinetry to perfectly optimized 
              space, placing us one of the best apartment renovation companies in Dubai for functional yet modern living 
              spaces.
            </p>
            
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Interior Fit-Out and Finishing
            </h3>
            <p>
              Casa Kraft is a top apartment renovation contractor in Dubai, we manage flooring, wall finishes, ceilings, 
              warm lighting, and all interior fit-out works. Our premium execution elevates your apartment’s design while 
              making sure durability.
            </p>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Smart Home Integration Services in Dubai
            </h3>
            <p>
              We integrate modern smart renovation Dubai solutions in developing future-ready apartments blending elegance 
              with comfort through automated lighting, climate control, and security systems.
            </p>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Tailored Apartment Renovation Services Dubai
            </h3>
            <p>
              Casa Kraft Interiors offers both small-scale transformation and large-scale apartment renovation projects, 
              delivering bespoke solutions for each home. This comprehensive concept creates us the best apartment renovation 
              company in Dubai, reliable for premium quality, and innovation.
            </p>
            </div>

            <div className="mt-5">
              <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
               Benefits of Apartment Renovation in Dubai
              </h2>

              <p className="mt-5 text-[15px] leading-7" style={{ color: MUTED }}>
                There are a lot of benefits to investing in apartment renovation services in Dubai. For the renovation of 
                apartments, comfort and space are thoughtfully modulated while increasing their luxury value in an upscale 
                manner. At Casa Kraft Interiors, the experts will guide you through each step of your apartment renovation 
                project, ensuring that every detail, from design to materials, will stand at the top standard. Our space 
                owners consistently renowned us as the expert apartment renovation Dubai company for providing practical 
                solutions and exclusive results.
              </p>
            </div>
              <div className="mt-5">
              <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>
              Why Choose Casa Kraft Interiors For your Apartment Renovation in Dubai?
              </h2>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
               We are the best apartment renovation company for space owners looking for professional, premium renovation 
               services in Dubai. We oversee each element of your apartment renovation project, making sure on-time delivery, 
               premium materials, and seamless execution. Our professionals and project handlers work closely with clients to 
               get knowledge of their concept and bring it into real life, placing us the go-to experts for apartment renovation 
               Dubai, from full apartment renovations to contemporary, elegant transformation</p>

              <p className="mt-5 text-[15px] leading-7" style={{ color: MUTED }}>
                With the best reputation as an apartment renovation contractor in Dubai, we have perfectly and on-time 
                accomplished various apartment renovation projects, making us one of the best apartment renovation 
                companies in Dubai. As we focus on quality and customer satisfaction, we are indeed the only option 
                available for space owners, who look for apartment renovation services in Dubai with a combination of 
                luxury and timeless elegance.
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
        q: "How much does it cost to renovate an apartment in Dubai?",
        a: "The cost of apartment renovation in Dubai depends on the size of apartment, renovation scope in Dubai, nature of design, and material selection. Casa Kraft Interiors provides customized apartment renovation services in Dubai based on your requirements.",
      },
      {
        q: "How much does it cost to fully renovate an apartment?",
        a: "A full apartment renovation includes layout changes, kitchen renovation Dubai, bathroom renovation, interior fit-out, and finishing. The final cost depends on the level of customization and finishes selected for your apartment renovation Dubai project.",
      },
      {
        q: "Do I need approvals for apartment renovation in Dubai?",
        a: "Yes, approvals are required for apartment renovation in Dubai, especially for layout changes, plumbing, electrical work, and structural modifications. Casa Kraft Interiors manages all approvals for apartment renovation Dubai to ensure compliance and smooth execution.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0  pb-20">
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
