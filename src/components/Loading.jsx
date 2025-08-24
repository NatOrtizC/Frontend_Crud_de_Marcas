"use client";

import { useAppContext } from "@/app/context/AppContext";

export default function Loading(){
    return (
        <div className="flex items-center justify-center min-h-screen space-x-2">
            <div className="w-3 h-3 bg-[#004D40] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#004D40] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-[#004D40] rounded-full animate-bounce [animation-delay:-0.6s]"></div>
        </div>
    );
} 