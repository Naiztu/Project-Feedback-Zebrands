import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useUser } from "../context/userContext";
import { updateMember, createMember } from "../services/empleado";
import { useForm } from "../hooks/useForm";

export default function Registro({ regMember, isSaved }) {
  const [isSave, setIsSave] = useState(isSaved);
  const [isEdited, setIsEdited] = useState(!isSaved);
  const [data, errors, handle, handleBlur, setItem, checkErrors] = useForm();

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
    id_chapter,
    id_rol,
  } = regMember;
  

  const [preMember, setPreMember] = useState(regMember);
  //const { user, isAuthenticated } = useUser();

  useEffect(() => {
    const objMail = {
      name: "email",
      descripcion_respuesta: "",
      message: "Escribe un correo válido",
    };

    setItem(objMail, /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/);

    const objName = {
      name: "name",
      descripcion_respuesta: "",
      message: "Escribe un nombre válido",
    };

    setItem(objName, /^.{1,45}$/);

    const objLastN = {
      name: "lastn",
      descripcion_respuesta: "",
      message: "Escribe un apellido válido",
    };

    setItem(objLastN, /^.{1,45}$/);

    const objLastNm = {
      name: "lastnm",
      descripcion_respuesta: "",
      message: "Escribe un apellido válido",
    };

    setItem(objLastNm, /^.{0,45}$/);

    const objCraft = {
      name: "craft",
      descripcion_respuesta: "nivel_people",
      message: "*",
    };

    setItem(objCraft, /([1-5]+\.?[1-3]*)$/);

    const objBuss = {
      name: "buss",
      descripcion_respuesta: "nivel_business",
      message: "*",
    };

    setItem(objBuss, /([1-5]+\.?[1-3]*)$/);

    const objPpl = {
      name: "ppl",
      descripcion_respuesta: "nivel_people",
      message: "*",
    };

    setItem(objPpl, /([1-5]+\.?[1-3]*)$/);

    const objChp= {
      name: "rol",
      descripcion_respuesta: "",
      message: "Selecciona un Chapter válido",
    };

    setItem(objChp, /^[A-Za-z ]+$/);


    const objRol = {
      name: "rol",
      descripcion_respuesta: "",
      message: "Selecciona un rol válido",
    };
  
    setItem(objRol, /^[A-Za-z ]+$/);

    const objTeam = {
      name: "team",
      descripcion_respuesta: "",
      message: "Escribe un equipo válido",
    };

    setItem(objTeam, /^.{1,45}$/);

  }, []);

  const handleChange = (e) => {
    //handleBlur(e)
    const newMember = { ...preMember };
    newMember[e.target.name] = e.target.value;
    newMember["nivel_general"] = Math.min(
      parseFloat(newMember.nivel_craft),
      parseFloat(newMember.nivel_business) + 1,
      parseFloat(newMember.nivel_people) + 1
    );

    setPreMember(newMember);
  };

  const handleEdit = () => {
    setIsEdited(true);
  };

  const handleSave = () => {
    if (isSave) {
      //alert("actualiza");
      updateEmpleado();
    }
    //
    else registerMember();
    setIsEdited(true);
  };

  const options = [
    { label: "Elige...", value: 0 },
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

  const optionsChapter = [
    { label: "Elige...", value: 0 },
    { label: "Software", value: 1 },
  ];

  const optionsRol = [
    { label: "Elige...", value: 0 },
    { label: "CM", value: 3 },
    { label: "CLA", value: 2 },
  ];

  const registerMember = async () => {
    try {
      const data = await createMember(preMember);
      swal("Nuevo member registrado", {
        icon: "success",
      });
      setPreMember(regMember);
    } catch (error) {
      console.log(error);
      swal("Hubo un error, member no registrado", {
        icon: "warning",
      });
    }
  };

  const updateEmpleado = async () => {
    try {
      const data = await updateMember(preMember);
      swal("Member actualizado", {
        icon: "success",
      });
    } catch (error) {
      swal("Hubo un error, no se actualizo el member", {
        icon: "warning",
      });
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
                    {isEdited ? (
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        onChange={handleBlur}
                        id={0}
                        value={data[0] && data[0].descripcion_respuesta}
                        type={"email"}
                        placeholder="Ingresa el correo electrónico"
                        name={"descripcion_respuesta"}
                      />
                    ) : (
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {correo_electronico}
                      </p>
                    )}
                    {errors &&
                      errors
                        .filter((i) => i.id === 0)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nombre(s)
                    </label>
                    {isEdited ? (
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        onChange={handleBlur}
                        value={data[1] && data[1].descripcion_respuesta}
                        type={"name"}
                        id={1}
                        placeholder="Ingresa el nombre"
                        name={"descripcion_respuesta"}
                      />
                    ) : (
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {nombre}
                      </p>
                    )}

                    {errors &&
                      errors
                        .filter((i) => i.id === 1)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Paterno
                      </label>
                      {isEdited ? (
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          onChange={handleBlur}
                          id={2}
                          value={data[2] && data[2].descripcion_respuesta}
                          type={"lastn"}
                          placeholder="Ingresa el apellido paterno"
                          name={"descripcion_respuesta"}
                        />
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {apellido_paterno}
                        </p>
                      )}
                      {errors &&
                        errors
                          .filter((i) => i.id === 2)
                          .map((item) => (
                            <p className="error mt-1" key={item.id}>
                              {item.message}
                            </p>
                          ))}
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Materno
                      </label>
                      {isEdited ? (
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          onChange={handle}
                          id={3}
                          value={data[3] && data[3].descripcion_respuesta}
                          type={"lastnm"}
                          placeholder="Ingresa el apellido materno"
                          name={"descripcion_respuesta"}
                        />
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {apellido_materno}
                        </p>
                      )}
                      {errors &&
                        errors
                          .filter((i) => i.id === 3)
                          .map((item) => (
                            <p className="error mt-1" key={item.id}>
                              {item.message}
                            </p>
                          ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Overall
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                        {isEdited ? (
                          <div
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            value={preMember.nivel_general}
                            name="nivel_general"
                            type="number"
                          >
                            {preMember.nivel_general}
                          </div>
                        ) : (
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {nivel_general}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Craft
                      </label>

                      {isEdited ? (
                        <div className="flex-shrink w-full inline-block relative">
                          <select
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            onChange={handleChange}
                            value={preMember.nivel_craft && data[4] && data[4].descripcion_respuesta}
                            type="craft"
                            id = {4}
                            name={"descripcion_respuesta"}
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
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {nivel_craft}
                        </p>
                      )}
                      {errors &&
                      errors
                        .filter((i) => i.id === 4)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                ))}

                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Business
                      </label>

                      {isEdited ? (
                        <div className="flex-shrink w-full inline-block relative">
                          <select
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            onChange={handleChange}
                            id= {5}
                            value={preMember.nivel_business && data[5] && data[5].descripcion_respuesta}
                            type="number"
                            name={"nivel_business"}
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
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {nivel_business}
                        </p>
                        
                      )}
                      {errors &&
                      errors
                        .filter((i) => i.id === 5)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                ))}
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel People
                      </label>
                      {isEdited ? (
                        <div className="flex-shrink w-full inline-block relative">
                          <select
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            onChange={handleChange}
                            id = {6}
                            value={preMember.nivel_people && data[6] && data[6].descripcion_respuesta}
                            type="number"
                            name={"nivel_people"}
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
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {nivel_people}
                        </p>
                      )}
                      {errors &&
                      errors
                        .filter((i) => i.id === 6)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                                          ))}

                    </div>
                    
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Chapter
                      </label>
                      {isEdited ? (
                        <div className="flex-shrink w-full inline-block relative">
                          <select
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            id={7}
                            value={data[7] && data[7].descripcion_respuesta}
                            name={"descripcion_respuesta"}
                            onChange={handleChange}
                          >
                            {errors &&
                            errors
                              .filter((i) => i.id === 7)
                              .map((item) => (
                                <p className="error mt-1" key={item.id}>
                                  {item.message}
                                </p>
                              ))}
                            {optionsChapter.map((option, index) => (
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
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {id_chapter}
                        </p>
                      )}
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Rol
                      </label>
                      {isEdited ? (
                        <div className="flex-shrink w-full inline-block relative">
                          <select
                            className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                            value={data [8] && data[8].descripcion_respuesta}
                            name= {"descripcion_respuesta"}
                            type = {"rol"}
                            id = {8}
                            onChange={handleBlur}
                          >
                            {optionsRol.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                            {errors &&
                      errors
                        .filter((i) => i.id === 8)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
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
                      ) : (
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {id_rol}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Equipo
                    </label>
                    {isEdited ? (
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        id={9}
                        name={"descripcion_respuesta"}
                        value={data[9] && data[9].descripcion_respuesta}
                        onChange={handleBlur}
                        type={"team"}
                        placeholder="Ingresa el Equipo"
                                              />
                    ) : (
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {equipo}
                      </p>
                    )}
                    {errors &&
                      errors
                        .filter((i) => i.id === 9)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="btn"
                    onClick={isEdited ? handleSave : handleEdit}
                  >
                    {isEdited ? "Terminar Registro" : "Actualiza Datos"}
                  </button>
                </div>
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
    id_chapter: 1,
    id_rol: 0,
  },
  isSaved: false,
};
