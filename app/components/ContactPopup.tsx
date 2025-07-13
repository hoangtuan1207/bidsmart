"use client";

import { X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-[#022854] w-full max-w-2xl rounded-2xl shadow-2xl relative px-6 py-8 sm:px-10 sm:py-10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* Form Title (tuỳ chọn) */}
        {/* <h2 className="text-center text-2xl font-bold mb-6 text-white">Work with us</h2> */}

        {/* Contact Form */}
        <ContactForm onClose={onClose} />
      </div>
    </div>
  );
}
