import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import SocialSidebar from "@/components/layout/SocialSidebar";
import Footer from "@/components/layout/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gloria Djonret · Software Engineer",
  description:
    "Portfolio of Gloria Djonret — software engineer crafting resilient systems, experience-led solutions, and delightful product interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased bg-[#020617] text-slate-100`}>
        <div className="relative min-h-screen overflow-hidden">

          <Navbar />
          <SocialSidebar />
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
