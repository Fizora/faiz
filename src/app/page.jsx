"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}
