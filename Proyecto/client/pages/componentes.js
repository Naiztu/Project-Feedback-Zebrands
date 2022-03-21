import React from "react";

export default function Componentes() {
  return (
    <div className=" flex flex-row flex-wrap space-x-10 w-11/12 mx-auto my-10 space-y-10">
      <button className="btn self-center"> Boton default</button>
      <input
        className="input-label self-center"
        placeholder="Label"
        type={"text"}
      ></input>
    </div>
  );
}
