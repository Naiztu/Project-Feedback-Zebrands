import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";
import { BsFillArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import { useForm } from "../hooks/useForm";
import swal from "sweetalert";
import {
  deletePregunta,
  postPregunta,
  updatePregunta,
  indexCambio,
} from "../services/preguntas";

export default function Pregunta({ data, isSaved, setPntas, pntas, setAddQ }) {
  const [isSave, setIsSave] = useState(isSaved);
  const [isEdited, setIsEdited] = useState(!isSaved);
  const [tipo, setTipo] = useState(data.tipo_pregunta);
  const [datas, errors, handle, handleBlur, setItem, checkErrors, setData] =
    useForm();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const objQues = {
      descripcion_respuesta: data.pregunta,
      message: "Has llegado al límite de caracteres",
    };

    setItem(objQues, /^.{1,255}$/);
  }, []);

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
      title: "¿Estás seguro?",
      text: "Si eliminas esta pregunta, no se podrá recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (willDelete) {
      try {
        const res = await deletePregunta(data.id_pregunta);
        setPntas(pntas.filter((item) => data.id_pregunta != item.id_pregunta));
        swal("Eliminada satisfactoriamente", {
          icon: "success",
        });
      } catch (err) {
        swal("Hubo un error, la pregunta no se eliminó", {
          icon: "warning",
        });
      }
    } else {
      swal("Operación cancelada");
    }
  };

  const createQuestion = async () => {
    try {
      const res = await postPregunta({
        pregunta: datas[0].descripcion_respuesta,
        nivel_pregunta: data.nivel_pregunta,
        dimension_pregunta: data.dimension,
        tipo_pregunta: tipo,
        id_chapter: 1,
      });
      const newP = {
        id_pregunta: res.id_pregunta,
        pregunta: datas[0].descripcion_respuesta,
        nivel_pregunta: data.nivel_pregunta,
        dimension_pregunta: data.dimension,
        tipo_pregunta: tipo,
        id_chapter: 1,
      };

      setPntas(pntas.concat(newP));
      setAddQ([]);

      swal("Pregunta registrada", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo un error, la pregunta no se registró", {
        icon: "warning",
      });
    }
  };

  const updateQuestion = async () => {
    try {
      const res = await updatePregunta({
        id_pregunta: data.id_pregunta,
        pregunta: datas[0].descripcion_respuesta,
        tipo_pregunta: tipo,
      });
      swal("Pregunta actualizada", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo un error, la pregunta no fue actualizada", {
        icon: "warning",
      });
    }
  };

  const changeIndex = async () => {
    try {
      const res = await indexCamb({
        id_pregunta_origen: data.id_pregunta,
        id_pregunta_destino: data.id_pregunta + 1,
      });
      swal("Cambio exitoso", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo un error, la pregunta no cambió de lugar", {
        icon: "warning",
      });
    }
  };

  const options = [
    { label: "Abierta", value: "abierta" },
    { label: "Numérica", value: "numerica" },
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
            name={"descripcion_respuesta"}
            id={0}
            value={datas[0] && datas[0].descripcion_respuesta}
            onChange={handleBlur}
          />
        ) : (
          <p>{datas[0] && datas[0].descripcion_respuesta}</p>
        )}

        {errors &&
          errors
            .filter((i) => i.id === 0)
            .map((item) => (
              <p className="error mt-1" key={item.id}>
                {item.message}
              </p>
            ))}
        <div className=" flex flex-col space-y-3">
          <button
            className="btn"
            disabled={load || errors.length > 0}
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
