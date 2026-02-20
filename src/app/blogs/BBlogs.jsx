"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

// ---- DATA (kept from your current version; slugs normalized) ----
const blogs = [
  {
    id: 1,
    slug: "modern-apartment-interior-design",
    title: "Modern Apartment Interior Design",
    image: "/images/blog-1.png",
    date: "2025-01-01",
    tag: "Blog",
  },
  {
    id: 2,
    slug: "villa-renovation-company-dubai",
    title: "Villa Renovation Company in Dubai",
    image: "/images/blog-2.png",
    date: "2024-12-01",
    tag: "Blog",
  },
  {
    id: 3,
    slug: "apartment-revamp-dubai",
    title: "Revamp Your Dubai Apartment Ideas for a Modern Look",
    image: "/images/blog-3.png",
    date: "2024-07-01",
    tag: "Blog",
  },



];

// Helper to split title onto two lines (optional)
const splitTitle = (title) => {
  const words = title.split(" ");
  if (words.length <= 3) return title; // keep short titles on one line
  return (
    <>
      {words.slice(0, 3).join(" ")} <br />
      {words.slice(3).join(" ")}
    </>
  );
};

// Safe slug (removes any accidental leading slash)
const safeSlug = (s) => s.replace(/^\/+/, "");

export default function BlogsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-[#caa193] font-conthrax tracking-widest text-lg sm:text-xl mb-12">
          OUR BLOGS
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <Link
              href={`/${safeSlug(post.slug)}`}
              key={post.id}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Blog Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    priority={post.id === 1}
                  />
                </div>

                {/* Blog Info */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Blog Tag */}
                  <span className="bg-[#193c38] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
                    BLOG
                  </span>

                  {/* Title */}
                  <h3 className="text-[#caa193] font-semibold text-lg mb-3 leading-snug group-hover:underline">
                    {splitTitle(post.title)}
                  </h3>

                  {/* Date */}
                  <p className="text-gray-600 text-sm mt-auto">
                    Published on {dayjs(post.date).format("MMMM D, YYYY")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link href="/blogs" className="inline-block">
            <button className="bg-gradient-to-br from-[#193c38] to-[#22524d] text-white font-conthrax px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 uppercase tracking-wide">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
