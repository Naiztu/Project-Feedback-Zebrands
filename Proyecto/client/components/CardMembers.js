import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";

export default function CardMembers({ info }) {
  const router = useRouter();

  const { user } = useUser();
  console.log(info)

  const { imagen_perfil, id_empleado, nombre, apellido_paterno, id_rol, equipo, nivel_general, nivel_craft, nivel_business, nivel_people
  } = info || {};

  const redirectRegisterFeed = () => {
    router.push(`/user/asignados/${id_empleado}`);
  };

  const redirectAdminAsig = () => {
    router.push(`/lead/adminasig/${id_empleado}`);
  };

  return (
    <div className="  w-[300px] rounded-xl px-4 py-6 shadow-sm shadow-black text-black md:mx-20 md:my-10 my-5 mx-2">
      <div className="flex flex-row space-x-2 lg:space-x-6 items-center px-2">
        <img
          className="rounded-full md:w-20 w-16 h-16 md:h-20"
          src={imagen_perfil}
        />
        <div className="">
          <p className="text-base md:text-xl font-bold	 mb-4 text-center ">
            {nombre + " " + apellido_paterno}
          </p>
          {id_rol === 1 && (
            <p className="text-lg md:text-tiny italic text-center">
              - CL -
            </p>
          )}

          {id_rol === 2 && (
            <p className="text-lg md:text-tiny italic text-center">
              - CLA -
            </p>
          )}
          {id_rol === 3 && (
            <p className="text-lg md:text-tiny italic text-center">
              - CM -
            </p>
          )}
        </div>
        <div className="">
          {equipo}
        </div>
      </div>


      






      <button
        onClick={redirectRegisterFeed}
        className="btn block mt-10 mx-auto md:text-base text-sm"
      >
        Registrar Feedback
      </button>

      {id_rol === 2 && (
        <button
          onClick={redirectAdminAsig}
          className="btn block mt-10 mx-auto md:text-base text-sm"
        >
          Administrar asignados
        </button>

      )}

    </div>
  );
}
