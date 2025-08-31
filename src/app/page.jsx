"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import SplitText from "@/components/ui/SplitText";
import { Send } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-between mx-auto max-w-4xl">
      <Sidebar />
      <div className="overflow-y-auto min-h-screen w-3/4 text-zinc-500">
        <section className="py-30 space-y-6">
          <SplitText
            text="Javascript Addict."
            className="text-3xl md:text-6xl text-white "
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
          <p data-aos="fade-up">
            My name is Faiz, I am a developer, I am very addicted to JavaScript
            and Typescript, I will build useful and beneficial software to help
            many small and micro businesses, that need a fast website and try to
            attract more and more customers.
          </p>
          <Button>
            <a href="" className="flex items-center gap-2">
              Contact Me
              <Send size={18} />
            </a>
          </Button>
        </section>

        {/* about */}
        <section className="py-30 space-y-6">
          <h1 className="text-3xl md:text-6xl text-white">About.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            facilis aut soluta numquam ad, debitis accusamus accusantium quae
            molestias, amet dolores animi earum, sapiente nulla similique
            aliquid distinctio reiciendis quam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            tenetur ratione impedit illo voluptate consectetur consequatur
            aliquid, mollitia autem expedita voluptas hic itaque possimus cum ab
            id quas qui tempora!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctio, officiis quis, necessitatibus rerum harum, explicabo
            dolores commodi alias tempora dolore quae praesentium quod magnam.
            Exercitationem reiciendis aliquam architecto aliquid nulla!
          </p>
        </section>

        {/* skills */}
        <section className="py-30 space-y-6">
          <h1 className="text-3x; md:text-6xl text-white">My Skills.</h1>
        </section>
      </div>
    </div>
  );
}
