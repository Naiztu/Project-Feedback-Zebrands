import Link from "next/link";
import React from "react";

export default function RowFeed({ data }) {
  return (
    <tr className="hover:bg-blue-400/20 active:scale-95 transition-all ease-in-out w-full">
      <td className="p-2 whitespace-nowrap ">
        <Link href={`/feedback/${data}`}>
          <a className="w-full" target="_blank" rel="noreferrer">
            <div className="flex items-center">
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <img
                  className="rounded-full"
                  src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                  width={40}
                  height={40}
                  alt="Burak Long"
                />
              </div>
              <div className="font-medium text-gray-800">Burak Long</div>
            </div>
          </a>
        </Link>
      </td>
      <td className="p-2 whitespace-nowrap">
        <Link href={`/feedback/${data}`}>
          <a className="w-full" target="_blank" rel="noreferrer">
            <div className="text-left">12/02/2020</div>
          </a>
        </Link>
      </td>
      <td className="h-full p-2 whitespace-nowrap hidden sm:flex items-center">
        <Link href={`/feedback/${data}`}>
          <a
            className="w-full h-full flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" h-full font-medium text-green-500 flex items-center">
              2.4
            </div>
          </a>
        </Link>
      </td>
    </tr>
  );
}
