import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Post() {
  const level_craft = 1,
    level_people = 1,
    level_business = 1;

  const router = useRouter();
  const [id_Evaluado, setId_Evaluado] = useState(null);
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setId_Evaluado(id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <h1 className="title my-10"> Evaluame {id_Evaluado}!</h1>
      <section className="w-9/12 mx-auto">
        {preguntas.map((item, index) => (
          <Respuesta />
        ))}
      </section>
    </Layout>
  );
}
