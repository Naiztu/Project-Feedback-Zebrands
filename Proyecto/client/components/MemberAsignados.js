import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import api from "../services/api";
import CardMembers from "./CardMembers";

export default function MemberAsignados() {
  const [info, setInfo] = useState([]);

  const getAsignados = async () => {
    const id_assistant = 1;
    try {
      const res = await api.get(
        `assistant_list/${id_assistant}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setInfo(res.data.data_members);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAsignados();
  }, []);
  return (
    <>
      <h1 className="title w-11/12 mx-auto my-10">Member&apos;s Asignados</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap">
        {info.map((item, index) => (
          <CardMembers key={index} info={item} />
        ))}
      </div>
    </>
  );
}
