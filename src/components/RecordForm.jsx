"use client";

import { useAppContext } from "@/app/context/AppContext";
import { createRecords, getRecordById, updateRecords } from "@/services/recordsServices";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useEffect, useState } from "react";

export default function RecordForm({ id }) {

    const [activeStep, setActiveStep] = useState(0);
    const { recordStatus, recordFormSteps } = useAppContext();

    const createRegisterNumber = () => {

        const now = new Date();
        const fecha = now.toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
        const hora = now.getHours().toString().padStart(2, "0") +
            now.getMinutes().toString().padStart(2, "0") +
            now.getSeconds().toString().padStart(2, "0");

        const random = Math.floor(1000 + Math.random() * 9000); // 4 dígitos aleatorios
        return `REG-${fecha}-${hora}-${random}`;

    };

    const [form, setForm] = useState({
        id: 0,
        marca: "",
        titular: "",
        pais: "",
        estado: "",
        registration_number: createRegisterNumber()
    }); 

    const updateRecord = async () => {
        const params = {
            id: id, 
            brand: form.marca,
            holder: form.titular,
            country: form.pais,
            status: recordStatus.indexOf(form.estado)
        };

        const response = await updateRecords(params);
        console.log(response);
    }

    const postCreateRecord = async () => {
        const params = {
            brand: form.marca,
            holder: form.titular,
            country: form.pais,
            registration_number: createRegisterNumber(),
            status: recordStatus.indexOf(form.estado)
        };

        const response = await createRecords(params);
        console.log(response);
    };

    const handleNext = () => {
        if (activeStep < recordFormSteps.length - 1) setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Agregamos una función que valida según el paso
    const isStepValid = () => {
        switch (activeStep) {
            case 0:
                return form.marca.trim() !== "";
            case 1:
                return form.titular.trim() !== "";
            case 2:
                return form.pais.trim() !== "";
            case 3:
                return form.estado.trim() !== "";
            default:
                return true;
        }
    };

    if(id){
        useEffect( () => {
            const fetchRecord = async () => {
                try{
                    const response = await getRecordById({ id })
                    const data = response.data
                    
                    setForm({
                        id: data.id, 
                        registration_number: data.registration_number, 
                        marca: data.brand, 
                        titular: data.holder,
                        estado: recordStatus[data.status],
                        pais: data.country,
                        registration_number: data.registration_number ? data.registration_number : createRegisterNumber()
                    })

                    console.log(`obteniendo ${JSON.stringify(response.data)}`)
                }catch(error){
                    console.error(error)
                }
            }

            fetchRecord();

        }, []);
    }

    return (
        <>
            <Stepper activeStep={activeStep} alternativeLabel className="mb-6">
                {recordFormSteps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Paso 1 */}
            {activeStep === 0 && (
                <div>
                    <label className="block mb-2">Marca a {id ? "Actualizar" : "Registrar"} </label>
                    <input
                        type="text"
                        name="marca"
                        value={form.marca}
                        onChange={handleChange}
                        className="border p-2 w-full mb-4"
                    />
                </div>
            )}

            {/* Paso 2 */}
            {activeStep === 1 && (
                <div>
                    <label className="block mb-2">Titular de la Marca</label>
                    <input
                        type="text"
                        name="titular"
                        value={form.titular}
                        onChange={handleChange}
                        className="border p-2 w-full mb-4"
                    />
                </div>
            )}

            {/* Paso 3 */}
            {activeStep === 2 && (
                <div>
                    <label className="block mb-2">País donde se Registra la Marca</label>
                    <input
                        type="text"
                        name="pais"
                        value={form.pais}
                        onChange={handleChange}
                        className="border p-2 w-full mb-4"
                    />
                </div>
            )}


            {/*Paso 4 */}
            {activeStep === 3 && (
                <div>
                    <label className="block mb-2">Estado del Registro de la Marca</label>
                    <select
                        name="estado"
                        value={form.estado}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mb-4"
                    >
                        {recordStatus.map((label, index) => (
                            <option key={index} value={label}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Paso 5 */}
            {activeStep === 4 && (
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Información del registro
                    </h2>
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-medium text-gray-900">Marca:</span> {form.marca}</p>
                        <p><span className="font-medium text-gray-900">Titular:</span> {form.titular}</p>
                        <p><span className="font-medium text-gray-900">País:</span> {form.pais}</p>
                        <p><span className="font-medium text-gray-900">Estado:</span> {form.estado}</p>
                    </div>
                </div>
            )}


            {/* Botones */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={`
                    flex items-center justify-center gap-2 px-6 py-2 rounded-xl border 
                    bg-gray-200 text-gray-700 font-medium shadow-sm
                    transition-all duration-200
                    hover:bg-gray-300 hover:shadow-md
                    disabled:opacity-50 disabled:cursor-not-allowed
                `}
                >
                    ← Atrás
                </button>

                {activeStep < recordFormSteps.length - 1 ? (
                    <button
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className={`
                    flex items-center justify-center gap-2 px-6 py-2 rounded-xl
                    font-semibold shadow-sm transition-all duration-200
                    ${isStepValid()
                                ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-md focus:ring-2 focus:ring-red-300"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"}
                    `}
                    >
                        Continuar →
                    </button>
                ) : (
                    <button
                        onClick={ id ? () => updateRecord() : postCreateRecord() }
                        className={`
                    flex items-center justify-center gap-2 px-6 py-2 rounded-xl
                    bg-green-500 text-white font-semibold shadow-sm
                    transition-all duration-200
                    hover:bg-green-600 hover:shadow-md
                    focus:ring-2 focus:ring-green-300
                `}
                    >
                        { id ? '🔄 Actualizar' : '✅ Crear' }
                    </button>
                )}
            </div>
        </>
    );
}