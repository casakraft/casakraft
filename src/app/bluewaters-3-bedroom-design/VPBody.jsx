"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/bluewaters-1.png", alt: "Large 1" },
  { src: "/images/bluewaters-2.png", alt: "Small 1" },
  { src: "/images/bluewaters-3.png", alt: "Small 2" },
  { src: "/images/bluewaters-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/bluewaters-5.png", alt: "Large 2" },
  { src: "/images/bluewaters-6.png", alt: "Small 4" },
  { src: "/images/bluewaters-7.png", alt: "Small 5" },
  { src: "/images/bluewaters-8.png", alt: "Small 6" },
];

// Group into blocks of 4
const toBlocks = (arr, n = 4) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

// Reusable Header
function SectionHeader({ as = "h2", title, text }) {
  const Tag = as;
  const isH1 = Tag === "h1";

  const size = isH1
    ? "text-3xl sm:text-4xl lg:text-[40px]"
    : "text-2xl sm:text-3xl lg:text-[32px]";

  const paragraphs = Array.isArray(text) ? text : [text];

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
        <div className="mt-6 sm:mt-8 text-white/90 space-y-5">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="mx-auto max-w-[1000px] text-[13.5px] sm:text-[15px] leading-7 sm:leading-8"
            >
              {p}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

// Image component
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

// Large + 3 small layout
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
  const blocks = toBlocks(galleryImages, 4);

  return (
    <section className="bg-[#332e2a] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        {/* ===== SECTION 1 (2 paragraphs) ===== */}
        <SectionHeader
          as="h1"
          title="BLUEWATERS 3-BEDROOM APARTMENT DESIGN : ELEVATING WATERFRONT LIVING"
          text={[
            "At Casa kraft Interiors, our Bluewaters 3 Bedroom Design shows a pure blend of comfort, functionality, and modern Dubai living. Situated on the vibrant Bluewaters Island, this project reflects how thoughtfully designed interiors can change a space into a comfort, elegant, and truly livable home. Each element of this Bluewaters 3-Bedroom Apartment Interior Design in Dubai is created to complement the island’s warm waterfront atmosphere while balancing a sophisticated modern style.",
            "Casa kraft Interiors is a leading residential interior design company in Dubai, our experience in fit-out projects in Dubai and our interior decorators focused on designing smooth layouts, and an equal mix of textures and finishes. Warm tones, high-end materials, bespoke design and seamless flow from one bedroom to another"
          ]}
        />

        {/* ===== BLOCK 1 (large + 3 small) ===== */}
        <div className="mt-8 sm:mt-10 space-y-10">
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECTION 2 (2 paragraphs) ===== */}
          <SectionHeader
            as="h2"
            title="Bluewaters Luxury Interior Layout"
            text={[
              "Casa kraft’s strong portfolio across Dubai luxury apartments creates trust for clients seeking for reliable, detail-oriented design expertise. Clients frequently ask whether we provide complete fit-out services for Bluewaters apartments, yes, our professionals handle everything from idea creation to final execution, making sure a flawless experience with premium quality.",
              "This Bluewaters work shows why Casa kraft Interiors stands out as one of the best residential interior design companies in Dubai, each space is created with purpose, comfort, and long-lasting sophistication. If you’re dreaming of upgrading or redesigning your Bluewaters home. Contact Casa kraft Interiors to enhance your Bluewaters 3-bedroom apartment into a luxurious waterfront home"
            ]}
          />

          {/* ===== BLOCK 2 (large + 3 small) ===== */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
