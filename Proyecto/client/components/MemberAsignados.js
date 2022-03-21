import React from "react";
import { useEffect, useState } from "react";
import CardMembers from "./CardMembers";

const dat = [1, 2, 3, 4, 5, 6];

export default function MemberAsignados() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((dat) => setInfo(dat.data));
  }, []);
  return (
    <>
      <h1 className="title w-11/12 mx-auto">Member&apos;s Asignados</h1>
      <div className="w-11/12 items-center justify-center mx-auto flex flex-wrap mt-5">
        {info.map((i) => (
          <CardMembers key={i.id} info={i} />
        ))}
      </div>
    </>
  );
}
