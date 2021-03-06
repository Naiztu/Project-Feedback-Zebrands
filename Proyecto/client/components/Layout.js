import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "../context/userContext";
import Navbar from "./Navbar";
import { BsHouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { getLastFeedback } from "../services/feedback";

export default function Layout({ children, pg }) {
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
          className="h-20 w-20 fixed right-0 bottom-0 z-10 flex items-center justify-center "
        >
          <motion.svg
            className="absolute bottom-0 right-0 z-50 w-[110px] h-auto aspect-square fill-black rounded-tl-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g transform="translate(190 200)" className="z-50">
              <motion.path
                className="fill-black"
                variants={pathV2}
                transition={{
                  duration: 2,
                  yoyo: Infinity,
                  repeat: Infinity,
                }}
              />
            </motion.g>
          </motion.svg>
          {router.pathname === "/user" || router.pathname === "/lead" ? (
            <div
              onClick={async () => {
                try {
                  const { data_last_feedback } = await getLastFeedback(
                    user.id_empleado
                  );

                  router.push(
                    `/feedback/${data_last_feedback.id_periodo}/${user.id_empleado}`
                  );
                } catch (error) {
                }
              }}
              className="z-50 text-white font-bold text-4xl active:scale-95 hover:scale-110  transition-all ease-in-out cursor-pointer m-4"
            >
              {pg === 0 ? user && user.nivel_general : pg}
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
        </motion.div>{" "}
      </div>
    </>
  );
}

Layout.defaultProps = {
  pg: 0,
};
