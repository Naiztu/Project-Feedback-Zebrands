import React from "react";

export default function Boton({ numeroPregunta }) {
  const hello = () => {
    console.log(`Hola soy el boton ${numeroPregunta}`);
  };

  return (
    <button onClick={hello} className="btn">
      click me
    </button>
  );
}