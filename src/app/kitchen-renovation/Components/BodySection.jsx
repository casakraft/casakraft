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
                    "/images/kr1.png",
                    "/images/kr2.png",
                    "/images/kr3.png",
                    "/images/kr4.png",
                    "/images/kr5.png",
                    "/images/kr6.png",
                    "/images/kr7.png",
                    "/images/kr8.png",
                    "/images/kr9.png",
                    "/images/kr10.jpeg",
                    "/images/kr11.jpeg",
                    "/images/kr12.jpeg",
                    "/images/kr13.jpeg",
                    "/images/kr14.jpeg",
                    "/images/kr15.jpeg",
                    "/images/kr16.jpeg",
                    "/images/kr17.jpeg",
                    "/images/kr18.jpeg",
                    "/images/kr19.jpeg",
                    "/images/kr20.jpeg",
                    "/images/kr21.jpeg",
                    "/images/kr22.jpeg",
                    "/images/kr23.jpeg",
                    "/images/kr24.jpeg",
                    "/images/kr25.jpeg",
                   
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Kitchen Renovation Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
              Casa Kraft Interiors is known as the Best Kitchen Renovation Company in Dubai, providing 
              luxurious kitchen renovations as well as tailored kitchen renovation services for 
              contemporary homes. Whether it is a cozy apartment, a luxurious villa, or a commercial 
              space, Casa Kraft Interiors is a professional team providing kitchen renovations & 
              remodeling services that can help create a functional, beautiful, and inspirational 
              kitchen from an ordinary one. 
              <br />

               It may be a luxury kitchen renovation at Palm Jumeirah, an Emirates Hills renovation, or 
               a #1 kitchen renovation at Downtown Dubai, Casa Kraft Interiors is your dependable partner 
               for designing & renovating your dream kitchen.
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
           Our Kitchen Renovation Services in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
             Our services for a kitchen renovation in Dubai encompass every aspect of kitchen design in Dubai, 
             making us one of the best kitchen renovation companies in Dubai. Right from planning our services 
             for a kitchen renovation in Dubai till its execution, we manage every aspect of your kitchen 
             renovation in Dubai.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Full Kitchen Renovation & Remodeling
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              As a leading kitchen renovation company in Dubai, Casa Kraft Interiors provides 
              full kitchen renovation services such as wall, ceiling, floor, and cabinet 
              renovation. At Casa Kraft Interiors, we work to provide every customer with 
              an exact kitchen renovation service. Whether it is an apartment or a complete 
              luxury kitchen renovation in Palm Jumeirah.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Modular Kitchens & Custom Cabinets
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                We provide tailored kitchen renovations solutions with bespoke modular kitchens and 
                small kitchen cabinets for efficient and aesthetically pleasing design. Our design 
                solutions are precisely developed for maximizing storage space   and are among the 
                best in Dubai kitchens today.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Premium Kitchen Appliances & Fix
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               Our kitchen renovation contractors use modern kitchen appliances in Dubai, 
               alongside high end kitchen fixtures, to provide you with practical, high end 
               kitchen designs. With smart ovens, induction cooktops, sleek sinks, and high 
               end faucets, our Casa Kraft Interiors services ensure that you have a modern 
               kitchen that fits the next generation.
              </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Luxury Kitchens & High End Finishes
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               For homeowners seeking luxury kitchen renovation in Palm Jumeirah or Emirates Hills, 
               our team provides customized solutions with the best materials, marble top finishes, 
               designer cabinets and contemporary lighting systems. A kitchen renovation job done in 
               Palm Jumeirah or Downtown Dubai carries an essence of elegance, utility as well as 
               modernism with each piece of work done.
              </p>
            </div>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Smart Sustainable Kitchen Upgrades
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
               The Smart Kitchen Our areas of specialization include expert kitchen renovation 
               services in Dubai, utilizing smart renovation Dubai techniques that include energy 
               efficient sinks, automated lighting and an internet of things kitchen. Sustainability 
               is also an integral part of this process, using ecofriendly materials as well as water
                saving fixtures.
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
               Our Kitchen Renovation Process

              </h2>

              <ul className="mt-5 space-y-2 text-[15px]" style={{ color: TEXT }}>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Consultation & Site Assessment: </b>Analyze your kitchen space to determine your objectives.

                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                  <b>Design & 3D Visualization:</b>  Detailed designs to help visualize your Dubai kitchen renovation project.

                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Material Selection & Budget Planning:</b>  Choose high quality, robust and fashionable materials.

                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                 <b> Approval & Permits: </b> Deal with any approval required for kitchens in villas or apartments in Dubai
                </li>

                <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Construction & Remodeling: </b> Expert kitchen remodeling services in Dubai with attention to every detail.
                </li>

                <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Appliance & Fixture Installation:</b>  Install high quality kitchen appliances Dubai and fixtures
                </li>

                <li className="flex gap-3">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black" />
                <b> Quality Inspection & Handover:</b> Your dream renovation must be of superior quality.
                </li>
              </ul>

            </div>

            <div className="mt-10">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
             Why Choose Casa Kraft Interiors for Kitchen Renovation in Dubai

            </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Casa Kraft Interiors is your reliable kitchen renovation services provider, offering the expert 
              kitchen renovation in Dubai, whether in small kitchens, luxurious kitchens, or any type of 
              kitchen in between. We also pride ourselves in providing customized kitchen renovation services 
              to suit every family, making sure our designs are functional, fashionable, and in-tune with every 
              family's ideas. 

              <br /> <br />
              We also serve all the key areas in Dubai, such as Business Bay, Downtown Dubai, Jumeirah, Palm 
              Jumeirah, Emirates Hills, and Dubai Marina, making Casa Kraft Dubai kitchen renovations & remodels 
              one of the best choices to cater to the Dubai kitchen renovation needs of everyone. At Casa Kraft 
              Interiors, we integrate modern means in kitchen renovation, combine this with our excellent 
              craftsmanship, quality, and price, and guarantee on time delivery, making us the best kitchen 
              renovation in Dubai.
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
        q: "How much does it cost to renovate a kitchen in Dubai?",
        a: "The cost of kitchen renovation in Dubai depends on the materials used, size of the kitchen, appliances, and whether you are taking a standard or luxury kitchen renovation service. At Casa Kraft Interiors, kitchen renovation prices are customized according to your design, layout, and finish selections.",
      },
      {
        q: "What Types Of Kitchen Renovation Services Do You Offer?",
        a: "Casa Kraft Interiors offers full kitchen renovation and remodeling services in Dubai including modular kitchens, custom cabinets, kitchen layout redesign, appliance installation, lighting upgrades, and luxury kitchen renovations for villas, apartments, and penthouses.",
      },
      {
        q: "Can You Help With Kitchen Design And Layout Planning?",
        a: "Yes, Casa Kraft Interiors provides professional kitchen design and layout planning in Dubai, including space optimization, 3D kitchen visualization, and material selection to ensure a functional and stylish kitchen renovation in Dubai.",
      },
       {
        q: "Which Is The Best Kitchen Renovation Company In Dubai?",
        a: "Casa Kraft Interiors is one of the best kitchen renovation companies in Dubai and the UAE, known for customized designs, premium materials, expert craftsmanship, transparent pricing, and on-time delivery for both luxury and small kitchen renovations.",
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
