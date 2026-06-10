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
        " Every step of the villa process from the first conception to the final installation has been managed by their team with professionalism. We love our interiors and the functionality of the designs created by Casa Kraft Interiors. I would definitely recommend them for any villa interior design project in Dubai.",
      author: "Michael Thompson, Palm Jumeirah",
    },
    {
      quote:
        "It was really amazing to work with Casa Kraft Interiors. They knew what we wanted and made our villa look like a luxury and comfortable house. The whole process went well, and we got results that exceeded our expectations.",
      author: "Ahmed Al Mansoori, Emirates Hills",
    },
    {
      quote:
        "We loved working with Casa Kraft Interiors. The team was easy to communicate with, paid attention to every detail, and delivered a beautiful villa that feels both luxurious and welcoming.",
      author: "Omar Al Hashmi, Dubai Hills Estate",
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

const villaGallery = [
  {
    image: "/images/damac-5.png",
    link: "/villa-damac-hills-5-bedroom",
  },
  {
    image: "/images/mcv-7.png",
    link: "/meadows-contemporary-villa",
  },
  {
    image: "/images/cvd-3.png",
    link: "/classic-villa-interior-design",
  },
  {
    image: "/images/vl-3.png",
    link: "/villa-lantana",
  },
  {
    image: "/images/vk-6.png",
    link: "/villa-khawaneej",
  },
  {
    image: "/images/ehv-8.png",
    link: "/emirates-hills-villa",
  },
  {
    image: "/images/mbr-5.png",
    link: "/mbr-city-villa",
  },
  {
    image: "/images/tag-8.png",
    link: "/tilal-al-ghaf-villa",
  },
  {
    image: "/images/pjv-6.png",
    link: "/palm-jumeirah-villa",
  },
];
const krSteps = [
  {
    id: '01',
    title: 'Inquiry & Understanding',
    desc: 'We receive your query through phone calls, WhatsApp or even the contact form in our website. You tell us your needs, vision and timelines.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: ' Free Site Visit',
    desc: 'Our team of interior designers visits your villa, measures and assesses your villa space along with architectural considerations',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: ' Free 3D Design Concept',
    desc: 'We present a unique 3D design concept that gives you a clear picture of how the design will appear in your villa before investing.',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Quotation ',
    desc: 'You get a detailed and clear quotation that states what is involved in the entire work.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'NOC & Authority Approvals',
    desc: 'Our team manages all permissions from relevant Dubai authorities',
    img: '/images/material high quality.png',
  },
  {
    id: '06',
    title: ' Execution & Handover',
    desc: 'Our team of experts executes the entire process keeping in touch with you every step of the way. Your villa becomes your dream home as shown in the 3D designs.',
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
    title: "Arabian Ranches",
  },
  {
    title: "Dubai Hills Estate",
  },
  {
    title: "Jumeirah Golf Estate",
  },
  {
    title: "Nad Al Sheba",
  },
  {
    title: "Jumeirah Village Circle",
  },
  {
    title: "Jumeirah Village Triangle",
  },
  {
    title: "Emirates Hills",
  },
  {
    title: "Palm Jumeirah",
  },
];

const faqs = [
  {
    question: 'How long will interior design for a villa take?',
    answer:
      'The timeline typically ranges from 8 to 20 weeks, depending on the villa size, design complexity and scope of work. Larger or highly customized projects may require additional time.',
  },
  {
    question: ' Is it possible to do a villa interior design in phases?',
    answer:
      'Absolutely. The Villa interior design can be done in phases depending on your financial capability and schedule, amongst other things. It is possible to start off with critical areas such as the living area, the master bedroom, and the kitchen, leaving other sections for subsequent phases.',
  },
  {
    question: ' Do you offer furniture supplies?',
    answer:
      'Yes, our team provides a full range of furniture supply services for all villas in Dubai. The products that come under this category consist of joinery, custom furniture, wardrobes, TV cabinets and top brand furniture lines.',
  },
  {
    question: 'Are you experienced in gated communities like Nakheel and Emaar?',
    answer:
      'We have worked on projects in the best gated communities in Dubai. These communities include Nakheel, Emaar, Damac and Dubai Hills. We are aware of the design standards, approvals and NOCs involved in such communities.',
  },
  {
    question: 'Which styles do you design in?',
    answer:
      'Our interior designers create villas in various styles, such as ultra luxury, modern, contemporary, Arabic, transitional, classic and minimalist designs. The designs of our villas are customized based on your preference, lifestyle and architecture of your villa.',
  },
  {
    question: 'Can I visit your office?',
    answer:
      'Of course, you can visit us at our showroom located at Sheikh Zayed Road, Dubai. In our showroom, you will be able to see samples of materials and finishes we use for designing villa interiors, furniture, and more.',
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
        Why Choose Casa Kraft – The Best Villa Interior Design Company in Dubai
      </h2>

      <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
       Selecting the best interior designer for your villa is probably the most crucial decision you would ever have to make, and Casa Kraft has been designed to ensure that you get every possible justification for that decision. At Casa Kraft, we ensure that your villa transformation is completely hassle free from beginning to end. Each of our projects come with a 10-year warranty, free 3D concept design and a free site visit absolutely free of charge. We provide a full design and build package with only one agreement throughout, and our team ensures that all authorities such as Dubai Municipality, Nakheel, Emaar, Trakhees, and DDA are all approved on your behalf. You can always visit our store located at The Curve Building, Sheikh Zayed Service Road, and we assure you that we would receive a rating of five stars.
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
      Our Villa Interior Design Portfolio
    </h2>

    <p className="max-w-3xl mx-auto text-white/80">
      Explore a selection of beautifully designed Villas showcasing our
      craftsmanship, premium finishes, and attention to detail.
    </p>
  </div>

  <div className="relative overflow-hidden">
    <div className="flex animate-marquee gap-5 w-max">

     {[...villaGallery, ...villaGallery].map((project, index) => (
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
     Our Villa Interior Design Process

    </h2>

    <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
     We have created a clear-cut procedure, which helps every villa project of ours flow seamlessly from initial inquiry to handover.
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


    
 {/* CTA SECTION */}
<div className="w-screen ml-[calc(50%-50vw)] bg-[#111111] mt-10 py-10">
  <div className="max-w-4xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
      Get In Touch With Casa Kraft
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-8">
      Villa Interior design & Renovation Company in Dubai
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

      <p className="text-zinc-400 mx-auto">
       Casa Kraft Interior Design & Renovation is one of the top interior design companies in the UAE that offers exceptional villa interior design services in the best neighborhoods of Dubai. Whether you have a luxurious villa by the seaside in Palm Jumeirah, a bespoke residence in Emirates Hills or a contemporary villa in Damac Hills and Damac Lagoons, our designers create an interior that reflects your lifestyle and personality. Our portfolio also includes beautiful and elegant designs for family houses in Arabian Ranches, luxury villa interiors in Dubai Hills Estate and modern villa makeovers in Jumeirah Golf Estates, Nad Al Sheba, JVC and JVT. We work on projects outside Dubai too such as in Abu Dhabi, Sharjah and other parts of the UAE.
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
         Villa Interior Design in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Villa Interior Design services in Dubai.
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
         Ready to Transform Your Villa?

        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
      The home of your dreams awaits you. We at Casa Kraft Interior Design & Renovation have already helped numerous homeowners in Dubai create beautiful villas from empty spaces and we can help you make your dream villa a reality too. Whether it’s an empty space that you are looking to convert or you want to give a new look to your existing living area, we have got everything covered for you in one easy package. Don't wait to live in the home you deserve. Reach out today for a free consultation and 3D design concept  and take the first step toward a villa that truly reflects who you are. Casa Kraft Interiors – Top Interior Design Company in Dubai. Luxury by design. Excellence by commitment

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
