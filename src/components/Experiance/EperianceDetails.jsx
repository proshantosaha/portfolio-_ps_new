import { useContext, useRef } from "react";
import { ThemeContext } from "../../context";
import LiIcon from "../LiIcon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExperianceDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const { isDark } = useContext(ThemeContext);

  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileInView={{ y: 0 }}
        className=""
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl ">
          {position}&nbsp;{" "}
          <Link
            href="companylink"
            target="_blank"
            className={`${
              !isDark ? "text-primary" : "text-primaryDark"
            } capitalize`}
          >
            @company
          </Link>
        </h3>
        <span
          className={`capitalize font-medium   ${
            isDark ? "text-light/75" : "text-dark/75"
          }`}
        >
          {time} | {address}
        </span>
        <p className="font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

export default ExperianceDetails;
