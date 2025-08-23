import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import ClientLayout from "@/components/ClientLayout";

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
        <AppProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppProvider>  
      </body>
    </html>
  );
}
