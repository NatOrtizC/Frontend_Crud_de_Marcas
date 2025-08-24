// Pantalla #1 (Listado)

"use client";
import { useEffect, useState } from "react";
import { deleteRecords, getRecords } from "@/services/recordsServices";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/AppContext";

export default function RegistroPage() {

  const [records, setRecords] = useState([]);
  const router = useRouter();
  
  const handlenewRecords = () => router.push("/register/new")
  const handleEditRecords = (id) => router.push(`/register/update?id=${id}`)

  const { recordStatus, setShowSnackBar } = useAppContext();

  const deleteRecord = ({ id }) => {
      deleteRecords({ id });
      setRecords(prev => prev.filter((r) => r.id !== id));
      setShowSnackBar({ message: "Eliminado Con Exito", type: "error" });
  }

  const getLabelStatus = (status) => {
    return recordStatus[status];
  }

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
      <h1 className="text-2xl text-[#004D40] font-bold mb-4">Registra Tu Marca</h1>

      <button onClick={handlenewRecords} className="bg-[#004D40] text-white px-4 py-2 rounded mb-6 cursor-pointer">
        <span className="text-xl font-bold"> + </span>
        <span>Nuevo Registro</span>
      </button>

      <table className="w-full border-4 border-[#004D40]">
        <thead>
          <tr className="bg-[#004D40]">
            <th className="p-2 text-white border-4 border-[#004D40]">N° de Registro</th>
            <th className="p-2 text-white border-4 border-[#004D40]">Marca</th>
            <th className="p-2 text-white border-4 border-[#004D40]">Titular</th>
            <th className="p-2 text-white border-4 border-[#004D40]">País</th>
            <th className="p-2 text-white border-4 border-[#004D40]">Estado</th>
            <th className="p-2 text-white border-4 border-[#004D40]">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td className="border-4 border-[#004D40] p-2">{r.registration_number}</td>
              <td className="border-4 border-[#004D40] p-2">{r.brand}</td>
              <td className="border-4 border-[#004D40] p-2">{r.holder}</td>
              <td className="border-4 border-[#004D40] p-2">{r.country}</td>
              <td className="border-4 border-[#004D40] p-2">{getLabelStatus(r.status)}</td>
              <td className="border-4 border-[#004D40] p-2">
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={ () => handleEditRecords(r.id) }
                    className="
                      w-full px-3 py-1 rounded-lg 
                      bg-blue-500 hover:bg-blue-600 text-white text-white text-sm font-medium 
                      hover:bg-blue-600 shadow-sm transition
                    "
                  >
                    Actualizar
                  </button>

                  <button 
                    onClick={() => deleteRecord({ id: r.id })}
                    className="
                      w-full px-3 py-1 rounded-lg 
                      bg-red-500 text-white text-sm font-medium 
                      hover:bg-red-600 shadow-sm transition
                    "
                  >
                    Eliminar
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