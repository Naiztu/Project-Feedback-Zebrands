import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>id {id}</div>
    </>
  );
}
