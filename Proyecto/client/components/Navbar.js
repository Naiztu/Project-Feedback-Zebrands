import React, { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import OptionMember from "./OptionMember";
import OptionAsisstant from "./OptionAsisstant";
import OptionLead from "./OptionLead";
import { ImExit } from "react-icons/im";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  const { user, logoutAuth } = useUser();
  const { id_rol } = user || {};
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    init: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        type: "spring",
      },
    },
  };

  return (
    <>
      <div className=" h-full shadow-md shadow-black bg-black text-white absolute w-20 md:w-60 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400">
        <div className="h-full relative">
          <div className="pt-4 pb-2 px-6 ">
            <div className="flex flex-col items-center">
              <motion.div
                className="relative shrink-0 w-[3rem] md:w-7/12 cursor-pointer active:scale-90 transition-all ease-in-out rounded-full overflow-hidden"
                initial="init"
                whileHover="show"
                onClick={() => {
                  router.push("/user/perfil");
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
                <motion.div
                  variants={variants}
                  className=" absolute top-0 left-0 w-full h-full border-2 md:border-4 border-white bg-secondary-50/50 rounded-full flex items-center justify-center font-bold"
                >
                  <p className=" text-xs sm:text-base">Ir a Perfil</p>
                </motion.div>
              </motion.div>
              <div className="grow ml-3">
                <div className="flex pt-2 text-xl text-center justify-center  font-bold transition duration-300 ease-in-out active:scale-90 ">
                  {user && <>{user.nombre + " " + user.apellido_paterno}</>}
                </div>
              </div>
            </div>
          </div>

          <hr className="block my-3 " />

          {id_rol === 3 && <OptionMember />}

          {id_rol === 2 && <OptionAsisstant />}

          {id_rol === 1 && <OptionLead />}
          <div className="mt-20"></div>

          <div className="absolute bottom-0  md:right-0 pl-2 md:px-1">
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
