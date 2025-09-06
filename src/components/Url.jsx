import { ArrowRight, Link2 } from "lucide-react";
import { useState, useTransition } from "react";

export default function Url({ children }) {
  return (
    <>
      <div
        onMouseOver={() => setOpen(!open)}
        className="bg-zinc-800 px-2 rounded-full hover:text-white group w-max  transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        <Link2 size={20} />
        {children}
        <ArrowRight className="group-hover:rotate-45" size={15} />
      </div>
    </>
  );
}
