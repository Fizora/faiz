import Link from "next/link";
import { MdWork } from "react-icons/md";
import { LuAArrowUp, LuArrowRight } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="px-3  bg-cover bg-center">
      <div className="mx-auto max-w-5xl min-h-screen space-y-4  flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold">
          Ubah Bisnis Anda dengan{" "}
          <span className="text-blue-500">Website Cepat & SEO Optimal</span>{" "}
          yang Mengubah Pengunjung Menjadi{" "}
          <span className="text-blue-500">Pelanggan Setia!</span>
        </h1>
        <p
          className="text-gray-700 text-base"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          Maksimalkan potensi bisnis Anda dengan website profesional yang
          memikat dan meningkatkan penjualan. Percayakan pembuatan website Anda
          kepada saya, dan rasakan performa luar biasa serta peringkat teratas
          di mesin pencari. Jangan biarkan pesaing Anda melangkah lebih
          dulu—mulai sekarang juga!
        </p>
        <div className="flex items-center gap-3 text-md font-medium justify-start">
          <Link
            href="#projects"
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            Lihat Proyek Saya <MdWork />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            Pesan Jasa Website Sekarang <LuArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
