"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { desc } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  
  {
    title: "Apartment Renovation Cost in Dubai",
    date: "01 June, 2026",
    image: "/images/luxury Dubai apartment under renovation.png",
    link: "/apartment-renovation-cost-dubai",
  },
  {
    title: "Villa Renovation Cost in Dubai 2026",
    date: "15 May, 2026",
    image: "/images/Villa Renovation Cost in Dubai.png",
    link: "/villa-renovation-cost-in-dubai",
  },

  {
    title: "Villa Renovation Services in Dubai",
    date: "30 April, 2026",
    image: "/images/home expert villa renovation services in dubai.png",
    link: "/apartment-renovation-cost-dubai",
  },
   
];

const Blogs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      

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
<p className="text-center text-[#4eb5a9] mb-3 "> FROM OUR BLOG</p>
 <h2 className=" text-center text-3xl md:text-4xl mb-5 font-semibold text-white">     

Latest News & Updates
            </h2>
<p className="mb-10 text-center">
  Explore villa renovation trends, interior ideas, and luxury transformation tips across Dubai.
  </p>
<div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

  {blogPosts.map((post, index) => (
    <Link href={post.link} key={index} className="group blog-card">

      <article className="bg-[#111111] border border-white/10 overflow-hidden hover:border-white transition-all duration-500 h-full">

        {/* IMAGE */}
        <div className="relative w-full h-[220px] overflow-hidden">
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

        

        </div>

      </article>
    </Link>
  ))}

</div>

  </div>
</section>

  );
};

export default Blogs;