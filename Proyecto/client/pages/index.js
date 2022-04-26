import Head from "next/head";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { useUser } from "../context/userContext";
import Spinner from "../components/loaders/Sppiner";
import PageZebrands from "../components/loaders/PageZebrands";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const [password, setPassword] = useState("");
  const { loginAuth } = useUser();
  const [captchaValido, cambiarCaptchaValido] = useState(null);

  const captcha = useRef(null);

	const onChange = () => {
		if(captcha.current.getValue()){
			console.log('Autenticación Correcta');
			cambiarCaptchaValido(true);
		}
	}

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-2">
        <div className="h-screen hidden sm:block bg-cover bg-center">
          <PageZebrands load={false} />
        </div>
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


          <div className=" flex w-full h-full items-center justify-center ">              
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LfW650fAAAAAG099AsQSGGoZvkkXqr97vgDDFtx"
              onChange={onChange}
            />
          </div>

            <button
              className="btn mt-5"
              disabled={load}
              onClick={async () => {
                setLoad(true);
                try {
                  if(captchaValido){
                    await loginAuth(email, password);
                    setLoad(false);
                  } else
                  {
                    await swal({
                      title: "Recuerda completar el Captcha",
                      icon: "warning",
                    });
                    setLoad(false);
                  }
                  
                } catch (error) {
                  await swal({
                    title: "¡Credenciales Inválidas!",
                    text: "Revisa tu correo o contraseña",
                    icon: "warning",
                  });
                  setLoad(false);
                }
              }}
            >
              <span className=" flex w-full h-full items-center justify-center ">
                <span className={`w-4 h-4 ${load ? "inline" : "hidden"}`}>
                  <Spinner />
                </span>
                <p className={`h-4 ${load ? "hidden" : "inline"}`}>Entrar</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
