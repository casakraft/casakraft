"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block of 6 (pattern 1) ---
  { src: "/images/arth (7).png", alt: "Large 1" },
  { src: "/images/arth (1).png", alt: "Small 1" },
  { src: "/images/arth (2).png", alt: "Small 2" },
  { src: "/images/arth (3).png", alt: "Small 3" },
  { src: "/images/arth (4).png", alt: "Small 4" },
  { src: "/images/arth (5).png", alt: "Large 2" },

  // --- 2nd block of 6 (pattern 2) ---
  { src: "/images/arth (6).png", alt: "Large 3" },
  { src: "/images/arth (1).png", alt: "Small 5" },
  { src: "/images/arth (2).png", alt: "Small 6" },
  { src: "/images/arth (3).png", alt: "Small 7" },
  { src: "/images/arth (4).png", alt: "Small 8" },
  { src: "/images/arth (8).png", alt: "Large 4" },
];

// Build blocks as: [Large, Small, Small, Small]
const buildTemplateBlocks = (images) => {
  const largeIdx = [0, 5, 6, 11]; // positions you labeled as "Large"
  const smallIdx = [1, 2, 3, 4, 7, 8, 9, 10];

  const larges = largeIdx.map(i => images[i]).filter(Boolean);
  const smalls = smallIdx.map(i => images[i]).filter(Boolean);

  const blocks = [];
  for (let i = 0; i < larges.length; i++) {
    const L = larges[i], s1 = smalls[i * 3], s2 = smalls[i * 3 + 1], s3 = smalls[i * 3 + 2];
    if (L && s1 && s2 && s3) blocks.push([L, s1, s2, s3]);
  }
  return blocks;
};

// Section header (only once)
function SectionHeader({ as = "h1", title, text }) {
  const Tag = as;
  const size = Tag === "h1" ? "text-3xl sm:text-4xl lg:text-[40px]" : "text-2xl sm:text-3xl lg:text-[32px]";
  return (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <Tag className={`text-center text-[#d7b46a] font-semibold leading-tight ${size}`}>{title}</Tag>
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

// Block layout: 1 large on top + 3 small below
const GalleryBlock = ({ block }) => {
  if (!block || block.length < 4) return null;
  const [large, s1, s2, s3] = block;
  return (
    <div className="space-y-6 sm:space-y-8">
      <Img src={large.src} alt={large.alt} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <Img src={s1.src} alt={s1.alt} />
        <Img src={s2.src} alt={s2.alt} />
        <Img src={s3.src} alt={s3.alt} />
      </div>
    </div>
  );
};

export default function VPBody() {
  const blocks = buildTemplateBlocks(galleryImages);

  return (
    <section className="bg-[#332e2a] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* Single header (kept) */}
        <SectionHeader
          as="h1"
          title="Arabella 2 Bedroom Townhouse"
          text="Experience a contemporary blend of warmth and functionality designed for family living. Soft neutrals, layered textures, and clean lines define the character of this space."
        />

        {/* Template blocks — no extra H2/paragraph */}
        <div className="mt-8 sm:mt-10 space-y-10">
          {blocks.map((block, i) => (
            <GalleryBlock key={i} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
