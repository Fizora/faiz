"use client";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import Image from "next/image";
import Url from "@/components/Url";
import Badge from "@/components/Badge";

export default function Showcase() {
  const showcase = [
    {
      title: "Spark Property",
      img: "/spark.png",
      url: "https://spark-property.vercel.app",
      desc: "Website properti dengan desain modern dan responsif. Dibuat menggunakan Next.js & Tailwind.",
    },
    {
      title: "Warung Bakso Pak Slamet",
      img: "/bakso.png",
      url: "https://bakso-pak-slamet.vercel.app",
      desc: "Landing page sederhana untuk UMKM kuliner. Fokus pada kecepatan dan kemudahan kontak via WhatsApp.",
    },
    {
      title: "CV Jaya Printing",
      img: "/printing.png",
      url: "https://jaya-printing.vercel.app",
      desc: "Company profile untuk usaha percetakan. SEO dasar dioptimalkan agar mudah ditemukan di Google.",
    },
    {
      title: "Toko Kopi Nusantara",
      img: "/kopi.png",
      url: "https://kopi-nusantara.vercel.app",
      desc: "Mini e-commerce untuk produk kopi lokal. Fitur daftar produk dengan tombol order via WhatsApp.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <section className="pt-30 space-y-6">
          <Title>My Showcase.</Title>
          <p>Lihat apa saja proyek-proyek demo yang saya pernah saya buat</p>
        </section>

        <section className="pt-30">
          {showcase.map((project, i) => (
            <div className="bg-gradient-to-br from-amber-400 to-purple-500 hover:from-cyan-500 hover:to-yellow-400 duration-600 transition-all p-1 mb-10 rounded-lg">
              <div
                key={i}
                className="space-y-4  py-7 px-2 rounded-sm bg-zinc-900 border border-zinc-700"
              >
                <h1 className="text-white text-2xl md:text-4xl">
                  {project.title}
                </h1>
                <Image
                  alt={project.title}
                  src={project.img}
                  height={300}
                  width={600}
                />

                <p>{project.desc}</p>
                <Url>
                  <a href={project.url} target="_blank">
                    {project.url.replace("https://", "")}
                  </a>
                </Url>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
