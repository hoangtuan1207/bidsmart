"use client";
import Image from "next/image";

export default function GlobalReach({
  onOpenPopup,
}: {
  onOpenPopup: () => void;
}) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/3 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Global Presence
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            A global network, seamless service.
          </p>
          <button
            onClick={onOpenPopup}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Get Started
          </button>
        </div>

        {/* Right: Map Image */}
        <div className="w-full md:w-2/3 relative aspect-[2/1] group">
          <Image
            src="/images/map.png"
            alt="Global Reach Map"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
    </section>
  );
}