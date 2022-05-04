import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useUser } from "../../../context/userContext";
import PlantillaFeed from "../../../components/PlantillaFeed";
import Layout from "../../../components/Layout";
import Evaluaciones from "../../../components/Evaluaciones";
import { getFeedback } from "../../../services/feedback";

export default function Post() {
  //Debe ser el numero del periodo al que corresponde el feedback

  const router = useRouter();

  const [feedback, setFeedback] = useState(null);

  const getData = async (id_periodo, id_user) => {
    try {
      const data = await getFeedback(id_user, id_periodo);
      setFeedback(data.data_feedback);
    } catch (err) {
      swal("Estas intentando acceder a un feedback que no existe", {
        icon: "warning",
      });
      router.push("/user");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id, id_user } = router.query;
      getData(id, id_user);
    }
  }, [router.isReady]);

  return (
    <Layout>
      {feedback && <PlantillaFeed feedback={feedback} isSaved={true} />}

      {feedback && (
        <Evaluaciones
          id_periodo={feedback.id_periodo}
          id_user={feedback.id_empleado_member}
        />
      )}
    </Layout>
  );
}
