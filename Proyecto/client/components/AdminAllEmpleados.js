import React, { useState, useEffect } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getFilterEmpleados } from "../services/empleado";
import RowAllEmpleado from "../components/RowAllEmpleado";
import { useUser } from "../context/userContext";

export default function AdminAllEmpleados() {
    const { isAuthenticated, user } = useUser();

    const [empleados, setEmpleados] = useState([]);
    const [filterName, setFilterName] = useState("");
    const [page, setPage] = useState(1);


    const getEmpleados = async () => {
        //const { user } = useUser();
        //console.log("El periodo actual"=user.id_periodo)
        try {
            const data_empleados = await getFilterEmpleados(page, filterName);
            setAsignados(data_empleados.data_members);
        } catch (err) {
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
            <h1 className="title my-10 mx-auto">Información de todos los empleados</h1>


            <div className="basis-1/2">
                <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
                    <input
                        type="text"
                        className="input-label w-8/12 lg:w-6/12"
                        placeholder="Nombre de tu compañero"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                    <button  className="btn ml-2 inline ">
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
                                                     Empleados
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {empleados &&
                                            empleados
                                                .map((item, index) => (
                                                    <RowAllEmpleado
                                                    
                                                    />
                                                ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

        </>


    );
}