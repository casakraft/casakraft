'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const textImage = {
  src: '/images/damac-9.png',
  link: '/villa-damac-hills-5-bedroom',
  title: 'Damac Hills Villa'
};
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        " Casa Kraft Interiors transformed our apartment into a stylish and comfortable home. The attention to detail and quality of the finishes truly exceeded our expectations.",
      author: "Rajesh Patel, Business Bay",
    },
    {
      quote:
        "Our apartment transformation is everything we hoped for. Casa Kraft Interiors designed an elegant, contemporary living space that not only turned out amazing but also made the whole experience enjoyable and hassle-free.",
      author: "Maria Fernandes, Dubai Marina",
    },
    {
      quote:
        "Casa Kraft Interiors transformed our apartment living room into a warm and elegant space. The custom TV unit, lighting, and overall design came together beautifully.",
      author: "Daniel Roberts, Dubai Hills Estate",
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

const apartmentGallery = [
  {
    image: "/images/acacia-1.png",
    link: "/acacia-3-bedroom-apartment",
  },

  {
    image: "/images/bulgari-9.png",
    link: "/bulgari-2-bedroom-apartment",
  },
  {
    image: "/images/citywalk-8.png",
    link: "city-walk-3-bedroom-apartment",
  },
  {
    image: "/images/jbr-1.png",
    link: "/jbr-3-bedroom-apartment",
  },
  {
    image: "/images/nba-1.png",
    link: "/nikki-beach-2-bedroom-apartment",
  },
  {
    image: "/images/pja-7.png",
    link: "palm-jumeirah-apartment",
  },
  {
    image: "/images/dca-9.png",
    link: "/dubai-creek-2-bedroom-apartment",
  },
  {
    image: "/images/ca-8.png",
    link: "/contemporary-2-bedroom-apartment",
  },
  {
    image: "/images/mha-2.png",
    link: "/mirdif-hills-apartment",
  },

   {
    image: "/images/sam-4.png",
    link: "/studio-apartment-in-milan",
  },
   {
    image: "/images/ba-3.png",
    link: "/bvlgari-one-bedroom-apartment",
  },
   {
    image: "/images/aa-7.png",
    link: "/amfali-4-bedroom-apartment",
  },

   {
    image: "/images/dso-5.png",
    link: "/dubai-silicon-oasis-apartment",
  },
];
const krSteps = [
  {
    id: '01',
    title: 'Discovery & Consultation',
    desc: 'Any successful apartment interior design process always starts with a detailed consultation. We take time to analyze your lifestyle, design preferences, functional requirements, budget and other aspects in order to form a custom design concept that fits your individual needs.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: 'Concept Development',
    desc: 'After analyzing your requirements, our designers create innovative ideas, detailed spatial plans, mood boards, and three-dimensional renderings of your future apartment. This is a joint stage of work where you can visualize your apartment and make reasonable decisions about the final look of it.',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: 'Quality Material Selection',
    desc: 'We will help you choose high-quality materials, finishes, furnishings, lighting, fabrics and decorative items that are compatible with your design style. We take care to ensure quality and durability in all aspects of your apartment design.',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Execution & Fit-Out ',
    desc: 'Expert project managers, craftsmen and fit-out professionals undertake the task of implementing the plan with utmost perfection. From civil engineering works to joinery and installations, everything is done with the aim of achieving exceptional quality standards at every stage.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Final Handover',
    desc: 'Before project completion, we make sure to inspect the quality of the work done to ensure that no detail was missed. When everything is perfect, we provide you with a superbly completed apartment.',
    img: '/images/material high quality.png',
  },
  
];

const serviceAreas = [
  {
    title: "Dubai Marina",
  },
  {
    title: "Downtown Dubai",
  },
  {
    title: "Business Bay",
  },
  {
    title: "Palm Jumeirah",
  },
  {
    title: "Jumeirah Lake Towers",
  },
  {
    title: "Dubai Hills Estate",
  },
  {
    title: "Dubai Creek Harbour",
  },
  {
    title: "Bluewaters Island",
  },
];

const faqs = [
  {
  question: 'How much does apartment interior design and renovation cost in Dubai?',
  answer: (
    <>
      The{' '}
      <a
        href="https://casakraftinteriors.ae/apartment-renovation-cost-dubai"
        className="text-[#4eb5a9] font-semibold"
      >
        cost of interior design renovation of apartments in Dubai
      </a>{' '}
      depends on the size of the apartment, style of design, material choices, and the amount of fit-out work to be done. Since each project has its own features, we provide a tailored quote after learning about your specifications and conducting an initial site inspection.
    </>
  ),
},
  {
    question: 'Do you provide complete apartment renovation services?',
    answer:
      'Yes  At Casa Kraft Interiors, we provide full services of apartment renovations along with interior design services under one roof. Some of the services we provide are space planning, fit-outs, MEP works, bespoke joinery, custom furniture, floors, ceilings and finishes.',
  },
  {
    question: 'Can you design small apartments?',
    answer:
      'Yes, we do. Our designers are well versed at optimizing the available space in small flats by means of clever design, multifunctionality of the furniture and space saving storage systems.',
  },
  {
    question: 'Do you provide custom furniture?',
    answer:
      'Absolutely, we specialize in creating custom furniture for your apartment based on its design and measurements. Using our own joinery workshop, we design and produce custom-made wardrobes, kitchen units, TV units, storage and other furniture items, which will suit your interior design concept',
  },
  
 
];

const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="px-6 text-white/80 bg-black">
      
     {/* Top Content Block */}
<div className="max-w-7xl mx-auto px-6 py-10">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Left Side - Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
       Why Choose Casa Kraft for Apartment Interior Design in Dubai?
      </h2>

      <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
       Dubai has some of the best known residential societies across the globe, and it is only fair that each apartment be given the interior decor that matches the level of elegance associated with this place. At Casa Kraft Interior Design & Renovation, we believe in offering the <b className="text-[#4eb5a9]"
       ><a href="https://casakraftinteriors.ae/apartment-interior-design-dubai">best apartment interior designs for Dubai</a></b> through creative ideas, top quality materials, and great workmanship. <br />
       The company does everything, from designing modern apartment interiors of the city to luxury penthouse interiors. One thing that makes Casa Kraft special is that it can offer a one stop shop for all the work related to design and construction. It provides customized apartment interiors, which cater to the needs of the customer. This is because of the company's design services, in-house design and construction experts, and joinery by Casa Kraft itself.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src="/images/damac-9.png"
        alt="Villa Interior Design Dubai"
        width={700}
        height={500}
        className="w-full h-[400px] object-cover"
      />
    </div>

  </div>

</div>
     
     
     {/* Portfolio Section */}
<div className="max-w-7xl mx-auto overflow-hidden">

  <div className="text-center mb-12">
    <h2 className="text-3xl text-white md:text-4xl font-semibold mb-4">
      Our Apartment Interior Design Portfolio
    </h2>

    <p className="max-w-3xl mx-auto text-white/80">
      Explore a selection of luxury and modern Apartments showcasing our
      craftsmanship, premium finishes, and attention to detail.
    </p>
  </div>

  <div className="relative overflow-hidden">
    <div className="flex animate-marquee gap-5 w-max">

     {[...apartmentGallery, ...apartmentGallery].map((project, index) => (
  <Link
    key={index}
    href={project.link}
    className="group relative flex-shrink-0 overflow-hidden"
  >
    <Image
      src={project.image}
      alt={`Villa Project ${index + 1}`}
      width={600}
      height={450}
      className="w-[320px] sm:w-[380px] md:w-[350px] h-[240px] sm:h-[280px] md:h-[250px] object-cover transition duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="text-white text-lg font-medium">
        View Project
      </span>
    </div>
  </Link>
))}

    </div>
  </div>
</div>

     
    
      {/* Process Section (REDESIGNED - Compact Timeline) */}
<div className="bg-black text-white/80py-14">
  <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 mt-10">
     Our Apartment Interior Design Process

    </h2>

    <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
     We have created a clear-cut procedure, which helps every Apartment project of ours flow seamlessly from initial inquiry to handover.
    </p>

    {/* First 6 steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {krSteps.map((step) => (
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
    
  </div>
</div>


    
 {/* CTA SECTION */}
<div className="w-screen ml-[calc(50%-50vw)] bg-[#111111] mt-10 py-10">
  <div className="max-w-4xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
      Get In Touch With Casa Kraft
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-8">
      Apartment Interior design & Renovation Company in Dubai
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
        Areas We Serve Across Dubai

      </h2>

      <p className="text-zinc-400 mx-auto">
       Casa Kraft offers interior designing services for apartments in all areas of Dubai and Sharjah. We have worked in Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Jumeirah Lake Towers (JLT), Dubai Hills Estate, Dubai Creek Harbour, Bluewaters Island, Emirates Hills and in many other luxurious communities in the area. We  provide premium quality and luxurious interior design service to all our customers irrespective of their location.</p>
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
         Apartment Interior Design in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Apartment Interior Design services in Dubai.
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

       {/* Top Content Block */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-5 mb-5 rounded shadow text-center space-y-6">
             <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
       Create Your Dream Apartment with Casa Kraft

        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
      Are you searching for the best apartment interior design service in Dubai? At Casa Kraft Interior Design & Renovation, we turn simple apartments into luxurious living spaces designed specifically according to your needs. Whether it’s from concept, 3D design rendering, customized joinery, complete interior decoration services to final handover of the project, our dedicated team handles each and every task with excellence and precision. We provide a hassle-free experience in our turnkey interior design service with our transparent price structure, in-house manufacturing facility, and many more. Contact Casa Kraft today and let our expert apartment interior designers bring your dream home to life.

       </p>
  
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
