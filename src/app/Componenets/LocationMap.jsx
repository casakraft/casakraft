"use client";

import React from "react";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";

const LocationMap = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#111] leading-snug">
              Any questions? <br />
              <span className="font-semibold">We will call you back!</span>
            </h2>
            <p className="text-gray-600 mt-3">
              Enter your contact details and our manager will contact you.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Name */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 py-3 pl-4 pr-10 focus:outline-none focus:border-[#193c38]"
                />
                <FiUser className="absolute right-3 top-3.5 text-gray-400" />
              </div>

              {/* Phone */}
              <div className="relative flex-1">
                <input
                  type="tel"
                  placeholder="+971"
                  className="w-full border border-gray-300 py-3 pl-4 pr-10 focus:outline-none focus:border-[#193c38]"
                />
                <FiPhone className="absolute right-3 top-3.5 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 py-3 pl-4 pr-10 focus:outline-none focus:border-[#193c38]"
                />
                <FiMail className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 py-3 px-4 focus:outline-none focus:border-[#193c38]"
            ></textarea>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row items-center gap-2">
              <button
                type="submit"
                className="bg-[#b47b50] text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#a06e47] transition-all"
              >
                Submit →
              </button>
              <p className="text-xs text-gray-600">
                By clicking the “Submit” button, you agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="underline text-[#b47b50] hover:text-[#193c38]"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
