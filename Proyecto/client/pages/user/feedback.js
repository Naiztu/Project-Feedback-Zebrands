import React from "react";
import Feedbacks from "../../components/Feedbacks";
import Layout from "../../components/Layout";
import { useUser } from "../../context/userContext";

export default function Feedback() {
  const { user, isAuthenticated } = useUser();
  return (
    <Layout>
      {user && <Feedbacks id_user={user.id_empleado} />}
    </Layout>
  );
}
