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
                    "/images/vr2.png",
                    "/images/vr3.png",
                    "/images/vr4.png",
                    "/images/vr5.png",
                    "/images/vr6.png",
                    "/images/vr7.png",
                    "/images/vr8.png",
                    "/images/vr9.png",
                     "/images/vr1.png",
                    "/images/vr10.jpeg",
                    "/images/vr11.jpeg",
                    "/images/vr12.jpeg",
                    "/images/vr13.jpeg",
                    "/images/vr14.jpeg",
                    "/images/vr15.jpeg",
                    "/images/vr16.jpeg",
                    "/images/vr17.jpeg",
                    "/images/vr18.jpeg",
                    "/images/vr19.jpeg",
                    "/images/vr20.jpeg",
                    "/images/vr21.jpeg",
                    
                    
                  ]}
                />
              </div>
            </div>

            {/* 2) Heading + para + buttons stacked AFTER gallery (mobile) */}
            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Villa Renovation Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                If you are looking for Villa Renovation in Dubai, you are not just searching for construction work, you are seeking a full living style transformation. At Casa Kraft Interiors, we are expert in offering quality Villa Renovation Services in Dubai that blend high-end interior design, technical accuracy, and luxury finishing into one flawless process. Casakraft is a top <a href="/villa-renovation-company-dubai" className="font-bold hover:underline" style={{ color: PURPLE }}>
     Villa Renovation Company in Dubai,
    </a>  transforming outdated properties into contemporary luxury homes that showcase sophistication, luxury, and practicality. If it is a full Villa Remodeling in Dubai, interior upgrade, or intelligent home integration, we offer turnkey services from ideation to finishings.


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
            Why Choose Our Villa Renovation Company in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Selecting the right Villa Renovation Contractor in Dubai showcases the success of your entire project. At Casa Kraft Interiors, we are renowned as one of the Best Villa Renovation Companies Dubai because we give attention to design elegance, well-structured design, and timeless value creation. We are an experienced <a href="/villa-renovation" className="font-bold hover:underline " style={{ color: PURPLE }}>
     Interior Fit-Out & Renovation Company in Dubai
    </a>  delivering design, completion, authority approvals, and project management under one roof. Our experts include architects, interior designers, engineers, and project managers who make sure each Home Renovation in Dubai is offered with accuracy, transparency, and luxury standards expected in Dubai’s high-end communities.
              </p>
          </div>

          <div className="mt-3">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
           Our Complete Villa Renovation Services in Dubai
            </h2>
             <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              Our <a href="/transform-your-dream-home-expert-villa-renovation-services-in-dubai" className="font-bold hover:underline " style={{ color: PURPLE }}>
     Luxury Villa Renovation Services in Dubai
    </a>  are specific for homeowners who demand high-end elegance and practical excellence. Each project is personalized based on architecture, living style, and property value goals. We are experts in full-scale Villa Renovation Services in Dubai, covering structural transformation, upgrade interior design, exterior design and smart elements integration.
             </p>
          </div>

          <div className="mt-10">
           <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
              1- Interior Fit-Out & Custom Interior Design
            </h3>

           <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
           <p>
           Casakraft is a premium Renovation Company in Dubai, we are experts in providing Premium Villa Interiors Dubai through full interior services that cover ceilings, flooring, lighting design, and custom joinery. Our experts at Villa Interior Design Dubai ensure that every interior design is meticulously done by creating spatial designs that suit every room, personalizing the details to give you an elegant and practical experience. From a Complete Villa Fitout or Room Renovation, our design will reflect your luxurious lifestyle.
          </p>
          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          2- Kitchen Renovation Dubai
          </h3>
          <p>
         <a href="/kitchen-renovation" className="font-bold hover:underline " style={{ color: PURPLE }}>
     Kitchen Renovation Dubai
    </a> service is specially designed to change any old and normal kitchen into modern, efficient, and stylish cooking areas. Our company is an established Kitchen Renovation Company in Dubai, providing services that are innovative and beautiful at the same time. By utilizing our excellent Kitchen Renovation services in Dubai, we incorporate modular kitchens along with luxurious counters and other things in order to make the <a href="/kitchen-interior-design-in-dubai" className="font-bold hover:underline " style={{ color: PURPLE }}>
    kitchen interior design
    </a>  look both beautiful and functional.
           </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          3- Bathroom Renovation
          </h3>
          <p>
          Our <a href="/bathroom-renovation" className="font-bold hover:underline " style={{ color: PURPLE }}>
     Bathroom Renovation Dubai services
    </a>  take care of creating a space that offers you luxury and comfort with a modern touch. We are known as the Best Bathroom Renovation Dubai Company, offering specialized bathroom services according to high-class lifestyles. By availing of our Bathroom Renovation Dubai Services, you will get the pleasure of luxury sanitary fittings, intelligent water systems, quality tiles and marbles, and ambient lighting design.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          4- Villa Painting Services in Dubai
          </h3>
          <p>
          Our Villa Painting Dubai is designed to help you enhance your property through luxury finishing, which improves the appearance of interiors and exteriors. You can avail top-notch <a href="/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai" className="font-bold hover:underline " style={{ color: PURPLE }}>
     Villa Painting services in Dubai,
    </a>  which include interior and exterior villa painting, textured coatings, accent walls, and waterproof and heat-resistant paints, and ensuring everlasting results. Our professional <a href="/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai" className="font-bold hover:underline " style={{ color: PURPLE }}>
     villa wall painting services at Villas and houses in Dubai,
    </a>  perfect for homeowners looking to increase the property value of their villa before selling or renting it out.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          5- Villa Exterior Renovation Services
          </h3> 
          <p>
         Our Villa Exterior Renovation Services in Dubai, completely change the outer appearance of your property into a contemporary architectural statement that showcases comfort and sophistication. Through our expert Dubai Villa Exterior Design Services, giving attention to integrating exterior lighting, upgrading boundary walls, and elegant outdoor aesthetic improvements. Casakraft is a reliable Villa Contractors in Dubai, we make sure each exterior renovation is complete with accuracy and creativity, helping your villa reputed beautifully in high-end communities like Palm Jumeirah and Dubai Hills.
          </p>

          <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          6- Villa Extension Services
          </h3> 
          <p>
         Our Villa Extension Dubai services have been carefully designed to assist homeowners in enhancing their spaces while maintaining perfect architectural harmony and consistency in design. We are the leading Villa Extension Company in Dubai, providing intelligent design and finishing for any type of modification, ensuring safety in structure and aesthetic balance within the entire project. With our professional Villa Extension and Alteration Services in Dubai, we take care of additions to rooms, extension of living spaces, expansion of outdoor areas, and proper structuring, while adhering to the rules set by the Dubai authorities.
           </p>

            <h3 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
          7- Smart Renovation in Dubai
          </h3> 
          <p>
         Our Smart Renovation in Dubai services transform contemporary villas into smart living spaces through advanced technology and flawless automation. As part of our specialization in Smart home Villa Renovation & Tech Integration in Dubai, we integrate home automation systems, smart lighting control, climate management systems, and advanced security solutions to elevate luxury, efficiency, and living style convenience. With the help of our smart home automation and technology integration in Dubai, we create a house fully integrated to give you luxurious living experiences. Casakraft has earned the reputation of being the Best Villa Renovation Company in Dubai, ensuring that all of your needs are catered to seamlessly.
           </p>
            </div>

          </div>

          <div className="mt-3">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px] " style={{ color: PURPLE }}>
              What Is Included in a Full Villa Renovation in Dubai
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                A full Home Renovation in Dubai involves a well-structured and aesthetic transformation crafted to elevate the villa interior design, practicality, and overall value. The process includes:
                </p>
            <ul class="list-disc">
              <li> 
              Casa Kraft professional designers start to work in each villa 
              renovation in Dubai with a wide consultation and on-site assessment to understand your desire.
              </li>
              
              <li> Demolition and site preparation to clear and ready the space for renovation
              </li>
               
              <li> Structural upgrades to improve safety, stability, and modern layout planning
              </li>
               
              <li> Complete electrical and plumbing (MEP) works for updated and efficient systems
              </li>
              
              <li> Flooring installation and ceiling design to create a refined architectural base
              </li>
              
               <li> Custom joinery for bespoke storage, furniture, and interior detailing
              </li>
              
               <li> Interior finishing with premium materials for a luxury look and feel
              </li>
              
               <li> Exterior finishing to enhance overall curb appeal and visual harmony
              </li>
            </ul>
            <p>
                The result is a fully integrated villa transformation that delivers modern comfort, elegance, and long-lasting quality.
                </p>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                Villa Renovation Cost in Dubai 
              </h2>
              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                The Villa Renovation Cost in Dubai depends upon many factors related to the size of the property, the quality of the material used, and the overall complexity of the villa renovation project. Generally speaking, basic villa renovation involves mainly cosmetic changes. On the other hand, medium level renovation may include layout modifications and improvements related to mechanical, electrical, and plumbing. Finally, luxury renovations will be related to an entire change involving luxurious materials. In this way, spending money on professional Villa Renovation in Dubai not only makes one's life better, but also adds up to the total value of property and long-term ROI in Dubai’s competitive real estate market, especially when carried out by an experienced Villa Renovation Company in Dubai.
                </p>
<div className="mt-10">
                <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                Villa Renovation Approvals in Dubai
              </h2>
              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                All Villa Renovation in Dubai projects need strict compliance with local authority regulations to make sure safety and legal approval. We provide top-notch Villa Renovation Services in Dubai, handling all the necessary approvals involved, including those from Dubai Municipality, NOC approvals within your community, and permits for changes to your structure. As a reputable Villa Renovation Company in Dubai, we ensure that all your requirements are fulfilled, documented, and coordinated in the most efficient manner possible, ensuring that there are no problems along the way.
                </p>
                </div>
            </div>
          </div>
           <div className="mt-3">
            <h2 className="text-center font-semibold text-[24px] sm:text-[30px] " style={{ color: PURPLE }}>
              Our Villa Renovation Process
            </h2>

            <div className="mt-4 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
              <p>
                Our professional team follows the best designing process and created practical yet luxurious designs to ensure that every villa renovation in Dubai is unique, functional, and professionally executed.
           </p>
            <ul class="list-disc">
              <li> <b style={{ color: PURPLE }}>Consultation & Site Assessment – </b>
              Casa Kraft professional designers start to work in each villa renovation in Dubai with a wide consultation and on-site assessment to understand your desire.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Design Development & 3D Visualization - </b>
             We create personalized layouts and 3D designs, providing functional villa renovation ideas for a clear and sophisticated sight of your project.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Material Selection & Cost Planning - </b>
              As a reliable renovation company in Dubai, we help you in choosing premium materials while deciding costs for your villa renovation services.
              </li>
              <br /> 
              <li> <b style={{ color: PURPLE }}>Authority Approvals & Community NOCs  - </b>
              We handle all necessary permits and approvals, making sure flawless finishing for your home renovation in Dubai.
              </li>
              <br />
              <li> <b style={{ color: PURPLE }}>Construction & Project Execution  - </b>
               Our professional designers integrate each element of your villa renovation project perfectly, from planning interiors to structural works, with precision and premium quality.
              </li>
              <br />
               <li> <b style={{ color: PURPLE }}>Quality Inspection & Final Handover  - </b>
              Before handover, we conduct rigorous quality checks to deliver one of the best villa renovation services in Dubai, making sure your space is ready to inspire and enjoy.
              </li>
            </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-semibold text-[18px]" style={{ color: PURPLE }}>
                Ready to Transform Your Villa in Dubai
              </h2>
              <p className="mt-8 text-[15px] leading-7" style={{ color: MUTED }}>
                If you are planning a Villa Renovation in Dubai, Casa Kraft Interiors is your trusted partner for complete luxury transformation. Whether you require Villa Remodeling in Dubai, interior designs or refurbishing, exterior renovations or paint jobs, or anything to do with smart homes, you will find quality turnkey services at our place. Connect with us right away to transform your villa into a contemporary luxury masterpiece.
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
        q: "How much does villa renovation cost in Dubai?",
        a: " The Villa renovation cost in Dubai depends on size, materials, and customization level. Luxury villas require premium investment but deliver high ROI.",
      },
      {
        q: "How long does villa renovation take?",
        a: "The whole villa renovation takes typically between 6–20 weeks depending on project scope.",
      },
      {
        q: "Do you handle approvals?",
        a: "Yes, Casa Kraft Renovations manage all approvals and NOCs of our Villa projects in Dubai.",
      },
      {
        q: "Can you integrate smart home systems?",
        a: "Yes, we specialize in full smart home integration in apartments and villas."
      },
      {
        q: "Do you offer painting and finishing services?",
        a: "Yes, including full villa painting and luxury texture finishes."
      },{
        q: "Do I get a project manager?",
        a: "Yes, every project is assigned a dedicated manager."
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
