const stepSections = [
  {
    title: "📞 Hubungi Kami",
    content:
      "Cukup Chat WhatsApp kami di nomor +62 812-3456-7890 atau klik tombol Kontak di Navbar, anda akan langsung terhubung dengan kami.",
    aosDelay: 0,
  },
  {
    title: "📄 Perencanaan Website",
    content:
      "Diskusi konsep web, pengumpulan aset (gambar/logo), deskripsi usaha, dan latar belakang bisnis Anda untuk hasil yang relevan.",
    aosDelay: 100,
  },
  {
    title: "🧑‍💻 Proses Pembuatan",
    content:
      "Website mulai dikerjakan sesuai konsep dan kebutuhan, proses cepat tanpa ribet dan transparan.",
    aosDelay: 200,
  },
  {
    title: "⚙️ Review & Revisi",
    content:
      "Hasil website dikonfirmasi ke Anda, revisi jika diperlukan agar sesuai harapan.",
    aosDelay: 300,
  },
  {
    title: "🚀 Peluncuran Website",
    content:
      "Website langsung di-deploy dan siap digunakan untuk mendukung bisnis Anda!",
    aosDelay: 400,
  },
];

export default function Step() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-32 bg-gradient-to-b from-white to-gray-50"
      id="step"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-12" data-aos="fade-up">
        Tertarik?, pesan <span className="bg-amber-400 px-2">Sekarang </span>
      </h2>
      <p className="text-gray-600 mt-12 max-w-xl">
        Proses pemesanan sangat mudah, cepat, dan tanpa banyak syarat. Cukup 5
        langkah, website Anda siap online!
      </p>

      <div className="px-3 flex flex-col gap-10 my-20">
        {stepSections.map((item) => (
          <>
            <div data-aos-delay={item.aosDelay}>
              <div
                className=" py-10 space-y-3 px-3 rounded-sm bg-gradient-to-br from-amber-50 to-white shadow-xl shadow-gray-100"
                data-aos="fade-up"
              >
                <h2 className="text-2xl text-amber-600">{item.title}</h2>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
