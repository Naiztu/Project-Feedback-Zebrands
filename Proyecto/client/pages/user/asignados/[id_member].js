import React, { useState, useEffect } from "react";
import Evaluaciones from "../../../components/Evaluaciones";
import Layout from "../../../components/Layout";
import PlantillaFeed from "../../../components/PlantillaFeed";
import { useRouter } from "next/router";
import { useUser } from "../../../context/userContext";

export default function Post() {
  const router = useRouter();
  const [id_mem, setId_mem] = useState(null);
  const { id_periodo, user, isAuthenticated } = useUser();

  useEffect(() => {
    if (router.isReady) {
      const { id_member } = router.query;
      setId_mem(id_member);
    }
  }, [router.isReady]);

  return (
    <Layout>
      {id_mem != null && (
        <Evaluaciones id_user={id_mem} id_periodo={id_periodo} />
      )}
      {id_mem != null && isAuthenticated && <PlantillaFeed isSaved={false} id_member={id_mem} id_assistant={user.id_empleado} id_periodo={id_periodo} />}
    </Layout>
  );
}
