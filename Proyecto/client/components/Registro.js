import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useUser } from "../context/userContext";
import api from "../services/api";

export default function Registro({ regMember, isSaved }) {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    nivel_general,
    nivel_craft,
    nivel_business,
    nivel_people,
    correo_electronico,
    equipo,
  } = regMember;
  
  const [preMember, setPreMember] = useState(regMember);
  //const { user, isAuthenticated } = useUser();

  const handleChange = (e) => {
    const newMember = { ...preMember };
    newMember[e.target.name] = e.target.value;
    setPreMember(newMember);
  };

  const options = [
    { label: "1.1", value: 1.1 },
    { label: "1.2", value: 1.2 },
    { label: "1.3", value: 1.3 },
    { label: "2.1", value: 2.1 },
    { label: "2.2", value: 2.2 },
    { label: "2.3", value: 2.3 },
    { label: "3.1", value: 3.1 },
    { label: "3.2", value: 3.2 },
    { label: "3.3", value: 3.3 },
    { label: "4.1", value: 4.1 },
    { label: "4.2", value: 4.2 },
    { label: "4.3", value: 4.3 },
    { label: "5.1", value: 5.1 },
    { label: "5.2", value: 5.2 },
    { label: "5.3", value: 5.3 },
  ];

  const id_chapter = 1;

  const registerMember = async (e) => {
    try {
      const res = await api.post(`http://localhost:8080/api/empleado/`, {
        ...preMember,
        id_chapter,
      });

      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else
        swal("Nuevo member registrado", {
          icon: "success",
        });
    } catch (error) {
      console.log(error);
      swal("Hubo un error, member no regustrado", {
        icon: "warning",
      });
      console.log(error);
    }
  };

  return (
    <>
      <header className="w-full pt-10 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <h1 className=" title">Registrar Nuevo Member</h1>
        </div>
      </header>
      <div className="min-h-screen pt-2 my-16">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900">
              {" "}
              Información del nuevo Member:{" "}
            </h2>
            <div className="mt-6 border-t border-gray-400 pt-4">
              <div className="personal w-full">
                <div className="w-full md:w-full px-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      //for="grid-text-1"
                    >
                      Dirección de Correo
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      onChange={handleChange}
                      value={preMember.correo_electronico}
                      type="text"
                      placeholder="Ingresa el correo"
                      name="correo_electronico"
                    ></input>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nombre(s)
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      onChange={handleChange}
                      value={preMember.nombre}
                      type="text"
                      placeholder="Ingresa el Nombre"
                      name="nombre"
                    ></input>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Paterno
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        onChange={handleChange}
                        value={preMember.apellido_paterno}
                        type="text"
                        placeholder="Ingresa el Apellido Paterno"
                        name="apellido_paterno"
                      ></input>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Materno
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        onChange={handleChange}
                        value={preMember.apellido_materno}
                        type="text"
                        placeholder="Ingresa el Apellido Materno"
                        name="apellido_materno"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Chapter
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          value={preMember.nivel_general}
                          name="nivel_general"
                          onChange={handleChange}
                        >
                          {options.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Craft
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                      <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          value={preMember.nivel_craft}
                          name="nivel_craft"
                          onChange={handleChange}
                        >
                          {options.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Business
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                      <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          value={preMember.nivel_business}
                          name="nivel_business"
                          onChange={handleChange}
                        >
                          {options.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel People
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                      <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          value={preMember.nivel_people}
                          name="nivel_people"
                          onChange={handleChange}
                        >
                          {options.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Equipo del Member
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        onChange={handleChange}
                        value={preMember.equipo}
                        type="text"
                        placeholder="Ingresa el Equipo"
                        name="equipo"
                      ></input>
                    </div>
                  </div>
                </div>

                {isSaved && (
                  <div className="flex justify-endd">
                    <button
                      className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                      onClick={registerMember}
                    >
                      Terminar con el Registro
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Registro.defaultProps = {
  regMember: {
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    nivel_general: 0,
    nivel_craft: 0,
    nivel_business: 0,
    nivel_people: 0,
    correo_electronico: "",
    equipo: "",
  },
  isSaved: true,
};