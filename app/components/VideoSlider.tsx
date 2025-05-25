"use client";

import { useState } from "react";

const videos = ["/videos/quick-video.MP4", "/videos/instream-video.MP4"];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, videos.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
      {/* Left Mini Video */}
      <div className="w-[160px] opacity-40">
        {currentIndex > 0 && (
          <>
            <video
              src={videos[currentIndex - 1]}
              muted
              controls
              preload="metadata"
              className="rounded-lg border shadow w-full h-[90px] object-cover"
            />
            <button
              onClick={handlePrev}
              className="w-full mt-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
            >
              ◀ Previous
            </button>
          </>
        )}
      </div>

      {/* Main Video */}
      <div className="w-full max-w-[640px]">
        {/* <video
          key={videos[currentIndex]}
          src={videos[currentIndex]}
          muted
          controls
          preload="metadata"
          className="rounded-2xl shadow-lg w-full"
        /> */}
        <div className="w-full max-w-[640px] aspect-video bg-black rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
          <div className="w-full max-w-[640px] aspect-video rounded-2xl shadow-lg bg-[#535353] p-2">
            <video
              key={videos[currentIndex]}
              src={videos[currentIndex]}
              muted
              controls
              autoPlay
              preload="metadata"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Right Mini Video */}
      <div className="w-[160px] opacity-40">
        {currentIndex < videos.length - 1 && (
          <>
            <video
              src={videos[currentIndex + 1]}
              muted
              controls
              preload="metadata"
              className="rounded-lg border shadow w-full h-[90px] object-cover"
            />
            <button
              onClick={handleNext}
              className="w-full mt-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
            >
              Next ▶
            </button>
          </>
        )}
      </div>
    </div>
  );
}
