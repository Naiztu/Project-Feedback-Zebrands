import React, { useEffect, useState } from "react";
import Axios from "axios";
import Layout from "../../components/Layout";
import RowFeed from "../../components/RowFeed";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    try {
      const res = await Axios.get(`http://localhost:8080/feedback/`);
      console.log(res);
      if (res.status != 200) {
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        };
      } else setFeedbacks(res.data.data_feedbackAll);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);
  return (
    <Layout>
      <h1 className="title w-3/4 mx-auto mt-10">Feebacks</h1>
      <div className=" flex mt-3 mx-auto w-full items-center justify-center text-sm">
        <input
          type="text"
          className="input-label w-8/12 lg:w-4/12"
          placeholder="Nombre del member"
        />{" "}
        <span className="btn ml-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="my-2 mx-2 md:m-0 h-5 w-5"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-center mt-10 mx-auto w-11/12 sm:w-3/4">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Member</div>
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
    </Layout>
  );
}
