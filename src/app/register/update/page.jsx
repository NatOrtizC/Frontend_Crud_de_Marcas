"use client";

import { useAppContext } from "@/app/context/AppContext";
import RecordForm from "@/components/RecordForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function UpdateRecordContent() {
    const searchParams = useSearchParams();
    const idParam = searchParams.get("id")

    return (
        <div>
            <h1 className="text-2xl text-[#004D40] font-bold mb-6">Actualizar Registro de Marca</h1>
            <RecordForm id={idParam}></RecordForm>
        </div>
    )

}

export default function ActualizarRegistro(){

    return(
        <Suspense fallback={<div>Cargando ...</div>}>
            <UpdateRecordContent />
        </Suspense>
    );

}