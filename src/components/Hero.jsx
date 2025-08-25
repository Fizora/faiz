import Link from "next/link";
import { MdWork } from "react-icons/md";
import { LuAArrowUp, LuArrowRight } from "react-icons/lu";
// import TextType from "./ui/TextType";
import FuzzyText from "./ui/FuzzyText";

export default function Hero() {
  return (
    // <section className="px-4 py-8 sm:px-6 md:px-8 bg-cover bg-center min-h-screen flex items-center">
    //   <div className="mx-auto max-w-5xl py-10 space-y-6">
    //     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
    //       <TextType
    //         text={["Text typing effect", "for your websites", "Happy coding!"]}
    //         typingSpeed={75}
    //         className="text-black"
    //         pauseDuration={1500}
    //         showCursor={true}
    //         cursorCharacter="|"
    //       />
    //     </h1>
    //     <p className="mt-4 text-sm sm:text-base md:text-lg">
    //       Di era digital sekarang sangat penting untuk memiliki landing page
    //       site untuk usaha kita, agar lebih mudah ditemukan dan pelanggan hanya
    //       perlu membaca informasi terkait usaha dan apa yang kita jual.
    //     </p>
    //     <div className="flex items-center gap-3">
    //       <a href="">Pesan sekarang</a>
    //       <a href="">Lihat Proyek</a>
    //     </div>
    //   </div>
    // </section>

    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black">
      <h1 className="md:text-6xl font-bold text-white mb-4">
        <FuzzyText>404</FuzzyText>
      </h1>
      <p>
        <FuzzyText>Development.</FuzzyText>
      </p>
    </section>
  );
}
