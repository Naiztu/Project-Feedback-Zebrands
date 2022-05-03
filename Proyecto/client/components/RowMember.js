import { useRouter } from "next/router";
import React from "react";

export default function RowMember({ data }) {
  const router = useRouter();

  const {
    id_user,
    imagen_perfil,
    nombre,
    apellido_paterno,
    id_periodo,
    calificacion_promedio,
  } = data || {};

  const redirect = () => {
    //router.push(`/prueba`);
    alert("Interfaz de actualizar profile")
  };

  return (
    <tr
      onClick={redirect}
      className="hover:bg-blue-400/20 active:scale-95 transition-all ease-in-out w-full cursor-pointer"
    >
      <td className="p-2 whitespace-nowrap ">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={imagen_perfil}
              width={40}
              height={40}
              alt="Image user"
            />
          </div>
          <div className="font-medium text-gray-800">
            {nombre + " " + apellido_paterno}
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{equipo}</div>
      </td>
      <td className=" p-2 whitespace-nowrap hidden sm:flex items-center">
        <div className="h-10  font-medium text-green-500 flex items-center">
          {nivel}
        </div>
      </td>
    </tr>
  );
}
