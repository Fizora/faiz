"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import SplitText from "@/components/ui/SplitText";
import { Send } from "lucide-react";
import Paraf from "@/components/Paraf";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const skill = [
    { id: 1, name: "HTML5", precentage: "95%" },
    { id: 2, name: "CSS3", precentage: "87%" },
    { id: 4, name: "Javascript", precentage: "75%" },
    { id: 5, name: "Typescript", precentage: "73%" },
    { id: 6, name: "TailwindCSS", precentage: "86%" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      {/* Konten */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 overflow-y-auto">
        {/* hero */}
        <section className="space-y-6">
          <SplitText
            text="Javascript Addict."
            className="text-3xl md:text-6xl text-white font-bold"
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
        <section className="py-16 space-y-6">
          <h1 className="text-3xl md:text-5xl text-white font-semibold">
            About.
          </h1>
          <Paraf>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis
            aut soluta numquam ad, debitis accusamus accusantium quae molestias,
            amet dolores animi earum, sapiente nulla similique aliquid
            distinctio.
          </Paraf>
          <Paraf>
            Reiciendis tenetur ratione impedit illo voluptate consectetur
            consequatur aliquid, mollitia autem expedita voluptas hic itaque
            possimus cum ab id quas qui tempora!
          </Paraf>
          <Paraf>
            Distinctio, officiis quis, necessitatibus rerum harum, explicabo
            dolores commodi alias tempora dolore quae praesentium quod magnam.
          </Paraf>
        </section>

        {/* skills */}
        <section className="py-16 space-y-6">
          <h1 className="text-3xl md:text-5xl text-white font-semibold">
            My Skills.
          </h1>
          <p>
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
                  <th className="px-3 py-2 border border-zinc-700">Name</th>
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
      </main>
    </div>
  );
}
