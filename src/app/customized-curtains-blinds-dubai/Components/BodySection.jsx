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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[760px]">
                <HeroGallerySwiper
                  images={[
                    "/images/apartment-bedroom-curtains-in-dubai.png",
                    "/images/apartment-living-room-blinds-in-dubai.png",
                    "/images/villa-bed-room-curtains-in-dubai.png",
                    "/images/office-blinds-in-dubai.png",
                    "/images/apartment-curtains-dubai.png",
                    "/images/modern-living-room-corner-curtains-in-dubai.png",
                  ]}
                />
              </div>
            </div>

            <div className="lg:col-span-5 pt-2 text-left lg:text-left">
              <h1 className="text-[24px] sm:text-[34px] font-medium text-[#222]">
                Customized Curtains & Blinds Services in Dubai
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a] max-w-[680px] mx-auto lg:mx-0">
                Enhance your interior aesthetics by incorporating our high-quality curtains & blinds in Dubai offered by Casa Kraft Interior Design & Renovation. If you are designing an upscale villa, updating your modern apartment or renovating your professional office, our high quality curtains and blinds in Dubai cater to all types of spaces. Our designer curtains are tailor made to match your exact requirements and offer modern designs with premium quality fabrics.<br /><br />
                We specialize in offering customized curtains and blinds in Dubai along with modern designs & flawless installations. Discover unparalleled elegance and efficiency in every one of our products including the best curtains in Dubai. Our luxurious curtains and blinds in Dubai offer superior light blocking capability, ease of usage and an elegant look.
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

      {/* ========= MAIN CONTENT SECTION ========= */}
      <section className="bg-white">
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-10">
          <h2 className="text-center font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
            Premium Customized Curtains & Blinds in Dubai
          </h2>

          <div className="mt-8 space-y-6 text-[15px] leading-7" style={{ color: MUTED }}>
            <p>
              Enhance your space with beautifully crafted curtains and blinds designed to bring elegance, comfort, and sophistication to villas, modern apartments, and professional offices across Dubai. Each task gets done with professionalism and precision, providing tailor made and well fitted shades and curtains according to the theme and design of your interior space. Enjoy perfect curtain installation service in Dubai with Casa kraft interior design & renovation which provide durable and aesthetically pleasing products.
            </p>
          </div>

          {/* Why Choose Casa Kraft Section (Updated as per Docx) */}
          <div className="mt-12">
            <h2 className="font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
              Why Choose Casa Kraft for Curtains & Blinds in Dubai?
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#6a6a6a]">
              There are many options for curtain and blind installation services available for interior designing in Dubai; however, Casa Kraft offers unmatched quality products in addition to personalized services for homes and workplaces. Our company combines custom made curtains along with blinds and installs them according to the needs of homeowners and businessmen in Dubai.</p>

            <p className="mt-4 text-[15px] leading-7 text-[#6a6a6a]">
             What makes Casa Kraft Interior Design & Renovation unique and popular among its customers is the level of customization involved in its products with personalized services. After visiting your site to get exact measurements, the company recommends suitable curtains or blinds, and you can choose your favorite color from a huge collection available with them. Moreover, there is an option for motorized and smart blinds so that you can enjoy modern technology. The most amazing thing about Casa Kraft is that it offers a variety of premium quality textiles to give a luxurious touch to your rooms or offices. The professional installers ensure that every blind or curtain is installed perfectly at your place.The team that is skilled at installing such curtains and blinds does the task professionally and leaves no marks of inefficiency. While providing the best quality products, Casa Kraft makes sure that all of their services remain within affordable prices. Their professional team executes all tasks efficiently and quickly so that all projects are completed effectively.</p>

          </div>

          {/* Rest of the Content */}
          <div className="mt-12">
             <h2 className="font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
              Our Curtain & Blind ServicesH2: Our Customized Curtain & Blind Solutions
             </h2>
             <p className="mt-4 text-[15px] leading-7" style={{ color: MUTED }}>
              We at Casa Kraft Interior Design & Renovation provide you with all custom made curtains with professional installation services for your villas, apartments and offices. You can get custom made curtains in Dubai that will be crafted according to your choice and needs and customized designs that would perfectly fit your room. <br/><br/>
                Get custom made blinds along with custom curtains in Dubai that have motorized blinds and best quality fabrics installed in your room with curtain installation Dubai. Get luxurious custom curtains Dubai with Casa Kraft Interior Design & Renovation for elegance and comfort. </p>
          </div>

          {/* Service Details */}
          <div className="mt-8 space-y-10">
            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Custom Curtains</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Give your room a new look and elegance with our custom made curtains with professional installations. You can easily order custom made curtains in Dubai to get the desired design according to your style. Custom windows layering will control the lighting and customized printed curtains are designed for your personal style. Enjoy the luxury with custom made curtains in Dubai.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Sheer curtains</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Add style to your interiors with our best sheer curtains in Dubai made using high-quality materials with exact stitching, rails, and installation services. Sheer curtains with rails & installation and luxury sheer curtains enhance your living spaces, adding style, elegance and ample lighting to your home and office areas. Get premium, customized sheer curtains to suit your design requirements creating an atmosphere of privacy and luxury.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Blackout curtains</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Experience the privacy, heat resistance and luxury with the blackout curtains in Dubai. With our premium blackout curtains, blocking out sunlight , protect your interior against heat and give luxury a chance.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Wave curtains</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Add beauty and utility to your interiors with the beautiful Wave Curtains. Experience privacy and light control all while enjoying the most modern look you've ever seen with Wave Curtains Dubai.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Eyelet curtains</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Because the eyelet design makes it easy to open and close the curtains as you move the curtain along the rail with ease.Add sophistication and style to your interiors with our premium Eyelet Curtains in Dubai. Get premium, stylish Eyelet Curtains in Dubai that give you privacy and light control.</p>
            </div>

             <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Pinch Pleat Curtains</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Casa kraft  offer premium quality French pinch pleat curtains in Dubai and we can boast of providing the best pinch pleat curtains made by our experts in Dubai. Our pinch pleat curtains range is aimed at decorating the interior of your homes offering an elegant solution to both privacy and light management. Suitable for all villas, apartments or offices, these curtains are sure to meet all of your expectations.</p>
            </div>

          </div>


           <div className="mt-8 space-y-10">
            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Blinds Custom Made</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>Our blinds are tailored to suit the windows in any villa, apartment or office of any shape and size. Casa kraft interior design & fitout provide a perfect balance between utility and elegance.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Roller Blinds</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Roller blinds are stylish, easy to operate, and are capable of providing good lighting effects inside homes and workplaces. They are available in different fabric types and colors.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Roman Blinds</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>  Roman blinds can help give your place an elegant and warm look due to their folds and fabric materials. These are very good at controlling natural lighting.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Venetian Blinds</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>With their slat mechanism, venetian blinds provide good privacy by managing the amount of light coming in. They are great for contemporary as well as traditional interiors.</p>
            </div>

            <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Vertical Blinds</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Suitable for large windows or sliding doors, vertical blinds can be operated smoothly and provide a good control over lighting effects. These  blinds are suitable for living and workplaces.</p>
            </div>

             <div>
              <h4 className="font-semibold text-[18px]" style={{ color: PURPLE }}>Motorized Blinds</h4>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> With advanced technologies, motorized blinds offer effortless and stylish control over light. You can find them quite useful for your villas, apartments or office space.</p>
            </div>

          </div>


              <div className="mt-12">
             <h2 className="font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
             Curtains & Blinds for Villas, Apartments & Offices in Dubai
             </h2>
             </div>

            <div className="mt-8 space-y-10">
            <div>
              <h3 className="text-[20px]" style={{ color: PURPLE }}>Interior Solutions for Villas</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Create a perfect interior design for villas with our high-quality curtains and blinds. Enjoy the ultimate elegance by choosing our products, which will be installed correctly to make a luxurious interior.</p>
            </div>

            <div>
              <h3 className=" text-[20px]" style={{ color: PURPLE }}>Luxurious Apartments</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Make your apartments more luxurious by installing beautiful curtains and blinds according to their style and interior design. Whether you want to choose roller blinds or pleated ones, Casakraft interiors has got everything for your taste.</p>
            </div>

           <div>
              <h3 className=" text-[20px]" style={{ color: PURPLE }}>Offices & Commercial Interiors</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Improve your offices and commercial interiors with quality motorized or vertical blinds and curtains to give them the right light control and privacy. You will definitely love their professional design.</p>
            </div>

            <div>
              <h3 className=" text-[20px]" style={{ color: PURPLE }}>Retail & Hotel Interiors</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> Create a cozy and comfortable atmosphere in hotels and other commercial establishments by purchasing luxury curtains and blinds. You can trust us in achieving the desired interior appearance.</p>
            </div>

          </div>


          {/* Installation Process */}
          <div className="mt-12">
             <h2 className="font-semibold text-[24px] sm:text-[30px]" style={{ color: PURPLE }}>
             Our Curtain & Blind Installation Process
             </h2>
             </div>

            <div className="mt-8 space-y-10">
            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Free Consultation</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> The first step we undertake is a free consultation where we learn about your style, your requirements and whether you need curtains for a villa, apartment or office.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Fabric Selection</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>  With a variety of fabrics and color selections, we ensure that you have the option of selecting just the right material for your interior design.</p>
            </div>

           <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Measurements</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>  We take accurate measurements to make sure that each and every window gets an exact fitting of their curtains or blinds making their look impeccable.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Custom Designing</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>  Your curtains and blinds are custom designed using the best materials making your windows beautiful and functional at the same time.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[20px]" style={{ color: PURPLE }}>Professional Installations</h3>
              <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}> We have our experienced installation team which makes sure that your windows look perfect with your new curtains and blinds.</p>
            </div>

          </div>

          {/* Fabrics Section */}
          <div className="mt-12">
            <h2 className="font-semibold text-[24px]" style={{ color: PURPLE }}>Premium Fabric & Material Options</h2>
            <p className="mt-2 text-[15px] leading-7" style={{ color: MUTED }}>At Casa Kraft Interior Design & Renovation, you will find an impressive range of fabrics to get curtains and blinds of the best quality made to suit your preferences in Dubai.</p>
            <ul className="mt-5 space-y-4 text-[15px]" style={{ color: TEXT }}>
              <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Linen –</b> This fabric adds a light and elegant touch to the interior of your home. Great choice for the design of living rooms, bedrooms, and office spaces.</span></li>
              <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Velvet –</b>  For those looking for a rich and sophisticated touch to their interior design velvet curtain will be the right choice. </span></li>
              <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Silk –</b> This fabric is smooth and luxurious giving your curtain and interior a sophisticated touch. Silk adds grace and elegance to the design of the interior of your place.</span></li>
              <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Blended Cotton  –</b> Durable and resistant to mechanical damages this material will be perfect for the daily use of curtains in villas, apartments and office spaces.</span></li>
              <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Blackout Fabrics –</b> With such curtains you can achieve full protection against sunlight and regulate the temperature of the room. This fabric is suitable for bedrooms and other areas.</span></li>
            <li className="flex gap-3"><span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-black shrink-0" /><span><b>Sunscreen Fabrics –</b> Such curtains allow for getting natural light in your place while avoiding excessive glare and protection against UV light. Great for living rooms and offices.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}

function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        q: "What is the price of custom curtains in Dubai?",
        a: " The pricing of custom curtains in Dubai differs according to fabric choice, size, style, and other added elements such as motorized operations or layers. Feel free to reach out to us for an accurate quote customized to meet your requirements.",
      },
      {
        q: "Do you have free measuring services?",
        a: "Yes, we offer complimentary measuring services where our team will visit your site to measure your spaces precisely.",
      },
      {
        q: "How soon can I expect my installation to be completed?",
        a: "Depending on the number of curtains or blinds and their styles, our expertly skilled installation team should complete the task within 1–3 days.",
      },
      {
        q: "Can I get motorized blinds in Dubai?",
        a: "Yes, we also offer motorized blinds that offer ease of use and elegance to your interiors.",
      },
      {
        q: "Which curtains suit Dubai's climatic conditions?",
        a: "In Dubai, blackout curtains and sun screen fabrics work perfectly.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 pb-20">
        <h2 className="text-[28px] sm:text-[26px] font-semibold" style={{ color: "#222" }}>
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
                    {/* H3 ko font-bold kiya gaya hai */}
                    <h3 className="text-[18px] sm:text-[20px] font-bold" style={{ color: "#222" }}>
                      {item.q}
                    </h3>
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

function HeroGallerySwiper({ images }) {
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
                  className={`w-full border ${activeIndex === idx ? "border-black" : "border-white"}`}
                >
                  <img src={img.src} alt={img.alt} className="h-16 sm:h-20 w-full object-cover" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isOpen && (
        <FullscreenGallery
          slides={slides}
          initialIndex={activeIndex}
          onClose={() => setIsOpen(false)}
        />
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