import React from "react";
import Evaluaciones from "../../../components/Evaluaciones";
import Layout from "../../../components/Layout";
import PlantillaFeed from "../../../components/PlantillaFeed";



export default function Post() {
  return (
    <Layout>
      <div className="py-10"> 
      <Evaluaciones />
      </div>
      <PlantillaFeed isSaved={false} />
    </Layout>
  );
}
