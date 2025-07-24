import Link from "next/link";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiLaravel, SiReact, SiTypescript } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { LuAArrowUp, LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="px-3 bg-[url('/pattern.svg')] bg-cover bg-center">
      <div className="mx-auto max-w-5xl min-h-screen space-y-4 text-center flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold">
          Transform Your Brand with a{" "}
          <span className="text-blue-500">Blazing-Fast, SEO-Boosted</span>{" "}
          Website that Turns Visitors into{" "}
          <span className="text-blue-500">Loyal Customers!</span>
        </h1>
        <p
          className="text-gray-700 text-base"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Unlock the power of a stunning website that not only captivates but
          also drives results. Elevate your online presence with seamless
          performance and unbeatable search rankings—start today!
        </p>
        <div className="flex items-center gap-3 text-md font-medium">
          <Link
            href="#contact"
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-white hover:bg-gray-100 transition-colors"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            Get Started Now
            <LuArrowRight />
          </Link>
          <Link
            href="#projects"
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            See My Work <MdWork />
          </Link>
        </div>
        <h1 className="font-medium text-xl text-center mt-8" data-aos="fade-up">
          My Expertise Unleashed
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
                  className="inline-flex items-center gap-2 px-4 py-2 mx-2 text-xl text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
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
