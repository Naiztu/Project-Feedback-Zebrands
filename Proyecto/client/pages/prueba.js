import React from "react";
<<<<<<< HEAD
import DatosEmpleado from "../components/DatosEmpleado";
import Loader from "../components/loader/Loader";
import Registro from "../components/Registro";

export default function Prueba() {
  return (
    <Registro></Registro>
=======
import Loader from "../components/loaders/Loader";
import PageZebrands from "../components/loaders/PageZebrands";
import Spinner from "../components/loaders/Sppiner";
import ThreeDotsWave from "../components/loaders/ThreeDotsWave";

export default function Prueba() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <PageZebrands />
    </div>
>>>>>>> develop
  );
}
