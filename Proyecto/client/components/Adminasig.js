import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RowAsignarMember from "./RowAsignarMember";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { getEmpleadosNotAssigned } from "../services/empleado";
import { useUser } from "../context/userContext";
import { getAsignados } from "../services/asignados";

export default function Adminasig({ data_assis, auto_asig }) {
  const router = useRouter();
  const { isAuthenticated, user } = useUser();
  const [asignados, setAsignados] = useState([]);
  const [companeros, setCompaneros] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = useState(1);

  const getMembersSinAssistant = async () => {
    try {
      const data = await getEmpleadosNotAssigned(page, filterName);
      setCompaneros(data.data_empleados);
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const getMembersAsignados = async () => {
    try {
      const data_empleados = await getAsignados(data_assis.id_empleado);
      setAsignados(data_empleados.data_members);
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getMembersSinAssistant();
      getMembersAsignados();
    }
  }, [isAuthenticated]);

  const botonSearch = async () => {
    try {
      const { data_empleados } = await getEmpleadosNotAssigned(
        page,
        filterName
      );
      setCompaneros(data_empleados);
    } catch (error) {
     
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const changePage = async (num) => {
    let newPage;
    if (num + page <= 0) {
      newPage = 1;
      setPage(1);
    } else {
      newPage = page + num;
      setPage(page + num);
    }

    try {
      const { data_empleados } = await getEmpleadosNotAssigned(
        newPage,
        filterName
      );
      setCompaneros(data_empleados);
    } catch (error) {
     
      swal("Hubo un error", {
        icon: "warning",
      });
    }
   
  };

  return (
    <>
      {(user.id_rol === 2 || user.id_rol === 1) && !auto_asig && (
        <h1 className="title my-10 mx-auto">
          Administra los asignados de {data_assis.nombre}
        </h1>
      )}
      {user.id_rol === 1 && auto_asig && (
        <h1 className="title my-10 mx-auto">Auto-asignar CM</h1>
      )}

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2">
          <h1 className="title my-10">Members sin Assistant</h1>
          <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
            <input
              type="text"
              className="input-label w-8/12 lg:w-6/12"
              placeholder="Nombre de tu compañero"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />

            <button onClick={botonSearch} className="btn ml-2 inline ">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col justify-center  mt-5 mx-auto w-11/12 sm:w-10/12 ">
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Members sin Assistant
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {companeros &&
                        companeros.map((item, index) => (
                          <RowAsignarMember
                            select={true}
                            info={item}
                            key={index}
                            id_assistant={data_assis.id_empleado}
                            objFunction={{
                              getMembersAsignados,
                              getMembersSinAssistant,
                            }}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-auto space-x-2 w-3/4 lg:w-10/12  justify-between my-6">
            <button onClick={() => changePage(-1)} className="btn-border ">
              <FaArrowLeft />
              <p className="hidden sm:inline ml-2">Página anterior</p>
            </button>
            <button onClick={() => changePage(1)} className="btn">
              <p className="hidden sm:inline mr-2">Siguiente Página</p>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="basis-1/2">
          {(user.id_rol === 2 || user.id_rol === 1) && !auto_asig && (
            <h1 className="title my-10 mx-auto">
              Members de {data_assis.nombre}
            </h1>
          )}
          {user.id_rol === 1 && auto_asig && (
            <h1 className="title my-10 mx-auto">Mis CM</h1>
          )}
          {asignados.length === 0 ? (
            "Este assistant no tiene members"
          ) : (
            <div className="flex flex-col justify-center  mt-5 mx-auto w-11/12 sm:w-10/12 ">
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Compañero
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {asignados &&
                          asignados
                            .filter((el) => el.id_rol !== 2)
                            .map((item, index) => (
                              <RowAsignarMember
                                select={false}
                                info={item}
                                key={index}
                                objFunction={{
                                  getMembersAsignados,
                                  getMembersSinAssistant,
                                }}
                              />
                            ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Adminasig.defaultProps = {
  auto_asig: false,
};
