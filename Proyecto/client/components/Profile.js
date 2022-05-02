import React, { useEffect, useRef, useState } from "react";
import { useUser } from "../context/userContext";
import { useModal } from "../hooks/useModal";
import { getPerfil, updatePass } from "../services/perfil";
import Modal from "./Modal";
import swal from "sweetalert";
import { postImage } from "../services/images";
import { getMyAssistant } from "../services/assistant";

export default function Perfil() {
  const [img, setImg] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [assitant, setAssistant] = useState({});
  const { user, isAuthenticated, setUser } = useUser();
  const imagenPrev = useRef();

  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    correo_electronico,
    equipo,
    nivel_business,
    nivel_craft,
    nivel_people,
    nivel_general,
    id_rol,
  } = user || {};

  const getPerfilData = async () => {
    try {
      const data = await getMyAssistant(user.id_empleado);
      setAssistant(data.info_assistant);
    } catch (err) {
      console.log({ err });
    }
  };

  const [password, setPassword] = useState([]);
  const [newPassword, setNewpassword] = useState([]);
  const [confirmPass, setConfirmPass] = useState([]);

  const updatePassword = async () => {
    try {
      const res = await updatePass({
        password,
        newPassword,
      });
      swal("Contraseña actualizada!", {
        icon: "success",
      });
    } catch (err) {
      swal("Hubo error, la contraseña no fue actualizada!", {
        icon: "warning",
      });
    }
  };

  const validate = () => {
    if (newPassword === confirmPass) {
      updatePassword();
    } else {
      swal("No coinciden!", {
        icon: "warning",
      });
    }
  };

  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };
  const handleChange2 = (e) => {
    setNewpassword(e.target.value);
  };
  const handleChange3 = (e) => {
    setConfirmPass(e.target.value);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getPerfilData();
    }
  }, [isAuthenticated]);

  const uploadImg = async () => {
    const formData = new FormData();
    formData.append("image", img);
    try {
      const imagen_perfil = await postImage(formData);
      setUser({ ...user, imagen_perfil });
      closeModal();
      swal("Foto Actualizada", {
        icon: "success",
      });
    } catch (error) {
      await swal({
        title: "¡Hubo un Error!",
        text: "No se pudo modificar tu foto de perfil",
        icon: "warning",
      });
    }
  };

  return (
    <>
      {user && (
        <div>
          <div className="w-full pt-10 rounded-b-3xl">
            <div className="container mx-auto">
              <div className="inputs w-full max-w-4xl p-6 mx-auto">
                <h2 className="text-2xl text-gray-900">
                  {" "}
                  Información de Perfil{" "}
                </h2>
                <div className="mt-6 border-t border-gray-400 pt-4">
                  <div className="personal w-full">
                    <div className="w-full md:w-full px-3 mb-6">
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nombre(s)
                        </label>
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {nombre}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Apellido Paterno
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {apellido_paterno}
                          </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Apellido Materno
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {apellido_materno}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Dirección de Correo
                        </label>
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {correo_electronico}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="w-full md:w-full px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nivel General
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {nivel_general}
                          </p>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nivel Craft
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {nivel_craft}
                          </p>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nivel Business
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {nivel_business}
                          </p>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nivel People
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {nivel_people}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Equipo del Member
                        </label>
                        <div className="flex-shrink w-full inline-block relative">
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {equipo}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-gray-400 pt-4"></div>
                      <h2 className="text-2xl text-gray-900">
                        Cambios a tu Cuenta
                      </h2>
                      <div className="flex items-center justify-between mt-6">
                        <div className="w-full md:w-full px-3 mb-6 ">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Password
                          </label>
                          <button
                            onClick={() => openModal2()}
                            className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md "
                          >
                            Change Password
                          </button>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6 ">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Imagen Perfil
                          </label>
                          <button
                            onClick={() => openModal()}
                            className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md "
                          >
                            Change Profile Picture
                          </button>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-gray-400 pt-4"></div>
                      <h2 className="text-2xl text-gray-900">
                        Información de tu Chapter Lead Assistant
                      </h2>
                      <br></br>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nombre(s)
                        </label>
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {assitant && assitant.nombre}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Apellido Paterno
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {assitant && assitant.apellido_paterno}
                          </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6">
                          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Apellido Materno
                          </label>
                          <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                            {assitant && assitant.apellido_materno}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Correo
                        </label>
                        <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                          {assitant && assitant.correo_electronico}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isOpenModal}
            closeModal={closeModal}
            title="Cambiar Imagen"
          >
            <div className=" w-full h-full flex items-center justify-center space-x-4">
              <img
                className=" w-72 h-72 rounded-full object-cover border-8 border-black"
                src={
                  "http://ec2-3-89-93-89.compute-1.amazonaws.com:8080/img/user_default.png"
                }
                ref={imagenPrev}
              />
              <div className="flex flex-col items-center justify-center space-y-4">
                <label className=" group w-64 flex flex-col items-center px-4 py-6 bg-white  rounded-lg shadow-lg tracking-wide uppercase border border-black hover:border-secondary-50 cursor-pointer">
                  <svg
                    className="w-8 h-8 fill-black group-hover:fill-secondary-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal text-black group-hover:text-secondary-50 ">
                    Seleccionar Imagen
                  </span>
                  <input
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setImg(e.target.files[0]);
                        imagenPrev.current.src = URL.createObjectURL(
                          e.target.files[0]
                        );
                      } else
                        imagenPrev.current.src =
                          "http://ec2-3-89-93-89.compute-1.amazonaws.com:8080/img/user_default.png";
                    }}
                  />
                </label>
                <button className="btn" onClick={uploadImg}>
                  Enviar
                </button>
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={isOpenModal2}
            closeModal={closeModal2}
            title="Cambiar Contraseña"
          >
            <div className=" w-full h-full flex items-center justify-center">
              <>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full min-h-min items-center justify-start bg-grey-lighter">
                      <label className="group w-128 flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-black hover:border-interaction-500 cursor-pointer">
                        <svg
                          className="w-8 h-8 fill-black group-hover:fill-interaction-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="mt-2 text-base leading-normal text-black group-hover:text-interaction-500">
                          Contraseña actual
                        </span>
                        <input
                          onChange={handleChange1}
                          value={password}
                          name="password"
                          className="appearance-none block w-full bg-white border border-gray-400 shadow-inner rounded-md py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="password"
                        ></input>
                        <div className="flex flex-row items-center justify-center space-x-4">
                          <div className="flex flex-col items-center justify-center space-y-1">
                            <span className="mt-2 text-base leading-normal text-black group-hover:text-interaction-500">
                              Contraseña nueva
                            </span>
                            <input
                              onChange={handleChange2}
                              value={newPassword}
                              name="newPassword"
                              className="appearance-none block w-full bg-white border border-gray-400 shadow-inner rounded-md py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                              type="password"
                            ></input>
                          </div>
                          <div className="flex flex-col items-center justify-center space-y-1">
                            <span className="mt-2 text-base leading-normal text-black group-hover:text-interaction-500">
                              Reingresa Contraseña
                            </span>
                            <input
                              onChange={handleChange3}
                              value={confirmPass}
                              name="confirmPass"
                              className="appearance-none block w-full bg-white border border-gray-400 shadow-inner rounded-md py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                              type="password"
                            ></input>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="px-4 py-6">
                      <button className="btn" onClick={validate}>
                        Confirmar
                      </button>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
