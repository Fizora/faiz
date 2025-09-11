"use client";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import Image from "next/image";
import Url from "@/components/Url";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Showcase() {
  const [search, setSearch] = useState("");

  // daftar project
  const showcase = [
    // {
    //   title: "Spark Property",
    //   img: "/spark.png",
    //   url: "https://spark-property.vercel.app",
    //   desc: "Website properti dengan desain modern dan responsif. Dibuat menggunakan Next.js & Tailwind.",
    // },
    {
      title: "Warung Bakso Pak Slamet",
      img: "/bakso.png",
      url: "https://bakso-pak-slamet.vercel.app",
      desc: "Landing page sederhana untuk UMKM kuliner. Fokus pada kecepatan dan kemudahan kontak via WhatsApp.",
    },
    // {
    //   title: "CV Jaya Printing",
    //   img: "/printing.png",
    //   url: "https://jaya-printing.vercel.app",
    //   desc: "Company profile untuk usaha percetakan. SEO dasar dioptimalkan agar mudah ditemukan di Google.",
    // },
    // {
    //   title: "Toko Kopi Nusantara",
    //   img: "/kopi.png",
    //   url: "https://kopi-nusantara.vercel.app",
    //   desc: "Mini e-commerce untuk produk kopi lokal. Fitur daftar produk dengan tombol order via WhatsApp.",
    // },
  ];

  // filter berdasarkan search
  const filteredShowcase = showcase.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <section className="pt-30 space-y-6">
          <Title>My Showcase.</Title>
          <p>Lihat apa saja proyek-proyek demo yang saya pernah saya buat</p>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Cari project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-zinc-600 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </section>

        <section className="pt-10">
          {filteredShowcase.length > 0 ? (
            filteredShowcase.map((project, i) => (
              <div key={i} className=" py-[3px] mb-10 rounded-lg">
                <div className="space-y-4">
                  <Image
                    alt={project.title}
                    src={project.img}
                    height={300}
                    width={600}
                  />
                  <h1 className="text-white text-2xl md:text-4xl">
                    {project.title}
                  </h1>
                  <p>{project.desc}</p>
                  <Url>
                    <a href={project.url} target="_blank">
                      {project.url.replace("https://", "")}
                    </a>
                  </Url>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-zinc-500 mt-10">
              Tidak ada project yang cocok dengan pencarian.
            </p>
          )}

          <Footer />
        </section>
      </main>
    </div>
  );
}
