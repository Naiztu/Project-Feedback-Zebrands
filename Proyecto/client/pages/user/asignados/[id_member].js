import React, { useState, useEffect } from "react";
import Evaluaciones from "../../../components/Evaluaciones";
import Layout from "../../../components/Layout";
import PlantillaFeed from "../../../components/PlantillaFeed";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const [id_mem, setId_mem] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { id_member } = router.query;
      setId_mem(id_member);
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className="py-10">
        <Evaluaciones />
      </div>
      {(id_mem != null) && <PlantillaFeed isSaved={false} id_member={id_mem} />}
    </Layout>
  );
}
