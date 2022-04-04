import React, { useState } from "react";

export default function Respuesta({ info }) {
  const [respuesta, setRespuesta] = useState({ ...info, contenido: "" });

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
    <div className="flex flex-col w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg  items-center space-y-6">
      <h2 className="text-xl font-bold">{respuesta.pregunta}</h2>
      <div className="w-11/12 flex justify-center mx-auto">
        {respuesta.tipo_pregunta === "abierta" && (
          <textarea
            type="text"
            className="text-center w-3/4 mx-auto h-20 appearance-none p-3 bg-white border-none text-gray-700  leading-tight focus:outline-none rounded-md"
            name="contenido"
            placeholder="Respuesta"
            value={respuesta.contenido}
            onChange={handleChange}
          />
        )}
        {respuesta.tipo_pregunta === "numerica" && (
          <div className="flex flex-row space-x-4 justify-center w-full">
            <button
              className="btn-option"
              onClick={handleChange}
              value="1"
              name="contenido"
            >
              1
            </button>
            <button
              className="btn-option"
              onClick={handleChange}
              value="2"
              name="contenido"
            >
              2
            </button>
            <button
              className="btn-option"
              onClick={handleChange}
              value="3"
              name="contenido"
            >
              3
            </button>
            <button
              className="btn-option"
              onClick={handleChange}
              value="4"
              name="contenido"
            >
              4
            </button>
            <button
              className="btn-option"
              onClick={handleChange}
              value="5"
              name="contenido"
            >
              5
            </button>
          </div>
        )}
        {respuesta.tipo_pregunta === "calificacion" && (
          <input
            onChange={handleChange}
            value={respuesta.contenido}
            type="number"
            className=" text-center w-3/4 md:w-1/2 h-12 appearance-none p-3 bg-white border-none text-gray-700 leading-tight focus:outline-none rounded-md"
            placeholder="Calificación del 1 al 5 (puede llevar decimal)"
            name="contenido"
          />
        )}
      </div>
    </div>
  );
}
