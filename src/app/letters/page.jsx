"use client";
import Sidebar from "@/components/Sidebar";
import Development from "@/components/Development";

export default function Letters() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 overflow-y-auto min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          {/* Komponen Development */}
          <Development />

          {/* Info tambahan */}
          <p className="text-zinc-500">
            This page is currently under development. Stay tuned for updates! 🚧
          </p>
        </div>
      </div>
    </div>
  );
}
