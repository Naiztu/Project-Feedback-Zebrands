import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { updateEstatus } from "../services/periodo";
export default function RowMember({ data }) {
  const {
    id_periodo,
    nombre_periodo,
    fecha_inicio,
    fecha_fin,
    estatus_periodo,
  } = data || {};
  const router = useRouter();
  const [estatus, setEstatus] = useState(estatus_periodo);

  const handleChange = async () => {
    console.log("Handle change");
    if (estatus === "Vigente") {
      console.log("cambia vigente a finalizado");
      setEstatus("Finalizado");
      await updateEstatus({
        estatus: "Finalizado",
        id_periodo,
      });
    } else if (estatus === "Finalizado") {
      console.log("cambia finalizado a Proximo");
      setEstatus("Proximo");
      await updateEstatus({
        estatus: "Proximo",
      });
    } else if (estatus === "Proximo") {
      console.log("cambia finalizado a Proximo");
      setEstatus("Vigente");
      await updateEstatus({
        estatus: "Vigente",
      });
    }
  };
  const fi = new Date(fecha_inicio);
  const ff = new Date(fecha_fin);
  return (
    <tr className="hover:bg-blue-400/20 transition-all ease-in-out w-full cursor-pointer h-16">
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{nombre_periodo}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">
          {fi.getDay() + "/" + fi.getMonth() + "/" + fi.getFullYear()}
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">
          {" "}
          {ff.getDay() + "/" + ff.getMonth() + "/" + ff.getFullYear()}
        </div>
      </td>
      <td>
        <button
          onClick={handleChange}
          className={`text-black/60 px-3 py-1 rounded-lg hover:scale-105 active:scale-95 w-full font-bold text-xl ${
            estatus === "Vigente"
              ? "bg-tertiary-50 "
              : estatus === "Finalizado"
              ? "bg-tertiary-100"
              : " bg-tertiary-500"
          }`}
        >
          {estatus}
        </button>
      </td>
      <td className=" p-2 whitespace-nowrap hidden sm:flex items-center"></td>
    </tr>
  );
}
