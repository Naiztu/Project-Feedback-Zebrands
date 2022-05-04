import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CompaneroAsignar from "./CompaneroAsignar";
import swal from "sweetalert";
import { useRouter } from "next/router";
import {
  getFilterEmpleados,
  getEmpleadosNotRequested,
} from "../services/empleado";
import { useUser } from "../context/userContext";
import { postAsignados } from "../services/evaluacion";

export default function Asignar() {
  const router = useRouter();
  const { isAuthenticated, user, id_periodo } = useUser();
  const [asignados, setAsignados] = useState([]);
  const [companeros, setCompaneros] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = useState(1);

  const getCompaneros = async () => {
    try {
      const { data_empleados } = await getEmpleadosNotRequested(
        page,
        filterName,
        id_periodo
      );
      setCompaneros(data_empleados);
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const sendAsignados = async () => {
    try {
      await postAsignados({
        lista_id_empleado_evaluador: asignados.map((item) => item.id_empleado),
        id_empleado_evaluado: user.id_empleado,
        id_periodo,
      });
      await swal("Asignado correctamente!", {
        icon: "success",
      });
      router.push("/user");
    } catch (err) {
      console.log(err);
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getCompaneros();
    }
  }, [isAuthenticated]);

  const botonSearch = async () => {
    try {
      const { data_empleados } = await getEmpleadosNotRequested(
        page,
        filterName,
        id_periodo
      );
      setCompaneros(data_empleados);
    } catch (error) {
      console.log(error);
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
      const { data_empleados } = await getEmpleadosNotRequested(
        newPage,
        filterName,
        1
      );
      setCompaneros(data_empleados);
    } catch (error) {
      console.log(error);
      swal("Hubo un error", {
        icon: "warning",
      });
    }
    console.log("pag" + page + "\n");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="basis-1/2">
          <h1 className="title my-10">Asignar compañeros</h1>
          <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
            <input
              type="text"
              className="input-label w-8/12 lg:w-6/12"
              placeholder="Nombre de tu compañero"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />

            <div className="w-10 h-10">
              <button
                onClick={botonSearch}
                className="btn-search  rounded-md ml-3 "
              >
                <FaSearch />
              </button>
            </div>
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
                            Compañero
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {companeros &&
                        companeros
                          .filter((el) => !asignados.includes(el))
                          .map((item, index) => (
                            <CompaneroAsignar
                              select={true}
                              info={item}
                              key={index}
                              objFunction={{
                                asignados,
                                setAsignados,
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
              <p className="hidden sm:inline ml-2">Previous page</p>
            </button>
            <button onClick={() => changePage(1)} className="btn">
              <p className="hidden sm:inline mr-2">Next page</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="title my-10">Registrar Compañeros</h1>
          {asignados.length === 0 ? (
            <div className="w-11/12 h-auto mx-auto flex flex-col items-center justify-center">
              <p className="w-10/12 text-center">
                ¡Asigna a tus compañeros con los que has trabajado en el periodo
                actual para que tu Assistant pueda hacerte una evaluación más
                significativa!
              </p>

              <img src="/friend.svg" className="w-10/12" alt="friends" />
            </div>
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
                        {asignados.map((item, index) => (
                          <CompaneroAsignar
                            select={false}
                            info={item}
                            key={index}
                            objFunction={{
                              asignados,
                              setAsignados,
                            }}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button onClick={sendAsignados} className="btn mx-auto mt-4">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
