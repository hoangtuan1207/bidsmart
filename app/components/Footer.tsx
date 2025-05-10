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