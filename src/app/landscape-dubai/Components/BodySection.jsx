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
                    "/images/ls1.png",
                    "/images/ls2.png",
                    "/images/ls3.png",
                    "/images/ls4.png",
                    "/images/ls5.png",
                    "/images/ls6.png",
                    "/images/ls7.png",
                    "/images/ls8.png",
                    "/images/ls9.png",
                    "/images/ls10.png",
                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Landscape Dubai Services
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                At Casa Kraft our expertise in landscape design in Dubai is of the highest quality transforming 
                outdoor spaces into beautiful, functional and sustainable spaces. At Casa Kraft, we are known to 
                be one of the best landscaping companies in Dubai, aiming to deliver luxurious outdoor spaces, 
                biophilic spaces and nature inspired escapes.
                <br /><br />
                At Dubai, our team of professional landscape architects and designers combines creativity with 
                expertise to provide completely personalized solutions when it comes to villas, corporate 
                developments or hospitality projects. If it is an entire landscape design renovation that 
                you require in Dubai, at Casa Kraft, we 
                provide eternal landscapes that will suit Dubai perfectly.
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
            Get Landscaping Services from a Leading Landscaping Contractor in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Casa Kraft is a leading landscaping contractor company catering entirely to the 
              needs of Dubai by providing end-to-end design, fit-out and construction services. 
              Being an expert fit-out and landscaping company, we undertake every aspect of the 
              process from conceptualization to implementation.
            </p>

            <p>
              Our team assesses each site thoughtfully, creates custom concepts, and provides 
              efficient implementation. Whether it is planting and paving to lighting and outdoor 
              structures, our landscaping and gardening services provide quality consistency in 
              every project.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Residential and Villa Landscape Dubai
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Our villa landscape Dubai services will remake your private garden into an oasis of 
              serenity and luxury. We are personalized outdoors with respect to your lifestyle. 
              Whether you want a peaceful retreat in your garden, an outdoor living area for the 
              family, or even a resort style space in pure luxury.
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Commercial Landscape Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              Our commercial landscape Dubai solutions help enhance the visual identity and functional 
              aspects of corporate, retail, hospitality, and mixed-use developments.By incorporating 
              biophilic spaces, shaded walkways, and green areas, we can assist commercial developments 
              in creating healthier space while also making it engaging and maintaining ease of maintenance.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
             → Soft and Hard Landscaping in Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              In Casa Kraft, soft and hard landscaping is used to combine elements of nature and architecture in 
              landscaping. Soft landscaping is performed using grass, plants, trees, and flowering plants to beautify 
              landscaping and give color to the landscape Dubai. Hard landscaping involves the use of patios, pathways, decks, 
              retaining walls and architectural elements in landscaping.
              </p>
            </div>

            <h3 className=" mt-5 font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Landscape Lighting Design Dubai
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              Our landscape lighting systems help accentuate the beauty of the outdoors in the night as well as provide 
              safety and functionality. Where the design is concerned, the lighting should accentuate the features of the 
              architecture, plants, walkways, as well as water features.
              </p>
            </div>

             <h3 className=" mt-5 font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Pergolas, Shades and Outdoor Living Spaces
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              We offer the design and installation of custom made pergolas and shades to ensure comfort from the sun in 
              Dubai while giving a touch of architectural beauty to the structure. The outdoor living spaces provided by 
              us include outdoor lounges, entertainment areas, BBQ and outdoor kitchens and spaces designed for family 
              gatherings.
              </p>
            </div>
           
           <h3 className="mt-5 font-semibold text-[18px]" style={{ color: PURPLE }}>
              → Water Features and Swimming Pool Integration
            </h3>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
             Casa Kraft combines water features like fountains, waterfalls and reflection pools to give the outside space 
             an essence of serenity and exclusivity.  Our swimming pool and landscape  give the pool an aesthetic of unity 
             with the garden and other elements around it, thus giving the effect of an entire resort.
              </p>
            </div>
            <div className="mt-10">
              <h2  className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Our Landscape Dubai Design and Construction Process
              </h2>

              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                Our services start with consultation and site analysis. We then proceed with concept design and planning. 
                Once this is approved our services entail landscape construction. We ensure that this is done well and on 
                schedule.

              </p>
            <h2  className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
                Why Choose Casa Kraft Interiors
              </h2>
              <p className="mt-6 text-[15px] leading-7" style={{ color: MUTED }}>
                Casa Kraft stands out, ranking as one of the top 10 landscape companies in Dubai due to its adherence to 
                design excellence, quality materials, sustainability and customer satisfaction. Individual approach, 
                attention to the smallest details and fluently delivered projects make us a preferred choice for 
                customers who seek the best landscape company in Dubai.

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
        q: "What are landscape design services in Dubai?",
        a: "The services offered in landscape architecture in Dubai are planning, design, and execution of the villa landscape gardens, commercial landscapes and luxury outdoor spaces. These services vary from site analysis to custom designs, soft landscaping, hard landscaping, landscape illumination, water features, pergolas, sustainable landscape designs to the integration of swimming pools with landscapes in Dubai.",
      },
      {
        q: "Why is Casa Kraft considered one of the best landscaping companies in Dubai?",
        a: "Casa Kraft has also been identified as one of the most well known landscaping firms in Dubai because of the expertise of their landscape architects and designers, bespoke design philosophy, use of high quality materials, emphasis on sustainable landscape designs and end-to-end services related to landscape design, fitouts and landscape construction.",
      },
      {
        q: "Do you offer villa landscape design and luxury landscaping services in Dubai?",
        a: "Yes, Casa Kraft is known to have specialized in the designs of villas and landscaping in Dubai to provide customers with customized outdoor space designs, nature inspired getaways, biophilic designs, pergolas and shades, outdoor kitchens, pools and landscape designs and water features.",
      },
      {
        q: "What is included in commercial landscape design services in Dubai?",
        a: "Commercial landscape architecture in Dubai involves the designing and implementation of outdoor space in offices, retail, hotels and communities. The trends in landscape architecture in the commercial setting include functionality, branding, biophilic space and sustainability.",
      },
      {
        q: "How much do landscape design services in Dubai cost?",
        a: "Landscaping design cost in Dubai relies on factors like size, design complexity, material, as well as incorporation of landscape lighting, water features, pergolas or swimming pools. This is where Casa Kraft offers clear pricing with tailored quotes based on consultation following a visit.",
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
