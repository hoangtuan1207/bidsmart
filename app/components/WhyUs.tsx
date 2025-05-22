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
    <section className="bg-white text-white py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold  mb-12 text-black">WHY BidSmarts?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4 text-black">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {benefit.title}
            </h3>
            <p className="text-sm text-black">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
