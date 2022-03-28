import React from "react";

export default function PlantillaFeed({ feedback }) {
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
      <div className="w-9/12  mx-auto">
        <div
          className="w-9/12
    mx-auto rounded-3xl  flex flex-col space-y-2 overflow-hidden "
        >
          <div className="rowDimension">
            <div className="dimesion">people</div>
            <div className=" coment basis-6/12">{comentario_personal}</div>
            <div className=" calif"> {feedback.calificacion_personal}</div>{" "}
          </div>
          <div
            className="rowDimension
          "
          >
            <div className="dimesion ">craft</div>
            <div className=" coment basis-6/12">{comentario_craft}</div>
            <div className=" calif "> {feedback.calificacion_craft}</div>{" "}
          </div>
          <div className="rowDimension  ">
            <div className="dimesion">business</div>
            <div className=" coment basis-6/12">{comentario_business}</div>
            <div className=" calif basis-6/12">
              {" "}
              {calificacion_business}
            </div>{" "}
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
          <div className="basis-10/12 coment">{comentario_general}</div>
          <div className="w-full sm:basis-2/12 calif">
            {calificacion_promedio}
          </div>
        </div>
      </div>
    </>
  );
}
