"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";

export default function Letters1() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-4xl mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-4 md:px-10 py-10 text-zinc-400  geist">
        <section className="py-30 space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href={"/letters"}
              className="flex items-center gap-2 hover:text-white"
            >
              <ArrowLeft size={20} />
              Back
            </Link>
            <span>September 2, 2025</span>
          </div>
          <div className="py-10 space-y-6">
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-20">
              4 Kesalahan yang gua lakukan sebagai pengembang
            </h1>
            <p>
              Disclaimer gua membagikan cerita ini untuk berbagi pandangan dan
              proses belajar gua !!
            </p>
            <p>
              Di dalam artikel pertama ini, gua akan memberikan lu 4 kesalahan
              yang gua lakukan sebagai pengembang pemula selama 3 tahun gua
              belajar pemrograman sampai gua sadar ketika gua memasuki dunia
              magang.
            </p>
            <Subtitle>1. Copy paste tanpa review ulang.</Subtitle>
            <p>
              Mungkin udah dengar dari banyak influencer besar seperti WPU, Dea
              Afrizal, dan programmer zaman now dan artikel online lainnya,
              bahwa kesalahan pemula adalah copy paste kode dari internet tanpa
              mempelajari cara kerjanya, dan yah itu benar.
            </p>
            <Image
              src={"/letters/letters1/copas.jpg"}
              alt="coding"
              height={300}
              width={600}
            />
            <p>
              Gua mengalami apa yang fase dimana dulu ketika gua sudah kenal
              chatGPT gua mulai terlena dan membuat sistem asal-asalan dengan
              vibe coding tanpa mempelajari kodenya, yang gua pikiran{" "}
              <i>"ya yang penting websitenya jadi dan ya sudahlah "</i>
            </p>
            <p>
              dan ketika gua melakukan hal tersebut gua berpikir bahwa itu hal
              biasa namun itu sebenarnya kesalahan fatal yang gua perbuat.
            </p>
            <p>
              Gua mengalami penurunan kepercayaan diri karena melihat
              teman-teman sebaya gua yang bisa membuat crud tanpa bantuan
              chatGPT secara keseluruhan, sedangkan gua masih mengalami
              kebingungan apabila tidak dengan bantuan ai.
            </p>
            <p>
              Tips dariku adalah cobalah untuk berpikir kritis dan coba
              selesaikan masalah tanpa ai, bahkan sekalipun menggunakan ai
              cobalah untuk memahami cara kerja kode tersebut, menggunakan ai
              bukan berarti salah.
            </p>
            <p>
              Tapi itu memang suatu keharusan di era sekarang yang semuanya
              butuh efisiensi dan adaptasi cepat, tapi kalau hanya bermodal
              copas kita tidak bisa problem solving sendiri ketika tidak ada
              internet atau memecahkan masalah yang terjadi akibat kode yang
              asal kita paste .
            </p>
            <Subtitle>2. Minder & Membandingkan diri.</Subtitle>
            <Image
              src={"/letters/letters1/compare.jpg"}
              alt="self comparison"
              height={300}
              width={600}
            />
            <p>
              Pernah gak sih lu ngerasa kalau lu gk berkembang atau temenlu kok
              kayaknya cepet banget belajarnya, dan lu berpikir.
            </p>
            <p>
              <i>"apa guanya aja ya yang lemot", " apa yang salah dari gua"</i>
            </p>
            <p>
              Ya mungkin dari sebagian kalian pernah ngalaminnya, nah ini adalah
              salah satu dari kesalahan gua, yaitu gua terlalu minder dan
              pesimis akan skill gua, dan gua menganggap bahwa kenapa kok diriku
              stagnan dan lainnya kok berkembang.
            </p>
            <p>
              situasi ini ngebuat gua ngerasa gk berkembang, padahal proses
              pemahaman dan pembelejaran orang itu berbeda-beda, dan sebenarnya
              kita itu berkembang cuman karena ketutupan dengan pandangan bahwa
              orang lain jauh di atas kita dan rasio perbandingan yang gk
              rasional.
            </p>
            <p>
              Seharusnya kita menyikapi emosi dan pola pikir ini dengan bijak
              yaitu memahami bahwa memang proses belajar orang berbeda dan kita
              harus enjoy dengan perjalanan kita sendiri.
            </p>
            <p>
              Terima perasaan negatif tapi telah apakah ada yang salah dari
              proses belajarku, apa akunya kurang belajar atau memang proses
              pemahaman gua dan dia aja yang berbeda, dan jangan benci dengan
              orang yang lebih hebat dari kita, justru gali ilmu dan tanyain,
              "lu kok cepet banget sih pahamnya, gimana cara lu belajar?"
            </p>
            <p>
              gua yakin pasti setiap orang ada masa dimana mereka ngerasa
              stagnan dan gk berkembang tapi cobalah untuk inrospeksi dan cari
              tahu solusi dan tidak diam dalam situasi yang ngerasa diri lo
              rendah diri, cobalah untuk memahami emosi negatif dan terus
              berusaha buat lebih baik gpp 1% setiap hari tapi setidaknya lebih
              baik.
            </p>
            <p>
              Ingat,
              <i>
                "Hidup itu marathon bukan sprint, jadi nikmati jalannya dan
                jangan bandingkan diri lu dengan siapapun."
              </i>
            </p>
            <Subtitle>3. Terlalu banyak mengeluh.</Subtitle>
            <p>
              Ya mengeluh ke sesuatu hal apapun konteksnya memang gk baik,
              ngeluh dengan bug, dan kondisi yang dialami gk bakal bikin bug itu
              selesai, dan sebelum kita ngeluh alangkah baiknya kita berusaha
              dulu cari solusi di internet coba baca ulang kodenya ada yang
              salah atau gk atau ada hal lain yang bikin kode gk jalan.
            </p>
            <Image
              src={"/letters/letters1/angry.jpg"}
              alt="sigh"
              height={300}
              width={600}
            />
            <p>
              Usahakan sebelum tanya ke orang udah coba sendiri, lakukan trial
              and error sampai lu bener-bener kepentok baru lu minta bantuan ke
              ornag yang lebih jago dari lu, misal di forum-forum banyak sekali
              kaya sekedar file json salah tulis, kesalahan run npm atau hal
              basiC.
            </p>
            <p>
              Seharusnya bisa di solve dengan trial and error dan cari
              dokumentasi resmi atau tips di internet baru tanya di forum
              komunitas, dan belum apa-apa udah tanya ke orang.
            </p>
            <p>
              bagaimana lu bisa berkembang kalau ketemu masalah kecil lu udah
              ngeluh dan lempar ke orang yang lebih jago dari lu, gk akan pernah
              berkembang kalau hnaya ngeluh dan gk coba solve sendiri, karena
              kita sebagai programer harus bisa solve itu.
            </p>
            <Subtitle>4. Belajar dengan cara yang gk Terstruktur</Subtitle>
            <p>
              Ketika awal gua belajar gua hanya nonton dan yaudah gua praktekin,
              efektif ya efektif tapi ketiak gau masuk fase diamana gua minder
              nah itu jadi sesuatu dimana gua berkompetisi dan merasa harus
              cepat belajar.
            </p>
            <p>
              banyak tutorial gua lahap tapi stagnanan karena gua lupa esensi
              belajar gua hanya banyak nonton video dan terjebak tutorial hell,
              gk nikmati proses dan terkesan pengen cepet bisa, dan larinya ke
              vibe coding buat terlihat oke, dan ya itu jadi siklus setan yang
              gua alami .
            </p>
            <p>
              tapi gua mau kalian tahu best learning yang gua gunakan dan work
              adalah kalian nonton videonya dulu lalu langsung pause dan
              praktekin, sehingga kalian bisa langsung paham cara kerja dan
              mekanisme kodenya kenapa sintaksnya seperti itu.
            </p>
            <Image
              src={"/letters/letters1/scrum-sprints.jpg"}
              alt="scrum SDLC"
              height={300}
              width={600}
            />
            <p>
              kalian bisa bikin rancangan terstruktur, caranya mudah cuman butuh
              4 step
            </p>
            <ul>
              <li>
                1. Buat rencana dan riset kebutuhan sistem yang kalian mau buat
                (suruh aja ai berperan pelaanggan bantu buat rancangan kebutuhan
                fiktif).
              </li>
              <br />
              <li>
                2. Lanjutkan rancangan ke dalam proses design sistem, bisa lewat
                tldraw atau excalidraw buat flow yang simpel buat kalian,
                setelahnya buat desain dengan figma.
              </li>
              <br />
              <li>
                3. implementasikan hasil dari rencana kalian untuk coding
                sehingga(gk ada alasan buat gk nyelesain proyek yang kalian
                mulai karena rencananya jelas dan gk asal coding).
              </li>
              <br />
              <li>
                4. Kalian bisa deploy mau itu ke vercel atau github, kalian bisa
                buat hasil proyek kalian jadi portfolio
              </li>
            </ul>
            <p>
              Nah 4 step di atas cuman penyederhanaan dari agile dan scrum yang
              seharusnya, requirements gathering, design, coding, testing dan
              dpeloy, tapi kita persempit buat proyek simpel. biar gk bingung.
            </p>
            <p>
              {" "}
              ketika udah mulai ngoding tapi bingung buat apa jadiin ai buat
              jadi pelanggan yang ngasih kebutuhannya lalu kita catat kebutuhan
              dan priroitas fitur yang mau dibuat, buat alur penggunaan sistem
              mulai dari login misal, masuk dahsboard, pemesanan, baru
              implementasikan dengan ngoding, jadi kita punya tujuan jelas dan
              belajar kita efektif.{" "}
            </p>

            <p>thank you yang udah baca 💓, semoga bermanfaat !!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
