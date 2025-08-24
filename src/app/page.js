"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  
  const router = useRouter();

  useEffect(
    () => {
      const timer = setTimeout(() => router.replace("/register"), 2000);
      return () => clearTimeout(timer);
    },
    [router]
  );

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#004D40] w-full h-full">
      <motion.div
        className="text-center text-white"
        initial={{ opacity:0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo animado */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <span className="text-[#004D40] font-extrabold text-xl">M</span>
        </motion.div>
        <h1 className="text-3xl font-bold mb-2">Bienvenido 👋</h1>
        <p className="text-gray-600">Cargando aplicación...</p>

        {/* Barra de carga */}
        <div className="mt-6 w-40 mx-auto bg-white/30 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-2 bg-white rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>

      </motion.div>
    </div>
  ); 
}