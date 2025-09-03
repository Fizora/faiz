"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";

export default function Letters1() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400  geist">
        <section className="py-30 space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href={"/letters"}
              className="flex items-center gap-2 hover:text-white"
            >
              <ArrowLeft size={20} />
              Back
            </Link>
            <span>September 2, 2025</span>
          </div>
          <div className="py-10 space-y-6">
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-20">
              My Goals In 2025
            </h1>
            <p>
              In 2025, I have a plan and set a goal to learn programming
              languages, stacks, frameworks, and databases.
            </p>
            <p>
              In this article, I want to share my experience of learning coding
              for several years. I started in second grade because programming
              jobs were popular at the time. I also wanted to find a high-paying
              job, and searching the internet led me to the world of web
              development and coding.
            </p>
            <p></p>
          </div>
        </section>
      </main>
    </div>
  );
}
