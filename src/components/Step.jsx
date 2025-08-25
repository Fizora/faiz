const aboutSections = [
  {
    icon: "🎨", // Ikon modern yang relevan
    title: "My Passions",
    content:
      "I thrive on exploring cutting-edge technologies, crafting mini projects, and diving into startup insights. Weekends are for sketching and nature hikes to recharge.",
    aosDelay: 0,
  },
  {
    icon: "💻", // Ikon untuk perjalanan pengembang
    title: "Development Path",
    content:
      "I craft high-performance websites with React, Next.js, and Tailwind CSS, while expanding my skills into backend technologies like Node.js and MongoDB.",
    aosDelay: 100,
  },
  {
    icon: "🌱", // Ikon untuk kehidupan di luar kode
    title: "Beyond the Code",
    content:
      "Outside coding, I journal my thoughts, study psychology, and seek life balance—fueling creativity and sharp problem-solving.",
    aosDelay: 200,
  },
];

export default function About() {
  return (
    <section
      className="mx-auto max-w-5xl px-4 py-40 bg-gradient-to-b from-white to-gray-50"
      id="about"
    >
      <h2
        className="text-4xl font-bold text-gray-900 text-center mb-16 tracking-tight"
        data-aos="fade-up"
      >
        About Me
      </h2>
      <div className="grid gap-1 md:grid-cols-2 ">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className="group   p-6 bg-white hover:bg-blue-50 transition-all duration-300 border border-blue-200 hover:border-blue-200"
            data-aos="zoom-in-up"
            data-aos-delay={section.aosDelay}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3 text-blue-600">
                {section.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
