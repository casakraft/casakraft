"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// ========================
// NavLink Component
// ========================
const NavLink = ({ href, title }) => (
  <Link
    href={href}
    // 🔹 HOVER COLOR FOR NAV LINKS (change here)
    className="block py-0 text-white text-sm rounded md:p-0 hover:text-[#193c38] transition-colors duration-300"
  >
    {title}
  </Link>
);

// ========================
// MenuOverlay Component
// ========================
const MenuOverlay = ({ links, children }) => (
  <div>
    <ul className="flex flex-col py-4 items-center space-y-6 text-white text-xl">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
    <div className="flex justify-center items-center py-4">{children}</div>
  </div>
);

// ========================
// Navbar Component
// ========================
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/services" },
    { title: "Gallery", path: "/#gallery" },
    { title: "Our Blogs", path: "/blogs" },
    { title: "Client Reviews", path: "/#testimonials" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/",
      // 🔹 HOVER COLOR FOR INSTAGRAM ICON
      hoverColor: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/",
      // 🔹 HOVER COLOR FOR LINKEDIN ICON
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaPinterest />,
      href: "https://www.pinterest.com/",
      // 🔹 HOVER COLOR FOR PINTEREST ICON
      hoverColor: "hover:text-red-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || navbarOpen
          ? "bg-black/40 shadow-md"
          : "bg-black/40 shadow-md"
      }`}
    >
      {/* Header Section */}
      <div className="text-white px-4 md:px-10">
        {/* === Desktop Header === */}
        <div className="hidden md:flex flex-col py-2 space-y-2">
          {/* Line 1: Logo (left) + Contact (center) */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Casa Kraft Logo"
                  width={200}
                  height={40}
                  className="w-20 lg:w-24"
                />
              </Link>
            </div>

            {/* Phone & Email Centered */}
            <div className="flex-1 flex justify-center text-sm">
              <div className="flex items-center space-x-6">
                {/* Phone */}
                <span className="flex items-center space-x-1 hover:text-[#193c38]">
                  {/* 🔹 HOVER COLOR FOR PHONE */}
                  <FaPhoneAlt className="text-xs" />
                  <a href="tel:+971586023676">+971 58 602 3676</a>
                </span>

                {/* Email */}
                <span className="flex items-center space-x-1 hover:text-[#97c38d]">
                  {/* 🔹 HOVER COLOR FOR EMAIL */}
                  <MdEmail className="text-xs" />
                  <a href="mailto:info@kasacraftinteriors.ae">
                    info@kasacraftinteriors.ae
                  </a>
                </span>
              </div>
            </div>

            {/* Empty right spacer for balance */}
            <div className="flex-1"></div>
          </div>

          {/* Line 2: Nav Links (right) + Social Icons (right) */}
          <div className="flex items-center justify-end mt-2 space-x-6">
            {/* Nav Links */}
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <div key={index} className="pb-1">
                  <NavLink href={link.path} title={link.title} />
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // 🔹 HOVER COLOR FOR EACH SOCIAL ICON (from above)
                  className={`${social.hoverColor} transition-colors`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* === Mobile Header === */}
        <div className="md:hidden flex items-center justify-between py-2">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Casa Kraft Logo"
              width={180}
              height={40}
              className="w-14"
            />
          </Link>

          {/* Hamburger Right */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white"
          >
            {!navbarOpen ? (
              <Image
                src="/images/bars.svg"
                alt="Menu Bars"
                width={80}
                height={10}
                className="w-8 h-6"
              />
            ) : (
              <IoMdCloseCircleOutline className="text-4xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks}>
          <div className="mt-6 flex justify-center space-x-5 text-white">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                // 🔹 MOBILE HOVER COLOR FOR SOCIAL ICONS
                className={`${social.hoverColor} transition-colors text-sm`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </MenuOverlay>
      )}
    </nav>
  );
};

export default Navbar;
