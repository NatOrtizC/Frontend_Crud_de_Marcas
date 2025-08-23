"use client";
import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import {createRecords} from "@/services/recordsServices"

const steps = ["Información de la Marca", "Información del Titular", "Información del País de la Marca", "Estado del Registro de Marca", "Resumen"];

export default function NuevoRegistro() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    marca: "",
    titular: "",
    pais: "",
    estado: "",
  });

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
            name="status"
            value={form.estado}
            onChange={handleChange}
            className="w-full border p-2 rounded mb-4"
          >
            <option value="0">Pendiente</option>
            <option value="1">En Proceso</option>
            <option value="2">Completado</option>
            <option value="3">Cancelado</option>
          </select>
        </div>
      )}

      {/* Paso 5 */}
      {activeStep === 4 && (
        <div>
          <p><b>Marca:</b> {form.marca}</p>
          <p><b>Titular:</b> {form.titular}</p>
          <p><b>País:</b> {form.pais}</p>
          <p><b>Estado:</b> {form.estado}</p>
        </div>
      )}

      {/* Botones */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Atrás
        </button>

        {activeStep < steps.length - 1 ? (
          <button onClick={handleNext} className="bg-red-500 text-white px-4 py-2 rounded">
            Continuar →
          </button>
        ) : (
          <button onClick ={createRecords} className="bg-green-500 text-white px-4 py-2 rounded">
            Crear
          </button>
        )}
      </div>
    </div>
  );
}