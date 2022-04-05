import React, { useState } from "react";

export default function Respuesta({ info, variable, metodo, index }) {
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
    const newRes = [...variable];
    newRes[index][e.target.name] = e.target.value;
    metodo(newRes);
  };

  return (
    <div className="flex flex-col w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg  items-center space-y-6">
      <h2 className="text-xl font-bold">{info.pregunta}</h2>
      <div className="w-11/12 flex justify-center mx-auto">
        {info.tipo_respuesta === "abierta" && (
          <textarea
            type="text"
            className="text-center w-3/4 mx-auto h-20 appearance-none p-3 bg-white border-none text-gray-700  leading-tight focus:outline-none rounded-md"
            name="descripcion_respuesta"
            placeholder="Respuesta"
            value={variable.descripcion_respuesta}
            onChange={handleChange}
          />
        )}
        {info.tipo_respuesta === "numerica" && (
          <div className="flex flex-row space-x-4 justify-center w-full">
            <button
              className={`${
                variable.descripcion_respuesta === "1"
                  ? " bg-slate-500 "
                  : "bg-black hover:bg-black/80 "
              } btn-option`}
              onClick={handleChange}
              value="1"
              name="descripcion_respuesta"
            >
              1
            </button>
            <button
              className={`${
                info.descripcion_respuesta === "2"
                  ? " bg-slate-500 "
                  : "bg-black hover:bg-black/80 "
              } btn-option`}
              onClick={handleChange}
              value="2"
              name="descripcion_respuesta"
            >
              2
            </button>
            <button
              className={`${
                info.descripcion_respuesta === "3"
                  ? " bg-slate-500 "
                  : "bg-black hover:bg-black/80 "
              } btn-option`}
              onClick={handleChange}
              value="3"
              name="descripcion_respuesta"
            >
              3
            </button>
            <button
              className={`${
                info.descripcion_respuesta === "4"
                  ? " bg-slate-500 "
                  : "bg-black hover:bg-black/80 "
              } btn-option`}
              onClick={handleChange}
              value="4"
              name="descripcion_respuesta"
            >
              4
            </button>
            <button
              className={`${
                info.descripcion_respuesta === "5"
                  ? " bg-slate-500 "
                  : "bg-black hover:bg-black/80 "
              } btn-option`}
              onClick={handleChange}
              value="5"
              name="descripcion_respuesta"
            >
              5
            </button>
          </div>
        )}
        {info.tipo_respuesta === "calificacion" && (
          <input
            onChange={handleChange}
            value={variable.descripcion_respuesta}
            type="number"
            className=" text-center w-3/4 md:w-1/2 h-12 appearance-none p-3 bg-white border-none text-gray-700 leading-tight focus:outline-none rounded-md"
            placeholder="Calificación del 1 al 5 (puede llevar decimal)"
            name="descripcion_respuesta"
          />
        )}
      </div>
    </div>
  );
}
