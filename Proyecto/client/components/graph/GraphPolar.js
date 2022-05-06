import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getPerfil } from "../../services/perfil";
import { PolarArea } from 'react-chartjs-2';
import { useUser } from "../../context/userContext";

export default function GraphPolar() {

  const [graph, setGraph] = useState([]);
  const { user, isAuthenticated, setUser } = useUser();

  const getData = async () => {
    try {
      const res = await getPerfil(user.id_empleado);
      setGraph(res.data_perfil);
    } catch (error) {
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
      plugins: {
        legend: {
          display: true,
        },
      },
    };
  
    const data = {
      labels: [
            'Nivel Overall',
            'Nivel Craft',
            'Nivel People',
            'Nivel Business',
          ],
          datasets: [{
              label: 'My First Dataset',
              data: [graph.nivel_general, graph.nivel_craft, graph.nivel_people, graph.nivel_business],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)'              ]
            }]
        };
    return (
      <PolarArea
        data={data}
        options={options}
        className="w-11/12 sm:w-8/12 mx-auto"
      ></PolarArea>
    );
  }
  
