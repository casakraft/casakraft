"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/tdh-8.png", alt: "Large 1" },
  { src: "/images/tdh-2.png", alt: "Small 1" },
  { src: "/images/tdh-3.png", alt: "Small 2" },
  { src: "/images/tdh-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/tdh-5.png", alt: "Large 2" },
  { src: "/images/tdh-6.png", alt: "Small 4" },
  { src: "/images/tdh-7.png", alt: "Small 5" },
  { src: "/images/tdh-8.png", alt: "Small 6" },
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
          title="Dubai Hills Townhouse"
          text={[
            "Experience Luxury interiors and architecture services in Dubai Hills with Casa Kraft Interior and Renovations. Our portfolio interior design services for premium residences, including townhouses in Dubai Hills and the exclusive Dubai Hills Estate townhouse communities. This Townhouse Dubai Hills  project showcases our expertise in townhouse full interior design. Every home is shaped through bespoke interiors, refined layouts and curated finishes that enhance everyday living. Our approach to luxury modern townhouse design focuses on clean lines, open spaces and timeless materials creating a truly modern townhouse environment",
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECOND SECTION (2 more paras) ===== */}
          <SectionHeader
            as="h2"
            title="Interior Design Company in Dubai Hills"
            text={[
              "As specialists in contemporary townhouse interior design, we create beautiful townhouse interior designs that reflect a refined lifestyle. From concept to execution , Casa kraft interiors deliver high quality tailored interior design and fitout in Dubai Hills, ensuring seamless results with attention to every detail. Our work also extends to Dubai Hills Estate Apartment interiors, maintaining the same level of quality and craftsmanship. ",
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
