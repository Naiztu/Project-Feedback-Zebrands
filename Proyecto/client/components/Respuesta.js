import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";
import Boton from "./Boton";

export default function Respuesta({ pregunta }) {
  const [respuesta, setRespuesta] = useState({ ...pregunta, contenido: "" });

  const handleEdit = () => {
    setIsEdited(true);
  };

  const options = [
    { label: "Nivel 1", value: 1 },
    { label: "Nivel 2", value: 2 },
    { label: "Nivel 3", value: 3 },
    { label: "Nivel 4", value: 4 },
    { label: "Nivel 5", value: 5 },
  ];

  const handleChange = (e) => {
    const newRes = { ...respuesta };
    newRes[e.target.name] = e.target.value;
    setRespuesta(newRes);
  };

  return (
    <div className="flex-col w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
      <div className=" flex flex-row items-center justify-between space-x-2"></div>
      <div className="w-full mx-auto bg-black/10 px-3 py-2 mt-2 rounded-md flex items-center">
          {respuesta.enunciado}
        <label>
          <strong className="mr-2">Respuesta:</strong>
          {respuesta.tipo_respuesta === "abierta" && (
            <textarea
              type="text"
              className="w-full h-full appearance-none bg-white border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded-md"
              name="contenido"
              placeholder="Aqui va la respuesta"
              value={respuesta.contenido}
              onChange={handleChange}
            />
          )}
          {respuesta.tipo_respuesta === "numerica" && (
            <div className="flex flex-row space-x-4">
              <button
                className="btn"
                onClick={handleChange}
                value="1"
                name="contenido"
              >
                1
              </button>
              <button 
                className="btn" 
                onClick={handleChange} 
                value="2" 
                name="contenido"
                >
                2
              </button>
              <button 
                className="btn" 
                onClick={handleChange} 
                value="3" 
                name="contenido"> 
                3
              </button>
              <button className="btn" onClick={handleChange} value="4" name="contenido">
                4
              </button>
              <button className="btn" onClick={handleChange} value="5" name="contenido">
                5
              </button>
            </div>
          )}
          {respuesta.tipo_respuesta === "calificacion" && (
            <input
              onChange={handleChange}
              value={respuesta.contenido}
              type="number"
              className="input-label"
              placeholder="Respuesta"
              name="contenido"
            />
          )}
        </label>
      </div>
    </div>
  );
}
Respuesta.defaultProps = {
  pregunta: {
    enunciado: "¿Cual es la pregunta?",
    tipo_respuesta: "abierta",
  },
};
