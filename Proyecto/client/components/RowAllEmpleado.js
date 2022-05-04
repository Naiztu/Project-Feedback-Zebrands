import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalCheck } from "react-icons/bs";
import { useRouter } from "next/router";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import Feedbacks from "../components/Feedbacks";
import { UserContext } from "../context/userContext";


export default function RowAllEmpleado({ info }) {
  const router = useRouter();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const botonPerfil = () => {
    router.push(`/lead/adminasig/${id_empleado}`);
  };

  const botonFeedbacks = () => {
    router.push(`/lead/adminasig/${id_empleado}`);
    const router = useRouter();
  };
  const redirectInfo = () => {
    router.push("/lead/info");
  };


  return (
    <>
      <tr className="">
        <td className=" p-2 ">
          <div className="items-stretch flex">
            <div className="w-10 h-10 mr-2 sm:mr-3 flex items-center">
              <img
                className="rounded-full aspect-square object-cover"
                src={info.imagen_perfil}
                width={40}
                height={40}
              />
            </div>
            <div className=" flex items-center font-medium text-gray-800">
              {info.nombre+" "+info.apellido_paterno}
            </div>
          </div>
        </td>

        <td className="p-2">
          <div className="font-medium text-gray-800">{info.nombre_rol}</div>
        </td>

        <td className="p-2">
          <div className="font-medium text-gray-800">{info.nivel_general}</div>
        </td>

        <td className="p-2">
          <div className="font-medium text-gray-800">{info.equipo}</div>
        </td>
        <td className="p-2">
          <div className="grid grid-cols-2 ">
            <button
              className=" rounded-md bg-primary-50"
              onClick={redirectInfo}
            >
              <div className="w-10 h-10 md:w-auto flex items-center justify-center">
                <BiUserCircle size={25} className="fill-white" />
                <p className="md:ml-2 md:inline hidden text-white">
                  Ver perfil
                </p>
              </div>
            </button>

            <button
              className=" rounded-md bg-secondary-50 ml-2 "
              onClick={openModal}
            >
              <div className="w-10 h-10 md:w-auto flex items-center justify-center">
                <BsJournalCheck size={25} className="fill-white" />
                <p className="md:ml-2 md:inline hidden text-white">
                  Ver Feedbacks
                </p>
              </div>
            </button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <div className="flex flex-col pt-4">
            <Feedbacks id_user={info.id_empleado} />
            </div>
          </Modal>
          </div>
        </td>
      </tr>
    </>
  );
}
