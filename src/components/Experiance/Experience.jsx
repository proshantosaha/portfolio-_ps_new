import React, { useContext, useRef } from "react";
// import LiIcon from "./LiIcon";
// import AnimatedText from "./AnimatedText";
// import { ThemeContext } from "../context";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { ThemeContext } from "../../context";
import AnimatedText from "../AnimatedText";
import BorderBottom from "../BorderBottom";
import ExperianceDetails from "./EperianceDetails";
// import BorderBottom from "./BorderBottom";

const Experience = () => {
  const ref = useRef(null);
  const { isDark } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      {/* <h2 className=" font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2> */}

      <AnimatedText
        text="Experience"
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
          <ExperianceDetails
            position="Frontend Developer"
            company="google"
            companyLink="google.com"
            time="2025-present"
            address="Dhaka,Bangladesh"
            work=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <ExperianceDetails
            position="Frontend Developer"
            company="google"
            companyLink="google.com"
            time="2025-present"
            address="Dhaka,Bangladesh"
            work=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <ExperianceDetails
            position="Frontend Developer"
            company="google"
            companyLink="google.com"
            time="2025-present"
            address="Dhaka,Bangladesh"
            work=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <ExperianceDetails
            position="Frontend Developer"
            company="google"
            companyLink="google.com"
            time="2025-present"
            address="Dhaka,Bangladesh"
            work=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
          <ExperianceDetails
            position="Frontend Developer"
            company="google"
            companyLink="google.com"
            time="2025-present"
            address="Dhaka,Bangladesh"
            work=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            unde quam eligendi quo amet mollitia magnam excepturi facilis
            accusantium eaque commodi iste, fugit vero. Dolorum asperiores
            libero eius. Provident, delectus?"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
