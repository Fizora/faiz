"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-0 left-0 fixed z-50 w-full bg-white">
      <header className="mx-auto px-4 md:px-0 py-4 max-w-7xl flex justify-between items-center ">
        <div className="font-bold text-xl">
          <p>FIZORA</p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#Showcase">Showcase</Link>
          <Link
            href="#contact"
            className="bg-amber-400  rounded-sm px-5 py-1.5  duration-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden   focus:outline-none"
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
              className="fixed top-0 right-0 w-full h-screen bg-white text-black backdrop-blur-sm p-6 flex flex-col justify-start items-end gap-6  shadow-lg transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end "
                aria-label="Close menu"
              >
                <LuX size={24} />
              </button>
              <Link
                href="#about"
                className="text-4xl hover:text-amber-500 text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#work"
                className="text-4xl hover:text-amber-500 text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#pricing"
                className="text-4xl hover:text-amber-500 text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="bg-amber-500  px-5 py-2 rounded-md text-4xl hover:bg-amber-600 transition-colors"
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
