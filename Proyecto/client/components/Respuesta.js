import React from "react";

export default function Respuesta({ info, variable, metodo, index, isSaved, handleBlur,
  errors }) {

  // const error = errors.filter((i) => i.id = info.id) || "";
  const options = [1, 2, 3, 4, 5];

  return (
    <div className=" w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg   ">
      <div className="w-11/12 flex-col flex justify-center mx-auto items-center space-y-6 ">
        <h2 className="w-11/12 text-center text-xl font-bold ">
          {info.pregunta}
        </h2>
        <div className=" w-full flex justify-center">
          {info.tipo_respuesta === "abierta" && (
            <textarea
              type="text"
              className="textarea-respuesta"
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
                  className={`${info.descripcion_respuesta === `${item}`
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
        {(errors) && errors.filter((i) => i.id === info.id).map((item) => <p className="error" key={item.id}>{item.message}</p>)}
      </div>
    </div>
  );
}

Respuesta.defaultProps = {
  isSaved: false,
};
