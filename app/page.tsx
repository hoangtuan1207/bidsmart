"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ClientLogos from "./components/Clients";
import StatsCommitment from "./components/Commitment";
import GlobalReach from "./components/GlobalReach";
import WhyUs from "./components/WhyUs";
import OurWorkVideo from "./components/OurWork";
import ContactPopup from "./components/ContactPopup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
      <Navbar
        scrollToWork={() =>
          ourWorkRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToClients={() =>
          clientsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAboutUs={() =>
          aboutUsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        openPopup={() => setShowPopup(true)}
      />

      {/* Hero Section */}
      <div className="flex-grow bg-white pt-15 px-6 flex justify-center">
        <section
          ref={sectionRef}
          className={clsx(
            "w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 opacity-0 transition-opacity duration-1000",
            { "opacity-100": isVisible }
          )}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
              More <span className="text-blue-600">Revenue</span> <br />
              Less <span className="text-blue-600">Effort</span>
            </h1>
            <p className="text-gray-600 mt-5 text-xl md:text-2xl font-mono">
              Bid Smart connects your ad spaces with smarter delivery, higher
              fill rates, and stronger returns — automatically.
            </p>

            {/* 🎯 Thêm đoạn motion ở đây */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                #AdTech
              </span>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                #SmartFill
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
                #RealTimeBidding
              </span>
            </motion.div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition"
              >
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/images/hero.png"
              alt="Hero People Collage"
              width={500}
              height={500}
              className="w-full max-w-[400px] h-auto"
              priority
            />
          </div>
        </section>
      </div>

      {/* Popup */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <StatsCommitment />

      {/* 👇 Scroll to this when clicking "Clients" in navbar */}
      <div ref={clientsRef}>
        <ClientLogos />
      </div>

      <WhyUs />

      {/* 👇 Scroll to this when clicking "Our Work" in navbar */}
       <div ref={ourWorkRef}>
        <OurWorkVideo />
      </div>

      <div ref={aboutUsRef}>
        <GlobalReach onOpenPopup={() => setShowPopup(true)} />
        <Footer />
      </div>
    </>
  );
}
