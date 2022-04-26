import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import Navbar from "./Navbar";
import { BsHouse } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const router = useRouter();
  const { user } = useUser();

  const pathV2 = {
    start: {
      d: "M159.5 -171.2C190.7 -128.2 189.1 -64.1 179.9 -9.2C170.7 45.7 154 91.5 122.7 141.5C91.5 191.5 45.7 245.7 -1.1 246.8C-47.8 247.8 -95.7 195.7 -133.9 145.7C-172 95.7 -200.5 47.8 -202.5 -2C-204.5 -51.9 -180 -103.7 -141.9 -146.7C-103.7 -189.7 -51.9 -223.9 6.1 -230C64.1 -236.1 128.2 -214.2 159.5 -171.2",
    },
    end: {
      d: "M161.7 -157.4C211.7 -111.7 255.9 -55.9 256.1 0.2C256.3 56.3 212.7 112.7 162.7 152.3C112.7 192 56.3 215 6.1 208.9C-44.2 202.9 -88.4 167.7 -131.7 128.1C-175.1 88.4 -217.5 44.2 -218.4 -0.9C-219.3 -46 -178.6 -91.9 -135.3 -137.6C-91.9 -183.3 -46 -228.6 4.9 -233.6C55.9 -238.5 111.7 -203.1 161.7 -157.4",
    },
  };

  return (
    <>
      <Head>
        <title>Feedback Zebrands</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen overflow-y-auto flex flex-row ">
        <Navbar />

        <div className="ml-20 md:ml-60  w-full h-full flex flex-col overflow-auto pb-10 scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400">
          {children}
        </div>
        <motion.div
          initial="start"
          whileHover="end"
          className="h-20 w-20 fixed right-0 bottom-0  flex items-center justify-center"
        >
          <motion.svg
            className="absolute bottom-0 right-0 z-50 w-[300px] h-auto aspect-square"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g transform="translate(370 370)">
              <motion.path
                variants={pathV2}
                transition={{
                  duration: 2,
                  yoyo: Infinity,
                  repeat: Infinity,
                }}
                fill="#FF595A"
              />
            </motion.g>
          </motion.svg>
          {router.pathname === "/user" || router.pathname === "/lead" ? (
            <div className="z-50 text-white font-bold text-4xl active:scale-95 hover:scale-110  transition-all ease-in-out cursor-pointer m-4">
              4.5
            </div>
          ) : (
            <BsHouse
              onClick={() => {
                if (user.id_rol === 1) router.push("/lead");
                else router.push("/user");
              }}
              size={36}
              className=" z-50 fill-white active:scale-95 hover:scale-110  transition-all ease-in-out cursor-pointer"
            />
          )}
        </motion.div>

        <div
          className="fixed top-0 right-0 w-5 m-4 cursor-pointer"
          onClick={() => {
            if (user.id_rol === 1) router.push("/lead");
            else router.push("/user");
          }}
        >
          <span className="  flex h-3 w-3 z-50 ">
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
