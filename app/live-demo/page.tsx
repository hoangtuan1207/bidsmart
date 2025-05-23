"use client";

import FeedPage from "../components/FeedPage";
import FloatingAdVideo from "../components/LiveDemo";

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* <FloatingAdVideo /> */}
      <FeedPage />
    </div>
  );
}