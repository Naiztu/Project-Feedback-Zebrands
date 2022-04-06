import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Respuesta from "../../components/Respuesta";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const preguntasRespuesta = [
    {
      pregunta: "¿Como estas?",
      tipo_respuesta: "abierta",
      descripcion_respuesta: "bien",
    },
    {
      pregunta: "¿Como estas?",
      tipo_respuesta: "abierta",
      descripcion_respuesta: "bien",
    },
    {
      pregunta: "¿Como estas?",
      tipo_respuesta: "calificacion",
      descripcion_respuesta: "1.3",
    },
    {
      pregunta: "¿Como estas?",
      tipo_respuesta: "numerica",
      descripcion_respuesta: "3",
    },
  ];
  return (
    <Layout>
      <div className="w-11/12 mx-auto">
        <h1 className="title py-10">Evaluación</h1>
        {preguntasRespuesta.map((item, index) => (
          <Respuesta key={index} info={item} isSaved={true} />
        ))}
      </div>
    </Layout>
  );
}
