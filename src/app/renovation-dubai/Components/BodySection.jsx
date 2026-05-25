"use client";

import React, { useMemo, useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

import {
  FiUser,
  FiCalendar,
  FiShield,
  FiDollarSign,
  FiGift,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

// Helpers
const Section = ({ className = "", children }) => (
  <section className={`w-full reveal ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`}>{children}</div>
);

const PrimaryBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm bg-[#1e4a45] px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition ${className}`}
  >
    {children}
  </Link>
);

const DarkBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition ${className}`}
  >
    {children}
  </Link>
);

const GhostBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm border border-white/15 bg-black px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition ${className}`}
  >
    {children}
  </Link>
);
export default function BodySection() {
  const rootRef = useRef(null);
  const sectionRef = useRef(null); // ✅ ADD THIS

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);
const projects = useMemo(() => [
  {
    id: 1,
    src: "/images/acacia-2.png",
    title: "Accacia 3 Bedroom Apartment",
    category: "Apartment Interior",
    link: "/acacia-3-bedroom-apartment",
  },
  {
    id: 2,
    src: "/images/bluewaters-3.png",
    title: "Bluewaters 3 Bedroom Design",
    category: "Luxury Apartment",
    link: "/gallery",
  },
  {
    id: 3,
    src: "/images/boulevard-5.png",
    title: "Boulevard Point Penthouse",
    category: "Penthouse Interior",
    link: "/gallery",
  },
  {
    id: 4,
    src: "/images/bulgari-4.png",
    title: "Bulgari 2 Bedroom Apartment",
    category: "Modern Living",
    link: "/gallery",
  },
  {
    id: 5,
    src: "/images/citywalk-1.png",
    title: "City Walk 3 Bedroom Apartment",
    category: "Luxury Renovation",
    link: "/gallery",
  },
  {
    id: 6,
    src: "/images/damac-9.png",
    title: "Villa Damac Hills 5 Bedroom",
    category: "Villa Renovation",
    link: "/gallery",
  },
  {
    id: 7,
    src: "/images/jbr-2.png",
    title: "JBR Luxury Apartment",
    category: "Interior Design",
    link: "/gallery",
  },
  {
    id: 8,
    src: "/images/marina-3.png",
    title: "Dubai Marina Residence",
    category: "Modern Apartment",
    link: "/gallery",
  },
], []);
  const promiseItems = useMemo(() => [
    {
      icon: <FiUser className="text-2xl text-white" />,
      title: "Experienced Planners",
      desc:
        "Our team of professional designers for  home renovation, office renovation  and renovation management experts ensures that your villa, apartments and office renovation in Dubai will be taken care of.",
    },
    {
      icon: <FiCalendar className="text-2xl text-white" />,
      title: "Planned Installation",
      desc:
        "Every stage is planned in advance to allow hassle-free execution of renovation work in Dubai. This could be related to kitchen renovations in Dubai, bathroom renovations in Dubai, and overall interior renovations projects.",
    },
    {
      icon: <FiShield className="text-2xl text-white" />,
      title: "Warranty",
      desc:
        " Our home renovation services in Dubai are confidently supported by a comprehensive warranty, ensuring you achieve the desired quality for the long term of your investement.",
    },
    {
      icon: <FiDollarSign className="text-2xl text-white" />,
      title: "Best Price Guarantee",
      desc:
        " Get best quality villa renovation work in Dubai, apartment renovation work, and turnkey home renovation services at highly competitive rates, assured without compromises.",
    },
    {
      icon: <FiGift className="text-2xl text-white" />,
      title: "Free Design Services",
      desc:
        " Take advantage of our complimentary design consultation for smart renovations in Dubai for benefitting from an understanding of what you want before embarking on building.",
    },
  ], []);

  const stats = useMemo(() => [
    { value: "8+", label: "Trusted Years" },
    { value: "100+", label: "Employees" },
    { value: "200+", label: "Residential Projects" },
    { value: "50+", label: "Commercial Fit-Outs" },
  ], []);

  const renovationTiles = useMemo(() => [
    { title: "Villa Renovation", img: "/images/vr2.png", href: "/villa-renovation" },
    { title: "Apartment Renovation", img: "/images/aptt1.png", href: "/apartment-renovation" },
    { title: "Office Renovation", img: "/images/or6.png", href: "/office-renovation-dubai" },
    { title: "Kitchens", img: "/images/kr4.png", href: "/kitchen-renovation" },
    { title: "Bathrooms", img: "/images/br7.jpeg", href: "/bathroom-renovation" },
    { title: "Flooring", img: "/images/fr4.png", href: "/flooring-dubai" },
    { title: "Wardrobes & Cabinets", img: "/images/wc5.png", href: "/wardrobes-and-cabinets" },
    { title: "Villa Extension", img: "/images/ve6.png", href: "/villa-extention" },
    { title: "Landscape", img: "/images/ls2.png", href: "/landscape-dubai" },
    { title: "Painting", img: "/images/pn3.png", href: "/painting-services-dubai" },
    { title: "Windows & Doors", img: "/images/wd1.png", href: "/windows-and-doors" },
  ], []);

  const projectMosaic = useMemo(() => [
    {
      img: "/images/gp-1.png",
      title: "3 BEDROOM APARTMENT",
      locationLine1: "Acacia by EMAAR,",
      locationLine2: "Dubai Hills Estate, Dubai",
      year: "2025",
      service: "FULL CONCEPT CREATION",
    },
    {
      img: "/images/gp-3.png",
      title: "LUXURY PENTHOUSE",
      locationLine1: "Bulevard Point Tower,",
      locationLine2: "Downtown, Dubai",
      year: "2025",
      service: "INTERIOR DESIGN + FIT-OUT",
    },
    {
      img: "/images/gp-4.png",
      title: "TWO BEDROOM APARTMENT",
      locationLine1: "Bulgari Residence Building,",
      locationLine2: "Daria Island, Jumeira Bay, Jumeirah 2, Dubai",
      year: "2025",
      service: "DESIGN + EXECUTION",
    },
    {
      img: "/images/vl-11.png",
      title: "CONTEMPORARY VILLA",
      locationLine1: "Lantana,",
      locationLine2: "Al Barsha South Second, Al Barsha, Dubai",
      year: "2025",
      service: "TURNKEY FIT-OUT",
    },
  ], []);

  const [activeReview, setActiveReview] = useState(0);

  return (
    <main ref={rootRef} className="w-full bg-black text-white">
{/* WHY CHOOSE US (ABOUT STYLE) */}
<Section className="bg-black py-10 md:py-14 overflow-hidden">
  <Container className="px-4 md:px-10 lg:px-14">

    {/* TITLE */}
    <div className="mb-8">
      <h2 className="text-[#367a72] uppercase tracking-[3px] text-xs mb-3">
        Why Choose Us
      </h2>
    </div>

    {/* GRID (ABOUT STYLE LAYOUT) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

      {/* LEFT CARD */}
      <div className="left-card lg:col-span-5">
        <div className="bg-[#111] p-6 md:p-8 border border-white/10">

          <h2 className="about-text text-2xl md:text-3xl font-semibold leading-snug mb-4 text-white">
            Renovation Experts You Can Trust in Dubai
          </h2>

          <p className="about-text text-white/70 text-xs md:text-sm leading-relaxed mb-6">
            We specialize in villa, apartment, and office renovations across Dubai,
            delivering high-quality workmanship with complete project management.
          </p>

          <p className="about-text text-white/70 text-xs md:text-sm leading-relaxed mb-6">
            Our mission is to transform spaces with precision, transparency,
            and luxury-grade finishes that exceed expectations.
          </p>

         
          {/* BUTTON */}
          <Link href="/contact-us">
            <button className="group bg-[#1f4a45] hover:bg-[#275f58] text-white px-6 py-3 uppercase tracking-widest text-xs flex items-center gap-2 transition">
              Free Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </Link>

        </div>
      </div>

      {/* CENTER IMAGE (FLOATING STYLE LIKE ABOUT) */}
      <div className="center-image floating-image lg:col-span-4 relative h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/jbr-2.png"
          alt="Renovation Dubai"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT SMALL IMAGE */}
      <div className="right-image hidden lg:block lg:col-span-3 relative h-[280px] md:h-[360px] overflow-hidden">
        <Image
          src="/images/vl-11.png"
          alt="Renovation Work"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </Container>
</Section>

 {/* RENOVATIONS */}
<Section className="bg-black">
  <Container className="py-5">

    {/* TITLE */}
    <h2 className="text-center text-white font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
      Our Renovation Services in Dubai
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {renovationTiles.map((service, index) => (
        <Link
          key={index}
          href={service.href}
          className="service-card group block"
        >
          {/* CARD */}
          <div className="relative bg-[#111111] border border-[#4eb5a9]/20 overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:border-[#4eb5a9]/50">

            {/* IMAGE (RECTANGLE SHAPE) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* TEXT ON IMAGE */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-white font-semibold text-sm md:text-base tracking-wide">
                {service.title}
              </h3>

              {/* UNDERLINE ANIMATION */}
              <div className="mt-2 w-10 h-[1px] bg-[#4eb5a9] group-hover:w-16 transition-all duration-500" />
            </div>

          </div>
        </Link>
      ))}

    </div>

  </Container>
</Section>
    {/* PROJECTS SWIPER */}
<Section className="bg-black py-10 overflow-hidden">
  <Container className="max-w-[1400px]">

    {/* HEADER */}
    <div className="mb-8">
      <p className="text-[#367a72] uppercase tracking-[3px] text-xs mb-3">
        Our Projects
      </p>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          Recently Completed Works
        </h2>

        <Link
          href="/gallery"
          className="flex items-center gap-2 text-white hover:text-[#4eb5a9] transition text-sm"
        >
          More <ArrowRight size={18} />
        </Link>
      </div>
    </div>

    {/* SWIPER */}
    <Swiper
      modules={[Autoplay, Navigation]}
      loop
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={900}
      spaceBetween={12}
      slidesPerView={1.1}
      breakpoints={{
        640: { slidesPerView: 1.4 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
        1280: { slidesPerView: 4 },
      }}
      className="our-projects-swiper"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Link
            href={project.link}
            className="relative block h-[220px] sm:h-[240px] overflow-hidden group"
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-[2000ms]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[10px] uppercase tracking-[3px] text-white/70">
                {project.category}
              </p>

              <h3 className="text-sm md:text-base font-semibold mt-1">
                {project.title}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <div className="w-10 h-[1px] bg-white/70 group-hover:w-16 transition-all duration-500" />

                <div className="w-9 h-9 border border-white/30 flex items-center justify-center group-hover:bg-white transition">
                  <ArrowRight
                    size={14}
                    className="text-white group-hover:text-black"
                  />
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>

  </Container>
{/* SWIPER STYLE (REDUCED SIZE) */}
<style jsx global>{`
  .our-projects-swiper {
    padding-left: 6px;
  }

  .our-projects-swiper .swiper-button-prev,
  .our-projects-swiper .swiper-button-next {
    width: 28px;
    height: 28px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 50%;
    color: white;
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;
  }

  .our-projects-swiper .swiper-button-prev:hover,
  .our-projects-swiper .swiper-button-next:hover {
    background: rgba(255,255,255,0.15);
    transform: scale(1.05);
  }

  .our-projects-swiper .swiper-button-prev:after,
  .our-projects-swiper .swiper-button-next:after {
    font-size: 9px;
    font-weight: 300;
  }
`}</style>
</Section>
      {/* STATS */}
      <Section className="bg-[#0a0a0a]">
        <Container className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-semibold text-[#4eb5a9]">{s.value}</p>
                <p className="mt-1 text-sm text-white/60">{s.label}</p>
                <div className="mx-auto mt-4 h-[2px] w-16 bg-white/10" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

{/* AREAS / COMMUNITIES */}

<Section ref={sectionRef} id="areas" className="w-full mt-10 pb-14 px-4 md:px-10 lg:px-14 bg-black">

  <Container>

    {/* TITLE */}
    <h2 className="text-white mb-10 md:text-3xl font-bold text-center">
      Communities we work in Dubai
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      {[
        { id: 1, name: "Palm Jumeirah", href: "/palm-jumeirah", src: "/images/palm-jumeirah.jpg" },
        { id: 2, name: "Atlantis The Royal", href: "/atlantis-royal", src: "/images/atlantiss.jpg" },
        { id: 3, name: "Dubai Marina", href: "/dubai-marina", src: "/images/dubai-marina.jpg" },
        { id: 4, name: "Business Bay", href: "/business-bay", src: "/images/business-bay.jpg" },
        { id: 5, name: "Downtown Dubai", href: "/downtown-dubai", src: "/images/downtown.jpg" },
        { id: 6, name: "Damac Hills", href: "/dubai-hills", src: "/images/damac-hills.jpg" },
        { id: 7, name: "Bluewaters Dubai", href: "/jlt", src: "/images/bluewaters-dubai.jpg" },
        { id: 8, name: "Dubai Creek Harbour", href: "/jvc", src: "/images/dubai-creek.jpg" },
      ].map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="area-card group relative overflow-hidden rounded-md border border-white/10"
        >

          {/* IMAGE */}
          <Image
            src={item.src}
            alt={item.name}
            width={700}
            height={400}
            className="w-full h-[160px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-sm md:text-base font-semibold">
              {item.name}
            </h3>

            <p className="text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition duration-300">
              Interior projects in {item.name}
            </p>
          </div>

        </Link>
      ))}

    </div>

  </Container>
</Section>
    
 {/* PROCESS */}
<Section className="relative bg-black py-14 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 opacity-10">
    <Image
      src="/images/bhd-4.png"
      alt="Background"
      fill
      className="object-cover"
    />
  </div>

  <Container className="relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <p className="text-[#4eb5a9] uppercase tracking-[4px] text-sm mb-3">
        How We Work
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Our Renovation Process
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
        From concept to completion, our streamlined renovation process ensures
        quality execution, transparency, and a stress-free experience.
      </p>
    </motion.div>

    {/* PROCESS GRID */}
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {[
        {
          year: "01",
          title: "Consultation & Design",
          desc: "Tell us about your renovation requirements and design vision.",
        },
        {
          year: "02",
          title: "Site Visit",
          desc: "Our experts visit your property for measurements and planning.",
        },
        {
          year: "03",
          title: "3D Design",
          desc: "We create detailed 3D concepts tailored to your space.",
        },
        {
          year: "04",
          title: "Quotation",
          desc: "Transparent costing with timeline and material breakdown.",
        },
        {
          year: "05",
          title: "Approvals",
          desc: "We handle all NOC and authority approvals for you.",
        },
        {
          year: "06",
          title: "Execution & Handover",
          desc: "Premium renovation execution with timely project delivery.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="
            group relative
            bg-[#111]
            border border-white/10
            hover:border-[#4eb5a9]/40
            p-5 min-h-[170px]
            flex items-center
            overflow-hidden
            transition-all duration-500
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative z-10 flex gap-5">

            {/* STEP NUMBER */}
            <div className="min-w-[60px] text-center">
              <h3 className="text-2xl font-bold text-[#4eb5a9]">
                {item.year}
              </h3>

              <div className="w-[1px] h-10 bg-white/20 mx-auto my-2" />

              <p className="text-[10px] uppercase tracking-[3px] text-white font-medium">
                Step
              </p>
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        </motion.div>
      ))}
    </motion.div>

  </Container>
</Section>
{/* FAQ */}
<Section className="bg-black py-14">
  <Container className="max-w-5xl">

    {/* TITLE */}
    <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-10">
      Frequently Asked Questions
    </h2>

    {/* FAQ LIST */}
    <div className="space-y-4">

      {[
        {
          q: "How long does a renovation project take in Dubai?",
          a: "It depends on the project size. Small apartments take 3–6 weeks, while villas may take 2–4 months."
        },
        {
          q: "Do you provide free consultation?",
          a: "Yes, we offer free site visits and initial consultation for all renovation projects."
        },
        {
          q: "Can you handle approvals and NOC?",
          a: "Yes, we manage all authority approvals and NOC requirements for a smooth process."
        },
        {
          q: "Do you offer design and execution together?",
          a: "Yes, we provide complete turnkey solutions including design, material selection, and execution."
        }
      ].map((item, i) => (
        <details
          key={i}
          className="group border border-white/10 bg-[#111] p-5 hover:border-[#4eb5a9]/40 transition"
        >
          <summary className="cursor-pointer text-white font-medium flex justify-between items-center">
            {item.q}
            <span className="text-[#4eb5a9] group-open:rotate-45 transition text-xl">+</span>
          </summary>

          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}

    </div>
  </Container>
</Section>
   

    </main>
  );
}