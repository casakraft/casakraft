"use client";

import React from "react";

const SERVICES = [
  "AMC",
  "Air Conditioning Installation",
  "Bathroom Renovation",
  "Door & Windows",
  "Flooring",
  "Full Home Renovations",
  "Kitchen Renovation",
  "Landscaping",
  "Office Renovation",
  "Painting",
  "Swimming Pool",
  "Villa Extension/Modification",
  "Wardrobes & Cabinets",
  "Other",
];

const LocationMap = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 px-4 md:px-12 lg:px-20 py-10">
        {/* Left: FORM (restyled to match screenshot) */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[28px] bg-[#193c38] text-white p-6 sm:p-8 md:p-10">
            {/* Heading */}
            <h2 className="text-[16px] leading-tight sm:text-[24px] font-semibold tracking-relaxed uppercase">
              COMITTED TO SUPERIOR QUALITY & RESULTS.
            </h2>

            <p className="mt-6 text-md sm:text-xl font-medium opacity-90">
              We’d love to meet you in person…
            </p>

            {/* Form */}
            <form className="mt-8 space-y-5">
              {/* Row 1: Name / Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              {/* Row 2: Email / Mobile No */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="tel"
                  placeholder="Mobile No"
                  className="h-12 sm:h-14 rounded-full w-full px-5 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              {/* Row 3: Services dropdown */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="h-12 sm:h-14 rounded-full w-full pl-5 pr-12 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/40 appearance-none"
                >
                  <option value="" disabled>
                    Service Required
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                {/* caret icon */}
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
                  ▾
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="h-12 sm:h-14 rounded-full px-10 w-full sm:w-auto border-2 border-white/70 text-white font-medium hover:bg-white/10 transition"
                >
                  Submit
                </button>
              </div>
            </form>

       {/* Phone block */}
            <div className="mt-8 sm:mt-10">
              <p className="text-md sm:text-xl opacity-90">
                  For more info call:
              </p>
            <a
             href="tel:+971586023677"
              className="block text-2xl sm:text-3xl font-extrabold tracking-tight hover:underline underline-offset-4 transition-all"
            >
              +971 58 602 3677
            </a>
            </div>

          </div>
        </div>

        {/* Right: MAP (unchanged) */}
        <div className="w-full lg:w-1/2 h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden rounded-xl">
          <iframe
            title="CASAKRAFT Interiors Group Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.2002713732945!2d55.23272307503743!3d25.162714677733145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69654cc65c17%3A0xe62e0a896de9fa54!2sCasa%20Kraft!5e0!3m2!1sen!2sae!4v1760860253004!5m2!1sen!2sae"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
