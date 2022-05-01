import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getDataToGraph } from "../services/feedback";
import { useUser } from "../context/userContext";

export default function UserIndex() {
  const [graph, setGraph] = useState([]);
  const { user, isAuthenticated } = useUser();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDataToGraph(user.id_empleado);
        console.log(data);
        setGraph(
          data.data_feedbackGraph.sort((a, b) => a.id_periodo - b.id_periodo)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [isAuthenticated]);

  const data = {
    labels: graph.map((item) => item.id_periodo),
    //labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: 'Promedio',
        data: graph.map((item) => item.calificacion_promedio),
        //data: [2, 2, 2, 2, 2],
        tension: 0.3,
        borderColor: "#43505c",
        pointBackgroundColor: "#43505c",
        backgroudColor: "#43505c",
        //fillColor: "#43505c",
        borderWidth: 1,
      },

      {
        label: 'Personal',
        data: graph.map((item) => item.calificacion_personal),
        //data: [4, 4, 3, 3, 4],
        tension: 0.3,
        borderColor: "#866398",
        pointBackgroundColor: "#866398",
        backgroudColor: "#866398",
        //fillColor: "#866398",
        borderWidth: 1,
      },

      {
        label: 'Craft',
        data: graph.map((item) => item.calificacion_craft),
        //data: [3, 3, 4, 4, 3],
        tension: 0.3,
        pointBackgroundColor: "#f1657d",
        borderColor: "#f1657d",
        backgroudColor: "#f1657d",
        //fillColor: "#f1657d",
        borderWidth: 1,
      },

      {
        label: 'Business',
        data: graph.map((item) => item.calificacion_business),
        //data: [5, 4, 3, 3, 2],
        tension: 0.3,
        borderColor: "#ffa600",
        pointBackgroundColor: "#ffa600",
        backgroudColor: "#ffa600",
        //fillColor: "#ffa600",
        borderWidth: 1,
      },

    ],
  };
  const options = {
    resposive: true,
    fill: false,
    showLine: true,
    animations: {
      tension: {
        duration: 2000,
        easing: "linear",
        from: 0.8,
        to: 0.2,
        loop: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 5,
        ticks: {
          stepSize: 0.1
        }
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <>
      <h1 className="title my-10 mx-auto">¡Hola de nuevo!</h1>
      <p className="text text-center w-3/4 mx-auto">
        Aquí está un resumen de tu desempeño en las últimas cuatro evaluaciones.
      </p>
      <div className=" w-11/12 lg:w-7/12 mx-auto mt-2">
        <Line data={data} options={options}></Line>
      </div>
      <div className="text-base lg:text-xl">
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto mt-4 mb-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">Craft</h1> 
          {/* <p className="italic">{user.nivel_craft}</p> */}
        </div>
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">Business</h1>{" "}
          {/* <p className="italic">{user.nivel_business}</p> */}
        </div>
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">People</h1>{" "}
          {/* <p className="italic">{user.nivel_people}</p> */}
        </div>
      </div>
      <button className="btn self-center mt-3 w-7/12 lg:w-5/12">
        Ver último feeback
      </button>
    </>
  );
}
