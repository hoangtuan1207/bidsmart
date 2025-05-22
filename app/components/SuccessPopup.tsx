"use client";
import { X } from "lucide-react";

export default function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-4">🎉 Submitted successfully!</h2>
        <p className="text-gray-700">
          Thank you for your interest! <br /> We will get in touch with you as soon as possible.
        </p>
      </div>
    </div>
  );
}