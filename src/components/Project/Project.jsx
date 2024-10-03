import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Project = ({ type, title, img, PsIco, a }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <article
      className={`w-full flex flex-col relative  items-center justify-center rounded-2xl border border-solid p-4 xs:p-6 md:w-[92%] lg:w-full ${
        isDark ? "bg-dark border-light" : "bg-light border-dark"
      }`}
    >
      <div
        className={`absolute top-0 -right-2 w-full h-[102%] rounded-[1.5rem]  -z-10  xs:-right-5 xs:w-[101%] sm:h-[103%] xs:rounded-[2.5rem] ${
          isDark ? "bg-light" : "bg-dark"
        }`}
      />

      <Link
        target="_blank"
        className="w-[50%] cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.img
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span
          className={`${
            isDark ? "text-primaryDark" : "text-primary"
          }  font-medium text-base md:text-lg lg:text-xl`}
        >
          {type}
        </span>

        <div className={`${!isDark ? "text-dark" : "text-light"}`}>
          <Link target="_blank" className="hover:underline underline-offset-2">
            {/* <img src={img} alt={title} className="w-full h-auto" /> */}
            <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-3xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between ">
            {" "}
            <Link
              to={a}
              target="_blank"
              className="text-base font-semibold underline md:text-lg ml-4"
            >
              {/* <GithubIcon /> */}
              visit
            </Link>
            <Link href={PsIco} target="_blank" className="w-6 md:w-8">
              {/* <PsIcon /> */}
              {/* <PsProject /> */}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
