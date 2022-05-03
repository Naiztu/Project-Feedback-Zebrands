import React from "react";
import Layout from "../../components/Layout";
import Registro from "../../components/Registro";

export default function info() {
  
    return (
    <>
      <Layout>
        <Registro isSaved={true}/>
      </Layout>
    </>
  );
}
