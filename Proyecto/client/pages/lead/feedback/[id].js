import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { useUser } from "../../../context/userContext";
import PlantillaFeed from "../../../components/PlantillaFeed";
import Layout from "../../../components/Layout";
import Evaluaciones from "../../../components/Evaluaciones";
import { getFeedback } from "../../../services/feedback";

export default function Post() {
  const router = useRouter();
  const [feedback, setFeedback] = useState(null);
  const { user } = useUser();

  const getData = async (id_periodo) => {
    try {
      const data = await getFeedback(user.id_empleado, id_periodo);
      setFeedback(data.data_feedback);
    } catch (err) {
      swal("Estás intentando acceder a un feedback que no existe", {
        icon: "warning",
      });
      router.push("/user");
    }
  };

  const setuser =
    (() => {
      const id_user = user.id_empleado;
    },
    [user]);

  useEffect(() => {
    setuser();
    if (router.isReady) {
      const { id } = router.query;
      getData(id);
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
