const stepSections = [
  {
    icon: "📝",
    title: "Memesan",
    content:
      "Konsultasi dan pemesanan website landing page sangat mudah, cukup hubungi kami dan tentukan kebutuhan Anda.",
    aosDelay: 0,
  },
  {
    icon: "💡",
    title: "Perencanaan Konsep",
    content:
      "Diskusi konsep web, pengumpulan aset (gambar/logo), deskripsi usaha, dan latar belakang bisnis Anda untuk hasil yang relevan.",
    aosDelay: 100,
  },
  {
    icon: "⚙️",
    title: "Pengerjaan Website",
    content:
      "Website mulai dikerjakan sesuai konsep dan kebutuhan, proses cepat tanpa ribet dan transparan.",
    aosDelay: 200,
  },
  {
    icon: "✅",
    title: "Konfirmasi Hasil",
    content:
      "Hasil website dikonfirmasi ke Anda, revisi jika diperlukan agar sesuai harapan.",
    aosDelay: 300,
  },
  {
    icon: "🚀",
    title: "Deployment",
    content:
      "Website langsung di-deploy dan siap digunakan untuk mendukung bisnis Anda!",
    aosDelay: 400,
  },
];

export default function Step() {
  return (
    <section
      className="mx-auto max-w-5xl px-4 py-32 bg-gradient-to-b from-white to-gray-50"
      id="step"
    >
      <h2
        className="text-4xl font-bold text-gray-900 text-center mb-12"
        data-aos="fade-up"
      >
        Step Pemesanan Website
      </h2>
      <ol className="space-y-8">
        {stepSections.map((section, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-6 relative"
            data-aos="fade-up"
            data-aos-delay={section.aosDelay}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3 text-blue-600">
                {section.icon}
              </span>
              <span className="text-lg font-semibold text-gray-800">
                {index + 1}. {section.title}
              </span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {section.content}
            </p>
          </li>
        ))}
      </ol>
      <p className="text-center text-lg mt-12 font-semibold">
        Proses pemesanan sangat mudah, cepat, dan tanpa banyak syarat. Cukup 5
        langkah, website Anda siap online!
      </p>
    </section>
  );
}
