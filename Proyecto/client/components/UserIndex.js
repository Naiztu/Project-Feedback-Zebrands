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
    datasets: [
      {
        data: graph.map((item) => item.calificacion_promedio),
        tension: 0.3,
        backgroudColor: [
          "rgb(666, 133, 244)",
          "rgb(219, 68, 55)",
          "rgb(244, 180, 0",
          "rgb(15,157,88)",
        ],
        borderColor: "rgb(0,0,0)",
        fillColor: "rgb(0,0,0,0.2)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    resposive: true,
    fill: true,
    showLine: false,
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
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className="title my-10 mx-auto">Hola de nuevo!</h1>
      <p className="text text-center w-3/4 mx-auto">
        Aquí está un resumen de tu desempeño en las últimas cuatro evaluaciones.
      </p>
      <div className=" w-11/12 lg:w-7/12 mx-auto mt-2">
        <Line data={data} options={options}></Line>
      </div>
      <div className="text-base lg:text-xl">
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto mt-4 mb-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">Craft</h1> <p className="italic">4.9</p>
        </div>
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">Business</h1>{" "}
          <p className="italic">3.9</p>
        </div>
        <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
          <h1 className="font-semibold">People</h1>{" "}
          <p className="italic">4.2</p>
        </div>
      </div>
      <button className="btn self-center mt-3 w-7/12 lg:w-5/12">
        Ver último feeback
      </button>
    </>
  );
}
