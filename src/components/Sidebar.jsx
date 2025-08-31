"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
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
      <aside className="h-screen fixed left-70 top-0 w-1/4 pt-20">
        {/* header */}
        <header className="space-y-3">
          <div className="flex items-center gap-2">
            <Image
              src="/profile.jpg"
              alt="My Profile"
              height={50}
              width={50}
              className="rounded-full"
            />
            <a href="">Fizora</a>
          </div>
          <p className="bg-zinc-900 w-max px-2 rounded-sm border border-zinc-700">
            Software Engineer.{" "}
          </p>
        </header>

        {/* navigasi */}
        <nav className="hidden md:flex flex-col gap-7 py-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex px-2 rounded-sm items-center justify-between hover:text-white ${
                active === item.href ? "text-white " : "text-zinc-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
