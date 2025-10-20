"use client";
import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Ensure previous instances are cleared
    widgetRef.current.innerHTML = "";

    // Create the Trustindex element manually
    const widgetDiv = document.createElement("div");
    widgetDiv.setAttribute("data-trustindex", "");
    widgetDiv.setAttribute("data-widget-id", "b58e6e556e65456e41560224939");
    widgetRef.current.appendChild(widgetDiv);

    // Load the script AFTER the element is rendered
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?b58e6e556e65456e41560224939";
    script.async = true;
    script.defer = true;
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-[#193c38] py-20 text-white text-center"
    >
      <h2 className="font-conthrax text-xl sm:text-2xl tracking-widest mb-10">
        OUR CLIENT REVIEWS
      </h2>

      {/* This div is the mount point for the widget */}
      <div ref={widgetRef} className="max-w-5xl mx-auto" />
    </section>
  );
};

export default Testimonials;
