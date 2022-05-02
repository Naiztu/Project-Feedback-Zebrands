import React, { useState, useEffect } from "react";
import Feedbacks from "../../../components/Feedbacks";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function Feedback() {
  const [idEmpleado, setIdEmpleado] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setIdEmpleado(id);
    }
  }, [router.isReady]);

  return (
    <Layout>
      {
        idEmpleado!== null && (
          <Feedbacks
          id_empleado={idEmpleado} />
        )
      }
    </Layout>
  );
}
