import React from "react";
import { useState, useEffect } from "react";
import CardCompañero from "./CardCompañero";
import Axios from "axios";
import { useUser } from "../context/userContext";

export default function Evalua() {
  const [pendientes, setPendientes] = useState([]);
  const { user } = useUser();

  const getPendientes = async () => {
    const id_periodo = 1;
    const id_user = user.id_empleado;
    try {
      const res = await Axios.get(
        `${process.env.HOSTBACK}/evaluar/${id_periodo}/${id_user}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statutText: !res.statusText ? "Error" : res.statusText,
        };
      } else setPendientes(res.data.data_evalua);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPendientes();
  }, []);

  return (
    <>
      <h1 className="title w-11/12 mx-auto my-10">Evaluaciones pendientes</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap">
        {pendientes.map((item, index) => (
          <CardCompañero key={index} pendientes={item} />
        ))}
      </div>
    </>
  );
}
