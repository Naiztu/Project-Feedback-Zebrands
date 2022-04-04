import React from "react";
import { useState, useEffect } from "react";
import CardCompañero from "./CardCompañero";
import Axios from "axios";

export default function Evalua() {
  const [pendientes, setPendientes] = useState([]);

  const getPendientes = async () => {
    const id_periodo = 20;
    const id_user = 1;
    try {
      const res = await Axios.get(
        `http://localhost:8080/evaluar/${id_periodo}/${id_user}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statutText: !res.statusText ? "Error" : res.statusText,
        };
      } else setPendientes(res.data.pendientes);
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
