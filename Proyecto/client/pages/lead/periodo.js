import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import RowPeriodo from "../../components/RowPeriodo";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import Piker from "../../components/Piker";
import swal from "sweetalert";
import { getAllPeriodos, postPeriodo } from "../../services/periodo";
import { useUser } from "../../context/userContext";

const data = [1, 2, 3, 4, 5];

export default function Periodo() {
  const [periodos, setPeriodos] = useState([]);
  const today = new Date();
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [descripcion, setDescripcion] = useState("");
  const { isAuthenticated } = useUser();

  async function getPeriodo() {
    try {
      const data = await getAllPeriodos(1);
      setPeriodos(data.periodos);
    } catch (error) {
    }
  }

  async function createPeriodo() {

    try {
      const data = postPeriodo({
        nombre_periodo: descripcion,
        fecha_inicio: date1.toISOString().split("T")[0],
        fecha_fin: date2.toISOString().split("T")[0],
        estatus_periodo: "proximo",
        id_chapter: 1,
      });
      swal("Periodo registrado!", {
        icon: "success",
      });
    } catch (error) {
      swal("Hubo un error, periodo no registrado", {
        icon: "warning",
      });
    }
  }

  useEffect(() => {
    if (isAuthenticated) getPeriodo();
  }, [isAuthenticated]);

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

        <div className=" grid grid-cols-3 items-center gap-4 w-full">
          <input
            type={"text"}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción de periodo ej:(Enero - Marzo 2022)"
            className=" col-span-2 border-2 border-black rounded px-3 h-10"
          />
          <button
            onClick={createPeriodo}
            className="btn font-bold text-xl h-10"
          >
            {" "}
            Agregar{" "}
          </button>
        </div>
      </div>

      <section className="w-9/12 mx-auto p-2">
        <h2 className="title my-10">Próximos Periodos</h2>
        <table className="table-auto w-full shadow-lg rounded-lg">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Periodo</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left">Fecha de inicio</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left">Fecha de fin</div>
              </th>
              <th className="p-2 whitespace-nowrap ">
                <div className="font-semibold text-left">Estatus</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {periodos.map((item, index) => (
              <RowPeriodo data={item} key={index} />
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
