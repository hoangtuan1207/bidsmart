"use client";
import {
  Users,
  BarChart2,
  MonitorPlay,
  UserCheck,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const statsData = [
  { icon: <Users className="w-8 h-8 text-blue-600" />, value: 300, label: "Working Publishers" },
  { icon: <BarChart2 className="w-8 h-8 text-green-600" />, value: 3, label: "Bill Impressions" },
  { icon: <MonitorPlay className="w-8 h-8 text-purple-600" />, value: 100, label: "Million Users" },
  { icon: <UserCheck className="w-8 h-8 text-emerald-600" />, value: 300, label: "Active Publishers" },
  { icon: <Handshake className="w-8 h-8 text-orange-500" />, value: 40, label: "Advertisers" },
];

function AnimatedNumber({ to, shouldAnimate }: { to: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const end = to;
    const duration = 2500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, shouldAnimate]);

  return <span>{count}+</span>;
}

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="py-20 px-4 md:px-12 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
            <h3 className="text-4xl font-extrabold text-gray-900">
              <AnimatedNumber to={stat.value} shouldAnimate={inView} />
            </h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}