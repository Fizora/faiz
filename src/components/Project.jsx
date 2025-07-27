import Image from "next/image";
import { LuCalendar } from "react-icons/lu";

const projects = [
  {
    id: 1,
    img: "/project.png",
    title: "Fizoraa - My Official Portfolio",
    description:
      "A stunning portfolio showcase built with Next.js and Tailwind CSS.",
    date: "23/07/2025",
  },
  {
    id: 2,
    img: "/project.png",
    title: "Save Time - Task Management Automation",
    description: "An innovative task management app with real-time updates.",
    date: "26/07/2025",
  },
];

export default function Project() {
  return (
    <section className="px-4 min-h-screen bg-[url('/pattern.svg')] bg-cover bg-center py-16">
      <div className="mx-auto max-w-5xl">
        <h1
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          data-aos="fade-up"
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-5 md:gap-10 lg:gap-20">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-gray-950 text-white rounded-2xl p-2 shadow-lg shadow-blue-100 hover:shadow-xl space-y-3"
              data-aos="zoom-in-up"
              data-aos-delay={item.id * 100}
            >
              <div className="relative w-full h-96 mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover "
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 text-sm line-clamp-2">
                {item.description}
              </p>
              <span className="flex items-center gap-2">
                <LuCalendar />
                <p>{item.date}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
