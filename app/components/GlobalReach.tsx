// components/GlobalReach.tsx
"use client";

import { FC } from "react";

interface GlobalReachProps {
  onOpenPopup: () => void;
}

const GlobalReach: FC<GlobalReachProps> = ({ onOpenPopup }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We’d love to hear from you. Reach out to us directly:
          </p>

          <div className="space-y-2 text-gray-700">
            <p className="text-lg">
              <strong>Company:</strong> Bid Smart
            </p>
            <p className="text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@bidsmartca.com"
                className="text-blue-600 hover:underline"
              >
                info@bidsmartca.com
              </a>
            </p>
          </div>

          <button
            onClick={onOpenPopup}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Get Started
          </button>
        </div>

        {/* Right: Optional Illustration */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/bidsmart.png" // optional: change this path or remove this block if no image
            alt="Contact Illustration"
            className="max-w-sm w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;