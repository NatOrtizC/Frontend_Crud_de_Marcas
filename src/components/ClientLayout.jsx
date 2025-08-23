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
            {pathname !== "/" &&(
              <AsideBar pathname={pathname} />)}
            
            {/* Contenido Principal */}
            <div className="flex-1 flex flex-col">
              <main className="flex-1 w-full flex flex-col justify-center items-center p-6 bg-red">
                {children}
              </main>
            </div>
          </div>
        )}
      </PathnameWrapper>
    </AppProvider>
  );
}