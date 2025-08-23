"use client";

import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const recordStatus = [
        "Pendiente",
        "En Proceso",
        "Completado",
        "Cancelado"
    ]

    const value = {
        "recordStatus": recordStatus
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);