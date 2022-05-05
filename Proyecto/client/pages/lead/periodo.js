import React, { useState } from "react";
import Layout from "../../components/Layout";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import Piker from "../../components/Piker";

const data = [1, 2, 3, 4, 5];

export default function Periodo() {
  const today = new Date();
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [descripcion, setDescripcion] = useState("");

  return (
    <Layout>
      <h2 className="title my-10">Administrar periodos</h2>

      <div className="flex flex-col justify-center items-center w-11/12 lg:w-5/12 mx-auto space-x-4">
        <div className=" w-9/12 mx-auto mb-2 italic font-semibold text-center">
          Fecha Inicio <label>-</label> Fecha Fin
        </div>
        <Piker
          estado={{ e1: date1, e2: date2 }}
          setEstado={{ sE1: setDate1, sE2: setDate2 }}
        />

        <div className=" grid grid-cols-3 items-center gap-4 h-6 w-full">
          <input
            type={"text"}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción de periodo ej:(Enero - Marzo 2022)"
            className=" col-span-2 border-2 border-black rounded px-3 h-full"
          />
          <button className="btn font-bold text-xl"> Agregar </button>
        </div>
      </div>

      <section className="w-9/12 mx-auto ">
        <h2 className="title my-10">Próximos Periodos</h2>
        <table className="table-auto w-full shadow-lg rounded-lg">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Periodo</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left">Descripción</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left"></div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-blue-400/20 active:scale-95 transition-all ease-in-out w-full cursor-pointer"
              >
                <td className="p-2 whitespace-nowrap ">
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800">{item}</div>
                  </div>
                </td>
                <td className=" p-2 whitespace-nowrap">
                  <div className="font-medium text-gray-800">
                    Trimestre {index}
                  </div>
                </td>
                <td className=" p-2 whitespace-nowrap">
                  <div className="font-medium text-gray-800 flex flex-col w-10 space-y-2 justify-center items-center">
                    <button className="btn">
                      <FaPencilAlt />
                    </button>
                    <button className=" btn-red">
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
