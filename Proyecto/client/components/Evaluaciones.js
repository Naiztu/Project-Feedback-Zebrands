import React from "react";

export default function Evaluaciones() {
  const evalu = [
    {
      id_evaluado: 1,
      id_evaluador: 2,
      nombre_evaluador: "Emiliano",
      status: "Contestada",
    },
    {
      id_evaluado: 1,
      id_evaluador: 3,
      nombre_evaluador: "Pepe",
      status: "Contestada",
    },
    {
      id_evaluado: 1,
      id_evaluador: 4,
      nombre_evaluador: "Cris",
      status: "No Contestada",
    },
  ];
  return (
    <>
      <h2 className="title"> Evaluaciones</h2>

      <table className="table-auto w-11/12 mx-auto">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Evaluador</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Status</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {evalu.map((item, index) => (
            <tr
              key={index}
              className={`${
                item.status === "No Contestada"
                  ? "bg-red-400/20"
                  : "hover:bg-blue-400/20"
              }  active:scale-95 transition-all ease-in-out w-full cursor`}
            >
              <td className="p-2 whitespace-nowrap">
                <button disabled={item.status === "No Contestada"}
                className=" disable:cursor-not-allowed">
                  {item.nombre_evaluador}
                </button>
              </td>
              <td className="p-2 whitespace-nowrap">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/*

<tr className="hover:bg-blue-400/20 active:scale-95 transition-all ease-in-out w-full">
      <td className="p-2 whitespace-nowrap ">
        <Link href={`/feedback/${data}`}>
          <a className="w-full" target="_blank" rel="noreferrer">
            <div className="flex items-center">
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  className="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                  width={40}
                  height={40}
                  alt="Burak Long"
                />
              </div>
              <div className="font-medium text-gray-800">Burak Long</div>
            </div>
          </a>
        </Link>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Link href={`/feedback/${data}`}>
          <a className="w-full" target="_blank" rel="noreferrer">
            <div className="text-left">12/02/2020</div>
          </a>
        </Link>
      </td>
      <td className="h-full p-2 whitespace-nowrap hidden sm:flex items-center">
        <Link href={`/feedback/${data}`}>
          <a
            className="w-full h-full flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" h-full font-medium text-green-500 flex items-center">
              2.4
            </div>
          </a>
        </Link>
      </td>
    </tr>
*/
