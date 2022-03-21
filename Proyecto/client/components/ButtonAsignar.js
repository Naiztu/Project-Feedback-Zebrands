import React from "react";
import { useState } from "react";

export default function ButtonAsignar() {
  const [option, setOption] = useState(true);
  return (
    <div>
      {option ? (
        <button
          onClick={() => {
            setOption(false);
          }}
          className="btn text-xs md:text-base "
        >
          Agregar
        </button>
      ) : (
        <button
          onClick={() => {
            setOption(true);
          }}
          className="bg-red-500 py-1 px-3 rounded-xl  text-white active:scale-95 transition-all ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white h-5 w-5 md:w-8 md:h-8"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      )}
    </div>
  );
}
