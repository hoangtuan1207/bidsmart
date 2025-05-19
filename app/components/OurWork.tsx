"use client";
import React, { useEffect, useRef } from "react";

export default function OurWorkVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((e) => {
            // Browsers may block autoplay without user interaction
            console.warn("Autoplay blocked:", e.message);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6, // 60% visible mới play
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-10 px-4 md:px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Work</h2>
      <p className="text-gray-500 text-lg mb-10">A glimpse of our portfolio</p>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              controls
              loop
              muted // cần thiết để autoplay không bị block
              playsInline // hỗ trợ autoplay trong mobile Safari
              className="w-full h-full object-cover"
              poster="/images/placeholder.jpg"
            >
              <source src="/videos/video-main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}