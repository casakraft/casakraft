'use client';

import React, { useState } from 'react';
import Image from 'next/image';



const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        " We have a number of offices in Business Bay and the painting company that we have in Dubai does all our renovations. Their capability to renovate at night without causing any disturbance to our customers and delivering excellent results all the time is what makes us always turn to them",
      author: "Rock Windsor ,Business Bay",
    },
     {
      quote:
        " We hired Casa Kraft to paint our apartment before moving in, and the results were excellent. The team completed the work on time, kept everything clean, and delivered a smooth, premium finish throughout the apartment",
      author: "Mohammed Al Suwaidi, Dubai Marina",
    },
    {
      quote:
        "We got our whole villa painted both inside and outside and the outcome is outstanding. The crew was very professional throughout, the prep work was excellent, and the end result is precisely what we wanted. No question that they are the best painting firm in Dubai for luxury villas",
      author: "Mohammed Oumair , Palm Jumeirah",
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
    <div className="relative max-w-3xl mx-auto my-16 px-6">
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>

      {/* Main card */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-5 shadow-2xl">
        
        {/* Title */}
       <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-10">
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

const paintGallery = [
  { image: "/images/pn1.png" },
  { image: "/images/pn2.png" },
  { image: "/images/pn3.png" },
  { image: "/images/pn4.png" },
  { image: "/images/pn5.png" },
  { image: "/images/pn6.png" },
  { image: "/images/pn7.png" },
  { image: "/images/pn8.png" },
  { image: "/images/pn9.jpeg"},
  { image: "/images/pn10.jpeg" },
  { image: "/images/pn11.jpeg" },
  { image: "/images/pn12.jpeg" },
];
const krSteps = [
  {
    id: '01',
    title: 'Initial Consultation',
    desc: 'The painting process starts from the thorough consultation where the experts from Casa Kraft analyze your project needs, preferences in terms of design and color, your budget, and schedule.',
  },
  {
    id: '02',
    title: 'Site Inspection & Assessment',
    desc: 'We conduct site inspection to assess the state of walls, ceiling, and other surfaces. We find cracks, flaking paint, any damages caused by moisture, stains etc that have to be repaired before paint',
  },
  {
    id: '03',
    title: '  Color Selection & Design Guidance',
    desc: 'The right choice of color is very important for the look of the room. Our team will give you their suggestions on the best colors for your property depending on its design and lighting.',
  },
  {
    id: '04',
    title: 'Detailed Project Planning ',
    desc: 'Prior to any commencement of work, we come up with a detailed plan of the project which details the scope of work, materials to be used, timeline of the job and the execution schedule.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Surface Protection & Preparation',
    desc: 'The team of painters at our disposal ensures that your property is covered before working. We clean surfaces, repair any cracks or holes, strip away any peeling paint and sand rough spots before applying primers.',
    img: '/images/material high quality.png',
  },
  {
    id: '06',
    title: 'Painting Application',
    desc: 'Our painters in Dubai apply high quality paints using professional painting methods & equipments. Be it interior walls, ceilings, exterior surfaces, villas, apartments or other structures, we work professionally.',
  },

  {
    id: '07',
    title: ' Multiple Coat Application',
    desc: 'For durability and aesthetics, we apply necessary coats depending on the type of paints used and the state of the surface. Proper drying time is given after each coat application.',
  },
  {
    id: '08',
    title: ' Detail Finishing & Touch-Ups',
    desc: 'Once the painting process is done, our experts begin applying their attention to detail, finishing, and touch-ups. We make sure that corners, trimmings, ceiling, doors, and any decorative walls are perfect with precise lines and impeccable finish.',
  },
  {
    id: '09',
    title: ' Inspection & Customer’s Approval',
    desc: 'The quality control managers conduct an overall inspection of the finished job, paying special attention to the colors used and the quality of the finish applied. Finally, we give the customer the opportunity to check the finished project himself.',
  },
  {
    id: '10',
    title: 'Cleaning & Handover of the Property',
    desc: 'Finally, once the inspection is done, all the coverings are removed and the entire working area is cleaned. The property is left in perfect condition, ready to be used right away.',
  },
  
];



const faqs = [
  {
    question: 'What painting services do you offer in Dubai?',
    answer:
      'Casa Kraft Interior Design & Renovation provides a comprehensive set of painting services in Dubai, which include painting of villas, apartments, homes, offices, interior and exterior painting, decoration finishes, and commercial painting solutions. We design each service in such a way as to satisfy the requirements of our clients.',
  },
  {
    question: 'Can You Paint Over An Existing Wallpaper?',
    answer:
      'Sometimes, painting of wallpaper is possible when the paper is fixed well and in a good condition; however, we usually advise our clients to remove wallpaper at first in order to get a better finish.',
  },
  {
    question: 'What Type of Paint Do You Use?',
    answer:
      'We use high-quality paints from reputable companies like Jotun, Dulux and Nippon that will give you a great coverage and a long life of the painting solution.The paint selection depends on the surface, location, and finish required for your project.',
  },
  {
    question: 'What Is the Time Frame for the Painting Job?',
    answer:
      'The amount of time taken to paint a property will vary depending on the size of the property and the nature of the work. Normally, an average painting job of an apartment will take between 2 to 4 days whereas for larger homes like villas, the time period may be 5 to 7 days. If the project involves offices, show rooms, gyms and restaurants, the timeframe for completing the project might go up to 7 to 14 days. At Casa Kraft, our painting contractors in Dubai ensure that we give a definite timeframe for all our projects.',
  },
  {
    question: 'Do You Provide Warranty for the Painting Service?',
    answer:
      'Absolutely, Casa Kraft fully guarantees the quality of all projects we undertake. We offer a warranty for all our painting services in Dubai that covers both the quality of our work and the materials used in the process. We only use high-quality paint in our painting services in Dubai due to which we can offer you a warranty.',
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
      <h2 className="text-3xl md:text-3xl font-semibold text-white mb-8">
    Why We Are Among the Top 10 Painting Companies in Dubai      </h2>

      <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
      Selecting the best painting company in Dubai should not be based solely on cost, but should also be based on trust and quality. Our team of painters in Dubai have comprehensive training and supervision and wear uniforms at work. We use high quality paint materials such as Jotun, Dulux and Nippon. Our company provides a warranty on both materials and our works after completing the projects. In addition, we have established a reputation of timely completion of orders which property developers and property managers in Dubai can rely on.If you are looking for such painting services near to you, you have found the perfect match.

      </p>
    </div>

    {/* Right Side - Image */}
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src="/images/pn6.png"
        alt="Villa painting in Dubai"
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
    <h2 className="text-3xl text-white md:text-3xl font-semibold mb-4">
      Our Painting Services in Dubai Portfolio
    </h2>

    <p className="max-w-3xl mx-auto text-white/80">
      Explore a selection of our completed painting projects showcasing our craftsmanship, premium finishes, and attention to detail.
    </p>
  </div>

<div className="relative overflow-hidden">
  <div className="flex animate-marquee gap-5 w-max">

    {[...paintGallery, ...paintGallery].map((project, index) => (
      <div
        key={index}
        onClick={() => setSelectedImage(project.image)}
        className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
      >
        <Image
          src={project.image}
          alt={`Painting Project ${index + 1}`}
          width={600}
          height={450}
          className="w-[320px] sm:w-[380px] md:w-[350px] h-[240px] sm:h-[280px] md:h-[250px] object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-medium">
            Click to View
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

          <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-5 mt-10">
    Our Painting Services Process In Dubai
 
    </h2>

    <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
We follow a clear and efficient painting process that allows every project to move <br /> smoothly from color consultation and surface preparation to the final coat and handover    </p>

    {/* First 6 steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {krSteps.slice(0, 10).map((step) => (
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

  </div>
</div>


    
 <div className="w-full bg-[#111111] mt-10 py-10 overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
      Get In Touch With Casa Kraft
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-8">
      Commercial & Residential Painting Company in Dubai
    </p>

    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

      <a
        href="/gallery"
        className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition w-full sm:w-auto sm:min-w-[200px]"
      >
        See Our Projects
      </a>

      <a
        href="https://wa.me/971586023677"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition w-full sm:w-auto sm:min-w-[200px]"
      >
        WhatsApp Us
      </a>

      <a
        href="/contact-us"
        className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition w-full sm:w-auto sm:min-w-[200px]"
      >
        Request Quote
      </a>

    </div>

  </div>
</div>

{/* Areas We Serve */}
<div className="bg-black">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
      Interior & Exterior Painting Services in Dubai
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Interior Painting */}
      <div className="bg-[#111] border border-white/10 rounded-md p-6 hover:border-[#4eb5a9]/40 transition">
        <h3 className="text-[#4eb5a9] text-xl font-semibold mb-4">
          Interior Painting Services in Dubai
        </h3>

        <p className="text-white/70 leading-7 text-sm">
         Our interior painting service includes painting all surfaces found inside your home; that's walls, ceilings, feature walls, columns, built-in joineries, and doors. As experienced painters we offer decorative interior wall finishes like Venetian plaster, limewash, textured stone effects, ombre gradient walls etc. The surface preparation process is the first step in our interior and exterior walls painting procedure and this is the most crucial step towards having a lasting and professionally finished paint job. The walls are washed and the condition of the old paints checked.
        </p>
      </div>

      {/* Exterior Painting */}
      <div className="bg-[#111] border border-white/10 rounded-md p-6 hover:border-[#4eb5a9]/40 transition">
        <h3 className="text-[#4eb5a9] text-xl font-semibold mb-4">
          Exterior Walls Painting & Protection Services
        </h3>

        <p className="text-white/70 leading-7 text-sm">
          The Dubai environment is one of the toughest when it comes to exterior painting. UV rays, dust storms, high humidity on the coast, and high temperature all work together to deteriorate exterior paints more quickly than anywhere else in the world. Our exterior painting services in Dubai deal with these factors through UV-resistants, weather-proof paints to protect your building exterior while maintaining its look. Our exterior wall painting and protection services include complete surface preparation by pressure washing, crack filling, priming the surface with anti-algae and anti-fungal primer. 

        </p>
      </div>

    </div>

  </div>
</div>
<div className="max-w-3xl mx-auto my-12">
  <TestimonialCarousel />
</div>
      

      {/* FAQ Section */}
      <div className=" text-white/80 max-w-3xl mx-auto bg-black rounded-lg text-white/80  shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-10">
Painting Services in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Painting services in Dubai.
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
             <h2 className="text-3xl md:text-3xl font-semibold text-white text-center mb-10">
Book Your Free Painting Consultation in Dubai Today


        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
No matter whether you require villa painting services in Dubai, full interior and exterior wall painting services, apartment painting services in Dubai, or commercial and office painting services, Casa kraft interior design & renovation has got it covered. Our services have made us rank among the top 10 painting companies in Dubai, and we are proud to do so. Do not settle for less when you can experience the difference our services can make.
<b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/contact-us">Book your painting services in Dubai now</a></b> and feel the difference yourself.

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
