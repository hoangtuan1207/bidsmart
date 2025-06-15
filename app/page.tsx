"use client";

import { useRef, useState, useEffect } from "react";
import StatsCommitment from "./components/Commitment";
import GlobalReach from "./components/GlobalReach";
import WhyUs from "./components/WhyUs";
import OurWorkVideo from "./components/OurWork";
import ContactPopup from "./components/ContactPopup";
import Navbar from "./components/Navbar";
import Publisher from "./components/Publisher";
import Partner from "./components/Partner";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PartnersBar from "./components/PartnersBar";

export default function Home() {
  const ourWorkRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const partnerLogos = [
    { src: "/1.png", alt: "SMU" },
    { src: "/2.png", alt: "Nova Scotia" },
    { src: "/3.png", alt: "Mitacs" },
    { src: "/google.svg", alt: "Google" },
  ];

  const publisherLogos = [
    { src: "/logoVietnamNet.svg", alt: "Vietnamnet" },
    { src: "/plo.svg", alt: "PLO" },
    { src: "/2sao.svg", alt: "2Sao" },
    { src: "/yeah1.svg", alt: "Yeah1" },
    { src: "/vnexpress.svg", alt: "VNExpress" },
    // thêm nếu cần
  ];
  // Animation controls
  const [heroRef, inView] = useInView({ threshold: 0.4 });
  const controls = useAnimation();
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    fetch("/api/landing")
      .then((res) => res.json())
      .then(setContent)
      .catch(console.error);
  }, [inView, controls]);

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

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
        content={content}
      />
      <PartnersBar />
      {/* Hero Section */}
      <div className="flex-grow bg-white px-6 flex justify-center">
        <section
          ref={heroRef}
          className="relative w-full bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:py-14 md:py-16 lg:py-15"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={controls}
              className="text-center md:text-left"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                {content.hero_title_1}{" "}
                <span className="text-blue-600">{content.hero_title_2}</span>
                <br />
                {content.hero_title_3}{" "}
                <span className="text-blue-600"> {content.hero_title_4} </span>
              </h1>
              <p className="mt-6 text-gray-700 text-base md:text-lg lg:text-xl font-mono">
                {content.hero_subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #AdTech
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #SmartFill
                </span>
                {/* <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
                  #RealTimeBidding
                </span> */}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition"
                >
                  Get a Demo
                </button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate={controls}
              className="flex justify-center md:justify-end"
            >
              <img
                src="/images/hero.png"
                alt="Hero Illustration"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
              />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Popup */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <StatsCommitment content={content} />

      <div ref={clientsRef}>
        <Publisher content={content} />
      </div>

      <WhyUs content={content} />

      <Partner content={content} />

      <div ref={ourWorkRef}>
        <OurWorkVideo content={content} />
      </div>
      <div ref={aboutUsRef}>
        <GlobalReach content={content} onOpenPopup={() => setShowPopup(true)} />
      </div>
    </>
  );
}
