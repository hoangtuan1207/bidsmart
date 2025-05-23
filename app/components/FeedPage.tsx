"use client";

import { useEffect, useRef, useState } from "react";
import AdVideoUI from "./AdVideoUI";
import FloatingAdVideo from "./LiveDemo";

export default function FeedPage() {
  const [timeLeft, setTimeLeft] = useState(5);
  const [showAdUI, setShowAdUI] = useState(true);
  const [showFloatingAd, setShowFloatingAd] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const adContainerRef = useRef<HTMLDivElement>(null);

  // Countdown logic
  useEffect(() => {
    if (!showAdUI) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showAdUI]);

  // Scroll detection
  useEffect(() => {
    if (!adContainerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFloating(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(adContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleAdClose = () => {
    setShowAdUI(false);
    setShowFloatingAd(true);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-7xl flex gap-6">
        {/* Main content */}
        <div className="hidden lg:block w-[320px] space-y-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow space-y-2">
              <div className="h-3 w-2/3 bg-gray-200 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          {/* Ad section */}
          {[...Array(1)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
          <div ref={adContainerRef} className="flex justify-center">
            {showAdUI ? (
              <div className="bg-white rounded-xl shadow w-[640px]">
                <AdVideoUI
                  videoRef={videoRef}
                  timeLeft={timeLeft}
                  showSkip={timeLeft <= 0}
                  onClose={handleAdClose}
                  videoSrc="/videos/mockup-video.mp4"
                />
              </div>
            ) : showFloatingAd ? (
              <div className="bg-white rounded-xl shadow w-[640px]">
                <FloatingAdVideo onClose={() => setShowFloatingAd(false)} />
              </div>
            ) : null}
          </div>

          {/* Posts */}
          {[...Array(8)].map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-[320px] space-y-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow space-y-2">
              <div className="h-3 w-2/3 bg-gray-200 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating video bottom-right */}
      {isFloating && showAdUI && (
        <div className="fixed bottom-4 right-4 w-72 z-50 shadow-lg rounded-xl overflow-hidden transition-all duration-300">
          <AdVideoUI
            videoRef={videoRef}
            showSkip={timeLeft <= 0}
            timeLeft={timeLeft}
            onClose={() => {
              setShowAdUI(false);
              setShowFloatingAd(true);
            }}
            videoSrc="/videos/mockup-video.mp4"
          />
        </div>
      )}
    </div>
  );
}

function PostSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-3 w-1/2 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
        <div className="h-3 w-4/6 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
