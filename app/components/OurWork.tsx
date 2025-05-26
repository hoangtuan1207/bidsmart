"use client";
import { useEffect, useRef, useState, forwardRef } from "react";
import VideoSlider from "./VideoSlider";

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
    <section ref={ref} className="py-16 px-4 bg-white text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 font-mono">
        Our Work
      </h2>

      <div className="mt-3">
        <span className="inline-block px-5 py-2 rounded-full text-white font-semibold text-lg tracking-wide shadow-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 animate-glow font-mono">
          🚀 BS Video
        </span>
      </div>

      <div className="mt-10">
        <VideoSlider />
      </div>
    </section>
  );
});

OurWorkVideo.displayName = "OurWorkVideo";
export default OurWorkVideo;
