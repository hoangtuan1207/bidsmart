"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "💸",
    title: "Fast & Reliable Payments",
    description:
      "Industry-leading payment terms starting from Net-7 for eligible partners. Get paid quickly and consistently.",
  },
  {
    icon: "📈",
    title: "Maximum Fill Rates",
    description:
      "Our advanced SmartFill technology ensures the highest possible fill rates to fully monetize your ad inventory.",
  },
  {
    icon: "🔍",
    title: "Complete Transparency",
    description:
      "Real-time dashboards, full visibility, and no hidden fees. Transparency is at the core of everything we do.",
  },
  {
    icon: "🙋‍♂️",
    title: "Dedicated Customer Service",
    description: "Our support team is extremely dedicated and active.",
  },
  {
    icon: "🌍",
    title: "Dedicated Support Team",
    description:
      "Our customer success team is responsive, experienced, and ready to assist whenever you need.",
  },
  {
    icon: "♻️",
    title: "All-in-One Monetization Stack",
    description:
      "From ad serving to yield optimization, we offer a full-stack programmatic solution for publishers worldwide.",
  },
  {
    icon: "🔒",
    title: "Privacy & Compliance Ready",
    description:
      "100% sellers.json and supply chain compliance to ensure safe, secure, and policy-aligned monetization.",
  },
  {
    icon: "🧩",
    title: "Smart Ad Refresh",
    description:
      "Intelligent refresh logic based on 20+ data signals to maximize ad revenue without compromising user experience.",
  },
];

const WhyUs: FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-black text-center">
          WHY <span className="text-blue-600">BidSmart?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group"
            >
              <div
                className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: "drop-shadow(0 1px 4px rgba(0, 123, 255, 0.4))",
                }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;