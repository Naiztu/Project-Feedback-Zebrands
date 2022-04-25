import React, { useEffect, useState } from "react";
import Pregunta from "./Pregunta";
import { FaPlus } from "react-icons/fa";
import { getPreguntaNivelDimension } from "../services/preguntas";

export default function PreguntaDimension({ Nivel, Dimension }) {
  const [pntas, setPntas] = useState([]);

  const getPreguntas = async () => {
    try {
      const data = await getPreguntaNivelDimension(Nivel, Dimension);
      setPntas(data.preguntas.map((item, index) => ({ ...item, id: index })));
      setAddQ([]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPreguntas();
  }, [Nivel]);

  const [addQ, setAddQ] = useState([]);

  const questionInit = {
    id_pregunta: "",
    pregunta: "",
    index_pregunta: 0,
    nivel_pregunta: Nivel,
    dimension: Dimension,
    tipo_pregunta: "abierta",
  };

  const addQuestion = () => {
    setAddQ(addQ.concat(questionInit));
  };

  return (
    <>
      <div className="relative flex pt-10 items-center w-9/12 mx-auto">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400 uppercase text-3xl">
          {Dimension}
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center">
        {pntas.map((item) => (
          <Pregunta
            data={item}
            key={item.id_pregunta}
            setPntas={setPntas}
            pntas={pntas}
          />
        ))}
      </div>
      <div className="w-9/12 mx-auto flex flex-col items-center justify-center">
        {addQ.map((item, index) => (
          <Pregunta
            data={item}
            isSaved={false}
            key={index}
            setPntas={setPntas}
            pntas={pntas}
          />
        ))}
      </div>
      {addQ.length === 0 && (
        <div className="flex justify-center mt-10">
          <button onClick={addQuestion} className="btn">
            <FaPlus />
          </button>
        </div>
      )}
    </>
  );
}
