import React, { useState } from "react";
import Layout from "../../components/Layout";

import Piker from "../../components/Piker";

export default function Periodo() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

  return (
    <Layout>
      <h2 className="title my-10">Periodo</h2>

      <div className="flex flex-col w-12/12 mx-auto space-x-4">
        <p className=" ">Fecha Inicio</p>
        <Piker
          estado={{ e1: date1, e2: date2 }}
          setEstado={{ sE1: setDate1, sE2: setDate2 }}
        />
      </div>
    </Layout>
  );
}
