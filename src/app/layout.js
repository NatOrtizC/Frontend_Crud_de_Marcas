import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AsideBar from "@/components/AsideBar";
import Home from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "¡Registra Tu Marca!",
  description: "Registra la marca de tus sueños",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} bg-gray-100 antialiased`}
      >
        <div className="flex min-h-screen">

          <AsideBar />

          <div className="flex flex-1 justify-center items-center p-8">
            <main className="flex flex-col gap-[32px] items-center">
              {children}
            </main>
          </div>

        </div>
      </body>
    </html>
  );
}
