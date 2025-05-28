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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg relative px-6 py-8 sm:px-10 sm:py-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={24} />
        </button>

        {/* Form Title */}
        {/* <h2 className="text-center text-2xl font-bold mb-6">Work with us</h2> */}

        {/* Contact Form */}
        <ContactForm onClose={onClose}/>
      </div>
    </div>
  );
}