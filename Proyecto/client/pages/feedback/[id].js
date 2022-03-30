import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RowFeed from "../../components/RowFeed";
import Axios from "axios";
import PlantillaFeed from "../../components/PlantillaFeed";

export default function Post() {
  //Debe ser el numero del periodo al que corresponde el feedback
  const dat = [1, 2, 3, 4];
  const router = useRouter();

  const initialFeed = {
    id_feedback: 1,
    calificacion_craft: "",
    calificacion_personal: "",
    calificacion_business: "",
    calificacion_promedio: "",
    comentario_craft: "",
    comentario_personal: "",
    comentario_business: "",
    comentario_general: "",
    id_empleado_member: 1,
    id_empleado_assistant: 1,
    id_periodo: 1,
  };

  const [feedback, setFeedback] = useState(initialFeed);

  const getFeedback = async (id_periodo) => {
    const id_user = 1;
    let res;
    try {
      res = await Axios.get(
        `http://localhost:8080/feedback/${id_user}/${id_periodo}`
      );
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setFeedback(res.data.feedback);
    } catch (err) {
      console.log(err);
      router.push("/user");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      getFeedback(id);
    }
  }, [router.isReady]);

  return (
    <>
      <PlantillaFeed feedback={feedback} />

      {/* stablas de evaluacones */}
      <h2 className="title"> Evaluaciones</h2>
      <div className="w-9/12 mx-auto mt-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        ab dolores hic impedit minus voluptatibus enim quam voluptates iusto
        quis, odit dicta maxime sapiente praesentium obcaecati nobis earum!
        Vitae, officiis.
        <div className="overflow-x-auto my-10">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Assintant</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Periodo</div>
                </th>
                <th className="p-2 whitespace-nowrap hidden sm:flex">
                  <div className="font-semibold text-left">General</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {dat.map((i) => (
                <RowFeed key={i} data={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
