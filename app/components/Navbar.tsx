"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  scrollToWork: () => void;
  scrollToClients: () => void;
  scrollToAboutUs: () => void;
  openPopup: () => void; // 👈 thêm prop để trigger popup
};

export default function Navbar({
  scrollToWork,
  scrollToClients,
  scrollToAboutUs,
  openPopup,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6 lg:px-12 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/icon-3.png"
          alt="Bidsmart Logo"
          className="w-40 h-20 object-contain"
        />
      </div>

      {/* CENTER: Navigation menu */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-sm font-semibold text-black whitespace-nowrap">
        <button
          onClick={scrollToWork}
          className="hover:text-blue-600 transition"
        >
          Our Work
        </button>

        <button
          onClick={scrollToClients}
          className="hover:text-blue-600 transition"
        >
          Partners
        </button>

        <button
          onClick={scrollToAboutUs}
          className="hover:text-blue-600 transition"
        >
          About Us
        </button>
      </nav>

      {/* CTA Button */}
      <div className="flex items-center">
        <button
          onClick={openPopup}
          className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
