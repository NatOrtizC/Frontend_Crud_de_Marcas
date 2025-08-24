"use client";

import { useAppContext } from "@/app/context/AppContext";
import { useEffect } from "react";

export default function Snackbar() {

  const { showSnackBar, setShowSnackBar } = useAppContext();

  useEffect(() => {
    if (!showSnackBar?.message) return;

    const timer = setTimeout(() => setShowSnackBar(null), 3000);
    return () => clearTimeout(timer);
  }, [showSnackBar]);

  if (!showSnackBar?.message) return null;

  const typeColors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  const bgColor = typeColors[showSnackBar.type] || "bg-gray-800";

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`${bgColor} text-white px-6 py-3 rounded shadow-lg animate-slideInOut`}>
        {showSnackBar.message}
      </div>

      <style jsx>{`
        @keyframes slideInOut {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }
        .animate-slideInOut {
          animation: slideInOut 3s ease forwards;
        }
      `}</style>
    </div>
  );
}
