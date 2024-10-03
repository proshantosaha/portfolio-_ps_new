import React, { useContext, useRef } from "react";
// import LiIcon from "./LiIcon";
// import AnimatedText from "./AnimatedText";
import { motion, useScroll } from "framer-motion";
// import { ThemeContext } from "../context";
// import BorderBottom from "./BorderBottom";
import EduDetail from "./EduDetail";
import AnimatedText from "../AnimatedText";
import { ThemeContext } from "../../context";
import BorderBottom from "../BorderBottom";
// import Details from "./Details";

const Education = () => {
  const { isDark } = useContext(ThemeContext);

  const ref = useRef(null);
  // const { isDark } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      {/* <h2 className=" font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2> */}

      <AnimatedText
        text="Education"
        className="mt-20 mb-2 text-4xl md:text-6xl lg:8xl "
      />

      <BorderBottom para4="-----------------------" />

      <div
        ref={ref}
        className=" mx-auto relative w-full lg:w-[90%] xl:w-[75%] "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={`${
            !isDark ? "bg-dark" : "bg-light"
          } absolute left-[20px]  md:left-[30px] lg:left-7 top-0 w-[2px] h-full origin-top md:w-[4px]  `}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <EduDetail
            type="Frontend Developer"
            time="2025-present"
            place="Dhaka,Bangladesh"
            info=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <EduDetail
            type="Frontend Developer"
            time="2025-present"
            place="Dhaka,Bangladesh"
            info=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <EduDetail
            type="Frontend Developer"
            time="2025-present"
            place="Dhaka,Bangladesh"
            info=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
