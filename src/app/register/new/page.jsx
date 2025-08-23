"use client";

import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { createRecords } from "@/services/recordsServices"

const steps = ["Información de la Marca", "Información del Titular", "Información del País de la Marca", "Estado del Registro de Marca", "Resumen"];

export default function NuevoRegistro() {
  const [activeStep, setActiveStep] = useState(0);


  const [form, setForm] = useState({
    marca: "",
    titular: "",
    pais: "",
    estado: "",
  });

  const recordStatus = [
    "Pendiente",
    "En Processo",
    "Completado",
    "Cancelado"
  ]

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    console.log(form);
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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Servicios / Registro de Marca</h1>

      <Stepper activeStep={activeStep} alternativeLabel className="mb-6">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Paso 1 */}
      {activeStep === 0 && (
        <div>
          <label className="block mb-2">Marca a Registrar</label>
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

        {activeStep < steps.length - 1 ? (
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
            onClick={createRecords}
            className={`
            flex items-center justify-center gap-2 px-6 py-2 rounded-xl
            bg-green-500 text-white font-semibold shadow-sm
            transition-all duration-200
            hover:bg-green-600 hover:shadow-md
            focus:ring-2 focus:ring-green-300
          `}
          >
            ✅ Crear
          </button>
        )}
      </div>

    </div>
  );
}