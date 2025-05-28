"use client";

import { FC } from "react";

interface Benefit {
  icon: React.ReactNode;
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
    <section className="bg-white text-white py-14 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-14 bg-clip-text bg-gradient-to-r text-black font-mono">
          WHY BidSmart?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]"
            >
              <div
                className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(0, 123, 255, 0.5))",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
