import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
          {/* Sidebar */}
          <aside className="w-64 bg-red-200 p-4">
            <h2 className="text-xl font-bold mb-6">Panel</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <Link href="/register/new" className="block p-2 bg-red-400 text-white rounded">
                    Registro de Marca
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Contenido */}
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
