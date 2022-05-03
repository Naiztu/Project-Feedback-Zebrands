import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getDataToGraph } from "../services/feedback";
import { useUser } from "../context/userContext";

export default function UserIndex() {
  const [graph, setGraph] = useState([]);
  const { user, isAuthenticated, setUser } = useUser();

  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    correo_electronico,
    equipo,
    nivel_business,
    nivel_craft,
    nivel_people,
    nivel_general,
  } = user || {};

  const getData = async () => {
    try {
      const data = await getDataToGraph(user.id_empleado);
      setGraph(
        data.data_feedbackGraph.sort((a, b) => a.id_periodo - b.id_periodo)
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

  const options = {
    resposive: true,
    fill: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 5,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Promedio",
        data: graph.map((item) => item.calificacion_promedio),
        tension: 0.3,
        borderColor: "rgb(246,223,164)",
        pointBackgroundColor: "rgb(246,223,164)",
        backgroundColor: "rgba(246,223,164,0.3)",
        pointRadius: 4,
        borderWidth: 2,
      },
      {
        label: "Personal",
        data: graph.map((item) => item.calificacion_personal),
        tension: 0.3,
        borderColor: "rgb(162,199,226)",
        pointBackgroundColor: "rgb(162,199,226)",
        pointRadius: 4,
        backgroundColor: "rgba(162,199,226,0.3)",
        borderWidth: 2,
      },
      {
        label: "Craft",
        data: graph.map((item) => item.calificacion_craft),
        tension: 0.3,
        borderColor: "rgb(255,177,185)",
        pointBackgroundColor: "rgb(255,177,185)",
        pointRadius: 4,
        backgroundColor: "rgba(255,177,185,0.3)",
        borderWidth: 2,
      },

      {
        label: "Business",
        data: graph.map((item) => item.calificacion_business),
        tension: 0.3,
        borderColor: "rgb(199,160,206)",
        pointBackgroundColor: "rgb(199,160,206)",
        pointRadius: 4,
        backgroundColor: "rgba(199,160,206,0.3)",
        borderWidth: 2,
      },
    ],
    labels: graph.map((item) => item.id_periodo),
  };

  return (
    <>
      {user && (
        <div className="flex flex-col items-center justify-between w-full">
          <h1 className="title my-10 mx-auto">¡Hola de nuevo!</h1>
          <p className="text text-center w-3/4 mx-auto">
            Aquí está un resumen de tu desempeño en las últimas cuatro
            evaluaciones.
          </p>
          <Line
            data={data}
            options={options}
            className="w-11/12 sm:w-8/12 mx-auto"
          ></Line>

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
