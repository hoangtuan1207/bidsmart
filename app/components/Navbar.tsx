"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

type NavbarProps = {
  scrollToWork: () => void;
  scrollToClients: () => void;
  scrollToAboutUs: () => void;
  openPopup: () => void;
  content: Record<string, string>;
};

export default function Navbar({
  scrollToWork,
  scrollToClients,
  scrollToAboutUs,
  openPopup,
  content,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // const [content, setContent] = useState<Record<string, string>>({});
  // const [heroRef, inView] = useInView({ threshold: 0.4 });
  // const controls = useAnimation();

  // useEffect(() => {
  //   fetch("/api/landing")
  //     .then((res) => res.json())
  //     .then(setContent)
  //     .catch(console.error);
  // }, [inView, controls]);

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

      {/* Desktop menu */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-sm font-semibold text-black whitespace-nowrap">
        <button
          onClick={scrollToWork}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_1}
        </button>
        <button
          onClick={scrollToClients}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_2}
        </button>
        <button
          onClick={scrollToClients}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_3}
        </button>
        <button
          onClick={scrollToClients}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_4}
        </button>
        <button
          onClick={scrollToClients}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_5}
        </button>
        <button
          onClick={scrollToAboutUs}
          className="hover:text-blue-600 transition"
        >
          {content.navbar_control_6}
        </button>
      </nav>

      {/* CTA desktop */}
      {content?.navbar_btn && (
        <div className="hidden md:flex items-center">
          <button
            onClick={openPopup}
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            {content.navbar_btn}
          </button>
        </div>
      )}
      {/* Hamburger button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-6 space-y-4 md:hidden z-40">
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToWork();
            }}
            className="text-black font-medium"
          >
            Our Work
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToClients();
            }}
            className="text-black font-medium"
          >
            Partners
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              scrollToAboutUs();
            }}
            className="text-black font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              openPopup();
            }}
            className="mt-4 w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
