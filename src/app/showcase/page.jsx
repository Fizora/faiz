"use client";
import Sidebar from "@/components/Sidebar";
import Development from "@/components/Development";
import Title from "@/components/Title";

export default function Showcase() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 overflow-y-auto min-h-screen flex items-center justify-center p-6">
        <section className="py-30 space-y-6">
          <Title>Showcase.</Title>
        </section>
      </div>
    </div>
  );
}
