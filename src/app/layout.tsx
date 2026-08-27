import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NorthStar Digital Solutions — Custom Software, Built & Hosted",
  description:
    "NorthStar Digital Solutions builds practical software for South African businesses and runs it for you on AWS — so you get a live product, not just a codebase.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${hankenGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
