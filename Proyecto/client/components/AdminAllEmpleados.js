import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { getFilterEmpleados } from "../services/empleado";
import RowAllEmpleado from "../components/RowAllEmpleado";
import { useUser } from "../context/userContext";
import swal from "sweetalert";
import { useRouter } from "next/router";

export default function AdminAllEmpleados() {
  const { isAuthenticated, user } = useUser();
  const [empleados, setEmpleados] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();

  const getEmpleados = async () => {
    try {
      const data_empleados = await getFilterEmpleados(page, filterName);
      setEmpleados(data_empleados.data_empleados);
    } catch (err) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const botonSearch = async () => {
    try {
      const { data_empleados } = await getEmpleadosNotAssigned(
        page,
        filterName
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
      const { data_empleados } = await getFilterEmpleados(newPage, filterName);
      setEmpleados(data_empleados);
    } catch (error) {
      console.log(error);
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const redirectRegister= () => {
    router.push("/lead/register");
  };

  useEffect(() => {
    if (isAuthenticated) {
      getEmpleados();
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="title my-10 mx-auto">
        Información de todos los empleados
      </h1>

      <div className="basis-1/2">
        <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
          <input
            type="text"
            className="input-label w-8/12 lg:w-6/12"
            placeholder="Nombre de tu compañero"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <button className="btn ml-2 inline ">
            <FaSearch />
          </button>
        </div>

        <div className="flex flex-col justify-center  mt-5 mx-auto w-11/12 sm:w-10/12 ">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
                    <tr className="font-semibold text-left p-2 whitespace-nowrap">
                      <th>Empleado</th>
                      <th>Rol</th>
                      <th>Nivel general</th>
                      <th>Equipo </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {empleados &&
                      empleados.map((item, index) => (
                        <RowAllEmpleado info={item} key={index} />
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
              <div className="items-center justify-center mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <button onClick={redirectRegister} className="btn my-3">
                    <FaPlus />
                  </button>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-center">
                    Añadir Member
                  </label>
                </div>
              </div>
              <button onClick={() => changePage(1)} className="btn">
                <p className="hidden sm:inline mr-2">Siguiente Página</p>
                <FaArrowRight />
              </button>
            </div>
      </div>
    </>
  );
}
