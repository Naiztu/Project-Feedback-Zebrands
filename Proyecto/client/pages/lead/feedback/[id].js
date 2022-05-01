import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useUser } from "../../../context/userContext";
import PlantillaFeed from "../../../components/PlantillaFeed";
import Layout from "../../../components/Layout";
import Evaluaciones from "../../../components/Evaluaciones";
import api from "../../../services/api";

export default function Post() {
  //Debe ser el numero del periodo al que corresponde el feedback

  const router = useRouter();

  const [feedback, setFeedback] = useState(null);
  const { user } = useUser();

  const getFeedback = async (id_periodo) => {
    const id_user = user.id_empleado;
    try {
      const res = await api.get(`/feedback/${id_user}/${id_periodo}`);
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setFeedback(res.data.data_feedback);
    } catch (err) {
      console.log(err);
      swal("Estás intentando acceder a un feedback que no existe", {
        icon: "warning",
      });
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
      {feedback && <PlantillaFeed feedback={feedback} />}

      {feedback && (
        <Evaluaciones
          id_periodo={feedback.id_periodo}
          id_user={feedback.id_empleado_member}
        />
      )}
    </Layout>
  );
}
