"use client";

import { createContext, useContext, useState } from "react";

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
    
    const [showSnackBar, setShowSnackBar] = useState(null);
    
    const value = { recordStatus, recordFormSteps, showSnackBar, setShowSnackBar }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);