"use client";

import RecordForm from "@/components/RecordForm";
import { useSearchParams } from "next/navigation";

export default function ActualizarRegistro(){

    const searchParams = useSearchParams();
    const idParam = searchParams.get("id")

    return (
        <div>
            <h1 className="text-2xl text-[#004D40] font-bold mb-6">Actualizar Registro de Marca</h1>
            <RecordForm id={idParam}></RecordForm>
        </div>
    )
}