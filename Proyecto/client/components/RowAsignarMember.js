import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { postAsignacion } from "../services/asignados";
import { getEmpleadosNotAssigned} from "../services/empleado";
import { getAsignados } from "../services/asignados";

import api from "../services/api";

export default function RowAsignarMember({
  select,
  info,
  id_assistant,
  objFunction: { getMembersAsignados,
    getMembersSinAssistant },
}) {
  async function addAsignados () {
    const body = {
      "id_assistant": id_assistant
      , "id_member": info.id_empleado
    }
    console.log("Aqui se hace post a asignación del assistant" + info.id_empleado + " del " + id_assistant)
    try {
       await postAsignacion(body);
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
    getMembersAsignados();
    getMembersSinAssistant();

    };


    const deleteAsignados = () => {
      console.log("desasignamos")
      getMembersAsignados();
      getMembersSinAssistant();
    };

    return (
      <>
        <tr className="hover:bg-blue-400/20">
          <td className=" items-center p-2 whitespace-nowrap  flex justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  className="rounded-full aspect-square object-cover"
                  src={info.imagen_perfil}
                  width={40}
                  height={40}
                />
              </div>
              <div className="font-medium text-gray-800">
                {info.nombre + " " + info.apellido_paterno}
              </div>
            </div>
            <div>
              {select ? (
                <button
                  onClick={addAsignados}
                  className="btn  "
                >
                  Agregar
                </button>
              ) : (
                <button onClick={deleteAsignados} className="btn-red">
                  <FaTrashAlt />
                </button>
              )}
            </div>
          </td>
        </tr>
      </>
    );
  }
