"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="top-0 left-0 fixed z-10 w-full p-1 bg-transparent backdrop-blur-3xl">
        <header className="mx-auto px-4 md:px-0 py-4 max-w-5xl flex justify-between items-center rounded-md">
          <div className="font-bold text-xl">
            <p>Fizora</p>
          </div>
          {/* desktop */}
          <nav className="hidden md:flex px-2 items-center gap-4 text-gray-700">
            <Link href="">About</Link>
            <Link href="">Work</Link>
            <Link href="">Pricing</Link>
          </nav>
          <nav className="hidden md:block">
            <Link
              href=""
              className="bg-blue-500 text-white px-5 py-1.5 rounded-md"
            >
              Contact Me
            </Link>
          </nav>
          {/* mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden "
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
          {isOpen && (
            <nav className="md:hidden open-sidebar px-2 top-0  flex flex-col justify-center items-center left-0 z-2 absolute min-h-screen gap-4 text-gray-700 bg-white w-3/4">
              <Link href="">About</Link>
              <Link href="">Work</Link>
              <Link href="">Pricing</Link>
              <Link
                href=""
                className="bg-blue-500 text-white px-5 py-1.5 rounded-md"
              >
                Contact Me
              </Link>
            </nav>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
