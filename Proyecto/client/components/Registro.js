import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useUser } from "../context/userContext";
import { updateMember, createMember, desactivar } from "../services/empleado";
import { getPerfil } from "../services/perfil";
import { useForm } from "../hooks/useForm";
import { objects, reg } from "../util/objectsInputs";

export default function Registro({ regMember, isSaved }) {
  const {
    correo_electronico,
    nombre,
    apellido_paterno,
    apellido_materno,
    nivel_general,
    nivel_craft,
    nivel_business,
    nivel_people,
    id_chapter,
    id_rol,
    equipo,
    password,
    activo,
    id_empleado,
  } = regMember;

  const { isAuthenticated, user } = useUser();
  const [isSave, setIsSave] = useState(isSaved);
  const [isEdited, setIsEdited] = useState(!isSaved);
  const [newApellido, setNewApellido] = useState("");
  const [newNivel_general, setNewNivel_general] = useState(nivel_general);
  const [data, errors, handle, handleBlur, setItem, checkErrors, setData] =
    useForm();
  const [load, setLoad] = useState(false);

  const random = (length = 8) => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$%*¿?@-_";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  };

  useEffect(() => {
    data.length === 0 &&
      objects(regMember).forEach((item, i) => setItem(item, reg[i]));
    return () => {
      setData([]);
    };
  }, []);

  const registerMember = async () => {
    try {
      const contrasena = random();
      const newMem = await createMember({
        nombre: data[1].descripcion_respuesta,
        apellido_paterno: data[2].descripcion_respuesta,
        apellido_materno: newApellido,
        nivel_craft: data[3].descripcion_respuesta,
        nivel_business: data[4].descripcion_respuesta,
        nivel_people: data[5].descripcion_respuesta,
        nivel_general: newNivel_general,
        correo_electronico: data[0].descripcion_respuesta,
        equipo: data[8].descripcion_respuesta,
        id_chapter: data[6].descripcion_respuesta,
        password: contrasena,
        id_rol: data[7].descripcion_respuesta,
      });
      setData([]);

      swal(
        "Registraste un member con la contraseña: \n\t\t" +
        contrasena +
        " \n\tmándasela por correo.",
        {
          icon: "success",
        }
      );
      objects(regMember).forEach((item, i) => setItem(item, reg[i]));
    } catch (error) {
      swal("Hubo un error, member no registrado", {
        icon: "warning",
      });
    }
  };

  const updateEmpleado = async () => {
    try {
      const res = await updateMember({
        id_empleado,
        nombre: data[1].descripcion_respuesta,
        apellido_paterno: data[2].descripcion_respuesta,
        apellido_materno: newApellido,
        nivel_craft: data[3].descripcion_respuesta,
        nivel_business: data[4].descripcion_respuesta,
        nivel_people: data[5].descripcion_respuesta,
        nivel_general: newNivel_general,
        correo_electronico: data[0].descripcion_respuesta,
        equipo: data[8].descripcion_respuesta,
        id_chapter: data[6].descripcion_respuesta,
        id_rol: data[7].descripcion_respuesta
      });
      swal("Member actualizado", {
        icon: "success",
      });
    } catch (error) {
      swal("Hubo un error, no se actualizó el member", {
        icon: "warning",
      });
    }
  };

  const updateDesactivar = async () => {
    try {
      const data = await desactivar(id_empleado);
      swal("Member desactivado", {
        icon: "success",
      });
    } catch (error) {
      swal("Hubo un error, el Member no se desactivó", {
        icon: "warning",
      });
    }
  };



  const handleChange = (e) => {
    handleBlur(e);
    setNewNivel_general(
      Math.min(
        parseFloat(data[3].descripcion_respuesta),
        parseFloat(data[4].descripcion_respuesta) + 1,
        parseFloat(data[5].descripcion_respuesta) + 1
      )
    );
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

  const handleEdit = () => {
    setIsEdited(true);
  };

  const handleSave = () => {
    if (isSave) {
      //alert("funcion actualizada");
      updateEmpleado();
      setIsEdited(false);
    } else {
      if (checkErrors() === 0) {
        registerMember();
        setIsEdited(true);
      } else {
        swal("Tienes campos faltantes!", {
          icon: "error",
        });
      }
    }
  };

  return (
    <>

      {/*<header className="w-full pt-10 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <h1 className=" title">
            {!isSaved ? "" : "Información del Member"}
          </h1>
        </div>
      </header> */}
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl  px-6 mx-auto">
          {/* <h2 className="text-2xl text-gray-900">
              
              {!isSaved
                ? "Información del nuevo Member:"
                : "Información del Member:"}
            </h2> */}
          <div className="mt-6 ">
            <div className="personal w-full">
              <div className="w-full md:w-full px-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  //for="grid-text-1"
                  >
                    *Dirección de Correo
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
                    *Nombre(s)
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
                      *Apellido Paterno
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
                        onChange={(e) => setNewApellido(e.target.value)}
                        value={newApellido}
                        type={"text"}
                        placeholder="Ingresa el apellido materno"
                      />
                    ) : (
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {apellido_materno}
                      </p>
                    )}
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
                          name="nivel_general"
                          type="number"
                        >
                          {newNivel_general}
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
                      *Nivel Craft
                    </label>

                    {isEdited ? (
                      <div className="flex-shrink w-full inline-block relative">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          onChange={handleChange}
                          value={data[3] && data[3].descripcion_respuesta}
                          type="craft"
                          id={3}
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
                        .filter((i) => i.id === 3)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      *Nivel Business
                    </label>

                    {isEdited ? (
                      <div className="flex-shrink w-full inline-block relative">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          onChange={handleChange}
                          id={4}
                          value={data[4] && data[4].descripcion_respuesta}
                          type="number"
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
                        {nivel_business}
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
                  <div className="w-full md:w-full px-3 mb-6 flex flex-col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      *Nivel People
                    </label>
                    {isEdited ? (
                      <div className="flex-shrink w-full inline-block relative f">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          onChange={handleChange}
                          id={5}
                          value={data[5] && data[5].descripcion_respuesta}
                          type="number"
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
                        {nivel_people}
                      </p>
                    )}
                  </div>
                  {errors &&
                    errors
                      .filter((i) => i.id === 5)
                      .map((item) => (
                        <p className="error mt-1" key={item.id}>
                          {item.message}
                        </p>
                      ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      *Chapter
                    </label>
                    {isEdited ? (
                      <div className="flex-shrink w-full inline-block relative">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          id={6}
                          type="chapter"
                          value={data[6] && data[6].descripcion_respuesta}
                          name={"descripcion_respuesta"}
                          onChange={handleBlur}
                        >
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

                    {errors &&
                      errors
                        .filter((i) => i.id === 6)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      *Rol
                    </label>
                    {isEdited ? (
                      <div className="flex-shrink w-full inline-block relative">
                        <select
                          className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                          value={data[7] && data[7].descripcion_respuesta}
                          name={"descripcion_respuesta"}
                          type={"rol"}
                          id={7}
                          onChange={handleBlur}
                        >
                          {optionsRol.map((option, index) => (
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
                        {id_rol}
                      </p>
                    )}
                    {errors &&
                      errors
                        .filter((i) => i.id === 7)
                        .map((item) => (
                          <p className="error mt-1" key={item.id}>
                            {item.message}
                          </p>
                        ))}
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    *Equipo
                  </label>
                  {isEdited ? (
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      id={8}
                      name={"descripcion_respuesta"}
                      value={data[8] && data[8].descripcion_respuesta}
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
                      .filter((i) => i.id === 8)
                      .map((item) => (
                        <p className="error mt-1" key={item.id}>
                          {item.message}
                        </p>
                      ))}
                </div>
              </div>
              <div className="flex flex-row space-x-64 items-center justify-center">
                {isSave && (
                  <button
                    disabled={isEdited ? true : false}
                    className="btn"
                    onClick={updateDesactivar}
                  >
                    Desactivar Member
                  </button>
                )}

                <button
                  disabled={load || errors.length > 0}
                  className="btn"
                  onClick={() => {
                    setLoad(true);
                    isEdited ? handleSave() : handleEdit();
                    setLoad(false);
                  }}
                >
                  {load ? (
                    <span className={`w-10 h-10 ${load ? "inline" : "hidden"}`}>
                      <Spinner pnt={4} />
                    </span>
                  ) : (
                    <p>{isEdited ? "Guardar Registro" : "Actualiza Datos"}</p>
                  )}
                </button>
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
    nivel_general: "0",
    nivel_craft: "0",
    nivel_business: " 0",
    nivel_people: "0",
    correo_electronico: "",
    equipo: "",
    password: "",
    id_chapter: "1",
    id_rol: "3",
  },
  isSaved: false,
};
