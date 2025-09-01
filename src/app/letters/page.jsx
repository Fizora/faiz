"use client";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import Link from "next/link";

const letters = [
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
          <Title>Share my Knowledges</Title>
          <p>
            I write my experiences, reflections and learnings here, follow my
            progress
          </p>
        </div>
        {letters.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="space-y-3 flex items-center justify-between"
          >
            <p className="text-white">{item.title}</p>
            <p>{item.date}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}
