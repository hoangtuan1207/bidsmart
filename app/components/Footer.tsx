'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Bidsmart, Inc. – All Rights Reserved
        </p>

        <div className="flex space-x-6 text-center md:text-right">
          <Link href="/terms" className="hover:underline">
            Terms of use
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}


// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// interface FooterProps {
//   onOpenPopup?: () => void;
// }

// export default function Footer({ onOpenPopup }: FooterProps) {
//   return (
//     <footer className="w-full bg-white border-t pt-12">
//       {/* Top Section - Get in Touch */}
//       <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
//         {/* Left: Text Info */}
//         <div className="text-center md:text-left space-y-4 md:w-1/2">
//           <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
//           <p className="text-gray-600">
//             We’d love to hear from you. Reach out to us directly:
//           </p>
//           <p className="text-gray-700">
//             <strong>Company:</strong> Bid Smart
//           </p>
//           <p className="text-gray-700">
//             <strong>Email:</strong>{' '}
//             <a
//               href="mailto:info@bidsmartca.com"
//               className="text-blue-600 hover:underline"
//             >
//               info@bidsmartca.com
//             </a>
//           </p>

//           <button
//             onClick={onOpenPopup}
//             className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Right: Logo */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Image
//             src="/images/icon-3.png"
//             alt="BidSmart Logo"
//             width={220}
//             height={80}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Bottom Section - Copyright */}
//       <div className="bg-black text-white text-sm px-6 md:px-12 lg:px-24 py-6">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-center md:text-left">
//             © {new Date().getFullYear()} Bidsmart, Inc. – All Rights Reserved
//           </p>
//           <div className="flex space-x-6 text-center md:text-right">
//             <Link href="/terms" className="hover:underline">
//               Terms of use
//             </Link>
//             <Link href="/privacy" className="hover:underline">
//               Privacy policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }