import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const {
    user: { id_rol },
  } = useUser();

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
            if (id_rol === 1) router.push("/lead");
            else router.push("/user");
          }}
          className="group bg-black h-20 w-20 fixed right-0 bottom-0 text-white flex items-center justify-center m-3 rounded-full font-bold text-4xl cursor-pointer active:scale-90 transition-all ease-in-out"
        >
          {router.pathname === "/user" || router.pathname === "/lead" ? (
            <p>4.5</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
              <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
          )}
        </div>
        <div
          className="fixed top-0 right-0 m-3 w-6 cursor-pointer"
          onClick={() => {
            if (id_rol === 1) router.push("/lead");
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
