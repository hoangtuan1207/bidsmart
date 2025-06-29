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
        setContent(data);

        const newsList: Item[] = data.news_data
          ?.split("\n")
          .map((line: string, index: number) => {
            const clean = line.replace(/^[-•]\s*/, "").trim();
            return {
              id: `news-${index}`,
              title: clean.split(":")[0] || `News ${index + 1}`,
              content: clean.split(":")[1]?.trim() || "",
            };
          });

        const testimonialsList: Item[] =
          data.testimonials_data
            ?.split("\n")
            .map((line: string, index: number) => {
              const clean = line.replace(/^[-•]\s*/, "").trim();
              return {
                id: `testimonial-${index}`,
                title: `Customer ${index + 1}`,
                content: clean,
              };
            }) || [];

        setNews(newsList);
        setTestimonials(testimonialsList);
      });
  }, []);
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }

  //   // fetch Hero content
  //   fetch("/api/landing")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // 👉 Tách danh sách từ chuỗi dạng "- Item 1\n- Item 2\n..."
  //       const parsedList = data.news_data
  //         ?.split("\n")
  //         .map((line: string) => line.replace(/^[-•]\s*/, "").trim());
  //       console.log(parsedList);
  //       setContent({
  //         ...data,
  //         news_data_list: parsedList, // ✅ thêm mảng đã xử lý
  //       });
  //     })
  //     .catch(console.error);
  // }, [inView, controls]);

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
        openPopup={() => setShowPopup(true)}
        content={content}
      />

      <div className="flex-grow bg-[#0f172a] px-6 flex justify-center">
        <section
          ref={heroRef}
          className="relative w-full px-4 pt-16 pb-24 sm:py-20 md:py-24 overflow-hidden"
        >
          {/* Background image for mobile (hiện ảnh bên trên) */}
          <motion.div className="block md:hidden w-full mb-10">
            <img
              src="/images/hero-3.png"
              alt="Hero background"
              className="w-full h-auto rounded-xl border border-[#0f172a] shadow-lg object-cover"
            />
          </motion.div>

          {/* Background image cho desktop (hiện bên phải) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center z-0 rounded-xl border border-[#0f172a] shadow-lg"
            style={{
              backgroundImage: "url('/images/hero-3.png')",
            }}
          />

          {/* Overlay: tối ảnh giúp đọc chữ dễ hơn */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/60 to-transparent z-10" />

          {/* Nội dung */}
          <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={controls}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                {content.hero_title_1 || "More"}
                <span className="text-blue-500">
                  {content.hero_title_2 || "Revenue"}
                </span>
                <br />
                {content.hero_title_3 || "Less"}{" "}
                <span className="text-blue-500">
                  {content.hero_title_4 || "Effort"}
                </span>
              </h1>

              <p className="mt-6 text-gray-300 text-base sm:text-lg lg:text-xl font-mono whitespace-pre-line">
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

            {/* Chừa cột trống cho ảnh ở desktop */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate={controls}
              className="hidden md:block"
            />
          </div>
        </section>

        {/* <section
          ref={heroRef}
          className="relative w-full px-4 pt-16 pb-24 sm:py-20 md:py-24 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
            style={{
              backgroundImage: "url('/images/hero-3.png')",
            }}
          />

          <div className="absolute inset-0 bg-[#0f172a]/80 z-10 md:hidden" />

          <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                {content.hero_title_1 || "More"}{" "}
                <span className="text-blue-500">
                  {content.hero_title_2 || "Revenue"}
                </span>
                <br />
                {content.hero_title_3 || "Less"}{" "}
                <span className="text-blue-500">
                  {content.hero_title_4 || "Effort"}
                </span>
              </h1>

              <p className="mt-6 text-gray-200 text-base sm:text-lg lg:text-xl font-mono whitespace-pre-line">
                {content.hero_subtitle || "Publishers..."}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #AdTech
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  #SmartFill
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
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div
                className="w-full h-[360px] lg:h-[420px] bg-cover bg-center rounded-xl border border-[#0f172a] shadow-lg"
                style={{
                  backgroundImage: "url('/images/hero-3.png')",
                }}
              />
            </div>
          </div>
        </section> */}
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

      <NewsAndTestimonialsSection
        content={{
          title_news: content.title_news,
          title_testimonials: content.title_testimonials,
        }}
        news={news}
        testimonials={testimonials}
      />
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
