"use client";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useState } from "react";

const letters = [
  // {
  //   title: "How I learning Programming?",
  //   date: "August 3, 2025",
  //   link: "/letters/letters2",
  // },
  {
    title: "4 Kesalahan yang gua lakukan sebagai pengembang",
    date: "September 2, 2025",
    link: "/letters/letters1",
  },
];

export default function Letters() {
  const [query, setQuery] = useState("");

  // Filter letters berdasarkan input
  const filteredLetters = letters.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <div className="py-30 space-y-6">
          <h1 className="text-white text-3xl md:text-5xl">
            Share my Knowledges
          </h1>
          <p>
            Aku menuliskan pengalaman, refleksi diri, pembelajaran dan kesalahan
            pribadi yang saya lakukan untuk berbagi insight(pandangan) dengan
            teman-teman.
          </p>
          {/* Search bar */}
          <div className="my-6">
            <input
              type="text"
              placeholder="Search letters..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Hasil search */}
        {filteredLetters.length > 0 ? (
          filteredLetters.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="py-3 rounded-sm space-y-3 flex justify-between hover:text-white"
            >
              <p className="text-white">{item.title}</p>
              <p>{item.date}</p>
            </Link>
          ))
        ) : (
          <p className="text-zinc-500">No letters found.</p>
        )}
        <Footer />
      </main>
    </div>
  );
}
