import Head from "next/head";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useUser } from "../context/userContext";
import Spinner from "../components/loaders/Sppiner";
import PageZebrands from "../components/loaders/PageZebrands";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "../hooks/useForm";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const [password, setPassword] = useState("");
  const { loginAuth } = useUser();
  const [captchaValido, cambiarCaptchaValido] = useState(true);
  const [data, errors, handle, handleBlur, setItem, checkErrors] = useForm();

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      cambiarCaptchaValido(true);
    }
  };
  useEffect(() => {
    const objMail = {
      descripcion_respuesta: "",
      message: "Escribe un Correo Válido",
    };

    setItem(objMail, /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/);

    const objPass = {
      descripcion_respuesta: "",
      message: "Contraseña Inválida",
    };

    setItem(objPass, /^.{1,255}$/);
  }, []);

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
              id={0}
              name={"descripcion_respuesta"}
              value={data[0] && data[0].descripcion_respuesta}
              onChange={handleBlur}
              type={"email"}
            />
            {errors &&
              errors
                .filter((i) => i.id === 0)
                .map((item) => (
                  <p className="error" key={item.id}>
                    {item.message}
                  </p>
                ))}

            <input
              className="input-label block mt-4"
              placeholder="Contraseña"
              id={1}
              name={"descripcion_respuesta"}
              value={data[1] && data[1].descripcion_respuesta}
              onChange={handleBlur}
              type={"password"}
            />
            {errors &&
              errors
                .filter((i) => i.id === 1)
                .map((item) => (
                  <p className="error" key={item.id}>
                    {item.message}
                  </p>
                ))}

            <div className=" grid grid-cols-1 w-full h-full items-center justify-center ">
              { <ReCAPTCHA
                className="mt-5"
                ref={captcha}
                sitekey={process.env.KEY}
                onChange={onChange}
              /> }

              <button
                className="btn mt-5 h-16"
                disabled={load || errors.length > 0}
                onClick={async () => {
                  if (checkErrors() === 0) {
                    setLoad(true);
                    try {
                      if (captchaValido) {
                        await loginAuth(
                          data[0].descripcion_respuesta,
                          data[1].descripcion_respuesta
                        );
                        setLoad(false);
                      } else {
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
                  } else
                    await swal({
                      title: "¡Llena los campos!",
                      icon: "warning",
                    });
                }}
              >
                <span className=" flex w-full h-full items-center justify-center ">
                  <span className={`w-10 h-10 ${load ? "inline" : "hidden"}`}>
                    <Spinner pnt={4} />
                  </span>
                  <p className={`text-xl ${load ? "hidden" : "inline"}`}>
                    Entrar
                  </p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
