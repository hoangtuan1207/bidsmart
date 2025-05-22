"use client";
import { useRef, useEffect, useState } from "react";

export default function OurWorkVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          videoRef.current?.play();
          setHasPlayed(true); // chỉ play 1 lần
        }
      },
      {
        threshold: 0.5, // 50% video visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasPlayed]);

  return (
    <section className="py-20 px-4 bg-white text-center" ref={containerRef}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Our Work
      </h2>

      {/* Live Demo button */}
      <div className="mt-4 mb-10">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          onClick={() => window.open("/live-demo", "_blank")}
        >
          Live Demo
        </button>
      </div>

      {/* Video section */}
      <div className="max-w-4xl mx-auto">
        <video
          ref={videoRef}
          controls
          className="w-full rounded-2xl shadow-lg"
          preload="metadata"
          muted // 👉 quan trọng để video có thể autoplay trên hầu hết browser
        >
          <source src="/videos/video-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
