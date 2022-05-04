import { useRouter } from "next/router";
import React from "react";

export default function RowFeed({ data }) {
  const router = useRouter();

  const {
    id_user,
    imagen_perfil,
    nombre,
    apellido_paterno,
    id_periodo,
    calificacion_promedio,
    nombre_periodo
  } = data || {};

  const redirectFeedback = () => {
    router.push(`/feedback/${id_periodo}/${id_user}`);
  };

  return (
    <tr
      onClick={redirectFeedback}
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
              alt="Burak Long"
            />
          </div>
          <div className="font-medium text-gray-800">
            {nombre + " " + apellido_paterno}
          </div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">{nombre_periodo}</div>
      </td>
      <td className=" p-2 whitespace-nowrap hidden sm:flex items-center">
        <div className="h-10  font-medium text-green-500 flex items-center">
          {calificacion_promedio}
        </div>
      </td>
    </tr>
  );
}
