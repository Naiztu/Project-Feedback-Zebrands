import React, { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import api from "../services/api";
import { getPerfil } from "../services/perfil";
import PassBoton from "./PassBoton";

export default function Perfil() {
  const [perfil, setPerfil] = useState([]);
  const { user, isAuthenticated } = useUser();

  const getPerfilData = async () => {
    try {
      const data = await getPerfil(user.id_empleado);
      setPerfil(data.data_perfil);
      console.log(data);
    } catch (err) {
      console.log({ err });
    }
  };

  

  useEffect(() => {
    if (isAuthenticated) {
      getPerfilData();
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="w-full pt-10 rounded-b-3xl">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-4xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900"> Información de Perfil </h2>
            <div className="mt-6 border-t border-gray-400 pt-4">
              <div className="personal w-full">
                <div className="w-full md:w-full px-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nombre(s)
                    </label>
                    <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                      {" "}
                      {perfil.Nombre_Member}{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Paterno
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.Paterno_Member}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Materno
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.Materno_Member}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Dirección de Correo
                    </label>
                    <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                      {" "}
                      {perfil.correo_electronico}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel General
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.nivel_general}{" "}
                      </p>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Craft
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.nivel_craft}{" "}
                      </p>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel Business
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {perfil.nivel_business}{" "}
                      </p>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nivel People
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {perfil.nivel_people}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Equipo del Member
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.equipo}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-400 pt-4"></div>
                  <h2 className="text-2xl text-gray-900">
                    {" "}
                    Cambios a tu Cuenta{" "}
                  </h2>
                  <div className="flex items-center justify-between mt-6">
                    <div className="w-full md:w-full px-3 mb-2">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Password
                      </label>
                      <PassBoton/>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Imagen Perfil
                      </label>
                      <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                        Change Profile Picture
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-gray-400 pt-4"></div>
                  <h2 className="text-2xl text-gray-900">
                    {" "}
                    Información de tu Chapter Lead Assistant{" "}
                  </h2>
                  <br></br>
                  <div className="w-full md:w-full px-3 mb-6"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nombre(s)
                    </label>
                    <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                      {perfil.Nombre_Assistant}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellido Paterno
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {" "}
                        {perfil.Paterno_Assistant}{" "}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Apellidඞ Materno
                      </label>
                      <p className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500">
                        {perfil.Materno_Assistant}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
