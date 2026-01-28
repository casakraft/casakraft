"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  // --- 1st block (1 large + 3 small) ---
  { src: "/images/acacia-1.png", alt: "Large 1" },
  { src: "/images/acacia-2.png", alt: "Small 1" },
  { src: "/images/acacia-3.png", alt: "Small 2" },
  { src: "/images/acacia-4.png", alt: "Small 3" },

  // --- 2nd block (1 large + 3 small) ---
  { src: "/images/acacia-5.png", alt: "Large 2" },
  { src: "/images/acacia-6.png", alt: "Small 4" },
  { src: "/images/acacia-7.png", alt: "Small 5" },
  { src: "/images/acacia-8.png", alt: "Small 6" },
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
  const size = isH1
    ? "text-3xl sm:text-4xl lg:text-[40px]"
    : "text-2xl sm:text-3xl lg:text-[32px]";

  const paragraphs = !text ? [] : Array.isArray(text) ? text : [text];

  return (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <Tag className={`text-center text-[#d7b46a] font-semibold leading-tight ${size}`}>
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
          title="Acacia 3 Bedroom Apartment Design Dubai"
          text={[
            "The Acacia 3 Bedroom Apartment is fashioned as an elegant retreat that reflects the signature style of Casa Kraft Interiors and Decoration. Every space is carefully planned and attentively balances comfort, sophistication and sense of calm that make any individual instantly feel at home. The design is focused on harmony, balance and refined luxury apartment interiors in Dubai.",
            "With expert master bedroom interiors design in Bluewaters Dubai, Casa kraft interiors deliver spaces that are luxurious yet practical, reflecting the client’s taste and lifestyle. Each room is planned to be comforting without necessarily sacrificing beautiful appeal."
          ]}
        />

        <div className="mt-8 sm:mt-10 space-y-10">
          {/* First gallery block: 1 large + 3 small */}
          {blocks[0] && <GalleryBlock block={blocks[0]} />}

          {/* ===== SECOND SECTION (2 more paras) ===== */}
          <SectionHeader
            as="h2"
            title="Elegant Living Spaces in Acacia Dubai Hills"
            text={[
              "Casa Kraft Interiors and Decoration works across modern, contemporary, classic and timeless styles. This flexibility is reflected in the Acacia 3 Bedroom Apartment, where luxury and elegant contrasts come together to create a polished welcoming environment.",

              "As one of the top interior design companies in Dubai, we provide bespoke interior design and fit-out services that cover every minute detail, from the material selection to bespoke joinery. The Acacia 3 Bedroom Apartment stands as a strong example of Dubai apartment interior design fusing style and function in a seamless way. Contact Casa kraft Interiors to enhance your Dubai residence right now and change your Acacia 3-bedroom apartment into a luxurious and modern haven."
            ]}
          />

          {/* Second gallery block: 1 large + 3 small */}
          {blocks[1] && <GalleryBlock block={blocks[1]} />}
        </div>
      </div>
    </section>
  );
}
