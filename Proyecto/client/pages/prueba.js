import React from "react";
import Respuesta from "../components/Respuesta";

export default function Prueba() {
  return (
    <>
    <Respuesta pregunta = {{enunciado:"¿Pa?", tipo_respuesta:"abierta"}}/>
    <Respuesta pregunta = {{enunciado:"¿Pn?", tipo_respuesta:"numerica"}}/>
    <Respuesta pregunta = {{enunciado:"¿Pc?", tipo_respuesta:"calificacion"}}/>



    </>
  );
}