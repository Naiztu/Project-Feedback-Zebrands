import React from "react";
import { useForm } from "../hooks/useForm";

export default function Respuesta({
  info,
  variable,
  metodo,
  index,
  isSaved,
  handleBlur,
  errors,
}) {
  // const error = errors.filter((i) => i.id = info.id) || "";
  const options = [1, 2, 3, 4, 5];

  return (
    <div className=" w-full mx-auto mt-8 sm:px-6 py-4 bg-slate-500/10 rounded-lg h-auto">
      <p className=" w-full sm:w-10/12 mx-auto text-base sm:text-lg font-bold text-center px-5 sm:p-0">
        {info.pregunta}
      </p>

      <div className=" w-full my-4  flex justify-center">
        {info.tipo_respuesta === "abierta" && (
          <textarea
            type="text"
            className="textarea-respuesta "
            name="descripcion_respuesta"
            placeholder="Respuesta"
            id={info.id}
            value={info.descripcion_respuesta}
            disabled={isSaved}
            onChange={handleBlur}
          />
        )}
        {info.tipo_respuesta === "numerica" && (
          <div className="flex flex-row space-x-4 justify-center w-full">
            {options.map((item) => (
              <button
                key={item}
                className={`${
                  info.descripcion_respuesta === `${item}`
                    ? " bg-slate-500 "
                    : "bg-black hover:bg-black/80 "
                } btn-option-respuesta`}
                disabled={isSaved}
                onClick={handleBlur}
                id={info.id}
                value={`${item}`}
                name="descripcion_respuesta"
              >
                {item}
              </button>
            ))}
          </div>
        )}
        {info.tipo_respuesta === "calificacion" && (
          <input
            onChange={handleBlur}
            value={info.descripcion_respuesta}
            type="number"
            id={info.id}
            disabled={isSaved}
            min={0}
            max={5}
            className="input-respuesta"
            placeholder="Calificación del 1 al 5 (puede llevar decimal)"
            name="descripcion_respuesta"
          />
        )}
      </div>
      {errors &&
        errors
          .filter((i) => i.id === info.id)
          .map((item) => (
            <p className="error" key={item.id}>
              {item.message}
            </p>
          ))}
    </div>
  );
}

Respuesta.defaultProps = {
  isSaved: false,
};
