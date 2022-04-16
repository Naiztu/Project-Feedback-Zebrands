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
        `${process.env.HOSTBACK}id_empleado`,
        {
          
          id_empleado: data.id_empleado,
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
            {/* <button className="btn" onClick={registerInfo}>
              {/* //  */}
              {/* Guardar
              </button> */}
          </div>
          )}
    </>
  )
}

DatosEmpleado.defaultProps = {
  info: {
    nombre_member: "Oli",
    apellidopaterno_member: "M",
    apellidomaterno_member: "Q",
    correo_member: "olim@SAO" ,
    contraseña_member: "iluvdrugs",
    rol_member: "lead",
    chapter: "all",
    equipo_member: "god",
    lead_member: "i"
  },
  isSaved: false,
};