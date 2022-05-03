import React from "react";

export default function PassBoton() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-full min-h-min items-center justify-start bg-grey-lighter">
            <label className="group w-64 flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-black hover:border-secondary-50 cursor-pointer">
              <svg
                className="w-6 h-6 fill-black group-hover:fill-secondary-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mt-2 text-base leading-normal text-black group-hover:text-secondary-50">
                Cambia tu password
              </span>
              <input
                className="appearance-none block w-full bg-white border border-gray-400 shadow-inner rounded-md py-1 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                type="password"
              ></input>
            </label>
          </div>
          <div>
            <button>Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
}
