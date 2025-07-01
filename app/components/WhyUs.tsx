"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Handshake,
  MonitorPlay,
  UserCheck,
  Users,
} from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

interface Props {
  content: Record<string, any>;
}

const WhyUs: FC<Props> = ({ content }) => {
  const benefits: Benefit[] = [
    {
      icon: "💸",
      titleKey: "whyus_1_title",
      descKey: "whyus_1_description",
    },
    {
      icon: "📈",
      titleKey: "whyus_2_title",
      descKey: "whyus_2_description",
    },
    {
      icon: "🔍",
      titleKey: "whyus_3_title",
      descKey: "whyus_3_description",
    },
    {
      icon: "🙋‍♂️",
      titleKey: "whyus_4_title",
      descKey: "whyus_4_description",
    },
    {
      icon: "♻️",
      titleKey: "whyus_5_title",
      descKey: "whyus_5_description",
    },
    {
      icon: "🌍", // emoji vẫn dùng nếu muốn
      titleKey: "whyus_6_title",
      descKey: "whyus_6_description",
    },
    {
      icon: "🔒",
      titleKey: "whyus_7_title",
      descKey: "whyus_7_description",
    },
    {
      icon: "🧩",
      titleKey: "whyus_8_title",
      descKey: "whyus_8_description",
    },
  ];

  return (
    // <section className="bg-white py-16 px-4 md:px-10">
    //   <div className="max-w-7xl mx-auto">
    //     <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-black text-center">
    //       WHY <span className="text-blue-600">BidSmart?</span>
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {benefits.map((benefit, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, y: 40 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           viewport={{ once: false, amount: 0.2 }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           whileHover={{ scale: 1.03 }}
    //           className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group"
    //         >
    //           <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
    //             {benefit.icon}
    //           </div>
    //           <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
    //             {content[benefit.titleKey] ?? ""}
    //           </h3>
    //           <p className="text-sm text-gray-600 leading-relaxed">
    //             {content[benefit.descKey] ?? ""}
    //           </p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

  <section className="bg-white dark:bg-[#022854] py-16 px-4 md:px-10 overflow-x-hidden transition-colors duration-300">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-black dark:text-white text-center">
      WHY <span className="text-blue-600 dark:text-blue-400">BidSmart?</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group"
        >
          <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 text-blue-600 dark:text-blue-400">
            {benefit.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {content[benefit.titleKey] ?? ""}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {content[benefit.descKey] ?? ""}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default WhyUs;
