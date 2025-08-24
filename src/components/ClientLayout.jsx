"use client";

import AsideBar from "@/components/AsideBar";
import { AppProvider, useAppContext } from "../app/context/AppContext";
import PathnameWrapper from "@/components/PathnameWrapper";
import Snackbar from "@/components/SnackBar";
import Loading from "./Loading";
import { useLayoutEffect } from "react";

export default function ClientLayout({ children }) {
  
  const { isLoading } = useAppContext();

  return (
    <PathnameWrapper>
      {(pathname) => (
        <div className="flex min-h-screen">
          { pathname !== "/" && ( <AsideBar pathname={pathname} /> ) }
          
          {/* Contenido Principal */}
          <main className="flex flex-1 flex-col justify-center items-center">  
              { children }
          </main>
          
          <footer>
            <Snackbar/>
          </footer>
        
        </div>
      )}
    </PathnameWrapper>
  );
}