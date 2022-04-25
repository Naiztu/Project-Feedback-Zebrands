import React, { useState } from "react";
import { motion } from "framer-motion";
import ThreeDotsWave from "./ThreeDotsWave";

export default function PageZebrands({ load }) {
  const divVariants = {
    initial: false,
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.6, 1],
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
    exit: false,
  };

  const pathV1 = {
    start: {
      opacity: 0.5,

      d: "M159.5 -171.2C190.7 -128.2 189.1 -64.1 179.9 -9.2C170.7 45.7 154 91.5 122.7 141.5C91.5 191.5 45.7 245.7 -1.1 246.8C-47.8 247.8 -95.7 195.7 -133.9 145.7C-172 95.7 -200.5 47.8 -202.5 -2C-204.5 -51.9 -180 -103.7 -141.9 -146.7C-103.7 -189.7 -51.9 -223.9 6.1 -230C64.1 -236.1 128.2 -214.2 159.5 -171.2",
    },
    end: {
      opacity: 1,
      d: "M161.7 -157.4C211.7 -111.7 255.9 -55.9 256.1 0.2C256.3 56.3 212.7 112.7 162.7 152.3C112.7 192 56.3 215 6.1 208.9C-44.2 202.9 -88.4 167.7 -131.7 128.1C-175.1 88.4 -217.5 44.2 -218.4 -0.9C-219.3 -46 -178.6 -91.9 -135.3 -137.6C-91.9 -183.3 -46 -228.6 4.9 -233.6C55.9 -238.5 111.7 -203.1 161.7 -157.4",
    },
  };
  const pathV2 = {
    start: {
      opacity: 0.5,

      d: "M159.5 -171.2C190.7 -128.2 189.1 -64.1 179.9 -9.2C170.7 45.7 154 91.5 122.7 141.5C91.5 191.5 45.7 245.7 -1.1 246.8C-47.8 247.8 -95.7 195.7 -133.9 145.7C-172 95.7 -200.5 47.8 -202.5 -2C-204.5 -51.9 -180 -103.7 -141.9 -146.7C-103.7 -189.7 -51.9 -223.9 6.1 -230C64.1 -236.1 128.2 -214.2 159.5 -171.2",
    },
    end: {
      opacity: 1,
      d: "M161.7 -157.4C211.7 -111.7 255.9 -55.9 256.1 0.2C256.3 56.3 212.7 112.7 162.7 152.3C112.7 192 56.3 215 6.1 208.9C-44.2 202.9 -88.4 167.7 -131.7 128.1C-175.1 88.4 -217.5 44.2 -218.4 -0.9C-219.3 -46 -178.6 -91.9 -135.3 -137.6C-91.9 -183.3 -46 -228.6 4.9 -233.6C55.9 -238.5 111.7 -203.1 161.7 -157.4",
    },
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center mx-auto bg-black overflow-hidden">
      <motion.div
        className="  w-10/12 sm:w-1/2  flex items-center justify-center"
        variants={divVariants}
        initial="initial"
        animate={"animate"}
        exit="exit"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          viewBox="0 0 937.000000 266.000000"
        >
          <motion.g
            transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)"
            fill="#000000"
          >
            <motion.path
              className={"fill-white"}
              d="M1516 1953 c-3 -16 -8 -71 -11 -123 -3 -52 -8 -107 -11 -122 -5 -23 -2 -28 14 -28 16 0 22 11 31 59 14 70 43 117 91 145 32 19 54 21 283 24 136 2 247 1 247 -2 0 -5 -123 -180 -490 -701 -289 -410 -292 -415 -286 -430 5 -13 72 -15 498 -13 l493 3 22 110 c35 176 38 215 19 215 -9 0 -16 -6 -16 -13 0 -7 -15 -44 -33 -82 -38 -80 -88 -129 -146 -145 -24 -6 -145 -9 -318 -8 l-279 3 397 568 398 567 -449 0 -448 0 -6 -27z"
            />
            <motion.path
              className={"fill-white"}
              d="M2766 1929 c-14 -17 -26 -42 -26 -55 0 -83 91 -132 154 -83 38 30 49 64 36 105 -15 44 -45 64 -96 64 -35 0 -47 -5 -68 -31z"
            />
            <motion.path
              className={"fill-white"}
              d="M2765 1596 c-131 -41 -225 -150 -256 -297 -6 -30 -10 -101 -7 -165 4 -105 7 -117 41 -188 41 -83 102 -145 177 -180 35 -16 64 -21 135 -21 78 0 97 4 141 27 90 48 185 181 188 265 1 47 -17 52 -32 10 -17 -47 -77 -114 -124 -138 -55 -28 -150 -28 -212 1 -104 49 -181 176 -188 310 l-3 55 283 3 282 2 0 40 c0 111 -93 239 -199 273 -62 20 -168 21 -226 3z m122 -61 c21 -9 46 -23 56 -33 31 -28 57 -88 57 -132 l0 -40 -189 0 -189 0 9 41 c18 78 62 134 129 163 45 20 82 20 127 1z"
            />
            <motion.path
              className={"fill-white"}
              d="M3287 1992 c-82 -33 -117 -51 -115 -62 2 -11 15 -14 50 -11 41 2 49 -1 65 -25 17 -26 18 -65 21 -538 2 -280 5 -513 8 -518 10 -15 118 -66 179 -83 83 -24 193 -16 268 20 65 30 158 111 194 169 109 172 90 440 -40 574 -65 67 -109 86 -197 87 -92 0 -134 -18 -208 -92 -29 -29 -55 -53 -58 -53 -2 0 -4 131 -4 290 l0 290 -22 -1 c-13 0 -76 -21 -141 -47z m454 -540 c93 -60 134 -163 127 -326 -7 -152 -49 -242 -136 -294 -77 -44 -179 -27 -254 43 l-28 26 0 244 0 243 38 30 c61 48 94 61 153 62 44 0 64 -6 100 -28z"
            />
            <motion.path
              className={"fill-white"}
              d="M4175 1569 c-49 -21 -102 -43 -117 -48 -38 -14 -28 -42 13 -34 42 8 74 -3 87 -32 8 -18 12 -115 12 -311 l0 -286 -29 -29 c-22 -21 -39 -29 -65 -29 -29 0 -36 -4 -36 -20 0 -19 7 -20 210 -20 203 0 210 1 210 20 0 15 -7 20 -27 20 -43 0 -76 22 -95 60 -16 30 -18 66 -18 263 0 252 1 254 67 328 19 21 41 39 49 39 7 0 35 -13 61 -30 57 -37 92 -38 123 -5 28 30 30 73 6 110 -54 83 -186 47 -266 -73 l-35 -53 -3 85 -3 86 -27 -1 c-15 -1 -67 -19 -117 -40z"
            />
            <motion.path
              className={"fill-white"}
              d="M4875 1600 c-80 -20 -157 -79 -182 -137 -31 -74 -1 -143 63 -143 53 0 74 28 74 99 0 49 4 65 26 90 50 60 156 62 210 4 26 -28 47 -113 42 -168 -3 -36 -4 -37 -98 -74 -285 -113 -372 -195 -357 -337 12 -116 85 -184 198 -184 64 0 112 21 194 83 l59 45 12 -46 c7 -25 22 -54 34 -64 29 -23 81 -23 128 1 54 27 122 104 122 137 l0 26 -40 -36 c-42 -38 -55 -42 -80 -26 -13 8 -16 57 -20 302 -6 322 -7 329 -70 382 -17 14 -54 32 -82 41 -54 16 -181 19 -233 5z m235 -504 l0 -155 -33 -25 c-44 -33 -116 -66 -148 -66 -36 0 -91 39 -112 80 -39 75 -4 168 83 226 36 24 187 94 203 94 4 0 7 -70 7 -154z"
            />

            <motion.path
              className={"fill-white"}
              d="M5493 1562 c-61 -26 -112 -50 -112 -54 -2 -24 2 -27 29 -22 16 4 41 4 54 0 42 -10 48 -58 44 -361 -3 -272 -3 -274 -27 -299 -15 -16 -37 -26 -60 -28 -24 -2 -36 -8 -36 -18 0 -13 30 -15 203 -18 197 -2 202 -2 202 18 0 17 -7 20 -39 20 -23 0 -48 8 -62 19 l-24 19 -3 275 -3 274 42 38 c60 54 121 78 181 73 104 -10 118 -55 118 -385 0 -248 -3 -273 -39 -300 -9 -7 -33 -13 -53 -13 -31 0 -38 -4 -38 -20 0 -19 7 -20 200 -20 193 0 200 1 200 20 0 15 -7 20 -29 20 -86 0 -91 18 -91 311 0 133 -5 271 -11 305 -22 125 -94 193 -204 194 -68 0 -136 -34 -213 -105 l-62 -57 0 81 0 81 -27 -1 c-16 0 -78 -22 -140 -47z"
            />

            <motion.path
              className={"fill-white"}
              d="M6840 1999 c-52 -21 -105 -43 -117 -49 -41 -17 -18 -38 37 -32 69 6 74 -6 78 -205 2 -90 2 -163 -2 -163 -3 0 -22 11 -42 25 -45 31 -88 39 -172 33 -111 -8 -194 -60 -266 -166 -60 -88 -87 -167 -93 -272 -9 -143 28 -249 118 -338 56 -55 120 -85 192 -90 78 -6 138 13 208 65 l59 43 0 -55 c0 -51 2 -55 23 -55 36 0 252 95 255 112 2 13 -7 16 -49 14 -47 -1 -54 2 -66 24 -10 20 -13 148 -13 588 l0 562 -27 0 c-16 -1 -71 -19 -123 -41z m-146 -451 c22 -7 57 -29 78 -50 59 -59 68 -106 68 -358 l0 -216 -27 -26 c-116 -108 -273 -60 -349 107 -34 74 -49 195 -34 287 19 128 71 211 155 249 48 22 56 23 109 7z"
            />

            <motion.path
              className={"fill-white"}
              d="M7315 1594 c-123 -45 -186 -205 -126 -322 26 -51 72 -86 205 -155 56 -29 122 -72 148 -98 45 -43 48 -48 48 -98 0 -47 -4 -57 -33 -86 -40 -40 -93 -53 -154 -36 -92 24 -157 90 -192 194 -32 93 -41 72 -41 -92 0 -95 4 -151 10 -151 6 0 19 5 30 12 15 10 37 8 109 -6 115 -24 198 -18 268 17 162 83 188 278 51 390 -24 19 -95 60 -158 92 -63 31 -130 68 -148 82 -62 47 -79 118 -40 168 54 68 172 72 249 8 32 -28 89 -133 89 -166 0 -12 6 -17 18 -15 15 3 17 19 20 141 2 129 2 137 -17 137 -10 0 -21 -7 -25 -15 -7 -19 -47 -19 -110 0 -61 19 -148 18 -201 -1z"
            />
          </motion.g>
        </motion.svg>
      </motion.div>
      {load && <ThreeDotsWave color={"white"} />}
      <motion.svg
        initial="start"
        animate="end"
        className="absolute top-0 left-0 z-50 w-[300px] h-auto aspect-square"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g transform="translate(0 0)">
          <motion.path
            variants={pathV1}
            transition={{
              duration: 2,
              yoyo: Infinity,
              repeat: Infinity,
            }}
            fill="#005CB9"
          />
        </motion.g>
      </motion.svg>
      <motion.svg
        initial="start"
        animate="end"
        className="absolute bottom-0 right-0 z-50 w-[300px] h-auto aspect-square"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g transform="translate(300 300)">
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
    </div>
  );
}

PageZebrands.defaultProps = {
  load: true,
};