"use client";

import AsideBar from "@/components/AsideBar";
import { AppProvider } from "../app/context/AppContext";
import PathnameWrapper from "@/components/PathnameWrapper";

export default function ClientLayout({ children }) {
  return (
    <AppProvider>
      <PathnameWrapper>
        {(pathname) => (
          <div className="flex min-h-screen">
            { pathname !== "/" && ( <AsideBar pathname={pathname} /> ) }
            
            {/* Contenido Principal */}
            <main className="flex flex-1 flex-col justify-center items-center p-6"> {children} </main>
          
          </div>
        )}
      </PathnameWrapper>
    </AppProvider>
  );
}