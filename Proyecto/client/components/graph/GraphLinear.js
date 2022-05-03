import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function GraphLinear({ graph }) {
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
    <Line
      data={data}
      options={options}
      className="w-11/12 sm:w-8/12 mx-auto"
    ></Line>
  );
}
