import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";

export default function Respuesta({ data, isSaved }) {
  const [isSave, setIsSave] = useState(isSaved);
  const [isEdited, setIsEdited] = useState(!isSaved);
  const [pregunta, setPregunta] = useState(data.pregunta);
  const [tipo, setTipo] = useState(data.tipo_pregunta);

  const handleEdit = () => {
    setIsEdited(true);
  };


  const options = [
    { label: "Nivel 1", value: 1 },
    { label: "Nivel 2", value: 2 },
    { label: "Nivel 3", value: 3 },
    { label: "Nivel 4", value: 4 },
    { label: "Nivel 5", value: 5 },
  ];

  const handleChange = (e) => {
    setTipo(e.target.value);
  };

  return (
    <div className="flex-col w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
      <div className=" flex flex-row items-center justify-between space-x-2">
        <p>Pregunta predeterminada 1</p>
        <p>{pregunta}</p> 
        {isEdited ? (
          <select
          className="ml-4"
          value={tipo}
          onChange={handleChange}
          disabled={!isEdited}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        ) : (
            <textarea
            type="text"
            className="w-full h-full appearance-none bg-white border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded-md"
            name="pregunta"
            placeholder="Aqui va la respuesta"
            id={data.id_pregunta}
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
        )}
      </div>
      <div className="w-full mx-auto bg-black/10 px-3 py-2 mt-2 rounded-md flex items-center">
        <label>
          <strong className="mr-2">Respuesta:</strong>
          {isEdited ? (
            <div>
              <p>Respuesta:</p>
            <select
              className="ml-4"
              value={tipo}
              onChange={handleChange}
              disabled={!isEdited}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            </div>
          ) : (
            tipo
          )}
        </label>
        
      </div>
    </div>
  );
}
Respuesta.defaultProps = {
  isSaved: true,
};
