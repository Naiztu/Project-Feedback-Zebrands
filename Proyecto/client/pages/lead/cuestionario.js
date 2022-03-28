import React, { useState } from "react";
import Pregunta from "../../components/Pregunta";
import { FaPlus } from "react-icons/fa";

export default function Cuestionario() {
  const [pntas, setPntas] = useState([
    {
      id_pregunta: "PREG001",
      pregunta:
        "¿En qué proyectos/iniciativas pudiste interactuar con {data.nombre}? ¿Cuál fue el alcance de dichos proyectos?",
      index_pregunta: 1,
      nivel_pregunta: 1,
      dimension: "business",
      tipo_pregunta: "abierta",
    },

    {
      id_pregunta: "PREG002",
      pregunta:
        "Considerando que <Nombre> está actualmente en el nivel <LVL_P>, ¿con qué nota evalúas su rendimiento en esta dimensión? (marcar con una x en la primera columna de la opción seleccionada)",
      index_pregunta: 2,
      nivel_pregunta: 1,
      dimension: "people",
      tipo_pregunta: "abierta",
    },
  ]);
  const [addQ, setAddQ] = useState([]);

  const questionInit = {
    id_pregunta: "",
    pregunta: "",
    index_pregunta: 0,
    nivel_pregunta: 0,
    dimension: "",
    tipo_pregunta: "abierta",
  };

  const addQuestion = () => {
    setAddQ(addQ.concat(questionInit));
  };

  const [nivel, setNivel] = useState(1);

  return (
    <div>
      <div className="flex items-center bg-slate-300 py-10 rounded-b-lg">
        <h1 className="title basis-10/12 ">Cuestionario</h1>
        <label className="basis-2/12">
          <strong>Nivel:</strong>
          <select
            className="ml-0 md:ml-2"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
          >
            <option value={0}>Generales</option>
            <option value={1}>Uno</option>
            <option value={2}>Dos</option>
            <option value={3}>Tres</option>
            <option value={4}>Cuatro</option>
            <option value={5}>Cinco</option>
          </select>
        </label>
      </div>

      <div className="w-9/12 mx-auto flex flex-col items-center justify-center">
        {pntas.map((item) => (
          <Pregunta data={item} key={item.id_pregunta} />
        ))}
      </div>
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center">
        {addQ.map((item, index) => (
          <Pregunta data={item} isSaved={false} key={index} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button onClick={addQuestion} className="btn">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
