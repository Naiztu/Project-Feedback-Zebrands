import React, { useEffect, useState } from "react";
import RowFeed from "./RowFeed";
import { useUser } from "../context/userContext";
import { getFeedbackHistory } from "../services/feedback";
import Loader from "./loaders/Loader";
import { useRouter } from "next/router";

export default function Feedbacks({ id_user }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loaded, setLoaded] = useState(0);


  const getFeedbacks = async () => {
    try {
      const data = await getFeedbackHistory(id_user);
      setFeedbacks(data.data_feedbackHistory);
      setLoaded(1);
    } catch (err) {
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <>
      <h1 className="title w-3/4 mx-auto mt-10">Mis Feebacks</h1>
      <div className="flex flex-col justify-center mt-10 mx-auto w-11/12 sm:w-3/4">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Assistant</div>
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
                  {feedbacks.length != 0 &&
                    feedbacks.map((item, index) => (
                      <RowFeed key={index} data={item} />
                    ))}
                </tbody>
              </table>
              {feedbacks.length === 0 && loaded && (
                <div className=" w-full my-20 flex justify-center items-center">
                  <p className="text text-center w-3/4 mx-auto">
                    Aún no hay información para mostrar
                  </p>
                </div>
              )}

              {feedbacks.length === 0 && !loaded && (
                <div className=" w-full my-20 flex justify-center items-center">
                  <Loader hmax={70} hmin={10} w={15} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
