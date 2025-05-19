"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 lg:px-12 h-20 flex items-center justify-between bg-white shadow-sm relative z-50">
      {/* Logo + brand */}
        <img
          src="/images/bid-2.png"
          alt="Bidsmart Logo"
          className="w-14 h-14 object-contain -translate-y-1" // đẩy logo lên ~4px
        />


      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-black">
        <Link href="#how-it-works" className="hover:text-blue-600 transition">How It Works</Link>
        <Link href="#our-work" className="hover:text-blue-600 transition">Our Work</Link>
        <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
        <Link href="#about-us" className="hover:text-blue-600 transition">About Us</Link>
      </nav>

      {/* CTA button */}
      <Link
        href="#book-call"
        className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
      >
        Get Started
      </Link>

      {/* Mobile toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start space-y-4 p-5 md:hidden font-semibold text-black">
          <Link href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="#our-work" onClick={() => setIsOpen(false)}>Our Work</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#about-us" onClick={() => setIsOpen(false)}>About Us</Link>
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