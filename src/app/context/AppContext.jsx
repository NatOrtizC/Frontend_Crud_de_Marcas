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

    const recordFormSteps = [
        "Información de la Marca", 
        "Información del Titular", 
        "Información del País de la Marca", 
        "Estado del Registro de Marca", 
        "Resumen"
    ];

    const value = { recordStatus, recordFormSteps }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);