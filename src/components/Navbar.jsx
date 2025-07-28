"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-0 left-0 fixed z-50 w-full p-2 bg-white/90 backdrop-blur-sm">
      <header className="mx-auto px-4 md:px-6 py-4 max-w-5xl flex justify-between items-center rounded-md">
        <div className="font-bold text-xl text-gray-900">
          <p>Fizora</p>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex px-2 items-center gap-6 text-gray-900">
          <Link href="#about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="#work" className="hover:text-blue-500 transition-colors">
            Work
          </Link>
          <Link
            href="#pricing"
            className="hover:text-blue-500 transition-colors"
          >
            Pricing
          </Link>
        </nav>
        <nav className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-500 text-white px-5 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={() => setIsOpen(false)}
          >
            <nav
              className="fixed top-0 right-0 w-full h-screen bg-white/90 backdrop-blur-sm p-6 flex flex-col justify-start items-end gap-6 text-gray-900 shadow-lg transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-gray-900"
                aria-label="Close menu"
              >
                <LuX size={24} />
              </button>
              <Link
                href="#about"
                className="text-lg hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#work"
                className="text-lg hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#pricing"
                className="text-lg hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="bg-blue-500 text-white px-5 py-2 rounded-md text-lg hover:bg-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
