import React from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import OptionMember from "./OptionMember";
import OptionAsisstant from "./OptionAsisstant";
import OptionLead from "./OptionLead";
import { ImExit } from "react-icons/im";

export default function Navbar() {
  const router = useRouter();

  const { user, logoutAuth } = useUser();
  const { id_rol } = user || {};

  return (
    <>
      <div className=" h-full shadow-md shadow-black bg-black text-white absolute w-20 md:w-60 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400">
        <div className="h-full relative">
          <div className="pt-4 pb-2 px-6 ">
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
                <button className="md:block hidden pt-2 text-xl text-center  font-bold hover:text-secondary-50 transition duration-300 ease-in-out hover:scale-105 active:scale-90 ">
                  {user && user.nombre + " " + user.apellido_paterno}
                </button>
              </div>
            </div>
          </div>

          <hr className="block my-3 " />

          {id_rol === 3 && <OptionMember />}

          {id_rol === 2 && <OptionAsisstant />}

          {id_rol === 1 && <OptionLead />}

          <div className="absolute bottom-0 px-1">
            <button className="group link-navbar" onClick={logoutAuth}>
              <div className=" div-navbar">
                <ImExit size={28} className="group-hover:fill-secondary-50 " />
                <span className="span-navbar">Salir</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
