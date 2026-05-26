import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Study Nook - Home",
  description: " Library Study Room Booking",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="
      min-h-full flex flex-col bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827] text-[#F8FAFC]">
        <main className="container mx-auto px-4 md:px-8 lg:px-12">
          <Navbar />
          {children}


        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
