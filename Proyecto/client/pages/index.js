import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../context/userContext";

export default function Home() {
  const router = useRouter();
  const [rol, setRol] = useState(3);
  const { setIdRol } = useUser();
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
        <div
          className="h-screen hidden sm:block bg-cover bg-center"
          style={{
            backgroundImage: "url('https://source.unsplash.com/random')",
          }}
        ></div>
        <div className="h-screen w-full flex items-center justify-center">
          <div className="flex flex-col w-10/12 mx-auto ">
            <p className="">Bienvenido de nuevo!</p>
            <h1 className=" text-4xl font-bold">Nos alegra que vuelvas!</h1>

            <input
              className="input-label block mt-6"
              placeholder="Correo"
              value={rol}
              onChange={(e) => setRol(parseInt(e.target.value))}
              type={"number"}
            />
            <input
              className="input-label block mt-4"
              placeholder="Contraseña"
              type={"password"}
            />
            <a className="link">Recuperar contraseña</a>

            <button
              className="btn mt-5"
              onClick={() => {
                setIdRol(rol);
                if (rol === 1) {
                  router.push("/lead");
                } else router.push("/user");
              }}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
