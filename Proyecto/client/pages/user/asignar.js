import React from "react";
import Layout from "../../components/Layout";
import Asignar from "../../components/Asignar";
import RowAllEmpleado from "../../components/RowAllEmpleado";

export default function AsignarMember() {
  return (
    <Layout>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">
                  Empleados
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            <RowAllEmpleado/>
          </tbody>
        </table>
      </div>

    </Layout>
  );
}
