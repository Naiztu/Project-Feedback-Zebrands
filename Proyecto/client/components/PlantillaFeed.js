import React, { useState, useEffect } from "react";
import { postFeedback } from "../services/feedback";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import { useForm } from "../hooks/useForm";
import { objectsFeed, regFeed } from "../util/objectsInputs";

export default function PlantillaFeed({
  feedback,
  isSaved,
  id_member,
  id_assistant,
  id_periodo,
}) {
  const router = useRouter();
  const [data, errors, handle, handleBlur, setItem, checkErrors] = useForm();
  const [load, setLoad] = useState(false);
    console.log("data")
    console.log(data)
  const {
    comentario_personal,
    calificacion_personal,
    comentario_craft,
    calificacion_craft,
    comentario_business,
    calificacion_business,
    comentario_general,
    calificacion_promedio,
  } = feedback;

  const [cal_prom, setCal_prom] = useState(calificacion_promedio);

  useEffect(() => {
    objectsFeed(feedback).forEach((item, i) => setItem(item, regFeed[i]));
  }, []);

  const handleChange = (e) => {
    handleBlur(e);
    const califs =
      parseFloat(data[1].descripcion_respuesta) +
      parseFloat(data[3].descripcion_respuesta) +
      parseFloat(data[5].descripcion_respuesta);

    const avg = parseFloat(califs / 3).toFixed(1);
    setCal_prom(isNaN(avg) ? 0 : avg);
  };

  const registerFeed = async () => {
    const newFeed = {
      calificacion_promedio: cal_prom,
      calificacion_business: data[5].descripcion_respuesta,
      comentario_personal: data[0].descripcion_respuesta,
      calificacion_personal: data[1].descripcion_respuesta,
      comentario_craft: data[2].descripcion_respuesta,
      calificacion_craft: data[3].descripcion_respuesta,
      comentario_general: data[6].descripcion_respuesta,
      comentario_business: data[4].descripcion_respuesta,
    };
    const res = await postFeedback({
      ...newFeed,
      id_periodo,
      id_assistant,
      id_member,
    });

    await swal("Registrado", {
      icon: "success",
    });
    router.push("/user/asignados");
  };

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
                onChange={handleBlur}
                id={0}
                // value={preFeedback.comentario_personal}
                value={data[0] && data[0].descripcion_respuesta}
                name={"descripcion_respuesta"}
                placeholder="Comentario general de Dimensión People"
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_personal}</div>
            ) : (
              <input
                onChange={handleChange}
                id={1}
                value={data[1] && data[1].descripcion_respuesta}
                type="number"
                className="input-feed"
                placeholder="Calificación People"
                name={"descripcion_respuesta"}
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
                onChange={handleBlur}
                id={2}
                // value={preFeedback.comentario_personal}
                value={data[2] && data[2].descripcion_respuesta}
                name={"descripcion_respuesta"}
                placeholder="Comentario general de Dimensión Craft"
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_craft}</div>
            ) : (
              <input
                onChange={handleChange}
                id={3}
                value={data[3] && data[3].descripcion_respuesta}
                type="number"
                className="input-feed"
                placeholder="Calificación Craft"
                name={"descripcion_respuesta"}
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
                onChange={handleBlur}
                id={4}
                // value={preFeedback.comentario_personal}
                value={data[4] && data[4].descripcion_respuesta}
                name={"descripcion_respuesta"}
                placeholder="Comentario general de Dimensión Business"
              ></textarea>
            )}
            {isSaved ? (
              <div className=" calif"> {calificacion_business}</div>
            ) : (
              <input
                onChange={handleChange}
                id={5}
                value={data[5] && data[5].descripcion_respuesta}
                type="number"
                className="input-feed"
                placeholder="Calificación Business"
                name={"descripcion_respuesta"}
              />
            )}
          </div>
        </div>
      </div>
      {errors &&
        errors
          .filter((i) => i.id === 0)
          .map((item) => (
            <p className="error mt-1" key={item.id}>
              {item.message}
            </p>
          ))}

      {errors &&
        errors
          .filter((i) => i.id === 2)
          .map((item) => (
            <p className="error mt-1" key={item.id}>
              {item.message}
            </p>
          ))}

      {errors &&
        errors
          .filter((i) => i.id === 4)
          .map((item) => (
            <p className="error mt-1" key={item.id}>
              {item.message}
            </p>
          ))}

      <div className="flex flex-col justify-center items-end w-8/12 mx-auto">
        {errors &&
          errors
            .filter((i) => i.id === 1)
            .map((item) => (
              <p className="error mt-1" key={item.id}>
                {item.message}
              </p>
            ))}
        {errors &&
          errors
            .filter((i) => i.id === 3)
            .map((item) => (
              <p className="error mt-1" key={item.id}>
                {item.message}
              </p>
            ))}
        {errors &&
          errors
            .filter((i) => i.id === 5)
            .map((item) => (
              <p className="error mt-1" key={item.id}>
                {item.message}
              </p>
            ))}
      </div>

      {/* comentario general */}
      <div className="w-full mx-auto my-6">
        <h2 className=" text-3xl font-bold mb-2 ml-6">Comentario General</h2>
        <div
          className="flex
        flex-col md:flex-row space-x-0 md:space-x-2 mb-4 w-11/12 md:w-9/12 mx-auto"
        >
          {isSaved ? (
            <div className="basis-10/12 rounded-t-3xl md:rounded-l-3xl coment">
              {comentario_general}
            </div>
          ) : (
            <textarea
              className=" text-area-feed basis-10/12 rounded-l-3xl "
              onChange={handleBlur}
              id={6}
              value={data[6] && data[6].descripcion_respuesta}
              name={"descripcion_respuesta"}
              placeholder="Comentario General"
            ></textarea>
          )}

          {isSaved ? (
            <div className="w-full sm:basis-2/12 calif rounded-b-3xl md:rounded-r-3xl">
              {calificacion_promedio}
            </div>
          ) : (
            <div className="w-full sm:basis-2/12 input-feed flex items-center justify-center font-bold rounded-b-3xl md:rounded-r-3xl">
              {cal_prom}
            </div>
          )}
        </div>
        {errors &&
          errors
            .filter((i) => i.id === 6)
            .map((item) => (
              <p className="error mt-1" key={item.id}>
                {item.message}
              </p>
            ))}
      </div>

      {!isSaved && (
        <div className="w-9/12 flex items-center justify-center font-bold">
          <button
            className="btn"
            onClick={registerFeed}
            disabled={load || errors.length > 0}
          >
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
  },
  isSaved: false,
};
