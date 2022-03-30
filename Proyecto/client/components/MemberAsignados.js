import  Axios  from "axios";
import React from "react";
import { useEffect, useState } from "react";
import CardMembers from "./CardMembers";

export default function MemberAsignados() {
  const [info, setInfo] = useState([]);

  const getAsignados = async () => {
    const id_assistant = 1;
    try {
      const res = await Axios.get(
        `http://localhost:8080/assistant_list/${id_assistant}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setInfo(res.data.members);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAsignados();
  }, []);
  return (
    <>
      <h1 className="title w-11/12 mx-auto">Member&apos;s Asignados</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap mt-5">
        {info.map((item, index) => (
          <CardMembers key={index} info={item} />
        ))}
      </div>
    </>
  );
}
