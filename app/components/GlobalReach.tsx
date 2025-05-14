'use client';
import Image from 'next/image';

export default function GlobalReach() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Map Image Centered */}
        <div className="w-full max-w-4xl mb-12">
          <Image
            src="/images/map.png" // Đặt đúng tên ảnh trong thư mục public
            alt="Global Reach Map"
            width={800}
            height={400}
            className="mx-auto w-full h-auto"
          />
        </div>

        {/* Statistic bubbles */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="border border-gray-300 rounded-full px-6 py-4">
            <p className="text-xl font-bold text-red-700">3+</p>
            <p className="text-gray-600 text-sm">Billion Ad Impression</p>
          </div>
          <div className="border border-gray-300 rounded-full px-6 py-4">
            <p className="text-xl font-bold text-red-700">100+</p>
            <p className="text-gray-600 text-sm">Million Users</p>
          </div>
          <div className="border border-gray-300 rounded-full px-6 py-4">
            <p className="text-xl font-bold text-red-700">300+</p>
            <p className="text-gray-600 text-sm">Active Publishers</p>
          </div>
          <div className="border border-gray-300 rounded-full px-6 py-4">
            <p className="text-xl font-bold text-red-700">40+</p>
            <p className="text-gray-600 text-sm">Advertisers</p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-lg text-gray-700 font-medium">
          Working with <span className="text-red-700 font-bold">300+ Publishers</span>
        </p>
      </div>
    </section>
  );
}
