import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Chart from "chart.js/auto";
import { getAVGLead } from "../../services/feedback";
import { Line } from "react-chartjs-2";
import { useUser } from "../../context/userContext";

export default function UserIndex() {
  const [graph, setGraph] = useState([]);
  const { user, isAuthenticated, setUser } = useUser();

  const getData = async () => {
    try {
      const data = await getAVGLead();
      setGraph(data.data_AllGraph.sort((a, b) => a.id_periodo - b.id_periodo));
    } catch (error) {}
  };

  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);

  const data = {
    labels: graph.map((data) => data.id_periodo),
    //labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Promedio",
        data: graph.map((data) => data.avgp),
        tension: 0.3,
        borderColor: "rgb(246,223,164)",
        pointBackgroundColor: "rgb(246,223,164)",
        backgroundColor: "rgba(246,223,164,0.3)",
        pointRadius: 4,
        borderWidth: 2,
      },

      {
        label: "Personal",
        data: graph.map((data) => data.avgpe),
        tension: 0.3,
        borderColor: "rgb(162,199,226)",
        pointBackgroundColor: "rgb(162,199,226)",
        pointRadius: 4,
        backgroundColor: "rgba(162,199,226,0.3)",
        borderWidth: 2,
      },

      {
        label: "Craft",
        data: graph.map((item) => item.avgc),
        tension: 0.3,
        borderColor: "rgb(255,177,185)",
        pointBackgroundColor: "rgb(255,177,185)",
        pointRadius: 4,
        backgroundColor: "rgba(255,177,185,0.3)",
        borderWidth: 2,
      },

      {
        label: "Business",
        data: graph.map((item) => item.avgb),
        tension: 0.3,
        borderColor: "rgb(199,160,206)",
        pointBackgroundColor: "rgb(199,160,206)",
        pointRadius: 4,
        backgroundColor: "rgba(199,160,206,0.3)",
        borderWidth: 2,
      },
    ],
  };
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
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
        min: 0,
        max: 5.3,
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

  var pg = 0;
  graph.forEach((data) => (pg += parseFloat(data.avgp)));
  var pc = 0;
  graph.forEach((data) => (pc += parseFloat(data.avgc)));
  var pp = 0;
  graph.forEach((data) => (pp += parseFloat(data.avgpe)));
  var pb = 0;
  graph.forEach((data) => (pb += parseFloat(data.avgb)));

  return (
    <Layout pg={parseFloat(pg).toFixed(1)}>
      <div className=" w-full">
        <h1 className="title my-10 mx-auto">Resumen General del Chapter</h1>
        <p className="text text-center w-3/4 mx-auto">
          Aquí está un resumen de los member de tu chapter
        </p>
        <div className=" w-11/12 lg:w-7/12 mx-auto mt-2">
          <Line data={data} options={options}></Line>
        </div>
        <div className="text-base lg:text-xl">
          <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto mt-4 mb-2 py-2 px-6 flex-row flex justify-between">
            <h1 className="font-semibold">Craft</h1>{" "}
            <p className="italic">{parseFloat(pc).toFixed(1)}</p>
          </div>
          <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
            <h1 className="font-semibold">Business</h1>{" "}
            <p className="italic">{parseFloat(pb).toFixed(1)}</p>
          </div>
          <div className=" w-6/12 lg:w-4/12 shadow-lg rounded-xl  border mx-auto my-2 py-2 px-6 flex-row flex justify-between">
            <h1 className="font-semibold">People</h1>{" "}
            <p className="italic">{parseFloat(pp).toFixed(1)}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
