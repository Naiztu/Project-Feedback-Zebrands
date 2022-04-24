import React, { useEffect, useState } from "react";
import RowFeed from "./RowFeed";
import { useUser } from "../context/userContext";
import api from "../services/api";
import Loader from "./loader/Loader";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const { user, isAuthenticated } = useUser();

  const getFeedbacks = async () => {
    try {
      const res = await api.get(`/feedback/${user.id_empleado}`);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setFeedbacks(res.data.data_feedbackHistory);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getFeedbacks();
    }
  }, [isAuthenticated]);

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
              {feedbacks.length === 0 && (
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
