import Link from "next/link";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiLaravel, SiReact, SiTypescript } from "react-icons/si";

export default function Hero() {
  return (
    <section className="px-3 bg-[url('/pattern.svg')] bg-cover bg-center">
      <div className="mx-auto max-w-5xl min-h-screen space-y-4 text-center flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold" data-aos="zoom-in-up">
          Make your website a Website with{" "}
          <span className="text-blue-500">fast performance</span> and{" "}
          <span className="text-blue-500">High SEO.</span>
        </h1>
        <p className="text-gray-700" data-aos="zoom-in-up" data-aos-delay="300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique
          molestias impedit quisquam qui, reiciendis ducimus amet suscipit optio
          ipsum animi! Adipisci neque ea voluptate iusto qui eius similique
          saepe.
        </p>
        <div className="flex items-center gap-3 text-md font-medium">
          <Link
            href=""
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-white"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            Order Project
          </Link>
          <Link
            href=""
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-500 text-white"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            View Work
          </Link>
        </div>
        <h1 className="font-medium text-xl text-center mt-8" data-aos="fade-up">
          My Skill
        </h1>
        <div className="marquee-wrapper mx-auto md:max-w-5xl w-full">
          <div className="marquee">
            {[...Array(2)].flatMap((_, j) =>
              [
                ["HTML", <FaHtml5 />],
                ["CSS", <FaCss3 />],
                ["JavaScript", <FaJs />],
                ["Tailwind", <RiTailwindCssFill />],
                ["TypeScript", <SiTypescript />],
                ["Laravel", <SiLaravel />],
                ["React", <SiReact />],
                ["Next.js", <RiNextjsFill />],
              ].map(([label, icon], i) => (
                <span
                  key={`${j}-${i}`}
                  className="inline-flex items-center gap-2 px-4 py-2 mx-2 text-xl text-gray-500 rounded-full"
                >
                  {label} {icon}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
