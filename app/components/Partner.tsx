"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  { src: "/1.png", alt: "smu" },
  { src: "/2.png", alt: "nova" },
  { src: "/3.png", alt: "mitacs" },
  { src: "/google.svg", alt: "google" },
];

export default function PartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // ❌ bỏ once: true
    margin: "-100px", // trigger sớm hơn một chút
  });

  return (
    <section className="py-10 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-black font-mono"
        >
          Partner We Work With
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain h-auto max-h-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
