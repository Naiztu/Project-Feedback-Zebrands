import React, { useEffect, useState } from "react";
import RowFeed from "./RowFeed";
import Axios from "axios";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    const id_user = 1;
    try {
      const res = await Axios.get(
        `${process.env.HOSTBACK}/feedback/${id_user}`
      );
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
                  {feedbacks.map((item, index) => (
                    <RowFeed key={index} data={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
