import React from "react";
import RowFeed from "./RowFeed";
const dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default function Feedbacks() {
  return (
    <>
      <h1 className="title w-3/4 mx-auto">Mis Feebacks</h1>
      <div className="flex flex-col justify-center mt-10 mx-auto w-11/12 sm:w-3/4">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="p-3">
            <div className="overflow-x-auto">
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
        </div>
      </div>
    </>
  );
}
