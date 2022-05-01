import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { getEmpleado } from "../../../services/empleado";
import Adminasig from "../../../components/Adminasig";

export default function Post() {
  const router = useRouter();
  const [dataAssistant, setDataAssistant] = useState(null);

  const getDataAssistant = async (id) => {
    try {
      const data = await getEmpleado(id);
      setDataAssistant(data.data_empleado);
    } catch (err) {
      console.log({ err });
    }
    //console.log(dataAssistant.nombre)

  };

  useEffect(() => {
    if (router.isReady) {
      const { id_assistant } = router.query;
      getDataAssistant(id_assistant)
    }
  }, [router.isReady]);

  return (
    <Layout>
      {dataAssistant && <Adminasig
        data_assis={dataAssistant}
      />}
    </Layout>
  );
}


