"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
        <span className="font-bold text-lg text-black">Bidsmart Logo</span>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-8 text-sm font-bold text-black">
        <Link href="#how-it-works" className="hover:text-blue-600">
          How It Works
        </Link>
        <Link href="#our-work" className="hover:text-blue-600">
          Our Work
        </Link>
        <Link href="#pricing" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link href="#about-us" className="hover:text-blue-600">
          About Us
        </Link>
      </nav>

      {/* CTA button (desktop only) */}
      <Link
        href="#book-call"
        className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        Get Started
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="text-black font-bold absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-4 md:hidden">
          <Link href="#how-it-works" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link href="#our-work" onClick={() => setIsOpen(false)}>
            Our Work
          </Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#about-us" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link
            href="#book-call"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            Book A Call
          </Link>
        </div>
      )}
    </header>
  );
}
