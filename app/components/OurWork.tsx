// components/OurWork.tsx
"use client";
import { useEffect, useRef, useState, forwardRef } from "react";

const OurWorkVideo = forwardRef<HTMLElement>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          videoRef.current?.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasPlayed]);

  return (
    <section ref={ref} className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Work</h2>
      <div className="mt-4 mb-10">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          onClick={() => window.open("/live-demo", "_blank")}
        >
          Live Demo
        </button>
      </div>
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <video
          ref={videoRef}
          controls
          muted
          preload="metadata"
          className="w-full rounded-2xl shadow-lg"
        >
          <source src="/videos/video-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
});

OurWorkVideo.displayName = "OurWorkVideo";
export default OurWorkVideo;