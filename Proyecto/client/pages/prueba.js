
   
import React from "react";
import DatosEmpleado from "../components/DatosEmpleado";

export default function Prueba() {
  return (
    <>
          <header className=" bg-slate-400/10 w-full pt-10 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <h1  className=" title my-5 mb-7 mt-3">
            Mi perfil
          </h1>
        </div>
      </header>

      <DatosEmpleado name={"nombre"} value={"Felipe"}/>
      <DatosEmpleado name={"Apellido paterno"} value={"Neduro"}/>
      <DatosEmpleado name={"Apellido materno"} value={"Garcia"}/>
      
      <DatosEmpleado name={"Correo"} value={"noobmaster69@gmail.com"}/>
      <DatosEmpleado name={"Contraseña"} value={"*******"}/>
      <DatosEmpleado name={"Rol del usuario"} value={"Chapter Lead Assistant"}/>
      <DatosEmpleado name={"Chapter"} value={"Software"}/>
      <DatosEmpleado name={"Equipo"} value={"Zecore Client"}/>
      <DatosEmpleado name={"Chapter Lead"} value={"Edgar Santanta Matute"}/>



    </>
  );
}
