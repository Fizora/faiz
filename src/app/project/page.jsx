"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Title from "@/components/Title";
import Url from "@/components/Url";
import Badge from "@/components/Badge";

// Object Project
const projects = [
  {
    id: 1,
    title: "Odoo Pesantren",
    description:
      "Sistem Informasi Pesantren berbasis Odoo 18, mendukung manajemen pendidikan, keuangan, dan asrama.",
    image: {
      src: "/odoo-pesantren.png",
      alt: "Odoo Pesantren",
    },
    urls: [
      {
        label: "Dokumentasi",
        href: "https://odoo-pesantren.gitbook.io/odoo-pesantren/",
      },
      { label: "Website", href: "https://aplikasi.dqi.ac.id/beranda" },
    ],
    badges: ["Python", "Odoo 18", "ERP"],
  },
  // {
  //   id: 2,
  //   title: "Aplikasi DQI",
  //   description:
  //     "Sistem akademik berbasis web untuk mendukung manajemen sekolah Islam modern.",
  //   image: {
  //     src: "/dqi-app.png",
  //     alt: "Aplikasi DQI",
  //   },
  //   urls: [{ label: "Website", href: "https://aplikasi.dqi.ac.id" }],
  //   badges: ["Next.js", "Laravel", "Fullstack"],
  // },
];

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <div className="py-30 space-y-6">
          <Title className="text-white text-3xl md:text-5xl">My Project</Title>
          <p>Jelajahi proyek profesional yang pernah saya handle.</p>

          {/* Mapping project */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  height={300}
                  width={600}
                  className="rounded-lg"
                />
                <h2 className="text-xl md:text-2xl text-white font-semibold">
                  {project.title}
                </h2>
                <p>{project.description}</p>

                {/* Urls */}
                <div className="flex items-center gap-4 flex-wrap">
                  {project.urls.map((url, i) => (
                    <Url key={i}>
                      <a href={url.href} target="_blank">
                        {url.label}
                      </a>
                    </Url>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex gap-2 flex-wrap">
                  {project.badges.map((badge, i) => (
                    <Badge key={i}>{badge}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
