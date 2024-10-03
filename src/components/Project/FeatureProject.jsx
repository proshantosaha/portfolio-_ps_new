import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context";

const FeaturedProject = ({ type, title, summary, img, PsIco, a }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <article
      id="projects"
      className={`w-full relative flex items-center flex-col justify-between rounded-br-2xl
       rounded-2xl border border-solid  shadow-2xl p-12 lg:flex-row xs:rounded-br-3xl xs:rounded-3xl ${
         isDark ? "bg-dark  border-light" : "bg-light border-dark"
       }
       `}
    >
      {/* single div eta jtar kaj holo shadow deya */}
      {/* isDark ? "bg-dark text-light" : "bg-light text-dark" */}

      <div
        className={`absolute top-0 -right-2 w-full h-[102%] rounded-[1.5rem] -z-10  xs:-right-5 xs:w-[101%] sm:h-[103%] xs:rounded-[2.5rem] ${
          isDark ? "bg-light" : "bg-dark"
        }`}
      />

      {/* href={link}   link dei nai cause problem korce link*/}
      <a
        target="_blank"
        className="w-[70%] cursor-pointer overflow-hidden rounded-lg lg:w-[20%] "
      >
        <motion.img
          src={img}
          alt={title}
          className="w-[50%] h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>

      <div className="w-full flex flex-col items-start justify-between pt-6 pl-0 lg:w-1/2 lg:pl-6 lg:pt-0 ">
        <span
          className={`${
            !isDark ? "text-primary" : "text-primaryDark"
          }  font-medium text-base xs:text-xl`}
        >
          {type}
        </span>

        <div className={`${!isDark ? "text-dark" : "text-light"}`}>
          {" "}
          <a target="_blank" className="hover:underline underline-offset-2">
            {/* <img src={img} alt={title} className="w-full h-auto" /> */}
            <h2 className="my-2 w-full text-left text-xl font-bold   sm:text-2xl md:text-4xl">
              {title}
            </h2>
          </a>
          <p className="my-2 font-medium text-xs sm:text-lg md:text-xl">
            {summary}
          </p>
        </div>

        <div className="mt-2 flex items-center">
          {" "}
          <a href={PsIco} target="_blank" className="w-10">
            {/* <PsIcon /> */}
            {/* <PsProject /> */}
          </a>
          <a
            href={a}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-base font-semibold sm:text-lg sm:px:6"
          >
            {/* <GithubIcon /> */}
            visit this site
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
