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
    try {
      if (estatus.toLowerCase() === "vigente") {
        setEstatus("Finalizado");
        await updateEstatus({
          estatus_periodo: "Finalizado",
          id_periodo,
        });
        swal("Periodo Finalizado!", {
          icon: "success",
        });
      } else if (estatus.toLowerCase() === "finalizado") {
        setEstatus("Proximo");
        await updateEstatus({
          estatus_periodo: "Proximo",
          id_periodo,
        });
        swal("Periodo Proximo!", {
          icon: "success",
        });
      } else if (estatus.toLowerCase() === "proximo") {
        setEstatus("Vigente");
        await updateEstatus({
          estatus_periodo: "Vigente",
          id_periodo,
        });
        swal("Periodo Vigente!", {
          icon: "success",
        });
      }
    } catch (err) {
      console.log(err);
      swal("Hubo un error, periodo no actualizado", {
        icon: "warning",
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
        <div className="text-left">{fi.toISOString().slice(0, 10)}</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left"> {ff.toISOString().slice(0, 10)}</div>
      </td>
      <td>
        <button
          onClick={handleChange}
          className={`text-black/60 px-3 py-1 rounded-lg hover:scale-105 active:scale-95 w-full font-bold text-xl ${
            estatus === "Vigente"
              ? "bg-tertiary-500 "
              : estatus === "Finalizado"
              ? "bg-tertiary-100"
              : " bg-tertiary-50"
          }`}
        >
          {estatus}
        </button>
      </td>
      <td className=" p-2 whitespace-nowrap hidden sm:flex items-center"></td>
    </tr>
  );
}
