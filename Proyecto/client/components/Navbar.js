import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import OptionMember from "./OptionMember";
import OptionAsisstant from "./OptionAsisstant";
import OptionLead from "./OptionLead";

export default function Navbar() {
  const router = useRouter();

  const { user } = useUser();
  const { id_rol } = user || {}

  return (
    <>
      <div className=" h-full shadow-md shadow-black bg-black text-white absolute w-20 md:w-60 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400">
        <div className="pt-4 pb-2 px-6  ">
          <div className="flex flex-col items-center">
            <div
              className=" hover:scale-105 shrink-0 w-[3rem] md:w-7/12 cursor-pointer active:scale-90 transition-all ease-in-out"
              onClick={() => {
                id_rol === 1 ? router.push("/lead") : router.push("/user");
              }}
            >
              {user && (
                <img
                  src={user.imagen_perfil}
                  className=" avatar "
                  layout="responsive"
                  alt="Avatar"
                />
              )}
            </div>
            <div className="grow ml-3">
              <p className="md:block hidden pt-2 text-xl text-center  font-bold">
                {user && user.nombre + " " + user.apellido_paterno}
              </p>
            </div>
          </div>
        </div>

        <hr className="block my-3 " />
        {id_rol === 3 && <OptionMember />}

        {id_rol === 2 && <OptionAsisstant />}

        {id_rol === 1 && <OptionLead />}
      </div>
    </>
  );
}
