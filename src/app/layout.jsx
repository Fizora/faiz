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
    "Fizora Full Stack Developer",
    "Fizora",
    "Fizora Jember",
  ],
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
