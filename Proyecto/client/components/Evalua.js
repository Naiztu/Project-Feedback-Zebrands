import React from "react";
import { useState, useEffect } from "react";
import CardCompañero from "./CardCompañero";
import { useUser } from "../context/userContext";
import { getPendientes } from "../services/evaluacion"

export default function Evalua() {
  const [pendientes, setPendientes] = useState([]);
  const { user, isAuthenticated } = useUser();

  const getData = async () => {
    const id_periodo = 3;
    const id_user = user.id_empleado;
    try {
      const data = await getPendientes(id_periodo, id_user);
      console.log(data.data_evalua)
      setPendientes(data.data_evalua);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="title w-11/12 mx-auto my-10">Evaluaciones pendientes</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap">
        {pendientes && pendientes.map((item, index) => (
          <CardCompañero key={index} pendientes={item} />
        ))}
      </div>
    </>
  );
}
