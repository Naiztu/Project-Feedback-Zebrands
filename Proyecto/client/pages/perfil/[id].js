import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Registro from "../../components/Registro";
import { useRouter } from "next/router";
import { getPerfil } from "../../services/perfil";

export default function Post() {
  const router = useRouter();
  const [dataPerfil, setDataPerfil] = useState(null);

  const getDataPerfil = async (id) => {
    try {
      const data = await getPerfil(id);
      setDataPerfil(data.data_perfil);
    } catch (err) {
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      getDataPerfil(id);
    }
  }, [router.isReady]);
  return (
    <>
      <Layout>
        <div className="w-full min-h-screen flex justify-center items-center">
          {dataPerfil && <Registro isSaved={true} regMember={dataPerfil} />}
        </div>
      </Layout>
    </>
  );
}
