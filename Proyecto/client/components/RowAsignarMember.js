import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { postAsignacion } from "../services/asignados";
import { getEmpleadosNotAssigned } from "../services/empleado";
import { desasignar } from "../services/assistant";
import swal from "sweetalert";

export default function RowAsignarMember({
  select,
  info,
  id_assistant,
  objFunction: { getMembersAsignados, getMembersSinAssistant },
}) {
  const addAsignados = async () => {
    try {
      const data = await postAsignacion({
        id_assistant,
        id_member: info.id_empleado,
      });
      swal("Mentorado Agregado", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const deleteAsignados = async () => {
    try {
      const res = await desasignar({
        id_member: info.id_empleado,
      });
      swal("Mentorado Retirado", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const handleAdd = async () => {
    await addAsignados();
    getMembersAsignados();
    getMembersSinAssistant();
  };

  const handleDelete = async () => {
    await deleteAsignados();
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
              <button onClick={handleAdd} className="btn ">
                Agregar
              </button>
            ) : (
              <button onClick={handleDelete} className="btn-red">
                <FaTrashAlt />
              </button>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
