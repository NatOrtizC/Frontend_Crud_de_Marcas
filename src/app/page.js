"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppProvider } from "./context/AppContext";

export default function Home() {
  
  const router = useRouter();

  useEffect(
    () => router.replace("/register"),
    []
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Bienvenido 👋</h1>
        <p className="text-gray-600">Cargando aplicación...</p>
      </div>
    </div>
  ); 
}