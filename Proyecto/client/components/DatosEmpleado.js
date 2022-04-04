import React from 'react'
import { FaTrashAlt, FaPencilAlt, FaSave } from "react-icons/fa";
import swal from "sweetalert";

export default function DatosEmpleado({name, value, isSaved}) {
  

  const handleEdit = () => {
    setIsEdited(true);
  };

  return (
    <>
    <table className=" mx-auto mb-5  bg-white shadow-lg rounded-sm border border-gray-200 w-11/12 sm:w-3/4">
      <div className="flex space-x-20 flex-row w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
      <label className=" text-2xl font-bold mb-2 ml-6">
      {name}
    </label>
    <tr className=" text-2xl font-bold mb-2 ml-6">
      {value} </tr>
      

      <div className=" flex flex-col space-y-3">
          <button
            className="btn"
          >
          <FaSave />  
          </button>
          <button
            className={`btn-red "hidden" : "flex"`}
          >
            <FaPencilAlt />
          </button>
        </div>
    </div>
    </table>
    </>
  )
}
