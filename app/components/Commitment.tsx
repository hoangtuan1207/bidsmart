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

function AnimatedNumber({ to, triggerKey }: { to: number; triggerKey: any }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const stepTime = Math.abs(Math.floor(duration / to));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [to, triggerKey]);
  return <span>{count}+</span>;
}

export default function StatsSection({
  content,
}: {
  content: Record<string, any>;
}) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  // ✅ Build dynamic data binding từ content
  const statsData = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      value: Number(content?.commitment_data_1 ?? 0),
      label: "Working Publishers",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-green-600" />,
      value: Number(content?.commitment_data_2 ?? 0),
      label: "Bill Impressions",
    },
    {
      icon: <Handshake className="w-10 h-10 text-orange-500" />,
      value: Number(content?.commitment_data_3 ?? 0),
      label: "Advertisers",
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-purple-600" />,
      value: Number(content?.commitment_data_4 ?? 0),
      label: "Million Users",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-emerald-600" />,
      value: Number(content?.commitment_data_5 ?? 0),
      label: "Active Publishers",
    },
  ];

  return (
    // <section className="py-10 px-4 md:px-12 bg-gradient-to-b from-black to-black/90" ref={ref}>
    //   <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-center">
    //     {statsData.map((stat, index) => (
    //       <motion.div
    //         key={index}
    //         className="flex-1 min-w-[120px] flex flex-col items-center px-4 border-r last:border-none border-gray-200"
    //         initial={{ opacity: 0, y: 40 }}
    //         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
    //         transition={{ duration: 0.5, delay: index * 0.1 }}
    //       >
    //         <div className="w-12 h-12 flex items-center justify-center mb-3 text-3xl">
    //           {stat.icon}
    //         </div>
    //         <h3 className="text-5xl font-extrabold text-gray-300 font-mono">
    //           <AnimatedNumber to={stat.value} triggerKey={inView ? Date.now() + index : 0} />
    //         </h3>
    //         <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>

    <section
      className="py-10 px-4 md:px-12 bg-[#0f172a] overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="w-1/2 sm:w-1/3 md:flex-1 min-w-[100px] max-w-[180px] flex flex-col items-center px-2 md:px-4 border-r last:border-none border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3 text-3xl text-white">
              {stat.icon}
            </div>
            <h3 className="text-5xl font-extrabold text-white font-mono">
              <AnimatedNumber
                to={stat.value}
                triggerKey={inView ? Date.now() + index : 0}
              />
            </h3>
            <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
