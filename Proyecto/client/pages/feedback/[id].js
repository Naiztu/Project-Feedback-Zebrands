import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RowFeed from "../../components/RowFeed";
import Axios from "axios";
import PlantillaFeed from "../../components/PlantillaFeed";
import Layout from "../../components/Layout";
import Evaluaciones from "../../components/Evaluaciones";

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

  const getFeedback = async (id_periodo) => {
    const id_user = 1;
    let res;
    try {
      res = await Axios.get(
        `http://localhost:8080/feedback/${id_user}/${id_periodo}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setFeedback(res.data.feedback);
    } catch (err) {
      console.log(err);
      router.push("/user");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      getFeedback(id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <PlantillaFeed feedback={feedback} />
      <Evaluaciones />
    </Layout>
  );
}
