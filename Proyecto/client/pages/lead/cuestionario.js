import React, { useState } from "react";
import Layout from "../../components/Layout";
import PreguntaDimension from "../../components/PreguntaDimension";
import { useUser } from "../../context/userContext";

export default function Cuestionario() {
  const [nivel, setNivel] = useState(1);
  const { isAuthenticated } = useUser();

  const dimensiones = ["craft", "people", "business"];

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row items-center justify-center bg-slate-300 py-10 sm:space-x-5 rounded-b-lg w-full">
        <h1 className="title  ">Cuestionario</h1>
        <label className=" ">
          <strong>Nivel:</strong>
          <select
            className="ml-2"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          >
            {/* <option value={0}>Generales</option> */}
            <option value={1.0}>Uno</option>
            <option value={2.0}>Dos</option>
            <option value={3.0}>Tres</option>
            <option value={4.0}>Cuatro</option>
            <option value={5.0}>Cinco</option>
          </select>
        </label>

      </div>
      <div className="text-center py-10 sm:space-x-5 rounded-b-lg w-3/4 text-secondary-50 mx-auto">
      IMPORTANTE. Asegurate de que SIEMPRE tengas una pregunta de tipo calificación en cada apartado
        Esto servirá para mantener visibilidad en el desempeño de cada miembro evaluado
      </div>
      {isAuthenticated && dimensiones.map((item, index) => (
        <PreguntaDimension Dimension={item} Nivel={nivel} key={index} />
      ))}
    </Layout>
  );
}
