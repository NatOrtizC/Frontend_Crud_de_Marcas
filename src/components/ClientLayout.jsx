"use client";

import AsideBar from "@/components/AsideBar";
import { AppProvider } from "../app/context/AppContext";
import PathnameWrapper from "@/components/PathnameWrapper";
import Snackbar from "@/components/SnackBar";

export default function ClientLayout({ children }) {
  return (
    <AppProvider>
      <PathnameWrapper>
        {(pathname) => (
          <div className="flex min-h-screen">
            { pathname !== "/" && ( <AsideBar pathname={pathname} /> ) }
            
            {/* Contenido Principal */}
            <main className="flex flex-1 flex-col justify-center items-center"> {children} </main>
            
            <footer>
              <Snackbar> </Snackbar>
            </footer>
          
          </div>
        )}
      </PathnameWrapper>
    </AppProvider>
  );
}