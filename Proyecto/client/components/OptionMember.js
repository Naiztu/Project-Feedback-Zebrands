import React from "react";
import { useRouter } from "next/router";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsJournalCheck } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";
import { useUser } from "../context/userContext";

export default function OptionMember() {
  const { user, isAuthenticated } = useUser();
  
  const router = useRouter();
  return (
    <>
      <ul className="relative px-1">
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push(`/user/feedback/${user.id_empleado}`);
            }}
          >
            <div className=" div-navbar">
              <BsJournalCheck
                size={28}
                className="group-hover:fill-secondary-50"
              />
              <span className="span-navbar">Mis Feedback</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/user/asignar");
            }}
          >
            <div className=" div-navbar">
              <AiOutlineUserAdd
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Asignar compañeros</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/user/evalua");
            }}
          >
            <div className=" div-navbar">
              <RiUserFollowLine
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Evaluar compañeros</span>
            </div>
          </button>
        </li>
      </ul>
    </>
  );
}
