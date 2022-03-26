import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import RowFeed from "../../components/RowFeed";

export default function Post() {
  //Debe ser el numero del periodo al que corresponde el feedback
  const dat = [1, 2, 3, 4];
  const router = useRouter();
  const initialFeed = {
    id_feedback: 1,
    calificacion_craft: "",
    calificacion_personal: "",
    calificacion_business: "",
    calificacion_promedio: "",
    comentario_craft: "",
    comentario_personal: "",
    comentario_business: "",
    comentario_general: "",
    id_empleado_member: 1,
    id_empleado_assistant: 1,
    id_periodo: 1,
  };
  const [feedback, setFeedback] = useState(initialFeed);

  async function getData() {
    const { id } = router.query;
    const res = await Axios.get(`http://localhost:8080/feedback/${10}/${10}`);
    res.data.feedback && setFeedback(res.data.feedback);
    console.log(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className=" bg-slate-400/10 w-full rounded-b-3xl">
        <div
          className="w-9/12 
    mx-auto  flex p-5 flex-row   space-x-6"
        >
          <div className="w-2/12 hidden md:inline">
            <img
              src="/assets/avatar.jpg"
              className=" avatar w-full"
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-10/12">
            <h1 className=" text-4xl md:text-6xl font-bold text-center">
              Mi feedback
            </h1>
            <h2 className="mt-2 italic font-semibold">
              Periodo Enero-Febrero 2020
            </h2>
          </div>
        </div>
      </header>
      <div
        className="w-9/12 
    mx-auto mt-2"
      >
        <div className="text-center italic my-4 font-semibold  flex justify-between w-[300px] mx-auto">
          <p>Dimension</p> <strong>-</strong> <p>Comentario </p>
          <strong>-</strong> <p>Evaluación</p>
        </div>
      </div>
      <div className="w-full">
        <div
          className="w-9/12 
    mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden"
        >
          <div className="rowDimension ">
            <div className="dimesion">people</div>
            <div className=" coment">{feedback.comentario_personal}</div>
            <div className=" calif"> {feedback.calificacion_personal}</div>{" "}
          </div>
          <div
            className="rowDimension
          "
          >
            <div className="dimesion ">craft</div>
            <div className=" coment">{feedback.comentario_craft}</div>
            <div className=" calif"> {feedback.calificacion_craft}</div>{" "}
          </div>
          <div className="rowDimension  ">
            <div className="dimesion">business</div>
            <div className=" coment">{feedback.comentario_business}</div>
            <div className=" calif"> {feedback.calificacion_business}</div>{" "}
          </div>
        </div>
      </div>

      {/* comentario general */}
      <div className="w-full mx-auto my-6">
        <h2 className=" text-3xl font-bold mb-2 ">Comentario General</h2>
        <div
          className="flex
        flex-col md:flex-row space-x-0 md:space-x-2
        rounded-3xl overflow-hidden mb-4"
        >
          <div className="basis-10/12 mx-auto bg-slate-300/40 border px-10 py-4 flex items-center">
            {feedback.comentario_general}
          </div>
          <div
            className="w-full sm:basis-2/12 bg-black/10 
          md:text-6xl text-3xl font-bold 
           flex items-center justify-center py-5"
          >
            {feedback.calificacion_promedio}
          </div>
        </div>
      </div>

      {/* stablas de evaluacones */}
      <h2 className="title"> Evaluaciones</h2>
      <div className="w-9/12 mx-auto mt-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        ab dolores hic impedit minus voluptatibus enim quam voluptates iusto
        quis, odit dicta maxime sapiente praesentium obcaecati nobis earum!
        Vitae, officiis.
        <div className="overflow-x-auto my-10">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Assintant</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Periodo</div>
                </th>
                <th className="p-2 whitespace-nowrap hidden sm:flex">
                  <div className="font-semibold text-left">General</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {dat.map((i) => (
                <RowFeed key={i} data={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
