import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Axios from "axios";
import Respuesta from "../../components/Respuesta";

export default function Post() {
  const router = useRouter();
  const [evaluado, setEvaluado] = useState({});
  const [preguntasPeople, setPreguntasPeople] = useState([]);
  const [preguntasCraft, setPreguntasCraft] = useState([]);
  const [preguntasBusiness, setPreguntasBusiness] = useState([]);

  const questionToResponse = (item, id) => ({
    pregunta: item.pregunta,
    tipo_respuesta: item.tipo_pregunta,
    descripcion_respuesta: "",
    id_empleado_evaluador: 1,
    id_empleado_evaluado: id,
    dimension_respuesta: item.dimension_pregunta,
  });
  const postRespuestas = () => {
    console.log("enviado");
  };

  const getPreguntas = async (
    nivel_business,
    nivel_craft,
    nivel_people,
    id
  ) => {
    const peticiones = [
      `http://localhost:8080/preguntas/${Math.trunc(nivel_craft)}/craft`,
      `http://localhost:8080/preguntas/${Math.trunc(nivel_people)}/people`,
      `http://localhost:8080/preguntas/${Math.trunc(nivel_business)}/business`,
    ];

    try {
      const res = await Axios.all(peticiones.map((item) => Axios.get(item)));
      console.log({ res });
      if (res[0].status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else {
        setPreguntasCraft(
          res[0].data.preguntas.map((i) => questionToResponse(i, id))
        );
        setPreguntasPeople(
          res[1].data.preguntas.map((i) => questionToResponse(i, id))
        );
        setPreguntasBusiness(
          res[2].data.preguntas.map((i) => questionToResponse(i, id))
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getEvaluado = async (id) => {
    try {
      const res = await Axios.get(`http://localhost:8080/empleado/${id}`);
      console.log({ res });
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else {
        setEvaluado(res.data.data_empleado);
        const { nivel_business, nivel_craft, nivel_people } =
          res.data.data_empleado;
        getPreguntas(nivel_business, nivel_craft, nivel_people, id);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      getEvaluado(id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className=" flex flex-row space-x-4 items-center justify-center mt-10">
        <img className="w-16 h-16 avatar" src={evaluado.imagen_perfil} />
        <h1 className="title"> Evalua a {evaluado.nombre}!</h1>
      </div>
      <section className="w-9/12 mx-auto">
        <div className="relative flex pt-10 items-center w-9/12 mx-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 uppercase text-3xl">
            People
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {preguntasPeople.map((item, index) => (
          <Respuesta
            info={item}
            key={index}
            index={index}
            variable={preguntasPeople}
            metodo={setPreguntasPeople}
          />
        ))}
      </section>
      <section className="w-9/12 mx-auto">
        <div className="relative flex pt-10 items-center w-9/12 mx-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 uppercase text-3xl">
            Business
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {preguntasBusiness.map((item, index) => (
          <Respuesta
            info={item}
            key={index}
            index={index}
            variable={preguntasBusiness}
            metodo={setPreguntasBusiness}
          />
        ))}
      </section>
      <section className="w-9/12 mx-auto">
        <div className="relative flex pt-10 items-center w-9/12 mx-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 uppercase text-3xl">
            Craft
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {preguntasCraft.map((item, index) => (
          <Respuesta
            info={item}
            key={index}
            index={index}
            variable={preguntasCraft}
            metodo={setPreguntasCraft}
          />
        ))}
      </section>
      <button onClick={postRespuestas} className="btn mt-5 w-10/12 mx-auto">
        Enviar
      </button>
    </Layout>
  );
}
