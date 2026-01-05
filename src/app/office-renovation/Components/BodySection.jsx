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
                    "/images/or1.png",
                    "/images/or2.png",
                    "/images/or3.png",
                    "/images/or4.png",
                    "/images/or5.png",
                    "/images/or6.png",
                    

                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Apartment Renovation Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                WE DO Interior Design &amp; Fit-Out provides expert Apartment Renovation
                Services in Dubai, including AC upgrades, electrical and plumbing work,
                carpentry, tiling, and flooring — all tailored to transform your living
                space with quality and care.
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
            Benefits of Apartment Renovation in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Renovating your apartment in Dubai comes with a myriad of benefits.
              Firstly, it enhances the aesthetic appeal of your space, making it more
              modern and stylish. A renovated apartment not only looks great but also
              adds value to your property, which can be advantageous if you plan to sell
              or rent it out in the future.
            </p>

            <p>
              Moreover, apartment renovation allows you to customize your space
              according to your preferences and lifestyle. Whether you want to create
              an open-plan layout, add extra storage, or upgrade fixtures and fittings,
              renovation gives you the freedom to design your dream home.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Apartment Renovation Goals
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Before embarking on an apartment renovation project, it&apos;s essential
              to set clear goals. Determine what you aim to achieve with the renovation.
              Are you looking to increase functionality, improve energy efficiency, or
              simply enhance the overall ambiance? By defining your objectives, you can
              streamline the renovation process and ensure that it aligns with your
              vision.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              How to Start an Apartment Renovation Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Starting an{" "}
                <span className="font-semibold underline text-black">
                  apartment renovation Dubai
                </span>{" "}
                may seem daunting, but with the right approach, it can be a smooth and
                rewarding experience. Begin by researching reputable apartment renovation
                companies in Dubai. Look for contractors who have experience in renovating
                apartments similar to yours and have a proven track record of delivering
                quality results.
              </p>

              <p>
                Once you&apos;ve selected a renovation company, schedule a consultation
                to discuss your ideas and budget. A professional contractor will assess
                your space, provide expert advice, and offer design solutions tailored
                to your needs.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              Why Choose Our Apartment Renovation Dubai Services?
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                At{" "}
                <span className="font-semibold text-black">
                  WE DO Interior Design &amp; Fit-Out
                </span>
                , we focus on delivering premium apartment renovation results that match
                your expectations — with a practical scope, clean workmanship, and clear
                communication from start to finish.
              </p>

              <p>
                With years of experience in the industry, we understand the unique
                challenges and requirements of renovating apartments in Dubai and are
                committed to providing personalized solutions that suit your preferences
                and budget.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                When you choose our apartment renovation services, you can expect:
              </h4>

              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  Expert craftsmanship and attention to detail
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  Transparent communication and project management
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  Competitive pricing and accurate cost estimates
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  Timely completion without compromising quality
                </li>
              </ul>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                Don&apos;t settle for anything less than the best when it comes to
                renovating your apartment in Dubai. Trust WE DO Interior Design &amp;
                Fit-Out to bring your vision to life and transform your space into a
                place you&apos;ll love to call home.
              </p>

              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Contact us today to schedule a consultation and take the first step
                towards realizing your apartment renovation goals!
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
        q: "How do you renovate a small apartment?",
        a: "Renovating a small apartment involves maximizing space efficiency and enhancing functionality. Start by decluttering and selecting multifunctional furniture. Opt for light colors to create an illusion of space and incorporate smart storage solutions. Our experts can tailor a plan to optimize your small apartment renovation.",
      },
      {
        q: "What does it mean to renovate an apartment?",
        a: "It typically includes improving layouts, finishes, fixtures, and functional systems—such as flooring, ceilings, lighting, joinery, kitchens, bathrooms, and painting—based on your goals and building approvals.",
      },
      {
        q: "Can you paint walls in a rented apartment?",
        a: "Often yes, but it depends on your tenancy contract and landlord approval. We can recommend reversible finishes and provide approval-ready samples/specs for sign-off.",
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
