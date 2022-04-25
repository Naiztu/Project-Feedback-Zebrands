import React from "react";
import { motion } from "framer-motion";

export default function Spinner({ pnt }) {
  const styleContainer = {
    position: "relative",
    width: "100%",
  };

  const styleSpan = {
    display: "inline",
    width: "100%",
    border: `${pnt}px solid #eee`,
    borderTop: `${pnt}px solid #2D3134`,
    borderRadius: "50%",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
  };

  const spinTransition = {
    repeat: Infinity,
    ease: "easeInOut",
    duration: 1,
  };

  return (
    <div className="h-auto" style={styleContainer}>
      <motion.span
        className=" aspect-square h-auto"
        style={styleSpan}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}

Spinner.defaultProps = {
  pnt: 2,
};
