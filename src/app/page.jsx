"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import SplitText from "@/components/ui/SplitText";
import { Send } from "lucide-react";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Badge from "@/components/Badge";
import Link from "@/components/Link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
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

  const skill = [
    { id: 1, name: "HTML5", precentage: "95%" },
    { id: 2, name: "CSS3", precentage: "87%" },
    { id: 3, name: "Javascript", precentage: "75%" },
    { id: 4, name: "PHP", precentage: "72%" },
    { id: 5, name: "Typescript", precentage: "73%" },
    { id: 6, name: "Python", precentage: "80%" },
    { id: 7, name: "TailwindCSS", precentage: "86%" },
    { id: 8, name: "React", precentage: "95%" },
    { id: 9, name: "Laravel", precentage: "84%" },
    { id: 10, name: "Odoo 18", precentage: "68%" },
    { id: 11, name: "Express JS", precentage: "54%" },
    { id: 12, name: "Hono JS", precentage: "5%" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      <Sidebar />

      {/* Konten */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 overflow-y-auto">
        {/* hero */}
        <section className="py-30 space-y-6">
          <SplitText
            text="Welcome Guys👋"
            className="text-3xl md:text-5xl text-white font-bold"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="leading-relaxed" data-aos="fade-up">
            My name is Faiz, I am a developer, I am very addicted to JavaScript
            and Typescript. I will build useful software to help many small and
            micro businesses that need a fast website and try to attract more
            customers.
          </p>
          <Button>
            <a href="#contact" className="flex items-center gap-2">
              Contact Me
              <Send size={18} />
            </a>
          </Button>
        </section>

        {/* about */}
        <section className="py-30 space-y-6">
          <Title className="text-3xl md:text-5xl text-white font-semibold">
            About.
          </Title>
          {about.map((item) => (
            <div data-aos="fade-up" data-aos-delay={item.delay} className="">
              <p>{item.paraf}</p>
            </div>
          ))}
        </section>

        {/* skills */}
        <section className="py-16 space-y-6">
          <Title className="text-3xl md:text-5xl text-white font-semibold">
            Skills.
          </Title>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam soluta quo aperiam suscipit consequatur praesentium id
            earum corporis facilis.
          </p>

          {/* tabel responsif */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-900 border border-zinc-700 text-sm md:text-base">
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-3 py-2 border border-zinc-700">ID</th>
                  <th className="px-3 py-2 border border-zinc-700">
                    Language/Framework
                  </th>
                  <th className="px-3 py-2 border border-zinc-700">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {skill.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="px-3 py-2 border border-zinc-700">
                      {item.id}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700">
                      {item.name}
                    </td>
                    <td className="px-3 py-2 border border-zinc-700">
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
          <div className="space-y-4">
            <Title>Experience.</Title>
            <p>explore the history of my experience.</p>
            <Subtitle>April-Oktober 2025</Subtitle>
            <p>
              Develop and maintain the school institution's web management
              system, become a tech lead in the management team, and develop and
              head the technical division of Odoo Pesantren
            </p>
            <div className="flex items-center gap-4">
              <Link>
                <a href="https://aplikasi.dqi.ac.id" target="_blank">
                  aplikasi.dqi.ac.id
                </a>
              </Link>
              <Link>
                <a
                  href="https://odoo-pesantren.gitbook.io/odoo-pesantren/"
                  target="_blank"
                >
                  odoo-pesantren.gitbok.io
                </a>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Badge>Python</Badge>
              <Badge>Odoo 18</Badge>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
