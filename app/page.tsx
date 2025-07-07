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
import { NewsAndTestimonialsSection } from "./components/NewsAndTestimonialsSection";

export default function Home() {
  const ourWorkRef = useRef<HTMLDivElement | null>(null);
  const newsRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const partnersRef = useRef<HTMLDivElement | null>(null);
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
  ];

  type Item = {
    id: string;
    title: string;
    content: string;
  };

  const [heroRef, inView] = useInView({ threshold: 0.4 });
  const controls = useAnimation();
  const [content, setContent] = useState<Record<string, string>>({});
  const [news, setNews] = useState<Item[]>([]);
  const [testimonials, setTestimonials] = useState<Item[]>([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    fetch("/api/landing")
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ .then ~ data:", data);
        setContent(data);

        const newsList: Item[] = (data.news_data || "")
          .split("-") // Tách theo dấu "-"
          .map((line: string) => line.trim())
          .filter((line: any) => line) // Bỏ rỗng
          .map((line: string, index: number) => {
            // Dùng regex để tách title và URL
            const match = line.match(/^([^:]+):\s*(https?:\/\/[^\s:]+).*$/);
            const title = match?.[1]?.trim() || `News ${index + 1}`;
            const url = match?.[2]?.trim() || "";

            return {
              id: `news-${index}`,
              title,
              content: url,
            };
          });

        const customerNames: string[] =
          data.customer_name_data
            ?.split("\n")
            .map((line: string) => line.replace(/^[-•]\s*/, "").trim()) || [];

        const testimonialsList: Item[] =
          data.testimonials_data
            ?.split("\n")
            .map((line: string, index: number) => {
              const clean = line.replace(/^[-•]\s*/, "").trim();
              return {
                id: `testimonial-${index}`,
                title: customerNames[index] || `Customer ${index + 1}`,
                content: clean,
              };
            }) || [];

        setNews(newsList);
        setTestimonials(testimonialsList);
      });
  }, [inView, controls]);

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
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
        scrollToPartners={() =>
          partnersRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAboutUs={() =>
          aboutUsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToNews={() =>
          newsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        openPopup={() => setShowPopup(true)}
        content={content}
      />

      <div className="flex-grow bg-[#022854] px-6 flex justify-center">
        <section
          ref={heroRef}
          className="relative w-full px-4 pt-16 pb-24 sm:py-20 md:py-24 overflow-hidden bg-[#022854]"
        >
          {/* Overlay làm tối nền ảnh */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#022854]/95 via-[#022854]/60 to-transparent z-10" />

          <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Phần chữ */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={controls}
              className="z-30 text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white space-y-2">
                <div>
                  {content.hero_title_1 || "Beyond"}{" "}
                  <span className="text-blue-500">
                    {content.hero_title_2 || "Impression"}
                  </span>
                </div>
                <div className="whitespace-nowrap">
                  <span>{content.hero_title_3 || "Unlock"} </span>
                  <span className="text-blue-400">
                    {content.hero_title_4 || "Revenue Potential"}
                  </span>
                </div>
              </h1>

              <p className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl font-mono">
                {content.hero_subtitle ||
                  "Publishers, are you ready to maximize earnings with minimal effort? BidSmart offers a full-stack programmatic solution to connect your ad spaces with smarter delivery, higher fill rates, and stronger returns — all automatically."}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #AdTech
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #SmartFill
                </span>
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  #Real Time Bidding
                </span>
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

            {/* Phần hình ảnh */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="z-10 flex justify-center items-center pl-4 md:pl-12 lg:pl-20"
            >
              <img
                src="/images/hero-4.png"
                alt="Hero"
                className="max-w-full max-h-[500px] object-contain"
              />
            </motion.div>
          </div>
        </section>
      </div>

      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <StatsCommitment content={content} />

      <div ref={clientsRef}>
        <Publisher content={content} />
      </div>

      <WhyUs content={content} />

      <div ref={partnersRef}>
        <Partner content={content} />
      </div>

      <div ref={newsRef}>
        <NewsAndTestimonialsSection
          content={{
            title_news: content.title_news,
            title_testimonials: content.title_testimonials,
          }}
          news={news}
          testimonials={testimonials}
        />
      </div>

      {/* <section className="w-full bg-[#0f172a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
            What's New & People Say
          </h2>

          <div className="flex flex-col md:flex-row gap-6 h-[400px]">
            <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white/5 border border-blue-600 rounded-xl p-5 shadow-md backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-blue-400">
                📰 {content.title_news}
              </h3>
              {news.length === 0 ? (
                <p className="text-sm text-gray-300">No news available.</p>
              ) : (
                news.map((item: any) => (
                  <div key={item.id} className="mb-4">
                    <h4 className="text-white font-bold text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white/5 border border-green-600 rounded-xl p-5 shadow-md backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-green-400">
                💬 {content.title_testimonials}
              </h3>
              {testimonials.length === 0 ? (
                <p className="text-sm text-gray-300">No testimonials yet.</p>
              ) : (
                testimonials.map((item: any) => (
                  <div key={item.id} className="mb-4">
                    <h4 className="text-white font-bold text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section> */}
      <div ref={ourWorkRef}>
        <OurWorkVideo content={content} />
      </div>
      <div ref={aboutUsRef}>
        <GlobalReach content={content} onOpenPopup={() => setShowPopup(true)} />
      </div>
    </>
  );
}
