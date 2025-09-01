"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import Button from "@/components/Button";
import Title from "@/components/Title";
const sosmed = [
  { icon: <FaTiktok />, name: "Tiktok", link: "" },
  { icon: <FaYoutube />, name: "YouTube", link: "" },
  { icon: <FaInstagram />, name: "Instagram", link: "" },
  { icon: <FaLinkedin />, name: "Linkedin", link: "" },
];

export default function SocialMedia() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 ">
        <section className="py-30 space-y-6">
          <Title>My Social Media</Title>
          {sosmed.map((item) => (
            <div
              className="my-5 rounded-sm border border-zinc-800 bg-zinc-900 flex items-center justify-between p-2"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <h1>{item.name}</h1>
              </div>
              <div className="px-5 py-1.5 rounded-sm bg-zinc-900 w-max border border-zinc-700 hover:text-white cursor-pointer">
                <a key={item.link} href={item.link} target="_blank">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
