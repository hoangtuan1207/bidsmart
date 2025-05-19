"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 lg:px-12 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/icon-1.png"
          alt="Bidsmart Logo"
          className="w-40 h-14 object-contain" // tăng size logo
        />
      </div>

      {/* CENTER: Navigation menu - centered absolutely */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-sm font-semibold text-black whitespace-nowrap">
        <Link href="#how-it-works" className="hover:text-blue-600 transition">
          How It Works
        </Link>
        <Link href="#our-work" className="hover:text-blue-600 transition">
          Our Work
        </Link>
        <Link href="#about-us" className="hover:text-blue-600 transition">
          About Us
        </Link>
      </nav>

      {/* RIGHT: CTA */}
      <div className="flex items-center">
        <Link
          href="#book-call"
          className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
