"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";

export default function Service() {
  const [isSaturday, setIsSaturday] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDay(); // 0 = Minggu, 6 = Sabtu
    if (day === 6) {
      setIsSaturday(true);

      // Hitung sisa waktu sampai 23:59:59
      const endOfDay = new Date(today);
      endOfDay.setHours(23, 59, 59, 999);

      const updateCountdown = () => {
        const now = new Date();
        const diff = endOfDay - now;

        if (diff <= 0) {
          setTimeLeft("Promo berakhir");
          return;
        }

        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft(`${hours}j ${minutes}m ${seconds}d`);
      };

      updateCountdown();
      const timer = setInterval(updateCountdown, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  const pricingPlans = [
    {
      name: "Started",
      price: 500000,
      features: [
        "Landing Page Sederhana",
        "Desain Responsif (Mobile Friendly)",
        "1x Revisi",
        "Gratis Hosting (subdomain vercel.app)",
        "Selesai 2-3 Hari",
        "Cocok untuk UMKM Pemula",
      ],
      whatsapp: "https://wa.me/6285235086814",
    },
    {
      name: "Standard",
      price: 1500000,
      features: [
        "Company Profile Website",
        "SEO Dasar (judul & deskripsi di Google)",
        "3x Revisi",
        "Selesai 5-7 Hari",
        "Bisa Pakai Domain & Hosting Sendiri",
        "Cocok untuk Usaha yang ingin terlihat Profesional",
      ],
      whatsapp: "https://wa.me/6285235086814",
    },
    {
      name: "Pro",
      price: 3000000,
      features: [
        "E-Commerce / Custom System",
        "SEO Lanjutan",
        "Unlimited Revisi (1 Bulan)",
        "Free Setup Hosting + Domain",
        "Cocok untuk Usaha yang ingin Jualan Online",
      ],
      whatsapp: "https://wa.me/6285235086814",
    },
  ];

  const formatRupiah = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);

  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400">
        <section className="py-30 space-y-6">
          <Title>Services</Title>
          <p className="mb-10">
            Saya menjual jasa pembuatan website yang cepat, mudah, dan
            fleksibel. Pilih paket sesuai kebutuhan usaha Anda dan pesan
            langsung via WhatsApp!
          </p>

          {/* Banner Promo */}
          {isSaturday && (
            <div className="bg-green-600 text-white  text-center py-3 rounded-xl shadow-lg mb-6">
              🎉 Promo Spesial Sabtu! Diskon 15% Berlaku Hari Ini 🎉 <br />
              <span className="text-sm">Berakhir dalam: {timeLeft}</span>
            </div>
          )}

          {/* Pricing Cards */}
          <div className="space-y-6">
            {pricingPlans.map((plan) => {
              const discountedPrice = isSaturday
                ? plan.price * 0.85
                : plan.price;

              return (
                <div
                  key={plan.name}
                  className="border border-zinc-700 bg-zinc-900 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{plan.name}</h2>
                    <p className="text-3xl font-bold mt-2">
                      {isSaturday ? (
                        <>
                          <span className="line-through text-zinc-500 text-lg mr-2">
                            {formatRupiah(plan.price)}
                          </span>
                          <span className="text-green-400">
                            {formatRupiah(discountedPrice)}
                          </span>
                        </>
                      ) : (
                        formatRupiah(plan.price)
                      )}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="text-green-400">✔</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={plan.whatsapp}
                    target="_blank"
                    className="mt-6 block text-center border border-zinc-700 hover:bg-zinc-950 hover:text-white py-2 px-4 rounded-sm bg-green-500 text-black transition"
                  >
                    Hubungi via WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}
