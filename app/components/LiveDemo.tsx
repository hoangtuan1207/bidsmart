"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function FloatingAdVideo() {
  const videoRef = useRef<HTMLVideoElement>(
    null
  ) as React.RefObject<HTMLVideoElement>;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFloating, setFloating] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [visible, setVisible] = useState(true);

  // Countdown timer
  useEffect(() => {
    if (!visible) return;
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
  }, [visible]);

  // Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFloating(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main position in flow */}
      <div ref={containerRef} className="w-full max-w-3xl mx-auto">
        {/* <VideoBox
          videoRef={videoRef}
          showSkip={showSkip}
          timeLeft={timeLeft}
          onSkip={() => setVisible(false)}
        /> */}
        <VideoBox
          videoRef={videoRef}
          showSkip={showSkip}
          timeLeft={timeLeft}
          onSkip={() => setVisible(false)}
        />
      </div>

      {/* Floating minimized version */}
      {isFloating && (
        <div
          className={clsx(
            "fixed bottom-4 right-4 w-72 z-50 shadow-lg rounded overflow-hidden transition-all duration-300",
            isFloating
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          <VideoBox
            videoRef={videoRef}
            showSkip={showSkip}
            timeLeft={timeLeft}
            onSkip={() => setVisible(false)}
          />
        </div>
      )}
    </>
  );
}

function VideoBox({
  videoRef,
  showSkip,
  timeLeft,
  onSkip,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  showSkip: boolean;
  timeLeft: number;
  onSkip: () => void;
}) {
  return (
    <div className="relative bg-black">
      {/* Close */}
      <button
        onClick={onSkip}
        className="absolute top-1 left-1 bg-black text-white text-xs px-1 rounded"
      >
        ×
      </button>

      <video
        ref={videoRef}
        src="/videos/ad-video.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-auto"
      />

      {/* Bottom bar */}
      <div className="flex justify-between items-center text-white text-xs bg-black px-2 py-1">
        <span className="text-gray-400">Ad • {timeLeft}s</span>
        {showSkip && (
          <button
            className="bg-white text-black font-bold text-xs px-2 py-1 rounded"
            onClick={onSkip}
          >
            Skip Ad ▶
          </button>
        )}
      </div>
    </div>
  );
}
