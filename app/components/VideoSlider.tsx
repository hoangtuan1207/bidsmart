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
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-block px-5 py-2 rounded-full text-white font-semibold text-lg tracking-wide shadow-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 font-mono"
      >
        {videos[currentIndex].title}
      </motion.span>

      <div className="flex items-center justify-center gap-6">
        <div className="w-[160px] opacity-40">
          {videos.length > 1 && (
            <>
              <video
                src={
                  videos[(currentIndex - 1 + videos.length) % videos.length].src
                }
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

        <div className="w-full max-w-[640px]">
          <div className="w-full max-w-[640px] aspect-video bg-black rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-[640px] aspect-video rounded-2xl shadow-lg bg-[#535353] p-2">
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
        </div>

        <div className="w-[160px] opacity-40">
          {videos.length > 1 && (
            <>
              <video
                src={videos[(currentIndex + 1) % videos.length].src}
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
    </div>
  );
}