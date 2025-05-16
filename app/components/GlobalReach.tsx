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
      </div>
    </section>
  );
}
