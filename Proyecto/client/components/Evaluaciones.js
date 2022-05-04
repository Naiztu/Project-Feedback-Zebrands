import Axios from "axios";
import React, { useEffect, useState } from "react";
import RowEvaluaciones from "./RowEvaluaciones";
import { getEvaluaciones, getResumenData } from "../services/evaluacion";

export default function Evaluaciones({ id_periodo, id_user }) {
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [resumen, setResumen] = useState([]);
  const [prom, setProm] = useState([]);


  const getData = async () => {
    try {
      const data = await getEvaluaciones(id_periodo, id_user);
      const { data_evalua } = data;
      setEvaluaciones(
        data_evalua.map((item, index) => ({
          ...item,
          id_evaluador: item.id_empleado,
          index,
          id_evaluado: id_user,
          id_periodo,
        }))
      );
    } catch (err) {
      console.log(err);
    }

  };

  const getResumen = async () => {
    try {
      const { data_resumen } = await getResumenData(id_periodo, id_user);
      setResumen(data_resumen.calificaciones);
      setProm(data_resumen.prom);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getResumen();
  }, []);

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
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg mb-10">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className=" table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Evaluador</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Status</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Cal business</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Cal people</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Cal craft</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Cal prom</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Ver</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {resumen && (resumen.map((item, index) => (
                  <RowEvaluaciones key={index} item={item} id_periodo id_evaluado={id_user} />
                )))}

                {prom && (
                  <tr className=" text-black/80">
                    <td></td>
                    <td></td>
                    <td className="p-2 whitespace-nowrap">{prom.prom_craft}</td>
                    <td className="p-2 whitespace-nowrap">{prom.prom_people}</td>
                    <td className="p-2 whitespace-nowrap">{prom.prom_business}</td>
                    <td className="p-2 whitespace-nowrap">{prom.prom_gen}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
