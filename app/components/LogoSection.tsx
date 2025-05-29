// components/LogoSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoSectionProps {
  title: string;
  logos: { src: string; alt: string }[];
  bg?: string; // Tailwind class e.g. 'white', 'gray-100'
}

export default function LogoSection({ title, logos, bg = "white" }: LogoSectionProps) {
  return (
    <section className={`py-16 bg-${bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="inline-block border-b-4 border-blue-500 pb-1">
            {title}
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-4 shadow-sm hover:shadow-md rounded-lg transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain h-auto max-h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
