import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { postAsignacion } from "../services/asignados";
import { getEmpleadosNotAssigned } from "../services/empleado";
import { desasignar } from "../services/assistant";
import swal from "sweetalert";



export default function RowAllEmpleado() {


    return (
      <>
        <tr className="hover:bg-blue-400/20">
          <td className=" items-center p-2 whitespace-nowrap  flex justify-between">
            <div className="flex items-center">
              hi
            </div>
            <div>
              bay
            </div>
          </td>
        </tr>
      </>
    );
  }
