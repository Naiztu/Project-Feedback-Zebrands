import React from "react";
import { useRouter } from "next/router";
import OptionMember from "./OptionMember";
import { RiUserReceivedLine } from "react-icons/ri";

export default function OptionAsisstant() {
  const router = useRouter();
  return (
    <>
      <OptionMember />
      <ul className="relative px-1">
        <li className="relative">
          <button
            className=" group link-navbar"
            onClick={() => {
              router.push("/user/asignados");
            }}
          >
            <div className=" div-navbar">
              <RiUserReceivedLine
                size={28}
                className="group-hover:fill-secondary-50 "
              />
              <span className="span-navbar">Member&apos;s Asignados</span>
            </div>
          </button>
        </li>
      </ul>
    </>
  );
}
