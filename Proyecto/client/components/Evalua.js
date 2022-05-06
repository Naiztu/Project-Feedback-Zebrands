import React from "react";
import { useState, useEffect } from "react";
import CardCompañero from "./CardCompañero";
import { useUser } from "../context/userContext";
import { getPendientes } from "../services/evaluacion";

export default function Evalua() {
  const [pendientes, setPendientes] = useState([]);
  const { user, isAuthenticated, id_periodo } = useUser();

  const getData = async () => {
    const id_user = user.id_empleado;
    try {
      const data = await getPendientes(id_periodo, id_user);
    
      setPendientes(data.data_evalua);
    } catch (err) {
     
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
        {pendientes.map((item, index) => (
          <CardCompañero key={index} pendientes={item} />
        ))}
        {pendientes.length === 0 && (
          <div className=" w-11/12 flex items-center justify-center flex-col">
            <p className="w-full text-center">
              ¡Espera las solicitudes de evaluación de tus compañeros con los
              que trabajaste en este periodo!
              <br /> Recuerda contestar con sinceridad y conciencia
            </p>
            <img src="/list.svg" className=" w-11/12 sm:w-1/2" />
          </div>
        )}
      </div>
    </>
  );
}
