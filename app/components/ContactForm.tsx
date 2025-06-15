"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { motion } from "framer-motion";

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_5jpe53o",
        "template_nwck1yd",
        formRef.current,
        "MSFZ6yI9CrJtaZsWU"
      )
      .then(() => {
        alert(
          "Thank you for your interest. A member of our team will reach out to you shortly."
        );
        formRef.current?.reset();
        onClose();
      })
      .catch((error) => {
        console.error("Send failed:", error);
        alert("Unable to submit your request. Please try again later.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl w-full p-4 sm:p-6 space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        🚀 Work with us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="relative w-full">
          <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input-style pl-14"
            required
          />
        </div>

        {/* Email */}
        <div className="relative w-full">
          <HiOutlineEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500 text-[18px] pointer-events-none" />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input-style pl-14"
            required
          />
        </div>

        {/* Website */}
        <div className="relative w-full">
          <HiOutlineGlobeAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="website"
            placeholder="Website/App URL"
            className="input-style pl-14"
          />
        </div>

        {/* WhatsApp */}
        <div className="relative w-full">
          <FaWhatsapp className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp"
            className="input-style pl-14"
          />
        </div>

        {/* Country */}
        <div className="relative w-full">
          <HiOutlineMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="input-style pl-14"
          />
        </div>

        {/* Telegram */}
        <div className="relative w-full">
          <FaTelegramPlane className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="telegram"
            placeholder="Telegram No."
            className="input-style pl-14"
          />
        </div>

        {/* Page Views */}
        <div className="relative w-full sm:col-span-2">
          <HiOutlineChartBar className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500 text-[18px] pointer-events-none" />
          <input
            type="text"
            name="page_views"
            placeholder="Daily Page Views"
            className="input-style pl-14"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300 disabled:opacity-60"
      >
        {isLoading ? "Sending..." : "✨ Get Started"}
      </button>
    </motion.form>
  );
}
