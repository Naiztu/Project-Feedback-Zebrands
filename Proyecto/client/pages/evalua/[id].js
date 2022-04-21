import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import swal from "sweetalert";
import Respuesta from "../../components/Respuesta";
import { useUser } from "../../context/userContext";
import { useForm } from "../../hooks/useForm";
import { getEmpleado } from "../../services/empleado";
import { getPreguntasToEmpleado } from "../../services/preguntas";
import { enviarRespuestas } from "../../services/respuestas";

export default function Post() {
  const router = useRouter();

  const { user, isAuthenticated } = useUser();
  const [evaluado, setEvaluado] = useState({});
  const [data, errors, handle, handleBlur, setItem, checkErrors] = useForm();

  function expresion(tipo) {
    switch (tipo) {
      case "abierta":
        return /^.{1,255}$/;
      case "numerica":
        return /^.{1,255}$/;
      case "calificacion":
        return /^([0-4]{1}([.]([0-5]{1}))?)|[5]{1}$/;
    }
  }
  
  function message(tipo) {
    switch (tipo) {
      case "abierta":
        return "No puede exceder los 255 caracteres";
      case "numerica":
        return "Selecciona una opción";
      case "calificacion":
        return "Escribe un numero valido, de 0 al 5 (puede llevar decimal)";
    }
  }

  const postRespuestas = async () => {
    try {
      const res = await enviarRespuestas(
        {
          id_empleado_evaluador: user.id_empleado,
          id_empleado_evaluado: evaluado.id_empleado,
          id_periodo: 1,
          lista_preguntas: data,
        }
      );
      await swal("Registrado correctamente!", {
        icon: "success",
      });
      router.push("/user/evalua");
    } catch (err) {
      console.log({ err });
      swal("Hubo un error", {
        icon: "warning",
      });
    }
  };

  const generatorData = (item) => {
    return {
      pregunta: item.pregunta,
      tipo_respuesta: item.tipo_pregunta,
      descripcion_respuesta: "",
      dimension_respuesta: item.dimension_pregunta,
      message: message(item.tipo_pregunta),
    };
  };


  const getPreguntas = async (nivel_business, nivel_craft, nivel_people) => {
    try {
      const preguntas = await getPreguntasToEmpleado(nivel_business, nivel_craft, nivel_people)
      preguntas.forEach((item) =>
        setItem(generatorData(item), expresion(item.tipo_pregunta))
      );
    } catch (error) {
      console.log(error)
    }
  };

  const getEvaluado = async (id) => {
    try {
      const data = await getEmpleado(id);
      setEvaluado(data.data_empleado);
      const { nivel_business, nivel_craft, nivel_people } = data.data_empleado;
      getPreguntas(nivel_business, nivel_craft, nivel_people, id);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    if (router.isReady && isAuthenticated) {
      const { id } = router.query;
      getEvaluado(id);
    }
  }, [router.isReady, isAuthenticated]);

  return (
    <Layout>
      <div className=" flex flex-row space-x-4 items-center justify-center mt-10">
        <img className="w-16 h-16 avatar" src={evaluado.imagen_perfil} />
        <h1 className="title"> Evalúa a {evaluado.nombre}!</h1>
      </div>
      <section className="w-9/12 mx-auto">
        <div className="relative flex pt-10 items-center w-9/12 mx-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 uppercase text-3xl">
            People
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {data
          .filter((el) => el.dimension_respuesta === "people")
          .map((item, index) => (
            <Respuesta
              info={item}
              key={index}
              variable={data}
              handleBlur={handleBlur}
              errors={errors}
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
        {data
          .filter((el) => el.dimension_respuesta === "business")
          .map((item, index) => (
            <Respuesta
              info={item}
              key={index}
              variable={data}
              handleBlur={handleBlur}
              errors={errors}
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
        {data
          .filter((el) => el.dimension_respuesta === "craft")
          .map((item, index) => (
            <Respuesta
              info={item}
              key={index}
              variable={data}
              handleBlur={handleBlur}
              errors={errors}
            />
          ))}
      </section>
      <button
        disabled={errors.length > 0}
        onClick={() => {
          if (checkErrors() === 0) {
            postRespuestas();
          } else {
            swal("¡Tienes preguntas faltantes!", {
              icon: "warning",
            });
          }
        }}
        className="btn mt-5 w-10/12 mx-auto"
      >
        Enviar
      </button>
    </Layout>
  );
}
