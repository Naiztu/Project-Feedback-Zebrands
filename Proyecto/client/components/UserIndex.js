import React, { useEffect, useState } from "react";
import { getDataToGraph } from "../services/feedback";
import { useUser } from "../context/userContext";
import GraphLinear from "./graph/GraphLinear";

export default function UserIndex() {
  const [graph, setGraph] = useState([]);
  const { user, isAuthenticated, setUser } = useUser();

  const getData = async () => {
    try {
      const data = await getDataToGraph(user.id_empleado);
      const listGraphOrd = data.data_feedbackGraph.sort(
        (a, b) => a.id_periodo - b.id_periodo
      );
      setGraph(
        listGraphOrd.length < 4
          ? [
              {
                calificacion_business: 0,
                calificacion_craft: 0,
                calificacion_personal: 0,
                calificacion_promedio: 0,
                id_periodo: 0,
              },
            ].concat(listGraphOrd)
          : listGraphOrd
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);

  return (
    <>
      {user && (
        <div className="flex flex-col items-center justify-between w-full">
          <h1 className="title my-10 mx-auto">¡Hola de nuevo!</h1>
          <p className="text text-center w-3/4 mx-auto">
            {graph.length > 1
              ? "Aquí está un resumen de tu desempeño en las últimas evaluaciones."
              : "Todavía no tienes feedbacks ¡Sigue trabajando en ello! y ¡pronto veras información valiosa!"}
          </p>
          {graph.length > 1 ? (
            <GraphLinear graph={graph} />
          ) : (
            <div className=" relative w-4/12 mx-auto h-auto">
              <img src="/working.svg" />
            </div>
          )}

          <div className="text-base lg:text-xl flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-7/12 mt-10">
            <div className=" label-main">
              <h1 className="font-semibold">Craft</h1>
              <p className="italic">{user.nivel_craft}</p>
            </div>
            <div className="label-main">
              <h1 className="font-semibold">Business</h1>{" "}
              <p className="italic">{user.nivel_business}</p>
            </div>
            <div className=" label-main">
              <h1 className="font-semibold">People</h1>{" "}
              <p className="italic">{user.nivel_people}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
