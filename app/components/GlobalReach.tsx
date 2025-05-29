import { FC } from "react";

interface GlobalReachProps {
  onOpenPopup: () => void;
}

const GlobalReach: FC<GlobalReachProps> = ({ onOpenPopup }) => {
  return (
    <section className="bg-white pt-30 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-2/5 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span>📍</span> Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you're nearby or across the world, we're here to
            collaborate. Reach out and let's build something great together.
          </p>

          <div className="space-y-2 text-gray-800 text-base">
            <p>
              <span className="font-semibold">🏢 Company:</span>{" "}
              <span className="text-gray-900">BidSmart</span>
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span>{" "}
              <a
                href="mailto:info@bidsmartca.com"
                className="text-blue-600 font-medium hover:underline"
              >
                info@bidsmartca.com
              </a>
            </p>
          </div>

          <button
            onClick={onOpenPopup}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            🚀 Get Started
          </button>
        </div>

        {/* Right: Map */}
        <div className="relative w-full md:w-3/5 flex justify-center md:justify-end">
          <img
            src="/images/hi-map.png"
            alt="Global Locations Map"
            className="w-full max-w-[800px] h-auto"
          />

          {/* Halifax */}
          <div className="absolute left-[25%] top-[35%] flex flex-col items-center space-y-1">
            <div className="relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <div className="relative w-4 h-4 bg-yellow-400 rounded-full z-10"></div>
            </div>
            <div className="bg-yellow-400 text-white text-sm px-3 py-1 rounded-full shadow-md">
              Canada
            </div>
          </div>

          {/* India */}
          <div className="absolute left-[64%] top-[51%]  flex flex-col items-center space-y-1">
            <div className="relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75"></span>
              <div className="relative w-4 h-4 bg-lime-500 rounded-full z-10"></div>
            </div>
            <div className="bg-lime-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
              India
            </div>
          </div>

          {/* Ho Chi Minh */}
          <div className="absolute left-[70%] top-[58%] flex flex-col items-center space-y-1">
            <div className="relative">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-600 opacity-75"></span>
              <div className="relative w-4 h-4 bg-pink-600 rounded-full z-10"></div>
            </div>
            <div className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
              Viet Nam
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
