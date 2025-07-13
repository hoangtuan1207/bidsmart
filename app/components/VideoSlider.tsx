"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const videos = [
  { src: "/videos/ads-1.MP4", title: "🚀 Ads" },
  { src: "/videos/native-ads.MP4", title: "📰 Native Ads" },
  { src: "/videos/banner.MP4", title: "📊 Banner" },
  { src: "/videos/video.MP4", title: "🎥 Video" },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const DEFAULT_SPEED = 0.5;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // 👇 Cập nhật playbackRate mỗi lần video change
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = DEFAULT_SPEED;
      }
    }, 50); // đợi 1 chút để đảm bảo video mounted

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4">
      {/* Title */}
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block px-5 py-2 rounded-full text-white font-semibold text-lg tracking-wide shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 font-mono text-center"
      >
        {videos[currentIndex].title}
      </motion.span>

      {/* Video section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
        {/* Thumbnail trái (ẩn trên mobile) */}
        <div className="hidden lg:block w-[160px] opacity-50">
          <video
            src={videos[(currentIndex - 1 + videos.length) % videos.length].src}
            muted
            controls
            preload="metadata"
            className="rounded-lg border border-gray-700 shadow w-full h-[90px] object-cover bg-[#1c1f26]"
          />
          <button
            onClick={handlePrev}
            className="w-full mt-2 text-sm bg-[#2c3a4a] hover:bg-blue-600 text-white px-3 py-1 rounded transition"
          >
            ◀ Previous
          </button>
        </div>

        {/* Video chính */}
        <div className="w-full max-w-[640px]">
          <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
            <div className="w-full aspect-video rounded-2xl shadow-lg bg-[#1c1f26] p-2">
              <video
                ref={videoRef}
                src={videos[currentIndex].src}
                muted
                controls
                autoPlay
                preload="metadata"
                onEnded={handleNext}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Mobile buttons: chỉ hiện trên mobile */}
          <div className="mt-4 flex justify-between gap-4 lg:hidden">
            <button
              onClick={handlePrev}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              ◀ Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              Next ▶
            </button>
          </div>
        </div>

        {/* Thumbnail phải (ẩn trên mobile) */}
        <div className="hidden lg:block w-[160px] opacity-50">
          <video
            src={videos[(currentIndex + 1) % videos.length].src}
            muted
            controls
            preload="metadata"
            className="rounded-lg border border-gray-700 shadow w-full h-[90px] object-cover bg-[#1c1f26]"
          />
          <button
            onClick={handleNext}
            className="w-full mt-2 text-sm bg-[#2c3a4a] hover:bg-blue-600 text-white px-3 py-1 rounded transition"
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
}
