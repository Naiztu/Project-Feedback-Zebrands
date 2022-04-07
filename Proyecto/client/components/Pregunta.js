import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";
import swal from "sweetalert";
import Axios from "axios";

export default function Pregunta({ data, isSaved, update }) {
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
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      try {
        const res = await Axios.delete(
          `${process.env.HOSTBACK}/preguntas/${data.id_pregunta}`
        );
        console.log({ res });
        if (res.status != 200) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        update();
      } catch (err) {
        swal("Hubo un error", {
          icon: "warning",
        });
      }
    } else {
      swal("Your imaginary file is safe!");
    }
  };

  const createQuestion = async () => {
    try {
      const res = await Axios.post(
        `${process.env.HOSTBACK}/preguntas/registra`,
        {
          pregunta,
          nivel_pregunta: data.nivel_pregunta,
          dimension_pregunta: data.dimension,
          tipo_pregunta: tipo,
          id_chapter: 1,
        }
      );
      console.log({ res });
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
      swal("Poof! Your imaginary file has been saved!", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo error", {
        icon: "warning",
      });
    }
  };

  const updateQuestion = async () => {
    try {
      const res = await Axios.put(
        `${process.env.HOSTBACK}/preguntas/descripcion`,
        {
          id_pregunta: data.id_pregunta,
          pregunta,
          tipo_pregunta: tipo,
        }
      );
      console.log({ res });
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      }
      swal("Poof! Your imaginary file has been saved!", {
        icon: "success",
      });
    } catch (err) {
      console.log(err),
        swal("Hubo error", {
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
