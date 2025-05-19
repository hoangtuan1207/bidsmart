"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ClientLogos from "./components/Clients";
import StatsCommitment from "./components/Commitment";
import GlobalReach from "./components/GlobalReach";
import WhyUs from "./components/WhyUs";
import OurWorkVideo from "./components/OurWork";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex-grow bg-white pt-28 px-6 flex justify-center">
        <section
          ref={sectionRef}
          className={clsx(
            "w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 opacity-0 transition-opacity duration-1000",
            { "opacity-100": isVisible }
          )}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
              More Revenue <br /> Less Effort <br />
            </h1>
            <p className="text-gray-600 mt-5 text-lg md:text-xl">
              Bidsmart connects your ad spaces with smarter delivery, higher
              fill rates, and stronger returns — automatically.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition">
                Talk to Us
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/hero-people.png"
              alt="Hero People Collage"
              width={500}
              height={500}
              className="w-full max-w-[400px] h-auto"
              priority
            />
          </div>
        </section>
      </div>
      <ClientLogos />
      <StatsCommitment />
      <WhyUs />
      <OurWorkVideo />
      <GlobalReach />
    </>
  );
}
