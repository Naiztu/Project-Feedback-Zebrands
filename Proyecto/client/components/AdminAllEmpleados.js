import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { getFilterEmpleados } from "../services/empleado";
import RowAllEmpleado from "../components/RowAllEmpleado";
import { useUser } from "../context/userContext";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import Registro from "./Registro";

export default function AdminAllEmpleados() {
  const { isAuthenticated, user } = useUser();
  const [empleados, setEmpleados] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [isOpen, openModal, closeModal] = useModal();
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
      setPage(1);
      const data_empleados = await getFilterEmpleados(1, filterName);
      setEmpleados(data_empleados.data_empleados);
    } catch (error) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const changePage = async (num) => {
    let newpage;
    if (num + page <= 0) {
      setPage(1);
      newpage = 1;
    } else {
      newpage = num + page;
    }
    try {
      const { data_empleados } = await getFilterEmpleados(newpage, filterName);
      if (data_empleados.lenght > 0) {
        setPage(page - num);
      }
      setEmpleados(data_empleados);
    } catch (error) {
      swal("Hubo un error", {
        icon: "warning",
      });
    }
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
        <div className=" flex mt-3 mx-auto w-full items-stretch  justify-center text-sm h-12">
          <input
            type="text"
            className="input-label w-8/12 lg:w-6/12"
            placeholder="Nombre de tu compañero"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <div className=" ml-2 flex items-center h-12 w-12">
            <button onClick={botonSearch} className="btn-search rounded-md">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center  mt-5 mx-auto w-full sm:w-11/12 ">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 ">
                    <tr className="font-semibold text-left p-2 whitespace-nowrap">
                      <th className="p-2">Member</th>
                      <th className="p-2">Rol</th>
                      <th className="p-2">Nivel general</th>
                      <th className="p-2">Equipo </th>
                      <th className="p-2">Opciones</th>
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
          <div className=" flex flex-col justify-center items-center space-y-1 mx-auto">
            <div className="h-12 w-12">
              <button
                onClick={() => openModal()}
                className="btn-search  rounded-full"
              >
                <FaPlus />
              </button>
            </div>
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold text-center">
              Añadir Member
            </label>
          </div>
          <button onClick={() => changePage(1)} className="btn">
            <p className="hidden sm:inline mr-2">Siguiente Página</p>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
        title="Registra Nuevo Member"
      >
        <div className=" py-5">
          <Registro isSaved={false} />
        </div>
      </Modal>
    </>
  );
}
