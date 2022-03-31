import React from "react";
import Respuesta from "../components/Respuesta";

export default function Prueba() {
  return (
    <>

      <Respuesta data={2} key={2}/>
      <Respuesta data={5} isSaved={false} key={2} />

    </>
  );
}

