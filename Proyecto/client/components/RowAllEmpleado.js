import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { postAsignacion } from "../services/asignados";
import { getEmpleadosNotAssigned } from "../services/empleado";
import { desasignar } from "../services/assistant";
import swal from "sweetalert";



export default function RowAllEmpleado({ info }) {
  const botonPerfil = () => {
    router.push(`/lead/adminasig/${id_empleado}`);
  };

  const botonFeedbacks = () => {
    router.push(`/lead/adminasig/${id_empleado}`);
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
        </td>

        <td>
          <div className="font-medium text-gray-800">
            {info.nombre_rol}
          </div>
        </td>

        <td>
          <div className="font-medium text-gray-800">
            {info.nivel_general}
          </div>
        </td>

        <td>
          <div className="font-medium text-gray-800">
            {info.equipo}
          </div>
        </td>
        <td>

          <button className="btn ">
            Perfil
          </button>
        </td>
        <td>
          <button className="btn ">
            Feedbacks
          </button>
        </td>
      </tr>
    </>
  );
}
