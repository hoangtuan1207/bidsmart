"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/yeah1.svg", alt: "Yeah 1" },
  { src: "/vnexpress.svg", alt: "vnexpress" },
  { src: "/plo.svg", alt: "plo" },
  { src: "/images/laodong.png", alt: "laodong" },
  { src: "/plo-logo.svg", alt: "plo-logo" },
  { src: "/logoVietnamNet.svg", alt: "logoVietnamNet" },
  { src: "/docnhanh.vn.svg", alt: "docnhanh" },
  { src: "/2sao.svg", alt: "2sao" },
];

export default function ClientLogos() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const loopedLogos = [...logos, ...logos]; // nhân đôi

  return (
    <section className="py-16 bg-[#e9e9e9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center text-black font-mono">
          Companies We Work With
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex min-w-max gap-12 animate-scroll-x">
            {loopedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain h-auto max-h-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
