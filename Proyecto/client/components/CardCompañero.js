import Link from "next/link";
import React from "react";

export default function CardCompañero({ pendientes }) {
  const { id_empleado, nombre, apellido_paterno, imagen_perfil } = pendientes || {};
  return (
    <div className="  w-[300px] rounded-xl p-3 shadow-sm shadow-black text-black md:mx-20 md:my-10 my-5 mx-2">
      <div className="flex flex-row space-x-4 md:space-x-8 items-center px-2">
        <img
          className="rounded-full border-4 border-white md:w-20 w-16 h-16 md:h-20"
          src={imagen_perfil}
        />
        <p className=" font-bold text-lg md:text-xl text-center">
          {nombre + " " + apellido_paterno}
        </p>
      </div>
      <Link href={`/evalua/${id_empleado}`}>
        <a target={"_blank"} rel="noreferrer">
          <button className=" btn mt-8 mb-2 mx-auto md:mx-auto md:text-base text-sm text-center">
            Realizar evaluación
          </button>
        </a>
      </Link>
    </div>
  );
}
