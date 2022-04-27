import React from "react";
import { useRouter } from "next/router";
import { VscNotebook } from "react-icons/vsc";
import { AiOutlineCalendar, AiOutlineUserAdd } from "react-icons/ai";
import { BsJournalCheck } from "react-icons/bs";
import { RiUserFollowLine, RiUserStarLine } from "react-icons/ri";

export default function OptionLead() {
  const router = useRouter();
  return (
    <div>
      <ul className="relative px-1">
        <li className="relative">
          <button
            className="group  link-navbar"
            onClick={() => {
              router.push("/lead/feedbacks");
            }}
          >
            <div className=" div-navbar">
              <BsJournalCheck
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Feedbacks</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/lead/cuestionario");
            }}
          >
            <div className=" div-navbar">
              <VscNotebook
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Cuestionarios</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/lead/periodo");
            }}
          >
            <div className=" div-navbar">
              <AiOutlineCalendar
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Gestionar Periodos</span>
            </div>
          </button>
        </li>
      </ul>
      <ul className="relative px-1">
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/user/asignados");
            }}
          >
            <div className=" div-navbar">
              <RiUserStarLine
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Assistant&apos;s</span>
            </div>
          </button>
        </li>
      </ul>
      <ul className="relative px-1">
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
              <span className="span-navbar">Evaluar Compañeros</span>
            </div>
          </button>
        </li>
      </ul>
      <ul className="relative px-1">
        <li className="relative">
          <button
            className="group link-navbar"
            onClick={() => {
              router.push("/lead/register");
            }}
          >
            <div className=" div-navbar">
              <AiOutlineUserAdd
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Registrar Member</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
