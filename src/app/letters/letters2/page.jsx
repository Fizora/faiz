"use client";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";
import { ArrowLeft } from "lucide-react";

export default function Letters2() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400 ">
        <section className="py-30 space-y-6">
          <Link
            href={"/letters"}
            className="flex items-center gap-2 hover:text-white"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
          <div className="py-10 space-y-6">
            <h1 className="text-white text-3xl md:text-5xl">
              How I learning Programming?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem consectetur vitae magni laborum placeat vero, nisi debitis
              nulla perferendis non. Hic rerum vitae non reprehenderit. Nemo
              voluptatum ullam qui. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. In, debitis est. Odit recusandae facere vitae in
              iusto corporis! Dolorum odio vitae doloribus esse commodi mollitia
              at, veritatis optio pariatur non?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem consectetur vitae magni laborum placeat vero, nisi debitis
              nulla perferendis non. Hic rerum vitae non reprehenderit. Nemo
              voluptatum ullam qui.
            </p>

            <p>
              <Image
                alt="my vs-code"
                data-aos="fade-up "
                src="/vscode.png"
                height={100}
                width={600}
              ></Image>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem consectetur vitae magni laborum placeat vero, nisi debitis
              nulla perferendis non. Hic rerum vitae non reprehenderit. Nemo
              voluptatum ullam qui.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              consectetur accusantium. Nulla eligendi repellendus iure placeat
              veniam assumenda repellat consequuntur ratione soluta sequi nihil,
              alias officiis, sapiente totam ad odio?
            </p>
          </div>
          <p>
            <Image
              alt="scrum sprint method"
              data-aos="fade-up "
              src="/scrum-sprints.jpg"
              height={100}
              width={600}
            ></Image>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            itaque nemo sequi dolore, exercitationem quod placeat accusantium,
            tempora quisquam ut porro saepe. Fugiat voluptatem aliquam nam
            quidem ipsum itaque magnam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            explicabo, asperiores laborum iusto eaque repellat illum!
            Laudantium, culpa molestiae assumenda eos id est repellendus natus
            ipsam facere consectetur! Accusantium, nam.
          </p>
        </section>
      </main>
    </div>
  );
}
