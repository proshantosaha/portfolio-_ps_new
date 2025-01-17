import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { animate, delay, motion, stagger } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className=" w-full mx-auto py-0 flex items-center justify-center text-center overflow-hidden sm-2">
      <motion.h1
        className={`${
          isDark ? "text-light" : "text-dark"
        } inline-block w-full  font-bold   capitalize  ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
