'use client';

import React from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/damac-9.png',
  link: '/villa-damac-hills-5-bedroom',
  title: 'Damac Hills Villa'
};

const galleryImages = [
  { src: '/images/cvd-3.png', link: '/classic-villa-interior-design', title: 'CLASSIC VILLA INTERIOR DESIGN' },
  { src: '/images/vl-10.png', link: '/villa-lantana', title: 'VILLA LATANA' },
  { src: '/images/vk-3.png', link: '/villa-khawaneej', title: 'VILLA KHAWANEEJ' },
  { src: '/images/ehv-3.png', link: '/emirates-hills-villa', title: 'EMIRATES HILLS VILLA' },
  { src: '/images/mbr-5.png', link: '/mbr-city-villa', title: 'MBR CITY VILLA' },
  { src: '/images/pjv-7.png', link: '/palm-jumeirah-villa', title: 'PALM JUMEIRAH VILLA' },
];

const villaSteps = [
  {
    id: '01',
    title: 'Initial Consultation & Concept',
    desc: 'At the beginning, we usually do a thoughtful and in-depth consultation to understand your needs, lifestyle and design expectations. This enables us to set an exclusive and unique creative direction for your vision.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: 'Site Study & Space Planning',
    desc: 'Efficient architectures and building engineers conduct a comprehensive assessment of your villa after initial consultation. They also make assessment for architectural features, natural light. We create customized space plans.',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: 'Material, Furniture & Finishing Selection',
    desc: 'For the material sources we have an efficient suppliers/manufacturers within Dubai and outside Dubai. From our trusted suppliers/manufacturers we source premium materials, high end fabrics and unique decor pieces.',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Technical Drawings',
    desc: 'Our team of draftsmen and architectural designers prepare full set of architectural drawings, lighting layouts, joinery plans and technical documents that are required and aligned with Dubai design standard.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Project Execution, Fit-Out & Installation',
    desc: 'Now it comes execution, the part which transforms vision into reality. Here our site specialists and dedicated craftsmen blend magic with colors and materials. From flooring to interior finishes we take care of each details.',
    img: '/images/material high quality.png',
  },
  {
    id: '06',
    title: 'Final Styling & Handover',
    desc: 'At the completion and just before delivery, we curated artworks, accessories and interior finishes to bring the decided design into life in your villa. The handover unwrap a space that reflects your vision.',
    img: '/images/best-customized-services.png',
  },
];

const faqs = [
  {
    question: 'How long does a villa interior design project in Dubai usually take?',
    answer:
      'The timeline depends on the villa size, scope and level of customization. On average, a full villa interior design and fit out in Dubai can take anywhere from 3 to 9 months from concept to final handover.',
  },
  {
    question: 'Do you only work on complete villas, or can you design specific rooms?',
    answer:
      'We work on both complete villas and specific spaces such as living rooms, bedrooms, majlis, kitchens or basements. However, we always ensure that every space remains aligned with the overall villa design language.',
  },
  {
    question: 'Can you work with my existing furniture and decor?',
    answer:
      'Yes, if there are certain pieces you love, we can integrate them into the new design. Our team carefully evaluates what can be reused, refinished or reupholstered while still maintaining a premium overall look.',
  },
  {
    question: 'What is the typical budget range for villa interior design in Dubai?',
    answer:
      'Budgets vary based on villa size, finishes and brand preferences. During the initial consultation, we discuss your expectations and provide a realistic budget bracket that matches your lifestyle and the level of luxury you want to achieve.',
  },
  {
    question: 'Do you handle approvals and coordination with contractors?',
    answer:
      'Yes, our team supports you with technical drawings, authority-related requirements where applicable, and complete coordination with contractors, suppliers and site teams to ensure a smooth and stress-free process.',
  },
];

const DProjects = () => {
  return (
    <section className="px-6 py-10 bg-[#f5f5f5]">
      
      {/* Top Content Block */}
      <div className="lg:max-w-[80%] mx-auto bg-[#ffffff] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
        <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax">
          Why Choose <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a>for Your Villa Interior Design in Dubai?
        </h2>
        <div className="space-y-4 text-sm sm:text-base font-play text-left">
        <p>
          With the credible background and 15+ years of experience from the founders, <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a> has unique position of trust from the homeowners, developers and high profile clients in Dubai, where we have delivered premium and customized villa interiors.
        </p>

        <p>
        <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a> built many projects in Dubai Marina, Palm Jumeirah, Emirates Hills, MBR City and in other high end living communities in Dubai. We have built a strong portfolio and reputation for excellence based on creative and consist on time project deliveries.
        </p>
        <p>Our work process so simple as it starts with a thoughtful conversation about design that enable us to understand your customized needs, lifestyle, vision and expectations from us.
        </p>
        <p>This step secures that the concept we built is on the basis of client's thoughts, meaningful and bespoke. Opposite the studio apartments that depends on pre-defined design for all. <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a> creates your villa from ground level to up precisely, enables your living space feel as-only-yours but not a copy of standard template.<br></br><br></br>
        R&D department of <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a> continuously works to explore latest global trends, fine and premium materials and premium furnishings to develop interior options for clients.<br></br> <br></br>
        From exclusive designs, developing custom-joinery to integrating smart home solutions, we go beyond the limits to upscale your villa's character and comfort.
        To start from exclusive design, we are committed to responsible and future-focused practices.<br></br><br></br>
        <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration </a> a modern interior design studio, where we focus on premium but sustainable materials, excellent project management and seamless workflow to ensure that your villa is not only luxury in living but reflects conscious long term-term value.<br></br><br></br>
        While choosing <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration, </a> actually you are choosing an efficient team of professionals which is dedicated to crafting elegant living spaces.
</p>
  
        </div>

        </div>

      {/* Split Row – Text + Top Right Image */}
      <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax">
          Our Dubai Villa Projects
          </h2>
          <p className="text-sm sm:text-base">
           <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration, </a> completed many signature projects in Dubai's high end living communities like Palm Jumeirah, Emirates hills, MBR city and in other premium living communities.</p>
          <p className="text-sm sm:text-base">
          One of our villa project is located on the iconic Emirates Hills Dubai, we specially designed this villa for a client who believes in exclusivity and elevated luxury lifestyle.</p>
          <p className="text-sm sm:text-base">
          Villa owners approached us with clear brief: Team <a href="https://casakraftinteriors.ae/"
          className="text-green-600 hover:text-blue-800 ml-1">
          Casa Kraft Interiors & Decoration! </a> develop interiors that is aligned with refined luxury and something elegant. Especially for those who travelled abroad and experienced the world's finest settings. </p>
          <p className="text-sm sm:text-base">
          Every detail of villa projects was boarded to celebrate Dubai's luxury while delivering comfort, craftsmanship, and a sense of perfect home aligned with Dubai's luxury lifestyle.
           </p>
        
          
        </div>

        {/* Top Right Image with Hover Effects */}
        <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
          <a href={textImage.link} className="block">
            <Image
              src={textImage.src}
              alt={textImage.title}
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {textImage.title}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Gallery Grid with Hover Effects */}
      <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
        {galleryImages.map(({ src, link, title }, i) => (
          <a href={link} key={i} className="group block relative overflow-hidden rounded shadow">
            <Image
              src={src}
              alt={title}
              width={400}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base font-conthrax text-center">
                {title}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
        <h3 className="text-xs sm:text-xl font-conthrax uppercase">
          Get In Touch With Us
        </h3>
        <p className="text-sm sm:text-base font-play">
          We are located in the world's luxury city, Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
          <a
            href="https://wa.me/971586023677"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✅ Request availability by WhatsApp
          </a>

          <a
            href="mailto:info@casakraftineriors.ae"
            className="px-6 py-3 bg-[#193c38] text-white font-play text-sm rounded w-full sm:w-auto text-center"
          >
            ✉️ Request availability by E-mail
          </a>
        </div>
      </div>

      {/* 3-Step Process Section – visual (6 steps displayed 3 + 3) */}
      <div className="bg-[#ffffff] py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax mb-2">
            3-Step Process For Our Villa Design Services In Dubai
          </h2>
          <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
            We follow a clear and transparent 3-step process to deliver seamless villa interior design services in Dubai.
          </p>

          {/* 6 circles → 3 + 3 grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
            {villaSteps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center font-play"
              >
                {/* Circle */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-[6px] border-[#193c38] overflow-hidden flex items-center justify-center shadow-md bg-white">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="relative text-3xl sm:text-4xl font-conthrax text-white drop-shadow-lg">
                    {step.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-base sm:text-lg font-conthrax">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-conthrax py-12">
          Bespoke Villa Interior Design Dubai, Crafted for Luxury Living
        </h2>

        {/* Section 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 font-play">
            <h2 className="text-xl font-conthrax mb-4">
              Our Interior Villa Design Services in Dubai
            </h2>
            <p>
            Our villa interior design services are tailored to fit your specific needs and preferences. Whether you are designing 
             new villa or renovating an existing one, our services ensure luxury and comfort at every step.
             </p>
            <p>
             Our Featured Services:
            </p>
            <ul className="list-decimal pl-5 space-y-2">
            <li>
             <p className='font-play'> <b> Architectural Design – </b>Thoughtful layouts for luxury and practicality</p>
            </li>

             <li>
             <p className='font-play'> <b>Landscape Design –</b> Luxury villa landscape design service Dubai creating harmony between indoor and outdoor spaces</p>
            </li>

             <li>
             <p className='font-play'> <b>Electrical & Plumbing Design – </b>Efficient, safe systems integrated for modern living</p>
            </li>

             <li>
             <p className='font-play'> <b>Furniture & Decor Selection –</b> Curated, custom-made pieces for a refined interior look</p>
            </li>
            <li>
             <p className='font-play'><b> Interior Fit Out in Dubai – </b>Complete premium fit-out in Dubai, ensuring perfect execution of design vision </p>
            </li>
            <li>
             <p className='font-play'> <b>Smart Home Integration –</b> Advanced home automation for lighting, climate, and security</p>
            </li>
            </ul>
            
            <p>
             We rank among one of the best villa  interior design companies in several areas of Dubai and we have completed our
              projects like <b><a href="https://wedointerior.ae/al-manara-luxury-villa"></a>Al Manara luxury Villa</b>, 
              <b><a href="https://wedointerior.ae/majan-villa-design">Majan Villa Interior Design</a></b> and 
              <b><a href="https://wedointerior.ae/district-1-mbr-city-contemporary-villa">District one MBR (Muhammad Bin Rashid) City Villa </a></b>etc
            </p>           
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/mbr-6.png"
              alt="Round luxury bed with fairy lights"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16 mb-4 bg-[#ffffff] rounded-lg shadow p-6 sm:p-10">
        <h2 className="text-center text-2xl sm:text-3xl font-conthrax mb-4 text-[#193c38]">
          Villa Interior Design Dubai – FAQs
        </h2>
        <p className="font-play text-sm sm:text-base text-gray-700 mb-6 text-center">
          Find quick answers to common questions about our villa interior design and fit-out services in Dubai.
        </p>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 py-3"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-play font-semibold text-sm sm:text-base text-[#193c38] text-left">
                  {item.question}
                </span>
                <span className="ml-3 text-[#193c38] text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm sm:text-base font-play text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

    </section>
  );
};

export default DProjects;
