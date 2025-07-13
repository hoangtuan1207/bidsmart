"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function Publisher({
  content,
}: {
  content: Record<string, any>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const loopedLogos = [...logos, ...logos]; // để scroll mượt

  return (
    // <section className="py-10 bg-[#e9e9e9] overflow-hidden" ref={ref}>
    //   <section
    //     ref={ref}
    //  className="py-16 overflow-hidden bg-gradient-to-b from-white via-[#f0f8ff] to-[#d0e8ff] dark:from-[#0b0d10] dark:via-[#1c1f26] dark:to-[#2c3a4a]"
    //   >
    //     <div className="max-w-7xl mx-auto px-4">
    //       <motion.h2
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //         transition={{ duration: 0.5 }}
    //         className="text-3xl md:text-4xl font-semibold mb-10 text-center text-white font-mono"
    //       >
    //         {content.publisher_title}
    //       </motion.h2>

    //       <div className="relative w-full overflow-hidden">
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    //           transition={{ duration: 0.6 }}
    //           className="flex min-w-max gap-12 animate-scroll-x"
    //         >
    //           {loopedLogos.map((logo, index) => (
    //             <motion.img
    //               key={index}
    //               src={logo.src}
    //               alt={logo.alt}
    //               width={120}
    //               height={60}
    //               className="object-contain h-auto max-h-12"
    //               initial={{ opacity: 0, scale: 0.8 }}
    //               animate={
    //                 isInView
    //                   ? { opacity: 1, scale: 1 }
    //                   : { opacity: 0, scale: 0.8 }
    //               }
    //               transition={{ duration: 0.4, delay: index * 0.1 }}
    //             />
    //           ))}
    //         </motion.div>
    //       </div>
    //     </div>
    //   </section>

    <section
      ref={ref}
      className="py-16 bg-white dark:bg-[#022854] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-gray-900 dark:text-white font-mono"
        >
          {content.publisher_title}
        </motion.h2>

        {/* ✅ Wrapper cố định không cho scroll ngang */}
        <div className="relative w-full overflow-hidden">
          {/* ✅ Dải nội dung có animation scroll ngang */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex min-w-max gap-12 animate-scroll-x"
          >
            {loopedLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain h-auto max-h-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
