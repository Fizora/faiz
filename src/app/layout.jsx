import { Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata = {
  title: "Fizora | Full-Stack Web Developer",
  description:
    "Portfolio Fizora, seorang full-stack web developer dengan pengalaman di Next.js, TypeScript, dan Laravel.",
  keywords:
    "Web Developer, Full Stack Developer, Next.js, React, TypeScript, Laravel, Portfolio, Fizora",
  openGraph: {
    title: "Fizora | Full-Stack Web Developer",
    description:
      "Portfolio Fizora, seorang full-stack web developer dengan pengalaman di Next.js, TypeScript, dan Laravel.",
    url: "https://fizora.vercel.app",
    siteName: "Fizora Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://fizora.vercel.app/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fizora Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizora | Full-Stack Web Developer",
    description:
      "Portfolio Fizora, seorang full-stack web developer dengan pengalaman di Next.js, TypeScript, dan Laravel.",
    site: "@fizora_twitter", // Ganti dengan akun Twitter Anda
    creator: "@fizora_twitter", // Ganti dengan akun Twitter Anda
    images: ["https://fizora.vercel.app/assets/twitter-card.jpg"], // Ganti URL gambar Twitter card yang sesuai
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${font.className} antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
