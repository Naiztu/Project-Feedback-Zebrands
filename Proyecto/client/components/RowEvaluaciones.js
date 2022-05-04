import Axios from "axios";
import React, { useEffect, useState } from "react";
import Respuesta from "./Respuesta";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getRespuestas } from "../services/respuestas";

export default function RowEvaluaciones({item ,id_evaluado,id_periodo}) {
  const { 
    id_evaluador,
    nombre, 
   estatus,
   cal_business,
   cal_craft,
   cal_people,
   cal_prom
  } = item;
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
  
    item.estatus === "Contestado" && getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getRespuestas(id_evaluador, id_evaluado, id_periodo);
      setRespuestas(data.data_res);
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <tr className=" text-black/80">
      <td className=" items-center p-2 whitespace-nowrap  flex justify-between">
        
          <div className="p-2 whitespace-nowrap">{nombre}</div>
        </td>
       
        <td className="p-2 whitespace-nowrap">{estatus}</td>
        <td className="p-2 whitespace-nowrap">{cal_business?(cal_business):("NA")}</td>
        <td className="p-2 whitespace-nowrap">{cal_craft?(cal_craft):("NA")}</td>
        <td className="p-2 whitespace-nowrap">{cal_people?(cal_people):("NA")}</td>
        <td className="p-2 whitespace-nowrap">{cal_prom?(cal_prom):("NA")}</td>
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

RowEvaluaciones.defaultProps = {
  cal_business:'NA',
  cal_craft:'NA',
  cal_people:'NA',
  cal_prom:'NA'
};