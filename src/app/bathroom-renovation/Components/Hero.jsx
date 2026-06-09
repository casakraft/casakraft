"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        subject: "Bathroom Renovation Dubai Enquiry",
        message: formData.description,
      };

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("Message sent successfully.");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-auto md:h-[500px] lg:h-[550px] overflow-hidden">
      <Image
        src="/images/villa-design-dubai.png"
        alt="Bathroom Renovation Dubai"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full absolute inset-0"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mt-10 z-20 flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 md:px-10 lg:px-20 py-10 gap-8">
        <div className="text-white/80 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Bathroom Renovation Dubai
          </h1>

          <p className="text-xs md:text-sm font-play mt-4 mb-6 opacity-90">
            Upgrade your bathroom with luxury finishes, modern fixtures, and
            smart space planning. Casa Kraft creates elegant, functional, and
            customized bathroom spaces tailored to your lifestyle in Dubai.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#193c38] text-white/80 px-5 py-3 text-xs md:text-sm font-semibold uppercase rounded-full hover:bg-white hover:text-black transition"
          >
            Request a Call Back →
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mt-10 bg-white shadow-2xl p-3 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
              />
            </div>

            <div>
              <label className="text-[10px] font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
              />
            </div>

            <div>
              <label className="text-[10px] font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
              />
            </div>

            <div>
              <label className="text-[10px] font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
              />
            </div>
          </div>

          <div className="mt-2">
            <label className="text-[10px] font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              placeholder="Write your message..."
              className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-3 bg-[#1f4a45] hover:bg-[#275f58] text-white/80 py-2 rounded-md font-semibold text-xs transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Get Started"}
          </button>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Hero;