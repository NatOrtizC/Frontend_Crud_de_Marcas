// Pantalla #1 (Listado)

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getRecords } from "@/services/recordsServices";
import { useRouter } from "next/navigation";

export default function RegistroPage() {

  const [records, setRecords] = useState([]);
  const router = useRouter();
  const handlenewRecords = () => router.push("/register/new")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRecords();
        console.log(result);
        setRecords(result); // si quieres guardar los registros
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registra Tu Marca</h1>

      <Link href="/register/new">
        <button onClick={handlenewRecords} className="bg-red-500 text-white px-4 py-2 rounded mb-6 cursor-pointer">
          <span className="text-xl font-bold"> + </span>
          <span>Nuevo Registro</span>
        </button>
      </Link>

      <table className="w-full border">
        <thead>
          <tr className="bg-red-100">
            <th className="p-2 border">N° de Registro</th>
            <th className="p-2 border">Marca</th>
            <th className="p-2 border">Titular</th>
            <th className="p-2 border">País</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{r.brand}</td>
              <td className="border p-2">{r.holder}</td>
              <td className="border p-2">{r.country}</td>
              <td className="border p-2">{r.status}</td>
              <td className="border p-2">
                <div className="flex flex-col gap-2">
                  <button className="
                    w-full px-3 py-1 rounded-lg 
                    bg-red-500 text-white text-sm font-medium 
                    hover:bg-red-600 shadow-sm transition
                  ">
                    Eliminar
                  </button>
                  <button className="
                    w-full px-3 py-1 rounded-lg 
                    bg-blue-500 hover:bg-blue-600 text-white text-white text-sm font-medium 
                    hover:bg-blue-600 shadow-sm transition
                  ">
                    Actualizar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}