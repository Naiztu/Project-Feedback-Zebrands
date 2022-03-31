import React from "react";

export default function Evaluaciones() {
  const evalu = [
    {
      id_evaluado: 1,
      id_evaluador: 2,
      nombre_evaluador: "Emiliano",
      status: "Contestada",
    },
    {
      id_evaluado: 1,
      id_evaluador: 3,
      nombre_evaluador: "Pepe",
      status: "Contestada",
    },
    {
      id_evaluado: 1,
      id_evaluador: 4,
      nombre_evaluador: "Cris",
      status: "No Contestada",
    },
  ];
  return (
    <>
      <h2 className="title my-10"> Evaluaciones</h2>

      <div className="w-9/12 mx-auto mb-5">
        <p className="text-center text-black/50 italic">
          Las evaluaciones hechas por un compañero son enriquecedoras, nos
          ayudan a ver cosas que por nosotros mismos no podríamos trabajar para
          mejorar en alguna área de oportunidad ¡Aquí están las Evaluaciones!
        </p>
      </div>

      <table className=" mx-auto mb-10  bg-white shadow-lg rounded-sm border border-gray-200 w-11/12 sm:w-3/4">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Evaluador</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Status</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {evalu.map((item, index) => (
            <tr
              key={index}
              className={`${
                item.status === "No Contestada"
                  ? "bg-red-400/20 cursor-not-allowed"
                  : "hover:bg-blue-400/20 cursor-pointer "
              }  active:scale-95 transition-all ease-in-out w-full text-black/80`}
            >
              <td className="p-2 whitespace-nowrap">
                <button
                  disabled={item.status === "No Contestada"}
                  className=" disable:cursor-not-allowed"
                >
                  {item.nombre_evaluador}
                </button>
              </td>
              <td className="p-2 whitespace-nowrap">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
