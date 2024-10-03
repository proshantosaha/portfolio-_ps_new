import { motion, useScroll } from "framer-motion";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "../context";

const LiIcon = ({ reference }) => {
  const { isDark } = useContext(ThemeContext);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });

  return (
    <figure
      className={`absolute left-0  stroke-dark ${
        isDark ? "stroke-light" : "stroke-dark"
      }`}
    >
      <svg
        className="-rotate-90 W-[60px] h-[40px] md:w-[60px] md:h-[60px] "
        lg:width="75"
        lg:height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className={` stroke-1 fill-none ${
            isDark ? "stroke-primaryDark" : "stroke-primary"
          }`}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className={`stroke-[5px] ${isDark ? "fill-dark" : "fill-light"}`}
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className={` animate-pulse stroke-1  ${
            isDark ? "fill-primaryDark" : "fill-primary"
          }`}
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
