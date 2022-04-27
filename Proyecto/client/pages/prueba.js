import React, { useRef, useState } from "react";
import api from "../services/api";

export default function Prueba() {
  const [img, setImg] = useState("");
  const fileImg = useRef();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div classNmae="flex w-full h-screen items-center justify-center bg-grey-lighter">
        <label className=" group w-64 flex flex-col items-center px-4 py-6 bg-white  rounded-lg shadow-lg tracking-wide uppercase border border-black hover:border-secondary-50 cursor-pointer">
          <svg
            className="w-8 h-8 fill-black group-hover:fill-secondary-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal text-black group-hover:text-secondary-50 ">
            Select a file
          </span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => setImg(e.target.files[0])}
            ref={fileImg}
          />
        </label>
      </div>
      <button
        onClick={async () => {
          const formData = new FormData();
          formData.append("image", img);
          await api.post("/images", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        }}
      >
        enviar
      </button>
    </div>
  );
}
