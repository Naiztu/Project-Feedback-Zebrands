import React from "react";
import { useState, useEffect } from "react";
import ButtonAsignar from "./ButtonAsignar";

export default function Asignar() {
  const [info, setInfo] = useState([]);
  const [info2, setInfo2] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((dat) => setInfo(info.concat(dat.data)));
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((dat) => setInfo2(info2.concat(dat.data)));
  }, []);

  return (
    <>
      <h1 className="title my-10">Asignar compañeros</h1>
      <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
        <input
          type="text"
          className="input-label w-8/12 lg:w-4/12"
          placeholder="Nombre de tu compañero"
        />{" "}
        <span className="btn ml-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="my-2 mx-2 md:m-0 h-5 w-5"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-center  mt-5 mx-auto w-11/12 sm:w-3/4">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Compañero</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {info2.concat(info).map((i) => (
                    <tr key={i.id} className="hover:bg-blue-400/20">
                      <td className=" items-center p-2 whitespace-nowrap  flex justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={i.avatar}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {i.first_name + " " + i.last_name}
                          </div>
                        </div>
                        <ButtonAsignar />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto space-x-2 w-3/4 lg:w-1/2  justify-between my-6">
        <button className="btn-border ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
          <p className="hidden sm:inline">Previous page</p>
        </button>
        <button className="btn">
          <p className="hidden sm:inline">Next page</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-8 w-8"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
      </div>
    </>
  );
}
