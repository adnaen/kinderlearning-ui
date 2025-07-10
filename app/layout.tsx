import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "@/components/shared/Header";
import Footer from "@/components/layout/Footer";
import { NavbarDemo } from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinder Learning Club",
  description: "Learn English with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header1 /> */}
        <NavbarDemo />
        <main className="min-h-screenpt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
