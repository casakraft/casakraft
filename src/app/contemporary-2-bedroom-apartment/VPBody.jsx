"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/ca-1.png", alt: "Large 1" },
  { src: "/images/ca-2.png", alt: "Small 1" },
  { src: "/images/ca-3.png", alt: "Small 2" },
  { src: "/images/ca-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/ca-5.png", alt: "Large 2" },
  { src: "/images/ca-6.png", alt: "Small 4" },
  { src: "/images/ca-7.png", alt: "Small 5" },
  { src: "/images/ca-8.png", alt: "Small 6" },
];

// Group images into sets of 4 (1 large + 3 small)
const toBlocks = (arr, n = 4) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

// Section header (only shown once)
function SectionHeader({ as = "h1", title, text }) {
  const Tag = as;
  const size =
    Tag === "h1"
      ? "text-3xl sm:text-4xl lg:text-[40px]"
      : "text-2xl sm:text-3xl lg:text-[32px]";

  return (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <Tag
          className={`text-center text-[#d7b46a] font-semibold leading-tight ${size}`}
        >
          {title}
        </Tag>
      </div>
      {text && (
        <div className="mt-6 sm:mt-8 text-white/90">
          <p className="mx-auto max-w-[1000px] text-[13.5px] sm:text-[15px] leading-7 sm:leading-8">
            {text}
          </p>
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
        {/* ===== FIRST SECTION (2 paras + 1 large + 3 small) ===== */}
        <SectionHeader
          as="h1"
          title="Contemporary 2 Bedroom Apartment"
          text={[
            "At Casa Kraft Interiors, we specialize in Modern, classic, or creative styles to create homes that reflect elegance and personality. Offering premier interior design services in Dubai, our team focuses on transforming spaces with attention to detail and functional layouts. We provide complete solutions for apartment Interior Design Dubai - Modern Interior Design, including contemporary 2 bedroom apartment and full apartment interior design dubai. Our expertise in modern interior design ensures every project from  2 bedroom apartment design in Dubai to larger residences, is executed with precision. As a top interior design company in Dubai, we deliver stunning Dubai apartments interior design that blends aesthetics with comfort.",
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECOND SECTION (2 more paras) ===== */}
          <SectionHeader
            as="h2"
            title=" 2 Bedroom Apartment Interior Design in Dubai"
            text={[
              "Recognized as a “Luxury Interior Design and Architecture Company , we offer Dubai Apartments Interior Design: Stylish Modern Solutions and are a Leading interior design company in Dubai, specializing in interior styling for apartments in Dubai and bespoke interior design projects. We also excel in contemporary interiors for apartments, including Arabic style apartment interiors  and contemporary apartment fit-outs in Dubai. Our team designs luxurious bedrooms, including “Luxury Bedroom Design Dubai” and Bespoke Bedroom Design in Dubai, with modern designs and Modern bedroom interiors in Dubai that enhance comfort, functionality, and style, making each home a sophisticated retreat in the heart of the city.",
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
