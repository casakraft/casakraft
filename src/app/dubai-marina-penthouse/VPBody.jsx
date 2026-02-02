"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/dmp-1.png", alt: "Large 1" },
  { src: "/images/dmp-2.png", alt: "Small 1" },
  { src: "/images/dmp-3.png", alt: "Small 2" },
  { src: "/images/dmp-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/dmp-5.png", alt: "Large 2" },
  { src: "/images/dmp-6.png", alt: "Small 4" },
  { src: "/images/dmp-7.png", alt: "Small 5" },
  { src: "/images/dmp-10.png", alt: "Small 6" },
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
          title="Dubai Marina Penthouse Interior Design"
          text={[
            "The Penthouses in Dubai Marina offer a setting where luxury and modern living come together, and our design approach reflects that harmony. Casa Kraft Interiors and Decoration provides best Penthouse Interior Design Services in Dubai creating spaces that feel bespoke, timeless and exclusively crafted. Each project is shaped through bespoke residential interior design ensuring every detail aligns with your lifestyle. Casa kraft interiors crafted  Dubai Penthouse Apartment  with a focus on comfort,luxury and visual elegance. Soft tones, balanced materials and thoughtful planning enhance the comfort of living in a Luxury Penthouse at Dubai Marina.",
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECOND SECTION (2 more paras) ===== */}
          <SectionHeader
            as="h2"
            title="Penthouse Interior & Renovation in Dubai Marina"
            text={[
              "Casa kraft interiors experts create  designs that emphasize modern penthouse design and bespoke design incorporating premium finishes, customized furniture and thoughtful layouts. The result is a luxurious and functional penthouse that reflects  premium quality , luxury and comfort throughout. Recognized as the best Interior Design Company in Dubai Marina, Casa Kraft Interiors delivers complete design and fitout solutions. Explore the elegance of Dubai Marina Penthouse. Luxury Views & Exclusive living and experience the standard set by the creators of the Top Luxury Penthouses in Dubai Marina.",
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
