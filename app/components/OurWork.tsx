"use client";
import { useEffect, useRef, useState, forwardRef } from "react";
import VideoSlider from "./VideoSlider";

interface Props {
  content: Record<string, any>;
}

const OurWorkVideo = forwardRef<HTMLElement, Props>(({ content }, ref) => {
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
    <section ref={ref} className="pt-10 px-4 bg-white text-center">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 font-mono">
        {content?.our_service_title ?? "Advertising Format"}
      </h2>
      <div className="mt-5">
        <VideoSlider />
      </div>
    </section>
  );
});

OurWorkVideo.displayName = "OurWorkVideo";
export default OurWorkVideo;