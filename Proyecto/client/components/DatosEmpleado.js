import React, { useState } from "react";
import {FaPencilAlt, FaSave } from "react-icons/fa";
import Axios from "axios";
import swal from "sweetalert";
import Dato from "./Dato";


export default function DatosEmpleado({info, isSaved, id_empleado}) {

  const [datos, setDatos] = useState(Object.entries(info))

  const handleEdit = () => {
    setIsEdited(true);
  };

  const handleChange = (e) => {
    const newDatos = [ ...datos ];
    newDatos[e.target.id][1] = e.target.value;
    setDatos(newDatos);
  };

  const handleInfo = () => {
    if (!isSave) {
      setIsSave(true);
      setIsEdited(false);
    } else {
      updateInfo();
      setIsEdited(false);
    }
  };

    const updateInfo = async () => {
    try {
      const res = await Axios.put(
        `${process.env.HOSTBACK}/empleado/updateCM`,
        {
          id_empleado: datos.id_empleado,
          info,
        }
      );
      console.log({ res });
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
      swal("La información ha sido guardada de forma exitosa.", {
        icon: "success",
      });
    } catch (err) {
      console.log(err)
      swal("Hubo error", {
        icon: "warning",
      });
    }
  };

  const registerMember = async () => {
    try {
      const res = await Axios.post(
        `${process.env.HOSTBACK}/empleado/`,
        {
          nombre_member: datos.nombre_member,
          apellidopaterno_member: datos.apellidopaterno_member,
          apellidomaterno_member: datos.apellidomaterno_member, 
          correo_member: datos.correo_member,
          contraseña_member: datos.contraseña_member,
          rol_member: datos.rol_member,
          chapter: datos.chapter,
          equipo_member: datos.equipo_member,
          lead_member: datos.lead_member,
        }
      );
      console.log({ res });
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
      swal("La información ha sido guardada de forma exitosa.", {
        icon: "success",
      });
    } catch (err) {
      console.log(err)
      swal("Hubo error", {
        icon: "warning",
      });
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
      <div className="w-full mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden ">
        
        {datos.map((item,index)=>(
          <Dato key={index} data={item} index={index} handleChange={handleChange}/>
        ))}
       

          </div>
          </div>
          </div>
          {!isSaved && (
          <div className="w-9/12 flex items-center justify-center font-bold">
            { <button className="btn" onClick={registerMember}>
              Guardar
              </button> }
          </div>
          )}
    </>
  )
}

DatosEmpleado.defaultProps = {
  info: {
    nombre_member: "",
    apellidopaterno_member: "",
    apellidomaterno_member: "",
    correo_member: "" ,
    contraseña_member: "",
    rol_member: "",
    chapter: "",
    equipo_member: "",
    lead_member: ""
  },
  isSaved: false,
};