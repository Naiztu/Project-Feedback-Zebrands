import React from "react";
import { useRouter } from "next/router";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className=" shadow-black shadow-sm rounded-3xl  mt-5 pt-10 w-11/12 sm:w-10/12 mx-auto">
        <h1 className="title"> Evaluame {id}!</h1>
        <section className="h-32"></section>
      </div>
    </>
  );
}
