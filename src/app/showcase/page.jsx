"use client";
import Sidebar from "@/components/Sidebar";
import Development from "@/components/Development";
import Title from "@/components/Title";
import Image from "next/image";
import Url from "@/components/Url";

export default function Showcase() {
  const showcase = [
    { title: "", img: "", url: "" },
    { title: "", img: "", url: "" },
    { title: "", img: "", url: "" },
    { title: "", img: "", url: "" },
    { title: "", img: "", url: "" },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <section className="py-30 space-y-6">
          <Title>My Showcase.</Title>
          <p>See my learning project showcase.</p>
        </section>
        <section className="py-30 space-y-6">
          <div className="space-y-6">
            <h1 className="text-white text-3xl md:text-5xl">Spark Property.</h1>
            <Image alt="spark" src={"/spark.png"} height={300} width={600} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi ipsam et, iure molestiae quibusdam, alias facilis,
              praesentium non dolor voluptatem fugiat ratione dolorum. Velit
              tenetur, laborum cum est pariatur voluptatibus?
            </p>
            <Url>
              <a href="https://spark-property.vercel.app" target="_blank">
                spark-property.vercel.app
              </a>
            </Url>
          </div>
        </section>
      </main>
    </div>
  );
}
