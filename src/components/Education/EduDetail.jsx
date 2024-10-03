import { useContext, useRef } from "react";
import { ThemeContext } from "../../context";
import { motion } from "framer-motion";
import LiIcon from "../LiIcon";

const EduDetail = ({ type, place, info, time, address, work }) => {
  const { isDark } = useContext(ThemeContext);

  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileInView={{ y: 0 }}
        className=""
      >
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span
          className={`capitalize font-medium  ${
            !isDark ? "text-dark/75" : "text-light/75"
          }`}
        >
          {time} | {place}
        </span>
        <p className="font-medium w-full ">{info}</p>
      </motion.div>
    </li>
  );
};

export default EduDetail;
