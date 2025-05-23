import { time } from "console";
import { useEffect } from "react";

export default function AdVideoUI({
  videoRef,
  showSkip,
  timeLeft,
  onClose,
  videoSrc,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  showSkip: boolean;
  timeLeft: number;
  onClose: () => void;
  videoSrc: string;
}) {
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.warn("Autoplay error:", err));
      }
    }
  }, []);

  return (
    <div className="relative bg-black rounded overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-1 left-1 bg-black text-white text-xs px-1 rounded z-10"
      >
        ×
      </button>

      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-auto"
      />

      <div className="flex justify-between items-center text-white text-xs bg-black px-2 py-1">
        <span className="text-gray-400">
          {" "}
          {timeLeft > 0 && <p> Ad • {timeLeft}s</p>}
        </span>

        {showSkip && (
          <button
            onClick={onClose}
            className="bg-white text-black font-bold text-xs px-2 py-1 rounded"
          >
            Skip Ad ▶
          </button>
        )}
      </div>
    </div>
  );
}
