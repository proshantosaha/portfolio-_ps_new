import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AnimationLinks = ({ title }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
    >
      <AnimatedWord
        title={title}
        animation={latterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        {" "}
        <AnimatedWord
          title={title}
          animation={latterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

export default AnimationLinks;

const titleAnimation = {
  rest: {
    transition: {
      staggerChildten: 0.009,
    },
  },
  hover: {
    transition: {
      staggerChildten: 0.009,
    },
  },
};

const latterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const latterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedWord = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative "
    >
      {title.split("").map((item, i) =>
        item === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            className="relative inline-block whitespace-nowrap"
          >
            {item}
          </motion.span>
        )
      )}
    </motion.span>
  );
};
