import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";
import swal from "sweetalert";
import {
  deletePregunta,
  postPregunta,
  updatePregunta,
} from "../services/preguntas";

export default function Pregunta({ data, isSaved, setPntas, pntas }) {
  const [isSave, setIsSave] = useState(isSaved);
  const [isEdited, setIsEdited] = useState(!isSaved);
  const [pregunta, setPregunta] = useState(data.pregunta);
  const [tipo, setTipo] = useState(data.tipo_pregunta);

  const handleEdit = () => {
    setIsEdited(true);
  };

  const handleQuestion = () => {
    if (!isSave) {
      createQuestion();
      setIsSave(true);
    } else updateQuestion();
    setIsEdited(false);
  };

  const deleteQuestion = async () => {
    const willDelete = await swal({
      title: "¿Estas seguro?",
      text: "Si eliminas esta pregunta, no se podra recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      try {
        const res = await deletePregunta(data.id_pregunta);
        setPntas(
          pntas
            .filter((item) => data.id != item.id)
            .map((item, index) => ({ ...item, id: index }))
        );
        swal("Eliminada satisfactoriamente!", {
          icon: "success",
        });
      } catch (err) {
        swal("Hubo un error, la pregunta no se elimino!", {
          icon: "warning",
        });
      }
    } else {
      swal("Operacion cancelada!");
    }
  };

  const createQuestion = async () => {
    try {
      const res = await postPregunta({
        pregunta,
        nivel_pregunta: data.nivel_pregunta,
        dimension_pregunta: data.dimension,
        tipo_pregunta: tipo,
        id_chapter: 1,
      });
      swal("Pregunta registrada!", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo error, la pregunta no se registro!", {
        icon: "warning",
      });
    }
  };

  const updateQuestion = async () => {
    try {
      const res = await updatePregunta({
        id_pregunta: data.id_pregunta,
        pregunta,
        tipo_pregunta: tipo,
      });
      swal("Pregunta actualizada!", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo error, la pregunta no fue actualizada!", {
        icon: "warning",
      });
    }
  };

  const options = [
    { label: "Abierta", value: "abierta" },
    { label: "Numerica", value: "numerica" },
    { label: "Calificación", value: "calificacion" },
  ];

  const handleChange = (e) => {
    setTipo(e.target.value);
  };

  return (
    <div className="flex-col w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
      <div className=" flex flex-row items-center justify-between space-x-2">
        {isEdited ? (
          <textarea
            type="text"
            className="w-full h-full appearance-none bg-white border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded-md"
            name="pregunta"
            id={data.id_pregunta}
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
          />
        ) : (
          <p>{pregunta}</p>
        )}
        <div className=" flex flex-col space-y-3">
          <button
            className="btn"
            onClick={isEdited ? handleQuestion : handleEdit}
          >
            {isEdited ? <FaSave /> : <FaPencilAlt />}
          </button>
          <button
            className={`btn-red ${isEdited ? "hidden" : "flex"}`}
            onClick={deleteQuestion}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="w-full mx-auto bg-black/10 px-3 py-2 mt-2 rounded-md flex items-center">
        <label>
          <strong className="mr-2">Tipo de pregunta:</strong>
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
            tipo
          )}
        </label>
      </div>
    </div>
  );
}
Pregunta.defaultProps = {
  isSaved: true,
};
