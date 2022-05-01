import React from "react";
import Layout from "../components/Layout";
import AdminAllEmpleados from "../components/AdminAllEmpleados";
import Registro from "../components/Registro";

export default function Prueba() {
  return (
    <Layout>
      <Registro regMember= {
        {nombre: "Oli",
        apellido_paterno: "Moralez",
    apellido_materno: "Queza",
    nivel_general: 3.2,
    nivel_craft: 2.1,
    nivel_business: 2.1,
    nivel_people: 1.2,
    correo_electronico: "oli@zeb.mx",
    equipo:"Dinamita",
    id_chapter:1,    
    id_rol:2}} isSaved={false}/>
    </Layout>
  );
}
