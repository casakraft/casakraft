"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/boulevard-2.png", alt: "Large 1" },
  { src: "/images/boulevard-3.png", alt: "Small 1" },
  { src: "/images/boulevard-4.png", alt: "Small 2" },
  { src: "/images/boulevard-5.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/boulevard-6.png", alt: "Large 2" },
  { src: "/images/boulevard-1.png", alt: "Small 4" },
  { src: "/images/boulevard-8.png", alt: "Small 5" },
  { src: "/images/boulevard-9.png", alt: "Small 6" },
];

// Group images into sets of 4 (1 large + 3 small)
const toBlocks = (arr, n = 4) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

// Section header (reusable, supports multiple paragraphs)
function SectionHeader({ as = "h1", title, text }) {
  const Tag = as;
  const isH1 = Tag === "h1";
  const size = isH1
    ? "text-3xl sm:text-4xl lg:text-[40px]"
    : "text-2xl sm:text-3xl lg:text-[32px]";

  const paragraphs = !text ? [] : Array.isArray(text) ? text : [text];

  return (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <Tag
          className={`text-center text-[#d7b46a] font-semibold leading-tight ${size}`}
        >
          {title}
        </Tag>
      </div>

      {paragraphs.length > 0 && (
        <div className="mt-6 sm:mt-8 text-white/90 space-y-4 sm:space-y-5">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="mx-auto max-w-[1000px] text-[13.5px] sm:text-[15px] leading-7 sm:leading-8"
            >
              {para}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

// Generic image wrapper
const Img = ({ src, alt }) => (
  <figure className="relative w-full overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      className="w-full h-auto object-cover"
      priority={false}
    />
  </figure>
);

// Block layout: 1 large image on top + 3 small below
const GalleryBlock = ({ block }) => {
  if (!block || block.length < 4) return null;
  const [large, s1, s2, s3] = block;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top row: Large image */}
      <Img src={large.src} alt={large.alt} />

      {/* Second row: Three small images in a single row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <Img src={s1.src} alt={s1.alt} />
        <Img src={s2.src} alt={s2.alt} />
        <Img src={s3.src} alt={s3.alt} />
      </div>
    </div>
  );
};

export default function VPBody() {
  const blocks = toBlocks(galleryImages, 4);

  return (
    <section className="bg-[#332e2a] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* ===== SECTION 1: 2 paragraphs + 1 large + 3 small ===== */}
        <SectionHeader
          as="h1"
          title="Boulevard Point Penthouse: Luxury Interior Design Dubai"
          text={[
            "The Boulevard Point Penthouse – Interior Design Dubai work reflects sophistication, luxury, and modern elegance. Each interior design has been purposely executed to curate an innovative yet modern home. Our decorators are specialists in delivering exceptional interior design services, turning vision into elegant realities that manage practicality and modern sophistication.",
            "Casa kraft Interiors is a Luxury Interior Design Company in Boulevard Point Penthouse, Dubai. Our interior decorators make sure stylish layouts, premium finishes, and bespoke touches that enhance every room. With many years of experience as one of the famous interior design firms in Dubai, we deliver tailored solutions that show each client’s personality and lifestyle."
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECTION 2: 2 paragraphs + 1 large + 3 small ===== */}
          <SectionHeader
            as="h2"
            title="Luxury Living Above the Boulevard"
            text={[
              "We are also reliable among the best interior fit out companies in Dubai, providing end-to-end services from idea creation to final finishing. Clients frequently question if their vision can be fully customized, and we make sure each interior design Dubai project is modern, functional, and luxurious.",

              "Casakraft’s Boulevard Point Penthouse interiors highlight why we are reputed in Dubai interior design. Explore Casa kraft Interiors and find out how we can turn your penthouse into a masterpiece of style, luxury, and sophistication."
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
