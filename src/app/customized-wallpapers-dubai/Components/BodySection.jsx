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
      {/* ========= IMAGE + CONTENT SECTION ========= */}
    
      <section className="bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12"> {/* Yahan pb-12 add kiya hai */}
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
              <b> Customized Wallpaper Services in Dubai</b> by Casa Kraft Interiors are crafted to change villas, apartments, and commercial spaces with high-end <b>Wallpapers in Dubai</b> services that blend elegance, practicality, and luxury. We provide comprehensive <b>Customized wallpaper Dubai services</b>, starting from <b>wallpaper installation, wallpaper printing</b> up to <b>wallpaper fixing</b> for both <b>residential and commercial walls</b>.
<br /><br />
                 We are the <b>No.1 Wallpaper Provider In Dubai</b>, committed to providing perfect solutions with precision and professionalism, ensuring that every job is a demonstration of top-class artistry and elegant design. Our premium service promise covers free measurement for accurate styling, expert installation by expert professionals, contemporary finishes that enhance each space, and a fast turnaround to fulfill your project exclusivity without compromising quality. We also serve Jumeirah Bay.
 </p>

              {/* Buttons Container */}
              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a href="/contact-us" className="h-11 w-full sm:w-[220px] flex items-center justify-center text-xs tracking-wider uppercase text-white bg-[#1e4a45]">
                  Book a Consultation
                </a>
                <a href="/contact-us" className="h-11 w-full sm:w-[220px] flex items-center justify-center text-xs tracking-wider uppercase text-white bg-black/70">
                  Get Your Estimate
                </a>
              </div>
              {/* Buttons ke nichy extra space ke liye padding container level par set hai */}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Wallpaper Services */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
            Premium Custom Wallpaper Design & Installation in Dubai
          </h2>

          <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
              Casa Kraft Interiors is a top <b>wallpaper company in Dubai</b>, providing full <b>Wallpaper Installation Dubai</b> along with personalized interior design services specific for contemporary living and commercial spaces. We offer high-end services that blend creativity, accuracy, and durability to redefine any interior into a high-end visual experience.
              </p>
               <p>
              If you prefer sophisticated <b>floral wallpapers in Dubai</b>, contemporary and minimal <b>Pattern Wallpaper</b>, bold and quality <b>Geometric Wallpaper Dubai</b>, or rich and sophisticated <b>Textured Wallpaper Dubai</b>, we offer completely <b>custom-made Wallpaper Dubai</b> services that align your space, personality, and concept.
             </p>
               <p>
              Casakraft is a reliable <b>wallpaper supplier in Dubai</b> and a professional <b>wallpaper fixing company for wallpaper installation in UAE</b>, we committed to deliver smooth completion from ideation to final installation, making sure high-end quality results each time without overcrowding repetitive techniques or compromising design elegance.
 We also serve Dubai Marina.
            </p>
          </div>

          <div className="mt-5">
           <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
            Why Customized Wallpapers Dubai is a Smart Choice for Homes & Offices
          </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Selecting <b>Customized wallpapers Dubai</b> is a good investment for both homes and businesses. Wallpaper provides you with an upscale alternative without breaking the bank by doing expensive renovations. We offer <b>Custom Wallpaper Digital Printing Services in Dubai</b> that provide you with durable and weatherproof products.Wallpaper is tougher, more appealing, and easier to manage than paint. From decorating wallpapers for your house to wallpaper branding for your office interiors, our services cover it all. We also serve Downtown Dubai.
         
         </p>
          
          </div>

          <div className="mt-5">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
           Our Customized Wallpapers Dubai Services
          </h2>
            <h3 className="font-semibold text-[18px] mt-4" style={{ color: PURPLE }}>
            Custom Wallpaper Design
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Our <b>custom wallpaper design in Dubai</b> service focuses on personalized themes and tailored concepts. We as <b>Top Wallpaper Dubai Designers & Fixing Experts</b> will give you amazing 3D views and designs to turn your imaginations into reality. We offer innovative ideas of wallpapers that range from 3D wallpaper designs, texture wall coverings, floral designs, and much more!
            </p>
            <h3 className="font-semibold text-[18px] mt-4" style={{ color: PURPLE }}>
            Wallpaper Printing Services
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             We provide state-of-the-art <b>custom wallpaper printing services</b>. We use superior resolution and environmental-friendly ink to ensure superior quality and detailed prints. With our professional <b>Wallpaper printing Dubai</b> capabilities, we deliver durable vinyl, washable, textured, and waterproof wallpaper solutions.
            </p>
            
            <h3 className="font-semibold text-[18px] mt-4" style={{ color: PURPLE }}>
           Wallpaper Installation in Dubai
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Our expert <b>professional wallpaper installers</b> provide seamless <b>wallpaper installation in Dubai</b> with precision alignment and bubble-free finishing. Searching for <b>wallpaper installation near me?</b> Casa Kraft ensures fast and efficient service across Dubai with a <b>Zero-Hassle Wallpaper Installation Process</b>. We are known for reliable <b>wallpaper fixing services</b> and premium-quality installation standards.
            </p>
            <h3 className="font-semibold text-[18px] mt-4" style={{ color: PURPLE }}>
          Wallpaper Repair & Replacement
            </h3>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
             Our specialized <b>wallpaper fixing in Dubai</b> solutions include seam repairs, bubble removal, patch replacement, and complete reinstallation when needed. As the <b>Best Wallpaper Fixing Dubai Company</b>, we restore damaged walls with flawless finishing.
 We also serve Business Bay.           </p>
          </div>
{/* STEP 1: Process Section (Moved Up) */}
          <div className="mt-5">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
          Our Wallpaper Design & Installation Process
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 1 – Free Consultation & Inspection</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>We visit your property to understand your requirements and assess your residential or commercial walls for the best wallpaper solution.</p>
              </div>
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 2 – Measurement & Design</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>Accurate wall measurements are taken and your selected design is finalized with proper layout approval before production.</p>
              </div>
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 3 – Material Selection</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>You can choose from premium options like vinyl, textured, geometric, and floral wallpapers in Dubai based on your space and style.</p>
              </div>
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 4 – Printing & Preparation</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>We produce your design using <b>Custom Wallpaper Digital Printing Services in Dubai</b> to ensure high-quality colors and sharp detailing.</p>
              </div>
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 5 – Professional Installation</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>Our experts handle <b>wallpaper installation</b> with precision, ensuring smooth application and perfect alignment.</p>
              </div>
              <div className="p-4 border-l-4" style={{ borderColor: PURPLE, backgroundColor: "#f9f9f9" }}>
                <p className="font-bold text-[#222]">Step 6 – Quality Assurance</p>
                <p className="text-sm mt-1" style={{ color: MUTED }}>Our experts examine all details thoroughly for perfection and high-quality results. We also provide services on Sheikh Zayed Road.</p>
              </div>
            </div>
                     </div>
        <div className="mt-10">
  <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
    Types of Custom Wallpapers Available in Dubai
  </h2>
  
  <ul className="mt-6 space-y-3 text-[15px]" style={{ color: MUTED }}>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0"  />
      3D wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Wall Murals
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Luxury Textured Wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Kids Room Wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Office Branding Wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Vinyl & Washable Wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
      Waterproof Bathroom Wallpaper
    </li>
    <li className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
     We also serve Tilal Al Ghaf
    </li>
  </ul>

 
</div>
          

          <div className="mt-10">
             <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
         Where Can You Install Customized Wallpapers Dubai?
          </h2>
            <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Our <b>Customized wallpaper services in Dubai</b> will be great for any room you want to enhance – whether it is the living room, bedroom, kids room, feature wall, office, retail store, restaurant, or hotel. Our products cater for all <b>commercial and residential walls</b> – giving your interior an extra style. With our best <b>wallpaper installations in Dubai</b>, make sure you have an elegant interior design.<br/> We also serve Dubai Creek Harbor.

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
        q: "How Much Cost Of Wallpaper Installation In Dubai?",
        a: "The price of wallpaper installation in Dubai will depend upon how big your walls are, the kind of wallpaper you use, customized wallpaper designs that require extra work, and installation. You should know that textured or 3D wallpapers are relatively costly than vinyl wallpapers.",
      },
      {
        q: "How To Fix My Cracked Wallpaper?",
        a: "Our service involves wallpaper repair work that will include wall preparation, wallpaper joint repairs, removal of any potential air bubbles, repairs to any damaged parts of the wallpaper, and even replacement of your wallpaper when needed.",
      },
      {
        q: "Is Wallpapering Expensive Compared to Painting?",
        a: "Wallpapering may be more expensive than painting; however, with the added benefits of durability and attractiveness, it will always be worth considering.",
      },
      {
        q: "How Long Does Wallpaper Last?",
        a: "On average, wallpapers can last from 5 to 15 years depending on what kind of wallpaper you have.",
      },
      {
        q: "Which Type of Wallpaper Should I Have on My Walls?",
        a: "The living room should have textured or mural wallpaper. Vinyl wallpapers that can be washed are needed for children’s rooms. Bathroom wallpaper must be water-resistant. Geometric Wallpaper Dubai designs and branding murals can work well for offices.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 pb-20">
         <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
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

// Sub-components (Chevron, HeroGallerySwiper, FullscreenGallery) remain same as original structure...
function Chevron({ isOpen }) {
  return (
    <span className="mt-1 shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}>
        <path d="M6 9l6 6 6-6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="relative">
          <Swiper modules={[Navigation, Thumbs, Keyboard]} navigation keyboard={{ enabled: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)} className="w-full">
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button type="button" onClick={() => { setActiveIndex(idx); setIsOpen(true); }} className="block w-full">
                  <img src={img.src} alt={img.alt} className="w-full h-[240px] sm:h-[360px] lg:h-[420px] object-cover" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-3">
          <Swiper modules={[FreeMode, Thumbs]} onSwiper={setThumbsSwiper} freeMode watchSlidesProgress slidesPerView={5} spaceBetween={10} className="w-full">
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <button type="button" onClick={() => setActiveIndex(idx)}
                  className={`w-full border ${activeIndex === idx ? "border-black" : "border-white"}`}>
                  <img src={img.src} alt={img.alt} className="h-16 sm:h-20 w-full object-cover" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {isOpen && <FullscreenGallery slides={slides} initialIndex={activeIndex} onClose={() => setIsOpen(false)} />}
    </>
  );
}

function FullscreenGallery({ slides, initialIndex, onClose }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/90">
      <div className="absolute top-4 right-4 z-[10000]">
        <button type="button" onClick={onClose} className="h-11 w-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition">✕</button>
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