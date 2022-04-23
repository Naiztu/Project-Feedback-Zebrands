import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../context/userContext";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginAuth } = useUser();
  const [errorMessage, setErrorMessage] = useState('');

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
            />
            <input
              className="input-label block mt-4"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
            />

            <button
              className="btn mt-5"
              onClick={async () => {
                try {
                  await loginAuth(email, password);
                } catch (error) {
                  setErrorMessage('¡Credenciales inválidas!');
                  console.log({ error })
                }
              }}
            >
              Entrar
            </button>
            {errorMessage && <p class="italic text-center text-red-500 text-base mt-2">  {errorMessage} </p>}
          </div>
        </div>
      </div>
    </>
  );
}
