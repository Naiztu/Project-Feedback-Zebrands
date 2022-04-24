import Axios from "axios";
import React, { useEffect, useState } from "react";
import Respuesta from "./Respuesta";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";

export default function RowEvaluaciones({ item }) {
  const { id_evaluado, id_evaluador, id_periodo } = item;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    item.estatus === "Contestado" && getRespuestas();
  }, []);

  const getRespuestas = async () => {
    try {
      const res = await api.get(
        `/respuestas/${id_evaluador}/${id_evaluado}/${id_periodo}`
      );
      console.log({ res });
      setRespuestas(res.data.data_res);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <tr className=" text-black/80">
        <td className="p-2 whitespace-nowrap">{item.nombre}</td>
        <td className="p-2 whitespace-nowrap">{item.estatus}</td>
        <td className="p-2 whitespace-nowrap">
          <button
            onClick={openModal}
            disabled={item.estatus === "No Contestado"}
            className="btn"
          >
            {item.estatus === "Contestado" ? <FaEye /> : <FaEyeSlash />}
          </button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <div className="flex flex-col pt-4">
              {respuestas.map((item, index) => (
                <Respuesta info={item} key={index} isSaved={true} />
              ))}
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
}
