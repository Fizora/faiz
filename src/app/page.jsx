"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import SplitText from "@/components/ui/SplitText";
import { Send } from "lucide-react";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Badge from "@/components/Badge";
import Url from "@/components/Url";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import TextType from "@/components/ui/TextType";
import Footer from "@/components/Footer";
import { PiBagSimpleFill } from "react-icons/pi";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // biar bisa muncul berulang
    });

    // Refresh AOS setiap kali scroll supaya animasi muncul lagi
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const about = [
    {
      paraf:
        "  I’m a full-stack application developer specializing in JavaScript and TypeScript, and I also have experience working with Laravel 12.",
      delay: 0,
    },
    {
      paraf:
        " I’m currently a 12th-grade student at a vocational high school and will graduate in 2026.",
      delay: 100,
    },
    {
      paraf:
        "In my free time, I enjoy reading books, going to the gym, coding, building projects, and running 10 km while appreciating my surroundings.",
      delay: 200,
    },
    {
      paraf:
        "My goal is to become a developer who can contribute by providing effective and efficient solutions for various needs.",
      delay: 300,
    },
    {
      paraf:
        " Feel free to follow my journey and projects on this portfolio website. If you need web services for your business or are looking to hire someone for your startup, you can reach me via email or WhatsApp!",
      delay: 400,
    },
  ];

  const language = [
    { id: 1, name: "HTML5", precentage: "95%" },
    { id: 2, name: "CSS3", precentage: "87%" },
    { id: 3, name: "Javascript", precentage: "75%" },
    { id: 4, name: "PHP", precentage: "72%" },
    { id: 5, name: "Typescript", precentage: "73%" },
    { id: 6, name: "Python", precentage: "80%" },
  ];

  const framework = [
    { id: 1, name: "TailwindCSS", precentage: "86%" },
    { id: 2, name: "React", precentage: "95%" },
    { id: 3, name: "Laravel", precentage: "84%" },
    { id: 4, name: "Express JS", precentage: "54%" },
    { id: 5, name: "Odoo 18", precentage: "68%" },
    { id: 6, name: "Hono JS", precentage: "5%" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      <Sidebar />

      {/* Konten */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        {/* hero */}
        <section className="py-30 space-y-6">
          <div className="h-30">
            <TextType
              text={["Welcome Everyone 👋", "I'm Faiz", "Software Engineer⚙️"]}
              typingSpeed={75}
              pauseDuration={1500}
              className="text-5xl"
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <span className="flex items-center gap-2 px-3 py-1  rounded-full border border-zinc-700 w-max">
            <IoLocationSharp size={15} />
            <p>East Java, Indonesia</p>
          </span>
          <p className="leading-relaxed" data-aos="zoom-in-up">
            Nama saya Faiz, saya seorang pengembang, saya sangat tertarik dengan
            JavaScript dan TypeScript. Saya akan membangun perangkat lunak yang
            bermanfaat untuk membantu banyak usaha kecil dan mikro yang
            membutuhkan situs web cepat dan berusaha menarik lebih banyak
            pelanggan.
          </p>
          {/* button and time  */}
          <div className="flex items-center gap-2">
            <Button>
              <a
                href="https://wa.me/6285235086814"
                target="_blank"
                className="flex items-center gap-2"
              >
                Contact Me
                <Send size={18} />
              </a>
            </Button>
            <Button>
              <Link href="/project" className="flex items-center gap-2">
                My Project
                <PiBagSimpleFill size={18} />
              </Link>
            </Button>
          </div>
        </section>

        {/* about */}
        <section className="py-30 space-y-6">
          <Title className="text-3xl md:text-5xl text-white font-semibold">
            About.
          </Title>
          <p>
            Saya seorang pengembang aplikasi full-stack yang berspesialisasi
            dalam JavaScript dan TypeScript, dan saya juga berpengalaman
            menggunakan Laravel 12.
          </p>
          <p>
            Saat ini saya siswa kelas 12 di sebuah sekolah menengah kejuruan dan
            akan lulus pada tahun 2026.
          </p>
          <Image
            alt="hiking in Panderman Mount"
            data-aos="zoom-in-up "
            src="/profile.jpg"
            height={100}
            width={600}
          />
          <p>
            Di waktu luang, saya senang membaca buku, pergi ke gym, coding,
            mengerjakan proyek website, dan di weekend saya olahraga lari 6-10
            km sambil menikmati lingkungan.
          </p>
          <p>
            Terkadang, pada hari-hari tertentu, saya pergi ke tempat wisata,
            seperti daki, atau pergi ke pantai bersama teman-teman.
          </p>
          <Image
            alt="My Group"
            data-aos="zoom-in-up "
            src="/hiking-group.jpg"
            height={100}
            width={600}
          />
          <p>
            Ini aku dan teman-temanku saat kami mendaki{" "}
            <span>
              <a
                href="https://maps.app.goo.gl/9BU4afDhkH281FHA8"
                className="hover:text-white cursor-pointer border-b border-zinc-400 hover:border-white transition-all duration-300"
              >
                Gunung Panderman
              </a>
            </span>
            , waktu itu saya sedang magang di UBIG Malang
          </p>
        </section>

        {/* skills */}
        <section className="py-16 space-y-6">
          <Title className="text-3xl md:text-5xl text-white font-semibold">
            Skills.
          </Title>
          <p data-aos="zoom-in-up">
            Keahlian saya meliputi bahasa pemrograman dan framework yang saya
            gunakan, anda bisa lihat apa saja bahasa pemrograman dan Framework
            yang saya pelajari serta persentase pemahaman saya
          </p>

          {/* tabel responsif */}

          <div className="space-y-6">
            <div className="pt-10 space-y-6">
              <Subtitle>Bahasa Pemrograman</Subtitle>
              <p>Bahasa Pemrograman yang saya gunakan</p>
            </div>
            <table
              data-aos="zoom-in-up"
              className="w-full border-collapse bg-zinc-900 border border-zinc-700 text-sm md:text-base"
            >
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    ID
                  </th>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    Language
                  </th>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {language.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.id}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.name}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.precentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-6">
            {/* framework */}
            <div className="space-y-6">
              <Subtitle>Framework</Subtitle>
              <p>Framework yang saya gunakan</p>
            </div>
            <table
              data-aos="zoom-in-up"
              className="w-full border-collapse bg-zinc-900 border border-zinc-700 text-sm md:text-base"
            >
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    ID
                  </th>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    Framework
                  </th>
                  <th className="px-3 py-2 border border-zinc-700 cursor-default">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {framework.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.id}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.name}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700 hover:text-amber-800 transition-all duration-300 cursor-default">
                      {item.precentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Experience */}
        <section className="py-30 space-y-6">
          <div className="space-y-4" data-aos="zoom-in-up" data-aos-delay="100">
            <Title>Experience.</Title>
            <p>Jelajahi jejak pengalaman saya</p>

            {/* experience #1 */}
            <div className="space-y-6 py-3">
              <Subtitle>April - Present 2025</Subtitle>
              {/* Url */}
              <div className="flex items-center flex-wrap gap-4 ">
                <Url>
                  <a href="https://aplikasi.dqi.ac.id" target="_blank">
                    aplikasi.dqi.ac.id
                  </a>
                </Url>
                <Url>
                  <a
                    href="https://odoo-pesantren.gitbook.io/odoo-pesantren/"
                    target="_blank"
                  >
                    odoo-pesantren.gitbok.io
                  </a>
                </Url>
                <Url>
                  <a href="https://ubig.co.id" target="_blank">
                    ubig.co.id
                  </a>
                </Url>
              </div>
              {/* explain */}
              <p>
                Mengembangkan dan memelihara sistem manajemen Sekolah Islami di
                UBIG, menjabat sebagai pemimpin teknis dalam tim manajemen, dan
                mengembangkan serta memimpin divisi teknis Odoo Pesantren.
              </p>
              <Image
                alt="odoo pesantren"
                src="/odoo-pesantren.png"
                height={100}
                width={600}
              ></Image>
              {/* category badge stack and company */}
              <div className="flex items-center gap-2">
                <Badge>Python</Badge>
                <Badge>Odoo 18</Badge>
                <Badge>Internship</Badge>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
