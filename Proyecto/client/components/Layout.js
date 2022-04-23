import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import Navbar from "./Navbar";
import { BsHouse } from "react-icons/bs";

export default function Layout({ children }) {
  const router = useRouter();
  const { idRol } = useUser();

  return (
    <>
      <Head>
        <title>Feedback Zebrands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen overflow-y-auto flex flex-row ">
        <Navbar />

        <div className="ml-20 md:ml-60  w-full flex flex-col overflow-auto pb-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400">
          {children}
        </div>
        <div
          type="button"
          onClick={() => {
            if (idRol === 1) router.push("/lead");
            else router.push("/user");
          }}
          className="group bg-black h-20 w-20 fixed right-0 bottom-0  flex items-center justify-center mb-5 mr-5 sm:mr-10 rounded-full cursor-pointer active:scale-95 hover:scale-105 transition-all ease-in-out"
        >
          {router.pathname === "/user" || router.pathname === "/lead" ? (
            <p className="text-white font-bold text-4xl group-hover:text-secondary-50">
              4.5
            </p>
          ) : (
            <BsHouse
              size={36}
              className=" fill-white group-hover:fill-secondary-50"
            />
          )}
        </div>
        <div
          className="fixed top-0 right-0 m-3 w-6 cursor-pointer"
          onClick={() => {
            if (idRol === 1) router.push("/lead");
            else router.push("/user");
          }}
        >
          <span className="flex h-3 w-3 z-50 ">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <img
            className="w-full -translate-y-2 z-10 active:scale-90 transition-all ease-in-out"
            src="https://img.icons8.com/ios-glyphs/30/000000/appointment-reminders--v2.png"
          />
        </div>
      </div>
    </>
  );
}
