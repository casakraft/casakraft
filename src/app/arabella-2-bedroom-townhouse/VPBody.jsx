"use client";

import Image from "next/image";

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

export default function VPBody() {
  const blocks = toBlocks(galleryImages, 6);

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

  // Section heading + paragraph (reused)
  const HeadingAndText = () => (
    <>
      <div className="border-t border-b border-[#d1a155]/60 pt-6 pb-6 sm:pt-8 sm:pb-8">
        <h1 className="text-center text-[#d7b46a] font-semibold leading-tight text-3xl sm:text-4xl lg:text-[40px]">
          Palace Interior Design in UAE
        </h1>
      </div>
      <div className="mt-6 sm:mt-8 text-white/90">
        <p className="mx-auto max-w-[1000px] text-[13.5px] sm:text-[15px] leading-7 sm:leading-8">
          At Spazio Interiors and Architecture, royal palace interior design is one of our
          core specialties. As a renowned luxury interior design company in Dubai, we take
          pride in crafting regal residences for elite clients across the UAE. Every project
          we undertake is a reflection of timeless sophistication, tradition, and exceptional
          artistry.
        </p>
      </div>
    </>
  );

  return (
    <section className="bg-[#332e2a] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {/* ===== FIRST SECTION ===== */}
        <HeadingAndText />

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

        {/* ===== SECOND SECTION (repeats) ===== */}
        <div className="mt-16 sm:mt-20">
          <HeadingAndText />
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
