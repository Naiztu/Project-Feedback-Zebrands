import Axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import RowEvaluaciones from "./RowEvaluaciones";
export default function Evaluaciones({ id_periodo, id_user }) {
  // id_periodo, id_user
  const [evaluaciones, setEvaluaciones] = useState([]);
  const getEvaluaciones = async () => {
    try {
      const { data } = await api.get(`/evaluar/all/${id_periodo}/${id_user}`
      );
      console.log(data);
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
  useEffect(() => {
    getEvaluaciones();
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
      <div className="w-10/12 max-w-2xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg mb-10">
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
                    <div className="font-semibold text-left">Ver</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {evaluaciones.map((item, index) => (
                  <RowEvaluaciones key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
