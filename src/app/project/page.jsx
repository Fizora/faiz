"use client";
import Sidebar from "@/components/Sidebar";
import Development from "@/components/Development";

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 overflow-y-auto min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          {/* Komponen Development */}
          <Development />
        </div>
      </div>
    </div>
  );
}
