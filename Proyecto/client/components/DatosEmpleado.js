import React, { useState } from "react";
import {FaPencilAlt, FaSave } from "react-icons/fa";

export default function DatosEmpleado({info, isSaved, id_empleado}) {
  const {
    nombre_member,
    apellidopaterno_member,
    apellidomaterno_member,
    correo_member,
    contraseña_member,
    rol_member,
    chapter,
    equipo_member,
    lead_member
  } = info;
  const [isEdited, setIsEdited] = useState(!isSaved);

  const handleEdit = () => {
    setIsEdited(true);
  };
  const [preInfo, setPreInfo] = useState(info);

  const handleChange = (e) => {
    const newInfo = { ...preInfo };
    newInfo[e.target.name] = e.target.value;
    setPreInfo(newInfo);
  };


  const registerInfo = async () => {
    try {
      const res = await Axios.post(
        `http://localhost:8080/feedback/${id_empleado}`,
        preFeedback
      );
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else alert("Edición guardada");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <header className=" bg-slate-400/10 w-full pt-10 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <h1 className=" title">
            {isSaved ? "Mi perfil" : "Perfil de empleado"}
          </h1>
        </div>
      </header>
      <div className="w-11/12  mx-auto">
      <div className="flex space-x-20 flex-row w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
      <div
          className="w-11/12 md:w-9/12
    mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden "
        >
      <div className="rowDimension">
            <div className="dimesion">nombre</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{nombre_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.nombre_member}
                name="nombre_member"
                placeholder="Nombre del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Apellido paterno</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{apellidopaterno_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.apellidopaterno_member}
                name="apellidopaterno_member"
                placeholder="Apellido paterno del empleado"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Apellido materno</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{apellidomaterno_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.apellidomaterno_member}
                name="apellidomaterno_member"
                placeholder="Apellido materno del empleado"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">correo member</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{correo_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.correo_member}
                name="correo_member"
                placeholder="Correo del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

          <div className=" flex flex-col space-y-3">
          <button
            className="btn"
            onClick={isEdited ? updateInfo : handleEdit}
          >
            {isEdited ? <FaSave /> : <FaPencilAlt />}
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Contraseña</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{contraseña_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.contraseña_member}
                name="contraseña_member"
                placeholder="Contraseña del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Rol del empleado</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{rol_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.contraseña_member}
                name="rol_member"
                placeholder="Rol del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Chapter</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{chapter}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.chapter}
                name="chapter"
                placeholder="Chapter del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Equipo</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{equipo_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.equipo_member}
                name="equipo_member"
                placeholder="Equipo del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="rowDimension">
            <div className="dimesion">Lead del member</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{lead_member}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preInfo.lead_member}
                name="lead_member"
                placeholder="Lead del member"
                onChange={handleChange}
              ></textarea>
            )}
          </div>

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
        </div>

    </div>
    
    {!isSaved && (
        <div className="w-9/12 flex items-center justify-center font-bold">
          <button className="btn" onClick={registerInfo}>
            Guardar
          </button>
        </div>
      )}
      </div>
    </>
  )
}

DatosEmpleado.defaultProps = {
  info: {
    nombre_member: "felipe",
    apellidopaterno_member: "neduro",
    apellidomaterno_member: "garcia",
    correo_member: "noobmaster69@gmail.com" ,
    contraseña_member: "123454321",
    rol_member: "Chapter Lead Assistant",
    chapter: "software",
    equipo_member: "Zecore Client",
    lead_member: "Edgar Santanta Matute"
  },
  isSaved: true,
};

