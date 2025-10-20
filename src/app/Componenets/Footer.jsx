"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#193c38] text-white text-sm font-light">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Menu</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "About us",
                "Construction",
                "News",
                "Media",
                "Contact us",
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
                "Accessibility Statement",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Design */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Interior Design</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Villa Interior Design",
                "Apartment Interior Design",
                "Exterior Design",
                "Hotel Design",
                "Retail Interior & Fit-out",
                "Villa Renovation",
                "Beauty Salon",
                "Office interior Design",
                "Clinic interior Design",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fit-Out */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Fit-Out</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Vill Fit-Out",
                "Apartment Fit-Out",
                "Office Fit-Out",
                "Retail Fit-Out",
                "MEP Consultants",
                "Barbecue Design",
                "Outdoor Seating Design",
                "Marble Fixing",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Furniture</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Home Furniture",
                "Outdoor Furniture",
                "Dressing Room",
                "Office",
                "Children’s Room",
                "Bathroom",
                "Living Room",
                "Kitchen",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Landscape */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Landscape</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Landscape Design",
                "Gardening",
                "Swimming Pools",
                "Swimming Pools Designs",
                "Swimming Pool Construction",
                "Infinity Pools",
                "Plunge Pools",
                "Pools Design Gallery",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Villa Interior Design Dubai",
                "Top Quality Fit-out Service",
                "Apartment Interior Design",
                "Furniture, Light, Accessories",
                "Landscape Design Dubai",
                "Exterior Design",
                "Hotel Interior Design",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <Image
            src="/images/logo.svg"
            alt="CasaKraft Logo"
            width={50}
            height={60}
            
          />
          <p className="text-gray-400 text-sm">
            © 2002–{new Date().getFullYear()} Antonovich Group – Interior Design & Fit-Out & Build | All rights reserved
          </p>

          <div className="flex items-center gap-4 text-lg text-gray-300">
          
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaPinterest />
            </a>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
