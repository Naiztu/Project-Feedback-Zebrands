import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function CompaneroAsignar({
  select,
  info,
  objFunction: { asignados, setAsignados },
}) {
  const addAsignados = () => {
    setAsignados(asignados.concat(info));
  };
  const deleteAsignados = () => {
    setAsignados(
      asignados.filter((item) => item.first_name != info.first_name)
    );
  };

  return (
    <>
      <tr className="hover:bg-blue-400/20">
        <td className=" items-center p-2 whitespace-nowrap  flex justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img
                className="rounded-full"
                src={info.avatar}
                width={40}
                height={40}
              />
            </div>
            <div className="font-medium text-gray-800">
              {info.first_name + " " + info.last_name}
            </div>
          </div>
          <div>
            {select ? (
              <button
                onClick={addAsignados}
                className="btn text-xs md:text-base "
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
