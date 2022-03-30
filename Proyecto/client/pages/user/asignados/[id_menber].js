import React from "react";
import Layout from "../../../components/Layout";
import PlantillaFeed from "../../../components/PlantillaFeed";

export default function Post() {
  return (
    <Layout>
      <div className="pt-20"> Aqui van a ir las evaluaciones</div>
      <PlantillaFeed isSaved={false} />
    </Layout>
  );
}
