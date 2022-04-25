import React from "react";
import Loader from "../components/loaders/Loader";
import PageZebrands from "../components/loaders/PageZebrands";
import Spinner from "../components/loaders/Sppiner";
import ThreeDotsWave from "../components/loaders/ThreeDotsWave";

export default function Prueba() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <PageZebrands />
    </div>
  );
}
