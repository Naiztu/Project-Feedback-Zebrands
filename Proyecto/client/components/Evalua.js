import React from "react";
import { useState, useEffect } from "react";
import CardCompañero from "./CardCompañero";

export default function Evalua() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((dat) => setInfo(dat.data));
  }, []);

  return (
    <>
      <h1 className="title w-11/12 mx-auto">Evaluaciones pendientes</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap mt-5">
        {info.map((i) => (
          <CardCompañero key={i.id} info={i} />
        ))}
      </div>
    </>
  );
}
