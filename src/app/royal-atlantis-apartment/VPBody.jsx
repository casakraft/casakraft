"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/atr-1.png", alt: "Large 1" },
  { src: "/images/atr-2.png", alt: "Small 1" },
  { src: "/images/atr-3.png", alt: "Small 2" },
  { src: "/images/atr-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/atr-5.png", alt: "Large 2" },
  { src: "/images/atr-6.png", alt: "Small 4" },
  { src: "/images/atr-7.png", alt: "Small 5" },
  { src: "/images/atr-8.png", alt: "Small 6" },
];

// Group into blocks of 4
const toBlocks = (arr, n = 4) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

function SectionHeader({ as = "h2", title, text }) {
  const Tag = as;
  const isH1 = Tag === "h1";
  const size = isH1 ? "text-3xl sm:text-4xl lg:text-[40px]" : "text-2xl sm:text-3xl lg:text-[32px]";

  return (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <Tag className={`text-center text-[#d7b46a] font-semibold leading-tight ${size}`}>{title}</Tag>
      </div>
      {text && (
        <div className="mt-6 sm:mt-8 text-white/90">
          <p className="mx-auto max-w-[1000px] text-[13.5px] sm:text-[15px] leading-7 sm:leading-8">{text}</p>
        </div>
      )}
    </>
  );
}

// Simple Image wrapper
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

// Layout: 1 large (top) + 3 small (bottom)
const GalleryBlock = ({ block }) => {
  if (!block || block.length < 4) return null;
  const [large, s1, s2, s3] = block;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top row: Large image */}
      <Img src={large.src} alt={large.alt} />

      {/* Bottom row: Three small images in a row */}
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
          title="Royal Atlantis Apartmen Interior Design"
          text={[
            "Interior Design of the Royal Atlantis apartment by Casa Kraft Interiors, using modern style and sophistication for the most elite tastes of the homeowners. Located within Atlantis The Royal Residences, these exceptional homes require only interiors that exude elegance, exclusiveness and refined comfort. Casa kraft interiors deliver complete luxury fitout and bespoke furniture solutions for Royal Atlantis in Dubai that executed with precision and attention to detail. As one of the Best apartment interior design companies in Dubai Casa Kraft Interiors is renowned for crafting premium luxury interiors masterfully balancing modern aesthetics with everyday functionality.",
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECOND SECTION (2 more paras) ===== */}
          <SectionHeader
            as="h2"
            title="Interior Design Company in Royal Atlantis"
            text={[
              "Each modern luxury apartment interior features sleek lines, high-quality materials, and tailored finishes that enhance the overall living experience. Our team consists of skilled Luxury Interior Designers in Dubai, who design fully customized interiors for  contemporary apartments and high-end duplexes. Casa kraft interior's designs  captured breathtaking surroundings through maximized natural light, views and flow of space. The effect is to create a refined, timeless interior that captures the true essence of Royal Atlantis living while offering comfort, luxury and lasting value.",
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
