"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { ArrowLeft } from "lucide-react";

export default function Letters1() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 ">
        <section className="py-30 space-y-6">
          <Link
            href={"/letters"}
            className="flex items-center gap-2 hover:text-white"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
          <div className="py-10 space-y-6">
            <Title>How I learning Programming?</Title>
            <p>
              I write my experiences, reflections and learnings here, follow my
              progress
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
