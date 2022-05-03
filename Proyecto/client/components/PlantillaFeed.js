import React, { useState } from "react";
import { postFeedback } from "../services/feedback";
import swal from "sweetalert";
import {useRouter} from "next/router"

export default function PlantillaFeed({ feedback, isSaved, id_member }) {
  const router=useRouter();
  const {
    calificacion_craft,
    calificacion_personal,
    calificacion_business,
    calificacion_promedio,
    comentario_business,
    comentario_personal,
    comentario_craft,
    comentario_general,
    
  } = feedback;

  const [preFeedback, setPreFeedback] = useState(feedback);

  const handleChange = (e) => {
    const newFeed = { ...preFeedback };
    newFeed[e.target.name] = e.target.value;
    newFeed["calificacion_promedio"] =
      (parseInt(newFeed.calificacion_business) +
        parseInt(newFeed.calificacion_personal) +
        parseInt(newFeed.calificacion_craft)) /
      3;

    setPreFeedback(newFeed);
  };

 const registerFeed = async() => {
    const res=await postFeedback({
      ...preFeedback,
      id_assistant,
      id_member,
    })
    if (res.status != 200) {
      throw {
        err: true,
        status: res.status,
        statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
      };
    } else {
      await swal("Registrado", {
        icon: "success",
      });
      router.push("/user/asignados");
    }
      
  };

  const id_assistant = 1;

  

  return (
    <>
      <header className=" bg-slate-400/10 w-full pt-10 rounded-b-3xl">
        <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
          <h1 className=" title">
            {isSaved ? "Mi feedback" : "Registrar Feedback"}
          </h1>
          <h2 className="mt-1 mb-10 italic font-semibold">
            Periodo Enero-Febrero 2020
          </h2>
        </div>
      </header>
      <div className="text-center italic my-4 font-semibold  flex justify-between w-[290px] mx-auto">
        <p>Dimensión</p> <strong>-</strong> <p>Comentario </p>
        <strong>-</strong> <p>Calificación</p>
      </div>
      <div className="w-11/12  mx-auto">
        <div
          className="w-11/12 md:w-9/12
    mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden "
        >
          <div className="rowDimension">
            <div className="dimesion">people</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{comentario_personal}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preFeedback.comentario_personal}
                name="comentario_personal"
                placeholder="Comentario People"
                onChange={handleChange}
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_personal}</div>
            ) : (
              <input
                onChange={handleChange}
                value={preFeedback.calificacion_personal}
                type="number"
                className="input-feed"
                placeholder="Calificación People"
                name="calificacion_personal"
              />
            )}
          </div>
          <div className="rowDimension">
            <div className="dimesion ">craft</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{comentario_craft}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preFeedback.comentario_craft}
                name="comentario_craft"
                placeholder="Comentario Craft"
                onChange={handleChange}
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_craft}</div>
            ) : (
              <input
                onChange={handleChange}
                value={preFeedback.calificacion_craft}
                type="number"
                className="input-feed"
                placeholder="Calificación Craft"
                name="calificacion_craft"
              />
            )}
          </div>
          <div className="rowDimension">
            <div className="dimesion">business</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{comentario_business}</div>
            ) : (
              <textarea
                className=" text-area-feed basis-6/12"
                value={preFeedback.comentario_business}
                name="comentario_business"
                placeholder="Comentario Business"
                onChange={handleChange}
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_business}</div>
            ) : (
              <input
                onChange={handleChange}
                value={preFeedback.calificacion_business}
                type="number"
                className="input-feed"
                placeholder="Calificación Business"
                name="calificacion_business"
              />
            )}
          </div>
        </div>
      </div>

      {/* comentario general */}
      <div className="w-full mx-auto my-6">
        <h2 className=" text-3xl font-bold mb-2 ml-6">Comentario General</h2>
        <div
          className="flex
        flex-col md:flex-row space-x-0 md:space-x-2
        rounded-3xl overflow-hidden mb-4 w-11/12 md:w-9/12 mx-auto"
        >
          {isSaved ? (
            <div className="basis-10/12 coment">{comentario_general}</div>
          ) : (
            <textarea
              className=" text-area-feed basis-10/12"
              value={preFeedback.comentario_general}
              name="comentario_general"
              placeholder="Comentario General"
              onChange={handleChange}
            ></textarea>
          )}

          {isSaved ? (
            <div className="w-full sm:basis-2/12 calif">
              {calificacion_promedio}
            </div>
          ) : (
            <div className="w-full sm:basis-2/12 input-feed flex items-center justify-center font-bold">
              {parseInt(preFeedback.calificacion_promedio)}
            </div>
          )}
        </div>
      </div>

      {!isSaved && (
        <div className="w-9/12 flex items-center justify-center font-bold">
          <button className="btn" onClick={registerFeed}>
            Guardar
          </button>
        </div>
      )}
    </>
  );
}

PlantillaFeed.defaultProps = {
  feedback: {
    calificacion_craft: 0,
    calificacion_personal: 0,
    calificacion_business: 0,
    calificacion_promedio: 0,
    comentario_business: "",
    comentario_personal: "",
    comentario_craft: "",
    comentario_general: "",
    id_periodo: 3,
  },
  isSaved: true,
};
