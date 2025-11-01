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

// Helper to group images into blocks of 6
const toBlocks = (arr, n = 6) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

// ✅ Fixed — pure JS SectionHeader component
function SectionHeader({ as = "h2", title, text }) {
  const Tag = as; // h1 or h2
  const isH1 = Tag === "h1";
  const size = isH1
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

const LargeImg = ({ src, alt }) => (
  <figure>
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      priority={false}
      className="w-full h-auto object-cover"
    />
  </figure>
);

const SmallImg = ({ src, alt }) => (
  <figure>
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className="w-full h-auto object-cover"
    />
  </figure>
);

export default function VPBody() {
  const blocks = toBlocks(galleryImages, 6);

  return (
    <section className="bg-[#332e2a] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* ===== FIRST SECTION: H1 + paragraph ===== */}
        <SectionHeader
          as="h1"
          title="Arabella 2 Bedroom Townhouse"
          text="Experience a contemporary blend of warmth and functionality designed for family living. Soft neutrals, layered textures, and clean lines define the character of this space."
        />

        {/* 1st gallery block */}
        <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
          {blocks[0] && (
            <div className="space-y-6 sm:space-y-8">
              <LargeImg {...blocks[0][0]} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <SmallImg {...blocks[0][1]} />
                <SmallImg {...blocks[0][2]} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <SmallImg {...blocks[0][3]} />
                <SmallImg {...blocks[0][4]} />
              </div>
              <LargeImg {...blocks[0][5]} />
            </div>
          )}
        </div>

        {/* ===== SECOND SECTION: H2 + paragraph ===== */}
        <div className="mt-16 sm:mt-20">
          <SectionHeader
            as="h2"
            title="Living & Dining — Mood and Materials"
            text="Natural wood, brushed metal, and warm lighting craft a calm, inviting atmosphere. Every detail is curated to balance durability with understated luxury."
          />

          <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
            {blocks[1] && (
              <div className="space-y-6 sm:space-y-8">
                <LargeImg {...blocks[1][0]} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <SmallImg {...blocks[1][1]} />
                  <SmallImg {...blocks[1][2]} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <SmallImg {...blocks[1][3]} />
                  <SmallImg {...blocks[1][4]} />
                </div>
                <LargeImg {...blocks[1][5]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
