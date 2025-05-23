"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function FloatingAdVideo({ onClose }: { onClose: () => void }) {
  const [showSkip, setShowSkip] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isFloating, setIsFloating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowSkip(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFloating(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative bg-black rounded-xl overflow-hidden w-[640px] mx-auto"
      >
        <video
          ref={videoRef}
          controls
          className="w-full rounded-2xl shadow-lg"
          preload="metadata"
          muted
          loop
          autoPlay
        >
          <source src="/videos/video-main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
