import { LuCalendar } from "react-icons/lu";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Site",
    date: "23 Juli 2025",
    description:
      "A sleek, responsive portfolio built with Next.js and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Task Manager App",
    date: "20 Juli 2025",
    description:
      "A minimalist task management tool using React and local storage.",
  },
  {
    id: 3,
    title: "E-Commerce Landing Page",
    date: "18 Juli 2025",
    description:
      "A modern landing page designed for an online store with SEO optimization.",
  },
];

export default function FeaturedProject() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl shadow-blue-100 transition  duration-300 bg-white border border-gray-100 hover:border-blue-200"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100 + 100}
            >
              <img
                src="/project.png"
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
                <p className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                  <LuCalendar /> {project.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
