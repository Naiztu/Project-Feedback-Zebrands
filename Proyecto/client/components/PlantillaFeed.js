import React, { useState } from "react";

export default function PlantillaFeed({ feedback, isSaved }) {
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
    newFeed["calificacion_promedio"] = Math.min(
      parseInt(newFeed.calificacion_business) + 1,
      parseInt(newFeed.calificacion_personal) + 1,
      parseInt(newFeed.calificacion_craft)
    );
    setPreFeedback(newFeed);
  };

  return (
    <>
      <header className=" bg-slate-400/10 w-full rounded-b-3xl">
        <div
          className="w-9/12 
    mx-auto  flex p-5 flex-row space-x-6"
        >
          <div className="w-2/12 hidden md:inline ">
            <img
              src="/assets/avatar.jpg"
              className=" avatar w-full"
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-10/12">
            <h1 className=" text-4xl md:text-6xl font-bold text-center">
              {isSaved ? "Mi feedback" : "Registrar Feedback"}
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
      <div className="w-9/12  mx-auto">
        <div
          className="w-9/12
    mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden "
        >
          <div className="rowDimension">
            <div className="dimesion">people</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{comentario_personal}</div>
            ) : (
              <textarea
                className=" text-area-feed"
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
                className=" text-area-feed"
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
          <div className="rowDimension  ">
            <div className="dimesion">business</div>
            {isSaved ? (
              <div className=" coment basis-6/12">{comentario_business}</div>
            ) : (
              <textarea
                className=" text-area-feed"
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
        rounded-3xl overflow-hidden mb-4 w-9/12 mx-auto"
        >
          {isSaved ? (
            <div className="basis-10/12 coment">{comentario_general}</div>
          ) : (
            <textarea
              className=" text-area-feed"
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
            <div className="w-full sm:basis-2/12 input-feed">
              {preFeedback.calificacion_promedio}
            </div>
          )}
        </div>
      </div>

      {!isSaved && (
        <div className="w-9/12 flex items-center justify-center">
          <button className="btn">Guardar</button>
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
  isSaved: true,
};
