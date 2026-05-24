"use client";

import React, { useLayoutEffect, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Sparkles,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Interior Design",
    img: "images/modern townhouse interior in Al Furjan Dubai.png",
  },
  {
    title: "Renovation",
    img: "images/Design, Fit-Out, and Execution Process.png",
  },
  {
    title: "Fit Out",
    img: "images/wc8.png",
  },
];

const projects = [
  {
    title: "Meadows Contemporary Villa",
    img: "/images/mcv-7.png",
    link: "/meadows-contemporary-villa",
  },
  {
    title: "Bluewaters Apartment",
    img: "/images/bluewaters-8.png",
    link: "/bluewaters-3-bedroom-design",
  },
  {
    title: "Palm Jumeirah Apartment",
    img: "/images/pja-3.png",
    link: "/palm-jumeirah-apartment",
  },
  {
    title: "Contemporary Apartment",
    img: "/images/ca-6.png",
    link: "/contemporary-2-bedroom-apartment",
  },
  {
    title: "Villa Lantana Interior",
    img: "/images/vl-2.png",
    link: "/villa-lantana",
  },
  {
    title: "Arabian Ranches Townhouse",
    img: "/images/tar-3.png",
    link: "/townhouse-arabian-ranches-2",
  },
];

export default function AboutUsPage() {

  const pageRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      // HERO
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
      });

      // FADE UP
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 70,
          duration: 1,
          ease: "power3.out",
        });
      });

      // LEFT
      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          x: -80,
          duration: 1,
          ease: "power3.out",
        });
      });

      // RIGHT
      gsap.utils.toArray(".fade-right").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          x: 80,
          duration: 1,
          ease: "power3.out",
        });
      });

      // ZOOM
      gsap.utils.toArray(".zoom-in").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.92,
          duration: 1,
          ease: "power3.out",
        });
      });

    }, pageRef);

    return () => ctx.revert();

  }, []);

  return (
    <div
      ref={pageRef}
      className="w-full overflow-hidden bg-black text-white"
    >

      {/* HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

        <img
          src="/images/our-mission.png"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20 w-full hero-anim">

          <div className="max-w-xl ml-[8%] lg:ml-[10%] px-6">

            <span className="mt-10 uppercase tracking-[5px] text-xs text-[#4eb5a9]">
              Casa Kraft Interiors
            </span>

            <h1 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-white whitespace-nowrap">
              About Casa Kraft <br /> Interior Design & Renovation
            </h1>

            <p className="mt-6 text-gray-300 text-sm md:text-base leading-7">
              We design timeless luxury interiors combining elegance, comfort
              and functionality for modern living.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="/gallery"
                className="bg-[#1f4a45] hover:bg-[#275f58] transition-all duration-300 px-6 py-3 text-sm text-white"
              >
                Explore Projects
              </a>

              <a
                href="/contact-us"
                className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 text-sm text-white"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#0b0b0b] fade-up">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative min-h-[420px] fade-left">

            <img
              src="images/premium-quality-products-services.png"
              alt="Premium Quality"
              className="w-[360px] h-[300px] object-cover absolute top-0 left-0 opacity-80"
            />

            <img
              src="images/highly-experienced-team.png"
              alt="Experienced Team"
              className="w-[420px] h-[320px] object-cover absolute bottom-0 left-10"
            />

          </div>

          <div className="fade-right">

            <span className="uppercase tracking-[5px] text-xs text-[#4eb5a9]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Creative Interior Solutions
            </h2>

            <p className="mt-6 text-gray-300 text-sm leading-7">
              Casa Kraft Interiors is a premier interior design and renovation
              company established in Dubai, UAE. We specialize in manufacturing
              and delivering high-quality interior renovation products and
              services at competitive prices across the region.
            </p>

            <p className="mt-4 text-gray-300 text-sm leading-7">
              With a team of highly qualified professionals available 24/7, we
              are dedicated to transforming ordinary spaces into luxury
              experiences according to our client's preferences.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 mt-6 text-white px-6 py-3 text-sm bg-[#1f4a45] hover:bg-[#275f58] transition-all duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

      {/* CORE PRINCIPLES */}
      <section className="bg-black py-12 border-y border-white/10 fade-up">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8 zoom-in">

            {/* QUALITY */}
            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-full border border-[#1f4a45] flex items-center justify-center shrink-0 bg-[#111]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#5f6f52]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m6 2.25c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10Z"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  Premium Quality
                </h3>

                <p className="text-sm text-gray-400 leading-6">
                  Crafted with premium materials and exceptional attention to detail
                  for timeless luxury interiors.
                </p>

              </div>

            </div>

            {/* SUSTAINABILITY */}
            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-full border border-[#1f4a45] flex items-center justify-center shrink-0 bg-[#111]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#5f6f52]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  Sustainability
                </h3>

                <p className="text-sm text-gray-400 leading-6">
                  Smart material choices and sustainable design solutions built for
                  modern living.
                </p>

              </div>

            </div>

            {/* INNOVATION */}
            <div className="flex items-start gap-4">

              <div className="w-14 h-14 rounded-full border border-[#1f4a45] flex items-center justify-center shrink-0 bg-[#111]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#5f6f52]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                  />
                </svg>

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  Innovation
                </h3>

                <p className="text-sm text-gray-400 leading-6">
                  Combining creativity and functionality to create refined,
                  contemporary interior experiences.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-black py-20 fade-up">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[5px] text-xs text-[#4eb5a9]">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Services We Provide in Dubai
          </h2>

          <p className="mt-6 text-gray-300 text-sm md:text-base leading-7">
            We deliver luxury interior solutions with precision, creativity,
            and unmatched craftsmanship tailored to your lifestyle.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 zoom-in">

            {services.map((s, i) => (
              <div
                key={i}
                className="group relative h-[340px] overflow-hidden border border-gray-800 bg-[#111]"
              >

                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">

                  <h3 className="text-2xl font-semibold text-white">
                    {s.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-3 max-w-[260px]">
                    Explore our {s.title.toLowerCase()} services crafted for
                    luxury interiors.
                  </p>

                  <a
                    href={`/services/${s.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Read More <ArrowRight size={16} />
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black text-white py-10 md:py-10 fade-up">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* CONTENT */}
            <div className="max-w-xl order-2 lg:order-1 fade-left">

              <p className="uppercase tracking-[4px] text-xs text-[#4eb5a9] mb-4">
                WHY CHOOSE US
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                Premium Interior Design & Build Excellence
              </h2>

              <p className="text-gray-300 text-xs md:text-sm leading-6 mb-6">

                Casa Kraft Interiors delivers fully managed luxury interior
                solutions from concept to completion. We combine creativity,
                precision, and craftsmanship to transform spaces into timeless
                experiences tailored to your lifestyle.

                <br />
                <br />

                Casa Kraft Interiors delivers fully managed luxury interior
                solutions from concept to completion. We combine creativity,
                precision, and craftsmanship to transform spaces into timeless
                experiences tailored to your lifestyle.

              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/gallery"
                  className="border border-white px-7 py-3 text-sm hover:bg-white hover:text-black transition text-center"
                >
                  See Projects
                </a>

                <a
                  href="/contact-us"
                  className="text-white px-7 py-3 text-sm bg-[#1f4a45] hover:bg-[#275f58] transition text-center"
                >
                  Free Consultation
                </a>

              </div>

            </div>

            {/* IMAGE */}
            <div className="relative h-[300px] md:h-[380px] lg:h-[450px] overflow-hidden order-1 lg:order-2 fade-right">

              <img
                src="/images/jbr-2.png"
                alt="Casa Kraft Interior Design"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-24 text-center fade-up">

        <img
          src="/images/best-quality-services.png"
          alt="Best Quality Services"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 zoom-in">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Elegant Spaces for Better Living
          </h2>

          <p className="mt-4 text-gray-300 text-sm">
            Luxury interiors tailored to your lifestyle.
          </p>

          <a
            href="/contact-us"
            className="text-white px-7 py-3 text-sm bg-[#1f4a45] hover:bg-[#275f58] transition text-center inline-block mt-8"
          >
            Schedule Consultation
          </a>

        </div>

      </section>

    </div>
  );
}