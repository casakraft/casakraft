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
          title="Boulevard Point Penthouse Luxury Interior Design Dubai"
          text={[
            "This Boulevard Point Penthouse is a stunning example of modern luxury, designed by Casa Kraft Interiors and Renovations, a Luxury Interior Design Company in Boulevard Point Dubai. Casa kraft interiors's expert team delivers stunning and exceptional interior design services, creating beautiful and functional penthouses in Dubai that combine elegance, comfort and sophistication.",
            "As one of the leading penthouse interior designers in Dubai, we specialize in Interior Design Services in Dubai offering tailored solutions for every space. From modern penthouse design to top Penthouse interior design & fit-out company in Dubai, every detail is meticulously planned, balancing style, functionality and premium finishes."
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECTION 2: 2 paragraphs + 1 large + 3 small ===== */}
          <SectionHeader
            as="h2"
            title="Luxury Living Above the Boulevard Point Dubai"
            text={[
              "Casa kraft interiors work with clients to create stylish Dubai penthouse interiors using contemporary materials, bespoke furnishings and advanced design techniques. Recognized among the top 10 interior fit out companies in Dubai, our expertise covers interior fit out Dubai, interior decoration companies in Dubai, interior design firms in Dubai and interior decorators Dubai, ensuring every project is executed to perfection.",
              "Whether you are seeking modern interior Renovation, top penthouse interior design or collaborations with world famous interior designers. Casa Kraft Interiors delivers results that redefine luxury living. Our work represents the pinnacle of design, craftsmanship and elegance making your Boulevard Point Penthouse a signature residence in Dubai."
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}

