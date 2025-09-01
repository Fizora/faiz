"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Showcase", href: "/showcase" },
    { name: "Letters", href: "/letters" },
    { name: "Project", href: "/project" },
    { name: "Social Media", href: "/sosmed" },
  ];

  const pathName = usePathname();
  const [active, setActive] = useState("");
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <>
      {/* mobile navbar */}
      <div className="fixed top-0 left-0 w-full md:hidden flex items-center justify-between px-4 py-4 border-b bg-zinc-950 z-10 border-zinc-800">
        <div className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="My Profile"
            height={40}
            width={40}
            className="rounded-full"
          />
          <span className="text-white font-medium">Fizora</span>
        </div>
        <button
          onClick={() => setIsOpen(!open)}
          className="bg-zinc-900 border border-zinc-700 rounded-sm p-2"
        >
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* sidebar desktop */}
      <aside className="hidden md:flex md:flex-col md:w-58 h-screen sticky top-0 py-30  px-6">
        <header className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              src="/profile.jpg"
              alt="My Profile"
              height={50}
              width={50}
              className="rounded-full"
            />
            <span className="text-white font-semibold">Fizora</span>
          </div>
          <p className="bg-zinc-900 w-max px-2 py-1 rounded-sm border border-zinc-700 text-sm">
            Software Engineer
          </p>
        </header>

        <nav className="flex flex-col gap-4 mt-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 py-1 rounded-sm hover:text-white ${
                active === item.href
                  ? "text-white font-semibold"
                  : "text-zinc-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Menu mobile */}
      {open && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-zinc-900 z-50 p-4">
            <div className="flex items-center justify-between w-full">
              <div className=""></div>
              <button
                onClick={() => setIsOpen(!open)}
                className="bg-zinc-900 border border-zinc-700 rounded-sm p-2"
              >
                {open ? (
                  <X className="text-white" />
                ) : (
                  <Menu className="text-white" />
                )}
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-2 py-1 rounded-sm hover:text-white ${
                    active === item.href
                      ? "text-white font-semibold"
                      : "text-zinc-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
