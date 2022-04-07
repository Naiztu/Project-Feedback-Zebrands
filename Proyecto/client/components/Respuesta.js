import React from "react";

export default function Respuesta({ info, variable, metodo, index, isSaved }) {
  const options = [1, 2, 3, 4, 5];

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
            className="textarea-respuesta"
            name="descripcion_respuesta"
            placeholder="Respuesta"
            value={info.descripcion_respuesta}
            disabled={isSaved}
            onChange={handleChange}
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
                onClick={handleChange}
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
            onChange={handleChange}
            value={info.descripcion_respuesta}
            type="number"
            disabled={isSaved}
            className="input-respuesta"
            placeholder="Calificación del 1 al 5 (puede llevar decimal)"
            name="descripcion_respuesta"
          />
        )}
      </div>
    </div>
  );
}

Respuesta.defaultProps = {
  isSaved: true,
};
