import React from "react";
import { useEffect, useState } from "react";
import CardMembers from "./CardMembers";
import { useUser } from "../context/userContext";
import { getAsignados } from "../services/asignados";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";





export default function MemberAsignados() {
  const router = useRouter();
  const [info, setInfo] = useState([]);
  const { isAuthenticated, user } = useUser();


  const getData = async () => {
    try {
      const data = await getAsignados(user.id_empleado);
      console.log(data);
      setInfo(data.data_members);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleAdd = () => {
    router.push(`/lead/adminasig/autoasigCM/${user.id_empleado}`);
  };


  useEffect(() => {
    if (isAuthenticated) {
      getData();
    }
  }, [isAuthenticated]);
  return (
    <>
      <h1 className="title w-11/12 mx-auto my-10">Members Asignados</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap">
        {info.map((item, index) => (
          <CardMembers key={index} info={item} />
        ))}
      </div>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap">
      {user && user.id_rol === 1 && (
        <button onClick={handleAdd} className="btn">
        Auto-asignar CM
      </button>
              )}
      </div>
     
    </>
  );
}
