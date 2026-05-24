"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "Villa Renovation Cost in Dubai 2026",
    date: "15 May, 2026",
    image: "/images/Villa Renovation Cost in Dubai.png",
    link: "/villa-renovation-cost-in-dubai",
  },
  {
    title: "Villa Renovation Services in Dubai",
    date: "30 Apr, 2026",
    image: "/images/home expert villa renovation services in dubai.png",
    link: "/transform-your-dream-home-expert-villa-renovation-services-in-dubai",
  },
];

const Blogs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text animation
      gsap.from(".blog-left", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards animation (stagger)
      gsap.from(".blog-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-10 md:py-14 overflow-hidden"
    >
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 items-start">

          {/* LEFT */}
          <div className="blog-left">
            <p className="text-[#4eb5a9] text-[14px] md:text-[16px] font-medium mb-3">
             FROM OUR BLOG
            </p>

            <h2 className="text-[32px] md:text-[52px] leading-[0.95] font-semibold text-white">
              Latest News & Updates
            </h2>

            <p className="text-white text-[14px] md:text-[16px] leading-7 mt-5 max-w-[420px]">
              Explore villa renovation trends, interior ideas, and luxury
              transformation tips across Dubai.
            </p>

            <div className="mt-7">
              <Link href="/blogs">
                <button className="h-[52px] px-6 bg-[#1f4a45]  text-white text-[15px] font-semibold hover:bg-[#275f58] transition-all duration-300 flex items-center gap-2">
                  View All
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 gap-5">

            {blogPosts.map((post, index) => (
              <Link href={post.link} key={index} className="group blog-card">

                <article className="bg-[#111111] border border-white/10 overflow-hidden hover:border-white transition-all duration-500 h-full">

                  {/* IMAGE */}
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <p className="text-white/50 text-[14px] mb-3">
                      {post.date}
                    </p>

                    <h3 className="text-[22px] leading-[1.3] font-semibold text-white group-hover:text-[#4eb5a9] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-white text-[15px] leading-7 mt-4">
                      Expert renovation insights and modern luxury interior ideas.
                    </p>

                  </div>
                </article>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;