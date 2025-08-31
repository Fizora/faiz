"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Development from "@/components/Development";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-between mx-auto max-w-4xl">
      <Sidebar />
      <div className="overflow-y-auto min-h-screen items-center justify-center flex text-center">
        <Development />
      </div>
    </div>
  );
}
