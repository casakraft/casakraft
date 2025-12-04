'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const ApId = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#ffffff] px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-10 font-sans">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2">
              Luxury modern villa interior design services in Dubai
            </h2>
              <p className="text-sm sm:text-base leading-7 mb-4">
              Are you looking for
              <a href="https://casakraftinteriors.ae/"
              className="text-green-600 hover:text-blue-800 ml-1">
              premium villa interior design services in Dubai </a>
              that reflect ease of living and a luxury lifestyle. You are on right spot.
              <br></br>From the founders having 15+ years of experience transforming living spaces into premium livings especially villas in Dubai's most high end communities, 
              <a href="https://casakraftinteriors.ae/"
              className="text-green-600 hover:text-blue-800 ml-1">
              Casa Kraft Interiors & Decoration, </a>crafts creative originality and upscale your villa from vision to a living reality.<br></br>
              Our vision showcase contemporary and modern luxury with functional living to create specific spaces that feel you exclusive, polished and personal.
              Keep reading to unfold that <a href="https://casakraftinteriors.ae/"
              className="text-green-600 hover:text-blue-800 ml-1">
              Casa Kraft Interiors & Decoration, </a> how to craft your Dubai villa into a living reality from your visions and exclusively designed for your personalized lifestyle.

            </p>

            <div className="bg-[#193c38] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
              15 Years of Experience
            </div>
          </div>

          {/* Video Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
            <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest">
              Get Best Villa Interior Design and Fit Out in Dubai
            </h2>

            {/* Video */}
            {!videoLoaded ? (
              <div
                className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#193c38]"
                onClick={() => setVideoLoaded(true)}
              >
                <Image
                  src="/images/villa-design-dubai.png"
                  alt="Watch our company video"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                    <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video border-4 border-[#193c38] rounded-lg overflow-hidden">
                {/* ⭐ FIXED YOUTUBE SHORTS EMBED */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/b8e3sMux9Jk?autoplay=1&rel=0&modestbranding=1&controls=1"
                  title="YouTube Shorts Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* CTA */}
            <Link
              href="/contact-us"
              className="border border-[#193c38] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#193c38] hover:text-white transition-all duration-200"
            >
              GET YOUR QUOTE
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ApId;
