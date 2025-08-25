import Link from "next/link";
import { MdWork } from "react-icons/md";
import { LuAArrowUp, LuArrowRight } from "react-icons/lu";
import TextType from "./ui/TextType";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 md:min-h-screen flex md:items-center ">
      <div className="mx-auto max-w-7xl py-10 space-y-6" data-aos="fade-up">
        <h1 className="text-3xl md:text-6xl lg:text-8xl">
          Permudah pelanggan untuk{" "}
          <span className="text-amber-400">menemukan</span> produk Anda.
        </h1>
        <h1 className="text-3xl lg:text-7xl font-bold bg-black p-2 h-20">
          <TextType
            text={[
              "Tingkatkan Visibilitas Online",
              "Bangun Kredibilitas Bisnis",
              "Tingkatkan Jangkauan Pasar",
            ]}
            typingSpeed={70}
            className="text-black"
            pauseDuration={1400}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="mt-4 text-gray-600">
          Perluas jangkauan bisnis Anda dengan website profesional yang menarik
          dan fungsional.
        </p>
        <div className="flex  items-center gap-1">
          <a
            href=""
            className="px-6 py-2 rounded-sm border border-amber-400 bg-amber-100"
          >
            Pesan Sekarang
          </a>
          <a
            href=""
            className="px-6 py-2 rounded-sm border border-amber-400 bg-amber-400"
          >
            Proyek
          </a>
        </div>
      </div>
    </section>
  );
}
