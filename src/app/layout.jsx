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
  keywords: [
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Fizora" }],
  openGraph: {
    title: "Fizora | Full-Stack Web Developer",
    description:
      "Portfolio Fizora, seorang full-stack web developer dengan pengalaman di Next.js, TypeScript, dan Laravel.",
    url: "https://fizora.dev", // ganti dengan domain kamu
    siteName: "Fizora Portfolio",
    images: [
      {
        url: "/og-image.png", // pastikan file ini ada di /public
        width: 1200,
        height: 630,
        alt: "Fizora Portfolio Website",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fizora | Full-Stack Web Developer",
    description:
      "Portfolio Fizora, seorang full-stack web developer dengan pengalaman di Next.js, TypeScript, dan Laravel.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fizora.dev", // ganti dengan domain kamu
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
