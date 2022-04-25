import React from "react";
import DatosEmpleado from "../components/DatosEmpleado";
import Loader from "../components/loader/Loader";

export default function Prueba() {
  return (
    <div className=" w-1/2 h-96 flex justify-center items-center">
      <Loader hmax={70} hmin={10} w={15} />
    </div>
  );
}
