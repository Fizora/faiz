"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const letters = [
  {
    title: "I Make Police System",
    date: "August 3, 2025",
    link: "/letters/letters2",
  },
  {
    title: "How I learning Programming?",
    date: "August 1, 2025",
    link: "/letters/letters1",
  },
];

export default function Letters() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 ">
        <div className="py-30 space-y-6">
          <h1 className="text-white text-3xl md:text-5xl">
            Share my Knowledges
          </h1>
          <p>
            I write my experiences, reflections and learnings here, follow my
            progress
          </p>
        </div>
        {letters.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="py-2 rounded-sm space-y-3 flex justify-between"
          >
            <p className="text-white">{item.title}</p>
            <p>{item.date}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
