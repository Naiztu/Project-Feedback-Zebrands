import { useRouter } from "next/router";
import React from "react";

export default function Post() {
  const router = useRouter();
  const { id, id_user } = router.query;
  return (
    <div>
      <p>{id}</p>
      <p>{id_user}</p>
    </div>
  );
}
