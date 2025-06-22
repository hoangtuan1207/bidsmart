"use client";
import Image from "next/image";

export default function PartnersBar() {
  return (
    <div className="w-full bg-[#0f172a] sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto py-3 flex flex-wrap justify-center items-center gap-8">
        <Image src="/1.png" alt="Saint Mary" width={120} height={40} />
        <Image src="/2.png" alt="Digital Nova" width={120} height={40} />
        <Image src="/3.png" alt="Mitacs" width={120} height={40} />
        <Image src="/google.svg" alt="Google" width={120} height={40} />
      </div>
    </div>
  );
}
