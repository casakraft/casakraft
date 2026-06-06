'use client';

import React, { useState } from 'react';
import Image from 'next/image';


const textImage = {
  src: '/images/damac-9.png',
  link: '/villa-damac-hills-5-bedroom',
  title: 'Damac Hills Villa'
};
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Casa Kraft transformed our villa into a luxury masterpiece. The detailing, communication, and execution were flawless from start to finish.",
      author: "A.K., Palm Jumeirah",
    },
    {
      quote:
        "Highly professional team. They delivered exactly what was promised, on time and with premium quality finishes.",
      author: "S.M., Emirates Hills",
    },
    {
      quote:
        "Our experience was smooth and well-managed. The villa now feels modern, elegant, and perfectly designed for our lifestyle.",
      author: "R.A., Dubai Hills Estate",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  const change = (i) => {
    setAnimate(false);
    setTimeout(() => {
      setIdx((i + testimonials.length) % testimonials.length);
      setAnimate(true);
    }, 250);
  };

  React.useEffect(() => {
    const t = setInterval(() => change(idx + 1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div className="relative max-w-4xl mx-auto my-16 px-6">
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>

      {/* Main card */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-5 shadow-2xl">
        
        {/* Title */}
       <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          WHAT OUR CLIENTS SAY
        </h2>

        {/* Quote */}
        <div
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0px)" : "translateY(10px)",
            transition: "all 0.3s ease",
            minHeight: "140px",
          }}
          className="text-center"
        >
          <p className="text-white/80 text-sm md:text-lg leading-relaxed italic font-play">
            “{testimonials[idx].quote}”
          </p>

          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          
          <button
            onClick={() => change(idx - 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ‹
          </button>

          {/* dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => change(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx
                    ? "w-6 h-2 bg-[#4eb5a9]"
                    : "w-2 h-2 bg-zinc-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => change(idx + 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ›
          </button>

        </div>
      </div>
    </div>
  );
};

const kitchenGallery = [
  "/images/kr1.png",
  "/images/kr2.png",
  "/images/kr3.png",
  "/images/kr4.png",
  "/images/kr5.png",
  "/images/kr6.png",
  "/images/kr7.png",
  "/images/kr8.png",
  "/images/kr9.png",
];

const krSteps = [
  {
    id: '01',
    title: 'Consultation & Site Assessment',
    desc: 'Analyze your kitchen space to determine your objectives.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: 'Design & 3D Visualization',
    desc: 'Detailed designs to help visualize your Dubai kitchen renovation project.',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: 'Material Selection & Budget Planning',
    desc: 'Choose high quality, robust and fashionable materials.',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Approval & Permits',
    desc: 'Deal with any approval required for kitchens in villas or apartments in Dubai',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Construction & Remodeling',
    desc: 'Expert kitchen remodeling services in Dubai with attention to every detail.',
    img: '/images/material high quality.png',
  },
  {
    id: '06',
    title: 'Appliance & Fixture Installation',
    desc: 'Install high quality kitchen appliances Dubai and fixtures.',
    img: '/images/best-customized-services.png',
  },

  {
    id: '07',
    title: 'Quality Inspection & Handover',
    desc: 'Your dream renovation must be of superior quality.',
    img: '/images/best-customized-services.png',
  },
];

const serviceAreas = [
  {
    title: "Palm Jumeirah",
    desc: "Interior projects in Palm Jumeirah",
  },
  {
    title: "Atlantis The Royal",
    desc: "Interior projects in Atlantis The Royal",
  },
  {
    title: "Dubai Marina",
    desc: "Interior projects in Dubai Marina",
  },
  {
    title: "Business Bay",
    desc: "Interior projects in Business Bay",
  },
  {
    title: "Downtown Dubai",
    desc: "Interior projects in Downtown Dubai",
  },
  {
    title: "Damac Hills",
    desc: "Interior projects in Damac Hills",
  },
  {
    title: "Bluewaters Dubai",
    desc: "Interior projects in Bluewaters Dubai",
  },
  {
    title: "Dubai Creek Harbour",
    desc: "Interior projects in Dubai Creek Harbour",
  },
];

const faqs = [
  {
    question: 'How much does it cost to renovate a kitchen in Dubai?',
    answer:
      'The cost of kitchen renovation in Dubai depends on the materials used, size of the kitchen, appliances, and whether you are taking a standard or luxury kitchen renovation service. At Casa Kraft Interiors, kitchen renovation prices are customized according to your design, layout, and finish selections.',
  },
  {
    question: 'What Types Of Kitchen Renovation Services Do You Offer?',
    answer:
      'Casa Kraft Interiors offers full kitchen renovation and remodeling services in Dubai including modular kitchens, custom cabinets, kitchen layout redesign, appliance installation, lighting upgrades, and luxury kitchen renovations for villas, apartments, and penthouses.',
  },
  {
    question: 'Can You Help With Kitchen Design And Layout Planning?',
    answer:
      'Yes, Casa Kraft Interiors provides professional kitchen design and layout planning in Dubai, including space optimization, 3D kitchen visualization, and material selection to ensure a functional and stylish kitchen renovation in Dubai.',
  },
  {
    question: 'Which Is The Best Kitchen Renovation Company In Dubai?',
    answer:
      'Casa Kraft Interiors is one of the best kitchen renovation companies in Dubai and the UAE, known for customized designs, premium materials, expert craftsmanship, transparent pricing, and on-time delivery for both luxury and small kitchen renovations.',
  },
 
];

const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="px-6 text-white/80 bg-black">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-10 rounded shadow text-center space-y-6">
             <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Why Choose Casa Kraft for Your Kitchen Renovation in Dubai?
        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
       <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/"> Casa Kraft Interiors</a></b>  is your reliable kitchen renovation services provider, offering the expert kitchen renovation in Dubai, whether in small kitchens, luxurious kitchens, or any type of kitchen in between. We also pride ourselves in providing customized kitchen renovation services to suit every family, making sure our designs are functional, fashionable, and in-tune with every family's ideas.

        </p>
        <p>We also serve all the key areas in Dubai, such as Business Bay, Downtown Dubai, Jumeirah, Palm Jumeirah, Emirates Hills, and Dubai Marina, making Casa Kraft Dubai kitchen renovations & remodels one of the best choices to cater to the Dubai kitchen renovation needs of everyone. At Casa Kraft Interiors, we integrate modern means in kitchen renovation, combine this with our excellent craftsmanship, quality, and price, and guarantee on time delivery, making us the best kitchen renovation in Dubai.
       </p>
  
        </div>

        </div>

     
     
     {/* Portfolio Section */}
<div className="max-w-7xl mx-auto overflow-hidden">

  <div className="text-center mb-12">
    <h2 className="text-3xl text-white md:text-4xl font-semibold mb-4">
      Our Kitchen Renovation Portfolio
    </h2>

    <p className="max-w-3xl mx-auto text-white/80">
      Explore a selection of beautifully designed kitchens showcasing our
      craftsmanship, premium finishes, and attention to detail.
    </p>
  </div>

  <div className="relative overflow-hidden">
    <div className="flex animate-marquee gap-5 w-max">

      {[...kitchenGallery, ...kitchenGallery].map((image, index) => (
        <div
          key={index}
          className="group relative flex-shrink-0 overflow-hidden  cursor-pointer"
          onClick={() => setSelectedImage(image)}
        >
          <Image
            src={image}
            alt={`Kitchen Project ${index + 1}`}
            width={600}
            height={450}
            className="w-[320px] sm:w-[380px] md:w-[350px] h-[240px] sm:h-[280px] md:h-[250px] object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <span className="text-white/80text-lg font-medium">
              View Design
            </span>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>

     
    
      {/* Process Section (REDESIGNED - Compact Timeline) */}
<div className="bg-black text-white/80py-14">
  <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 mt-10">
     Our Kitchen Renovation Process in Dubai
    </h2>

    <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
      A structured journey from consultation to handover.
    </p>

    {/* First 6 steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {krSteps.slice(0, 6).map((step) => (
        <div
          key={step.id}
          className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10"
        >

          {/* Step number */}
          <div className="text-[#4eb5a9] font-bold text-sm mb-2">
            {step.id}
          </div>

          {/* Title */}
          <h3 className="font-conthrax text-sm md:text-base mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-xs md:text-sm text-white/80 leading-relaxed">
            {step.desc}
          </p>

        </div>
      ))}

    </div>

    {/* 7th centered step */}
    <div className="flex justify-center mt-8">
      <div className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10 w-full max-w-md text-center">

        <div className="text-[#4eb5a9] font-bold text-sm mb-2">
          {krSteps[6].id}
        </div>

        <h3 className="font-conthrax text-sm md:text-base mb-3">
          {krSteps[6].title}
        </h3>

        <p className="text-xs md:text-sm text-white/80 leading-relaxed">
          {krSteps[6].desc}
        </p>

      </div>
    </div>

  </div>
</div>


    {/* Apartment Renovation Price Guide */}
<div className="bg-black ">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-conthrax text-white mt-10  mb-4">
        Apartment Renovation Cost in Dubai 2026
      </h2>

      <p className="text-zinc-400 max-w-3xl mx-auto">
        Typical renovation budgets based on apartment size and scope of work.
        Final pricing depends on materials, approvals and customization level.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#4eb5a9] transition">

        <h3 className="text-2xl font-semibold text-white/80mb-4">
          Studio / 1 Bedroom
        </h3>

        <div className="text-4xl font-bold text-[#4eb5a9] mb-6">
          AED 30k–55k
        </div>

        <ul className="space-y-4 text-zinc-300">
          <li>✓ Flooring, painting & ceilings</li>
          <li>✓ Kitchen & bathroom refresh</li>
          <li>✓ Lighting upgrades</li>
          <li>✓ Approx. 4 weeks completion</li>
        </ul>
      </div>

      {/* Featured Card */}
      <div className="relative bg-zinc-900 border-2 border-[#4eb5a9] rounded-2xl p-8 shadow-xl">

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4eb5a9] text-white/80text-xs font-semibold px-4 py-2 rounded-full">
          MOST POPULAR
        </div>

        <h3 className="text-2xl font-semibold text-white/80mb-4">
          2–3 Bedroom
        </h3>

        <div className="text-4xl font-bold text-[#4eb5a9] mb-6">
          AED 55k–130k
        </div>

        <ul className="space-y-4 text-zinc-300">
          <li>✓ Full apartment remodel</li>
          <li>✓ New kitchen & bathrooms</li>
          <li>✓ Flooring, MEP & lighting</li>
          <li>✓ Built-in wardrobes</li>
          <li>✓ 5–8 weeks completion</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#4eb5a9] transition">

        <h3 className="text-2xl font-semibold text-white/80mb-4">
          Luxury / Full Gut Renovation
        </h3>

        <div className="text-4xl font-bold text-[#4eb5a9] mb-6">
          AED 130k+
        </div>

        <ul className="space-y-4 text-zinc-300">
          <li>✓ Layout redesign</li>
          <li>✓ Premium materials</li>
          <li>✓ Smart-home integration</li>
          <li>✓ Bespoke joinery & finishes</li>
        </ul>
      </div>

    </div>

    <div className="mt-8 text-center">
      <p className="text-sm text-zinc-500">
        * Prices are indicative only and may vary based on apartment size,
        building regulations, material selection and project scope.
      </p>
    </div>

  </div>
</div>
 {/* CTA SECTION */}
<div className="w-screen ml-[calc(50%-50vw)] bg-[#111111] mt-10 py-10">
  <div className="max-w-4xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
      Get In Touch With Casa Kraft
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-8">
      Kitchen Interior design & Renovation Company in Dubai
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <a
        href="/gallery"
        className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition min-w-[220px]"
      >
        See Our Projects
      </a>

      <a
        href="https://wa.me/971586023677"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition min-w-[220px]"
      >
        WhatsApp Us
      </a>

      <a
        href="/contact-us"
        className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition min-w-[220px]"
      >
        Request Quote
      </a>

    </div>

  </div>
</div>

{/* Areas We Serve */}
<div className="bg-black py-10">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Areas We Serve
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto">
        Delivering <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/kitchen-interior-design-in-dubai">luxury Kitchen interior design and renovation</a></b> projects
        across Dubai's most prestigious communities.
      </p>
    </div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {serviceAreas.map((area, index) => (
        <div
          key={index}
          className="group bg-zinc-900 border border-zinc-800  p-4 hover:border-[#4eb5a9] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-[#4eb5a9]/20 flex items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#4eb5a9]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-semibold text-white/80 mb-2">
            {area.title}
          </h3>

          <p className="text-zinc-400 text-sm">
            {area.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</div>
<div className="max-w-4xl mx-auto my-12">
  <TestimonialCarousel />
</div>
      

      {/* FAQ Section */}
      <div className=" text-white/80 max-w-4xl mx-auto bg-black rounded-lg text-white/80  shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
         Kitchen Renovation in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Kitchen Renovation services in Dubai.
        </p>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 py-3"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-play font-semibold text-sm sm:text-base text-white/80 text-left">
                  {item.question}
                </span>
                <span className="ml-3 text-white/80 text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm sm:text-base font-play text-white/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
{/* Lightbox Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <div className="relative max-w-5xl w-full p-4">
      
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-white/80 text-2xl"
        onClick={() => setSelectedImage(null)}
      >
        ✕
      </button>

      <Image
        src={selectedImage}
        alt="Preview"
        width={1200}
        height={800}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
)}
    </section>
  );
};

export default DProjects;
